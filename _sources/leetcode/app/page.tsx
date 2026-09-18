'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { progressFetch } from '../cloud-client';
import { hot100, llmCards, type HotCard } from './hot100';
import {
  mergeProgress,
  normalizeProgress,
  type CursorScope,
  type DeckName,
  type ReviewState,
  type StoredProgress,
} from './progress-model';

type Grade = 'again' | 'hard' | 'good' | 'easy';
type SyncStatus = 'loading' | 'syncing' | 'synced' | 'offline' | 'local';

const STORAGE_KEY = 'interview-anki-v2';
const LEGACY_KEY = 'hot100-anki';
const MINUTE = 60_000;
const DAY = 86_400_000;
const DAILY_NEW_LIMIT = 20;
const DAILY_LLM_TARGET = 4;

const deckCards: Record<DeckName, HotCard[]> = { hot100, llm: llmCards };
const mixedCards = [...hot100, ...llmCards];

function cardKey(deck: DeckName, id: number) {
  return `${deck}:${id}`;
}

function cardDeck(id: number): DeckName {
  return id < 0 ? 'llm' : 'hot100';
}

function scheduleKey(id: number) {
  return cardKey(cardDeck(id), id);
}

function dayKey(timestamp = Date.now()) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function hash(text: string) {
  let value = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    value ^= text.charCodeAt(i);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

function seededNewCards(cards: HotCard[], seed: string) {
  return [...cards].sort((a, b) => hash(`${seed}:${a.id}`) - hash(`${seed}:${b.id}`));
}

function mixedDailyNewCards(
  unseen: HotCard[],
  today: string,
  limit: number,
  introducedHot100: number,
  introducedLlm: number,
) {
  const unseenHot100 = seededNewCards(unseen.filter((card) => card.id > 0), `${today}:hot100`);
  const unseenLlm = seededNewCards(unseen.filter((card) => card.id < 0), `${today}:llm`);
  const hot100Quota = Math.max(0, DAILY_NEW_LIMIT - DAILY_LLM_TARGET - introducedHot100);
  const llmQuota = Math.max(0, DAILY_LLM_TARGET - introducedLlm);
  const selected = [
    ...unseenHot100.slice(0, Math.min(hot100Quota, limit)),
    ...unseenLlm.slice(0, Math.min(llmQuota, Math.max(0, limit - hot100Quota))),
  ];
  const selectedIds = new Set(selected.map((card) => card.id));
  const overflow = seededNewCards(
    unseen.filter((card) => !selectedIds.has(card.id)),
    `${today}:overflow`,
  ).slice(0, Math.max(0, limit - selected.length));
  return seededNewCards([...selected, ...overflow], `${today}:mixed`);
}

function delayLabel(delay: number) {
  if (delay < DAY) return `${Math.max(1, Math.round(delay / MINUTE))} 分钟`;
  const days = Math.max(1, Math.round(delay / DAY));
  if (days < 30) return `${days} 天`;
  const months = Math.max(1, Math.round(days / 30));
  return `${months} 个月`;
}

function relativeDue(due: number, now: number) {
  const delay = due - now;
  if (delay <= 0) return '现在到期';
  if (delay < DAY) return `${delayLabel(delay)}后`;
  return new Intl.DateTimeFormat('zh-CN', { month: 'numeric', day: 'numeric' }).format(new Date(due));
}

function nextReview(previous: ReviewState | undefined, grade: Grade, now: number): ReviewState {
  const today = dayKey(now);
  const current: ReviewState = previous ?? {
    phase: 'learning',
    due: now,
    interval: 0,
    ease: 2.5,
    repetitions: 0,
    lapses: 0,
    lastReviewed: 0,
    introducedOn: today,
  };

  const base = {
    ...current,
    lastReviewed: now,
    repetitions: current.repetitions + 1,
    introducedOn: current.introducedOn || today,
  };

  if (grade === 'again') {
    return {
      ...base,
      phase: 'learning',
      due: now + MINUTE,
      interval: 0,
      ease: Math.max(1.3, current.ease - 0.2),
      lapses: current.lapses + 1,
    };
  }

  if (grade === 'hard' && (current.phase === 'learning' || current.interval < 1)) {
    return {
      ...base,
      phase: 'learning',
      due: now + 6 * MINUTE,
      interval: 0,
      ease: Math.max(1.3, current.ease - 0.05),
    };
  }

  const interval = grade === 'hard'
    ? Math.max(1, Math.round(current.interval * 1.2))
    : grade === 'good'
      ? current.interval >= 1 ? Math.max(1, Math.round(current.interval * current.ease)) : 1
      : current.interval >= 1 ? Math.max(4, Math.round(current.interval * (current.ease + 0.15) * 1.3)) : 4;

  return {
    ...base,
    phase: 'review',
    due: now + interval * DAY,
    interval,
    ease: grade === 'hard'
      ? Math.max(1.3, current.ease - 0.05)
      : grade === 'easy'
        ? current.ease + 0.15
        : current.ease,
  };
}

function migrateLegacy(): Pick<StoredProgress, 'schedule' | 'starred'> {
  const schedule: Record<string, ReviewState> = {};
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || '{}') as {
      grades?: Record<string, Grade>;
      starred?: number[];
    };
    const now = Date.now();
    const yesterday = dayKey(now - DAY);
    for (const [rawId, grade] of Object.entries(legacy.grades || {})) {
      const id = Number(rawId);
      if (!Number.isFinite(id)) continue;
      const deck: DeckName = id < 0 ? 'llm' : 'hot100';
      const migrated = nextReview(undefined, grade, now);
      schedule[cardKey(deck, id)] = { ...migrated, introducedOn: yesterday };
    }
    return { schedule, starred: legacy.starred || [] };
  } catch {
    return { schedule, starred: [] };
  }
}

function normalizeLocalProgress(value: unknown) {
  const progress = normalizeProgress(value);
  if (!value || typeof value !== 'object' || (value as { version?: number }).version === 3) return progress;
  const source = value as Partial<StoredProgress>;
  const migratedAt = Date.now();
  if (progress.starred.length) progress.starredUpdatedAt = migratedAt;
  for (const scope of ['hot100', 'llm', 'daily'] as CursorScope[]) {
    if (progress.currentByDeck[scope] !== undefined) progress.cursorUpdatedAt[scope] = migratedAt;
  }
  if (source.activeDeck === 'hot100' || source.activeDeck === 'llm') progress.activeDeckUpdatedAt = migratedAt;
  progress.updatedAt = Math.max(
    progress.updatedAt,
    progress.starredUpdatedAt,
    progress.activeDeckUpdatedAt,
    ...Object.values(progress.cursorUpdatedAt).map((time) => time || 0),
  );
  return progress;
}

function calculateStreak(schedule: Record<string, ReviewState>, now: number) {
  const activeDays = new Set(
    Object.values(schedule).filter((state) => state.lastReviewed).map((state) => dayKey(state.lastReviewed)),
  );
  const cursor = new Date(now);
  cursor.setHours(12, 0, 0, 0);
  if (!activeDays.has(dayKey(cursor.getTime()))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (activeDays.has(dayKey(cursor.getTime()))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export default function Home() {
  const [deckName, setDeckName] = useState<DeckName>('hot100');
  const [mode, setMode] = useState<'review' | 'browse'>('review');
  const [reviewCursor, setReviewCursor] = useState<Partial<Record<CursorScope, number>>>({});
  const [browseCursor, setBrowseCursor] = useState<Partial<Record<DeckName, number>>>({});
  const [flipped, setFlipped] = useState(false);
  const [topic, setTopic] = useState('全部');
  const [query, setQuery] = useState('');
  const [schedule, setSchedule] = useState<Record<string, ReviewState>>({});
  const [starred, setStarred] = useState<number[]>([]);
  const [starredUpdatedAt, setStarredUpdatedAt] = useState(0);
  const [cursorUpdatedAt, setCursorUpdatedAt] = useState<Partial<Record<CursorScope, number>>>({});
  const [activeDeckUpdatedAt, setActiveDeckUpdatedAt] = useState(0);
  const [showList, setShowList] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [syncTick, setSyncTick] = useState(0);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('loading');

  const applyProgress = useCallback((progressValue: unknown) => {
    const progress = normalizeProgress(progressValue);
    setSchedule(progress.schedule);
    setStarred(progress.starred);
    setStarredUpdatedAt(progress.starredUpdatedAt);
    setReviewCursor(progress.currentByDeck);
    setCursorUpdatedAt(progress.cursorUpdatedAt);
    setDeckName(progress.activeDeck);
    setActiveDeckUpdatedAt(progress.activeDeckUpdatedAt);
  }, []);

  useEffect(() => {
    queueMicrotask(async () => {
      let localProgress: StoredProgress;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        localProgress = raw
          ? normalizeLocalProgress(JSON.parse(raw))
          : normalizeLocalProgress({ ...migrateLegacy(), version: 2 });
      } catch {
        localProgress = normalizeLocalProgress({ ...migrateLegacy(), version: 2 });
      }

      let resolved = localProgress;
      try {
        setSyncStatus('syncing');
        const cloudResponse = await progressFetch('/api/progress', { cache: 'no-store' });
        if (cloudResponse.status === 401) {
          setSyncStatus('local');
        } else if (cloudResponse.ok) {
          const cloudData = await cloudResponse.json() as { progress: unknown };
          resolved = cloudData.progress ? mergeProgress(localProgress, cloudData.progress) : localProgress;
          const uploadResponse = await progressFetch('/api/progress', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(resolved),
          });
          if (!uploadResponse.ok) throw new Error('Cloud upload failed');
          const uploaded = await uploadResponse.json() as { progress: unknown };
          resolved = normalizeProgress(uploaded.progress);
          setSyncStatus('synced');
        } else {
          throw new Error('Cloud download failed');
        }
      } catch {
        setSyncStatus('offline');
      }

      applyProgress(resolved);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
      setHydrated(true);
    });
  }, [applyProgress]);

  useEffect(() => {
    if (!hydrated) return;
    const progress = normalizeProgress({
      version: 3,
      schedule,
      starred,
      starredUpdatedAt,
      currentByDeck: reviewCursor,
      cursorUpdatedAt,
      activeDeck: deckName,
      activeDeckUpdatedAt,
      updatedAt: Math.max(
        starredUpdatedAt,
        activeDeckUpdatedAt,
        ...Object.values(cursorUpdatedAt).map((time) => time || 0),
        ...Object.values(schedule).map((review) => review.lastReviewed),
      ),
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        setSyncStatus('syncing');
        const response = await progressFetch('/api/progress', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(progress),
          signal: controller.signal,
        });
        if (response.status === 401) {
          setSyncStatus('local');
          return;
        }
        if (!response.ok) throw new Error('Cloud sync failed');
        const data = await response.json() as { progress: unknown };
        const cloudProgress = normalizeProgress(data.progress);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudProgress));
        if (JSON.stringify(cloudProgress) !== JSON.stringify(progress)) applyProgress(cloudProgress);
        setSyncStatus('synced');
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) setSyncStatus('offline');
      }
    }, 700);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [activeDeckUpdatedAt, applyProgress, cursorUpdatedAt, deckName, hydrated, reviewCursor, schedule, starred, starredUpdatedAt, syncTick]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 30_000);
    const syncTimer = window.setInterval(() => setSyncTick((value) => value + 1), 60_000);
    const refresh = () => {
      setNow(Date.now());
      setSyncTick((value) => value + 1);
    };
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      window.clearInterval(timer);
      window.clearInterval(syncTimer);
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, []);

  const browseDeck = deckCards[deckName];
  const displayDeck = mode === 'review' ? mixedCards : browseDeck;
  const today = dayKey(now);
  const topics = useMemo(() => ['全部', ...Array.from(new Set(browseDeck.map((card) => card.category)))], [browseDeck]);
  const dailyDeckSchedule = useMemo(
    () => mixedCards.map((card) => ({ card, state: schedule[scheduleKey(card.id)] })),
    [schedule],
  );
  const browseDeckSchedule = useMemo(
    () => browseDeck.map((card) => ({ card, state: schedule[scheduleKey(card.id)] })),
    [browseDeck, schedule],
  );
  const introducedToday = dailyDeckSchedule.filter(({ state }) => state?.introducedOn === today).length;
  const introducedHot100Today = dailyDeckSchedule.filter(({ card: item, state }) => item.id > 0 && state?.introducedOn === today).length;
  const introducedLlmToday = dailyDeckSchedule.filter(({ card: item, state }) => item.id < 0 && state?.introducedOn === today).length;
  const newAllowance = Math.max(0, DAILY_NEW_LIMIT - introducedToday);
  const dueCards = useMemo(
    () => dailyDeckSchedule
      .filter(({ state }) => state && state.due <= now)
      .sort((a, b) => {
        if (a.state?.phase !== b.state?.phase) return a.state?.phase === 'learning' ? -1 : 1;
        return (a.state?.due || 0) - (b.state?.due || 0);
      })
      .map(({ card }) => card),
    [dailyDeckSchedule, now],
  );
  const newCards = useMemo(
    () => mixedDailyNewCards(
      dailyDeckSchedule.filter(({ state }) => !state).map(({ card }) => card),
      today,
      newAllowance,
      introducedHot100Today,
      introducedLlmToday,
    ),
    [dailyDeckSchedule, introducedHot100Today, introducedLlmToday, newAllowance, today],
  );
  const reviewQueue = useMemo(() => [...dueCards, ...newCards], [dueCards, newCards]);
  const browseCards = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return browseDeck.filter((card) =>
      (topic === '全部' || card.category === topic)
      && (!normalized || card.title.toLowerCase().includes(normalized) || String(Math.abs(card.id)).includes(normalized)),
    );
  }, [browseDeck, query, topic]);
  const cards = mode === 'review' ? reviewQueue : browseCards;
  const cursor = mode === 'review' ? reviewCursor.daily : browseCursor[deckName];
  const foundIndex = cards.findIndex((item) => item.id === cursor);
  const index = foundIndex >= 0 ? foundIndex : 0;
  const card = cards[index];
  const state = card ? schedule[scheduleKey(card.id)] : undefined;

  const setCursor = (id: number) => {
    if (mode === 'review') {
      const changedAt = Date.now();
      setReviewCursor((value) => ({ ...value, daily: id }));
      setCursorUpdatedAt((value) => ({ ...value, daily: changedAt }));
    }
    else setBrowseCursor((value) => ({ ...value, [deckName]: id }));
  };

  const move = (step: number) => {
    if (!cards.length) return;
    const next = cards[(index + step + cards.length) % cards.length];
    setCursor(next.id);
    setFlipped(false);
  };

  const grade = (gradeValue: Grade) => {
    if (!card) return;
    const reviewedAt = Date.now();
    const key = scheduleKey(card.id);
    setSchedule((value) => ({ ...value, [key]: nextReview(value[key], gradeValue, reviewedAt) }));
    const remaining = cards.filter((item) => item.id !== card.id);
    if (mode === 'review') {
      setReviewCursor((value) => {
        const next = { ...value };
        delete next.daily;
        return next;
      });
      setCursorUpdatedAt((value) => ({ ...value, daily: reviewedAt }));
    } else if (remaining.length) {
      const next = remaining[Math.min(index, remaining.length - 1)];
      setCursor(next.id);
    }
    setFlipped(false);
    setNow(reviewedAt);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement) return;
      if (event.code === 'Space' && card) {
        event.preventDefault();
        setFlipped((value) => !value);
      }
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
      if (flipped && ['1', '2', '3', '4'].includes(event.key)) {
        grade((['again', 'hard', 'good', 'easy'] as Grade[])[Number(event.key) - 1]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const displayDeckSchedule = mode === 'review' ? dailyDeckSchedule : browseDeckSchedule;
  const completed = displayDeckSchedule.filter(({ state: itemState }) => itemState?.repetitions).length;
  const browseCompleted = browseDeckSchedule.filter(({ state: itemState }) => itemState?.repetitions).length;
  const reviewedToday = dailyDeckSchedule.filter(({ state: itemState }) => itemState?.lastReviewed && dayKey(itemState.lastReviewed) === today).length;
  const learningCount = dailyDeckSchedule.filter(({ state: itemState }) => itemState?.phase === 'learning').length;
  const reviewDueCount = dailyDeckSchedule.filter(({ state: itemState }) => itemState?.phase === 'review' && itemState.due <= now).length;
  const nextDue = dailyDeckSchedule
    .map(({ state: itemState }) => itemState?.due || Number.POSITIVE_INFINITY)
    .filter((due) => due > now)
    .sort((a, b) => a - b)[0];
  const streak = calculateStreak(schedule, now);
  const gradeOptions = (['again', 'hard', 'good', 'easy'] as Grade[]).map((value) => ({
    value,
    label: { again: '忘记', hard: '困难', good: '掌握', easy: '简单' }[value],
    delay: card ? delayLabel(nextReview(state, value, now).due - now) : '',
  }));
  const status = !state
    ? '今日新卡'
    : state.phase === 'learning'
      ? `学习中 · ${relativeDue(state.due, now)}`
      : `复习卡 · ${relativeDue(state.due, now)}`;
  const recentDays = Array.from({ length: 7 }, (_, offset) => {
    const date = new Date(now);
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (6 - offset));
    const key = dayKey(date.getTime());
    const done = Object.values(schedule).some((itemState) => itemState.lastReviewed && dayKey(itemState.lastReviewed) === key);
    return { key, date: date.getDate(), weekday: '日一二三四五六'[date.getDay()], done, today: key === today };
  });

  const switchDeck = (next: DeckName) => {
    const changedAt = Date.now();
    setDeckName(next);
    setActiveDeckUpdatedAt(changedAt);
    setMode('browse');
    setTopic('全部');
    setQuery('');
    setFlipped(false);
    setShowList(false);
  };

  const browseTopic = (nextTopic: string) => {
    setTopic(nextTopic);
    setMode('browse');
    setBrowseCursor((value) => ({ ...value, [deckName]: undefined }));
    setFlipped(false);
    setShowList(false);
  };

  const returnToReview = () => {
    setMode('review');
    setTopic('全部');
    setQuery('');
    setFlipped(false);
  };

  const toggleStar = (id: number) => {
    setStarred((items) => items.includes(id) ? items.filter((itemId) => itemId !== id) : [...items, id]);
    setStarredUpdatedAt(Date.now());
  };

  const syncLabel = {
    loading: '正在读取云端',
    syncing: '正在同步',
    synced: '云端已同步',
    offline: '离线 · 稍后重试',
    local: '已保存到本机',
  }[syncStatus];

  if (!hydrated) {
    return <main className="loading-shell"><div className="loading-mark">i</div><p>正在恢复你的复习进度…</p></main>;
  }

  return <main className="anki-shell">
    <header className="anki-top">
      <div className="anki-brand"><span>i</span><div>INTERVIEW <b>DESK</b><small>ALGORITHM + LLM · SPACED REPETITION</small></div></div>
      <div className="session"><i>{mode === 'review' ? '今日已复习' : '已建立记录'}</i><strong>{mode === 'review' ? reviewedToday : completed}</strong><span>/ {displayDeck.length}</span></div>
      <div className="header-actions"><button onClick={() => setShowList((value) => !value)}>☷ 题目列表</button><span className={`cloud-chip ${syncStatus}`}><i />{syncLabel}</span><span className="streak-dot">{streak} DAY STREAK</span></div>
    </header>
    <div className="anki-layout">
      <aside className={`deck-panel ${showList ? 'mobile-open' : ''}`}>
        <div className="deck-label">今日复习</div>
        <button className={`today-queue ${mode === 'review' ? 'active' : ''}`} onClick={returnToReview}><span><i />综合待复习</span><b>{reviewQueue.length}</b><small>Hot 100 + 大模型 · 每日 {DAILY_NEW_LIMIT} 张新卡</small></button>
        <div className="topic-label deck-section-label">题库浏览</div>
        <button className={`deck ${mode === 'browse' && deckName === 'hot100' ? 'active' : ''}`} onClick={() => switchDeck('hot100')}><span className="deck-icon">100</span><div><b>LeetCode Hot 100</b><small>{hot100.length} 张卡片</small></div></button>
        <button className={`deck secondary ${mode === 'browse' && deckName === 'llm' ? 'active' : ''}`} onClick={() => switchDeck('llm')}><span className="deck-icon">LLM</span><div><b>大模型手撕专项</b><small>{llmCards.length} 张卡片</small></div></button>
        <div className="topic-label">浏览专题</div>
        <div className="topic-list">{topics.map((item) => <button key={item} className={mode === 'browse' && topic === item ? 'active' : ''} onClick={() => browseTopic(item)}><span>{item}</span><em>{item === '全部' ? browseDeck.length : browseDeck.filter((cardItem) => cardItem.category === item).length}</em></button>)}</div>
        <div className="deck-progress"><div><span>当前题库记忆记录</span><b>{Math.round(browseCompleted / browseDeck.length * 100)}%</b></div><i><span style={{ width: `${browseCompleted / browseDeck.length * 100}%` }} /></i><small>{browseCompleted} / {browseDeck.length} 已复习过</small></div>
      </aside>

      <section className="card-stage">
        <div className="stage-tools">
          <div className="search-box">⌕ <input value={query} onChange={(event) => { setQuery(event.target.value); setMode('browse'); setBrowseCursor((value) => ({ ...value, [deckName]: undefined })); setFlipped(false); }} placeholder="搜索题号或题目" /></div>
          <div className="shortcuts"><kbd>Space</kbd> 翻面　<kbd>←</kbd><kbd>→</kbd> 切题</div>
        </div>
        <div className="counter-line">
          <span>{mode === 'review' ? '今日复习' : topic} · {card?.category || '队列完成'}</span>
          <div className="counter-right">{mode === 'browse' && <button onClick={returnToReview}>返回今日复习</button>}<b>{card ? String(index + 1).padStart(2, '0') : '00'} <i>/ {String(cards.length).padStart(2, '0')}</i></b></div>
        </div>

        <div className={`flip-scene ${flipped ? 'is-flipped' : ''}`}>
          {card ? <>
            <article className="anki-card front" onClick={() => setFlipped(true)}>
              <div className="card-topline"><span>{cardDeck(card.id) === 'hot100' ? 'HOT 100' : 'LLM CODING'} · #{Math.abs(card.id)}</span><button onClick={(event) => { event.stopPropagation(); toggleStar(card.id); }}>{starred.includes(card.id) ? '★' : '☆'}</button></div>
              <div className="card-center"><div className="card-meta"><span className={`difficulty ${card.difficulty}`}>{card.difficulty}</span><span className={`due-badge ${state?.phase || 'new'}`}>{status}</span></div><h1>{card.title}</h1><p>{card.question}</p><div className="think"><span>面试时先想</span><b>核心数据结构是什么？状态如何定义？边界在哪里？</b></div></div>
              <div className="flip-hint"><span>点击卡片或按空格</span><b>显示答案　↻</b></div>
            </article>
            <article className="anki-card back">
              <div className="card-topline"><span>BEST INTERVIEW ANSWER · #{Math.abs(card.id)}</span><button onClick={() => setFlipped(false)}>↻</button></div>
              <div className="answer-scroll"><section><label>01 · 先这样口述</label><p className="idea">{card.idea}</p></section><section><label>02 · Python 最优写法</label><pre><code>{card.code}</code></pre></section><div className="answer-grid"><section><label>03 · 复杂度</label><p>{card.complexity}</p></section><section><label>04 · 易错点</label><p>{card.pitfall}</p></section></div></div>
            </article>
          </> : <article className="anki-card front complete-card">
            <div className="complete-mark">✓</div><span className="complete-kicker">TODAY&apos;S SESSION COMPLETE</span><h1>今日复习完成</h1><p>到期卡已经清空，今天已复习 <b>{reviewedToday}</b> 张。下一张学习卡到期后，它会自动回到队列顶部。</p><div className="complete-stats"><span><b>{introducedToday}</b> / {DAILY_NEW_LIMIT}<small>今日新卡</small></span><span><b>{nextDue ? relativeDue(nextDue, now) : '暂无'}</b><small>下次到期</small></span></div><button onClick={() => { setMode('browse'); setTopic('全部'); }}>浏览全部卡片</button>
          </article>}
        </div>

        {card ? <div className="navigation">
          <button onClick={() => move(-1)}>← 上一题</button>
          {!flipped ? <button className="show-answer" onClick={() => setFlipped(true)}>显示答案 <kbd>Space</kbd></button> : <div className="grades">{gradeOptions.map((option, optionIndex) => <button key={option.value} onClick={() => grade(option.value)}><b>{option.label}</b><small>{option.delay}</small><kbd>{optionIndex + 1}</kbd></button>)}</div>}
          <button onClick={() => move(1)}>下一题 →</button>
        </div> : <div className="navigation completion-nav"><span>每 30 秒及重新回到页面时，队列会自动检查到期卡。</span></div>}
      </section>

      <aside className="queue-panel">
        <div className="queue-head"><span>今日队列</span><b>{reviewQueue.length}</b></div>
        <div className="queue-stats"><div><b>{newCards.length}</b><span>新卡</span></div><div><b>{learningCount}</b><span>学习中</span></div><div><b>{reviewDueCount}</b><span>到期复习</span></div></div>
        <div className="today-plan"><span>MIXED ANKI SCHEDULER</span><h3>算法题 + 大模型手撕</h3><p>每天最多 {DAILY_NEW_LIMIT} 张新卡，优先混入 {DAILY_LLM_TARGET} 张大模型题；到期卡仍然优先，评分继续决定下次出现时间。</p><div className={`scheduler-note ${syncStatus}`}><b>{syncLabel}</b><small>连接云同步并登录同一账号后，可合并手机和电脑的进度；未连接时保存在本机。</small></div></div>
        <div className="mini-calendar"><b>最近 7 天</b><div>{recentDays.map((item) => <span className={item.today ? 'today' : item.done ? 'done' : ''} key={item.key}>{item.weekday}<i>{item.date}</i></span>)}</div></div>
        <div className="quote-card">“记忆不是重复阅读，<br />而是恰好在遗忘前主动回忆。”</div>
      </aside>
    </div>
  </main>;
}

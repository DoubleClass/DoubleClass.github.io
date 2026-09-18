export type DeckName = 'hot100' | 'llm';
export type CursorScope = DeckName | 'daily';
export type ReviewPhase = 'learning' | 'review';

export type ReviewState = {
  phase: ReviewPhase;
  due: number;
  interval: number;
  ease: number;
  repetitions: number;
  lapses: number;
  lastReviewed: number;
  introducedOn: string;
};

export type StoredProgress = {
  version: 3;
  schedule: Record<string, ReviewState>;
  starred: number[];
  starredUpdatedAt: number;
  currentByDeck: Partial<Record<CursorScope, number>>;
  cursorUpdatedAt: Partial<Record<CursorScope, number>>;
  activeDeck: DeckName;
  activeDeckUpdatedAt: number;
  updatedAt: number;
};

const VALID_CARD_KEY = /^(hot100|llm):-?\d+$/;

function finite(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function reviewState(value: unknown): ReviewState | null {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as Partial<ReviewState>;
  if (candidate.phase !== 'learning' && candidate.phase !== 'review') return null;
  return {
    phase: candidate.phase,
    due: finite(candidate.due),
    interval: Math.max(0, finite(candidate.interval)),
    ease: Math.max(1.3, finite(candidate.ease, 2.5)),
    repetitions: Math.max(0, finite(candidate.repetitions)),
    lapses: Math.max(0, finite(candidate.lapses)),
    lastReviewed: Math.max(0, finite(candidate.lastReviewed)),
    introducedOn: typeof candidate.introducedOn === 'string' ? candidate.introducedOn.slice(0, 10) : '',
  };
}

export function normalizeProgress(value: unknown): StoredProgress {
  const source = value && typeof value === 'object' ? value as Partial<StoredProgress> : {};
  const schedule: Record<string, ReviewState> = {};
  if (source.schedule && typeof source.schedule === 'object') {
    for (const [key, rawState] of Object.entries(source.schedule).slice(0, 500)) {
      const state = reviewState(rawState);
      if (VALID_CARD_KEY.test(key) && state) schedule[key] = state;
    }
  }

  const inferredUpdatedAt = Math.max(0, ...Object.values(schedule).map((state) => state.lastReviewed));
  const updatedAt = Math.max(inferredUpdatedAt, finite(source.updatedAt));
  const activeDeck: DeckName = source.activeDeck === 'llm' ? 'llm' : 'hot100';
  const starred = Array.isArray(source.starred)
    ? Array.from(new Set(source.starred.filter((id): id is number => typeof id === 'number' && Number.isFinite(id)))).slice(0, 500)
    : [];
  const currentByDeck: Partial<Record<CursorScope, number>> = {};
  const cursorUpdatedAt: Partial<Record<CursorScope, number>> = {};

  for (const scope of ['hot100', 'llm', 'daily'] as CursorScope[]) {
    const current = source.currentByDeck?.[scope];
    if (typeof current === 'number' && Number.isFinite(current)) currentByDeck[scope] = current;
    const cursorTime = finite(source.cursorUpdatedAt?.[scope], currentByDeck[scope] === undefined ? 0 : updatedAt);
    if (cursorTime) cursorUpdatedAt[scope] = cursorTime;
  }

  return {
    version: 3,
    schedule,
    starred,
    starredUpdatedAt: finite(source.starredUpdatedAt, starred.length ? updatedAt : 0),
    currentByDeck,
    cursorUpdatedAt,
    activeDeck,
    activeDeckUpdatedAt: finite(source.activeDeckUpdatedAt, updatedAt),
    updatedAt,
  };
}

export function mergeProgress(firstValue: unknown, secondValue: unknown): StoredProgress {
  const first = normalizeProgress(firstValue);
  const second = normalizeProgress(secondValue);
  const schedule: Record<string, ReviewState> = {};

  for (const key of new Set([...Object.keys(first.schedule), ...Object.keys(second.schedule)])) {
    const left = first.schedule[key];
    const right = second.schedule[key];
    if (!left) schedule[key] = right;
    else if (!right) schedule[key] = left;
    else if (right.lastReviewed > left.lastReviewed) schedule[key] = right;
    else if (right.lastReviewed < left.lastReviewed) schedule[key] = left;
    else if (right.repetitions > left.repetitions) schedule[key] = right;
    else if (right.repetitions < left.repetitions) schedule[key] = left;
    else schedule[key] = right.due >= left.due ? right : left;
  }

  const secondStarsWin = second.starredUpdatedAt >= first.starredUpdatedAt;
  const currentByDeck: Partial<Record<CursorScope, number>> = {};
  const cursorUpdatedAt: Partial<Record<CursorScope, number>> = {};
  for (const scope of ['hot100', 'llm', 'daily'] as CursorScope[]) {
    const leftTime = first.cursorUpdatedAt[scope] || 0;
    const rightTime = second.cursorUpdatedAt[scope] || 0;
    const winner = rightTime >= leftTime ? second : first;
    if (winner.currentByDeck[scope] !== undefined) currentByDeck[scope] = winner.currentByDeck[scope];
    const winnerTime = Math.max(leftTime, rightTime);
    if (winnerTime) cursorUpdatedAt[scope] = winnerTime;
  }

  const activeDeck = second.activeDeckUpdatedAt >= first.activeDeckUpdatedAt ? second.activeDeck : first.activeDeck;
  const merged = normalizeProgress({
    version: 3,
    schedule,
    starred: secondStarsWin ? second.starred : first.starred,
    starredUpdatedAt: Math.max(first.starredUpdatedAt, second.starredUpdatedAt),
    currentByDeck,
    cursorUpdatedAt,
    activeDeck,
    activeDeckUpdatedAt: Math.max(first.activeDeckUpdatedAt, second.activeDeckUpdatedAt),
    updatedAt: Math.max(first.updatedAt, second.updatedAt),
  });
  merged.updatedAt = Math.max(
    merged.updatedAt,
    merged.starredUpdatedAt,
    merged.activeDeckUpdatedAt,
    ...Object.values(merged.cursorUpdatedAt).map((time) => time || 0),
    ...Object.values(merged.schedule).map((state) => state.lastReviewed),
  );
  return merged;
}

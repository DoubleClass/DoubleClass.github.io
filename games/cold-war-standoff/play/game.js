(() => {
  'use strict';

  const API_BASE = 'https://cold-war-standoff-cn.tjcxs136720.chatgpt.site';
  const SESSION_KEY = 'doubleclass.coldwar.sessions';
  const NAME_KEY = 'doubleclass.coldwar.name';
  const ROOM_PATTERN = /^[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{4}-[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{4}$/;
  const TOKEN_PATTERN = /^[a-f0-9]{64}$/i;
  const MAX_ROUNDS = 4;
  const ACTIONS_PER_ROUND = 4;

  const SIDE_LABELS = { us: '华盛顿', ussr: '莫斯科' };
  const REGION_LABELS = {
    europe: '欧洲',
    asia: '亚洲',
    'middle-east': '中东',
    americas: '美洲',
  };
  const REGIONS = ['europe', 'asia', 'middle-east', 'americas'];
  const DEFCON_BLOCKED_REGIONS = { europe: 4, asia: 3, 'middle-east': 2 };

  const COUNTRIES = [
    { id: 'uk', name: '英国', region: 'europe', stability: 4, battleground: false, adjacent: ['france'], homeAdjacent: ['us'] },
    { id: 'france', name: '法国', region: 'europe', stability: 3, battleground: true, adjacent: ['uk', 'west-germany', 'italy'] },
    { id: 'west-germany', name: '西德', region: 'europe', stability: 4, battleground: true, adjacent: ['france', 'italy', 'east-germany'], homeAdjacent: ['us'] },
    { id: 'italy', name: '意大利', region: 'europe', stability: 2, battleground: true, adjacent: ['france', 'west-germany'] },
    { id: 'poland', name: '波兰', region: 'europe', stability: 3, battleground: true, adjacent: ['east-germany'], homeAdjacent: ['ussr'] },
    { id: 'east-germany', name: '东德', region: 'europe', stability: 3, battleground: true, adjacent: ['poland', 'west-germany'], homeAdjacent: ['ussr'] },
    { id: 'japan', name: '日本', region: 'asia', stability: 4, battleground: true, adjacent: ['south-korea'], homeAdjacent: ['us'] },
    { id: 'south-korea', name: '韩国', region: 'asia', stability: 3, battleground: true, adjacent: ['japan', 'vietnam'] },
    { id: 'vietnam', name: '越南', region: 'asia', stability: 1, battleground: false, adjacent: ['south-korea', 'thailand'] },
    { id: 'thailand', name: '泰国', region: 'asia', stability: 2, battleground: true, adjacent: ['vietnam', 'india'] },
    { id: 'india', name: '印度', region: 'asia', stability: 3, battleground: true, adjacent: ['thailand', 'pakistan'] },
    { id: 'pakistan', name: '巴基斯坦', region: 'asia', stability: 2, battleground: true, adjacent: ['india', 'iran'], homeAdjacent: ['ussr'] },
    { id: 'israel', name: '以色列', region: 'middle-east', stability: 4, battleground: true, adjacent: ['egypt', 'syria'], homeAdjacent: ['us'] },
    { id: 'egypt', name: '埃及', region: 'middle-east', stability: 2, battleground: true, adjacent: ['israel', 'syria', 'saudi-arabia'] },
    { id: 'syria', name: '叙利亚', region: 'middle-east', stability: 2, battleground: false, adjacent: ['israel', 'egypt', 'iraq'] },
    { id: 'iraq', name: '伊拉克', region: 'middle-east', stability: 3, battleground: true, adjacent: ['syria', 'iran', 'saudi-arabia'] },
    { id: 'iran', name: '伊朗', region: 'middle-east', stability: 2, battleground: true, adjacent: ['iraq', 'pakistan'], homeAdjacent: ['ussr'] },
    { id: 'saudi-arabia', name: '沙特', region: 'middle-east', stability: 3, battleground: true, adjacent: ['egypt', 'iraq'], homeAdjacent: ['us'] },
    { id: 'mexico', name: '墨西哥', region: 'americas', stability: 2, battleground: true, adjacent: ['cuba', 'panama'], homeAdjacent: ['us'] },
    { id: 'cuba', name: '古巴', region: 'americas', stability: 3, battleground: true, adjacent: ['mexico', 'panama'] },
    { id: 'panama', name: '巴拿马', region: 'americas', stability: 2, battleground: true, adjacent: ['mexico', 'cuba', 'brazil'] },
    { id: 'brazil', name: '巴西', region: 'americas', stability: 2, battleground: true, adjacent: ['panama', 'argentina'] },
    { id: 'argentina', name: '阿根廷', region: 'americas', stability: 2, battleground: true, adjacent: ['brazil', 'chile'] },
    { id: 'chile', name: '智利', region: 'americas', stability: 3, battleground: false, adjacent: ['argentina'] },
  ];

  const COUNTRY_BY_ID = Object.fromEntries(COUNTRIES.map((country) => [country.id, country]));
  const app = document.getElementById('app');
  const liveRegion = document.getElementById('live-region');

  const ui = {
    booting: true,
    bootError: '',
    view: null,
    connection: 'syncing',
    lobbyMode: 'create',
    name: safeStorageGet(NAME_KEY) || '',
    roomInput: '',
    formBusy: false,
    formError: '',
    resumeNote: '',
    mobileTab: 'board',
    selectedCardId: '',
    mode: null,
    placements: {},
    coupTarget: '',
    eventTarget: '',
    actionBusy: false,
    actionError: '',
    pendingAction: null,
    rulesOpen: false,
    concedeOpen: false,
    toast: '',
  };

  let pollTimer = 0;
  let pollInFlight = false;
  let toastTimer = 0;

  class ApiError extends Error {
    constructor(message, status, code) {
      super(message);
      this.name = 'ApiError';
      this.status = status;
      this.code = code;
    }
  }

  function safeStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function loadSessions() {
    try {
      const value = JSON.parse(safeStorageGet(SESSION_KEY) || '{}');
      if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
      return Object.fromEntries(
        Object.entries(value).filter(([code, token]) => ROOM_PATTERN.test(code) && typeof token === 'string' && TOKEN_PATTERN.test(token)),
      );
    } catch {
      return {};
    }
  }

  function sessionFor(code) {
    return loadSessions()[code] || '';
  }

  function saveSession(code, token) {
    if (!ROOM_PATTERN.test(code) || !TOKEN_PATTERN.test(token)) return false;
    const sessions = loadSessions();
    sessions[code] = token;
    return safeStorageSet(SESSION_KEY, JSON.stringify(sessions));
  }

  function forgetSession(code) {
    const sessions = loadSessions();
    delete sessions[code];
    safeStorageSet(SESSION_KEY, JSON.stringify(sessions));
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    })[character]);
  }

  function normalizeCode(value) {
    const raw = String(value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
    return raw.length > 4 ? `${raw.slice(0, 4)}-${raw.slice(4)}` : raw;
  }

  function otherSide(side) {
    return side === 'us' ? 'ussr' : 'us';
  }

  function brandHtml() {
    return `
      <span class="brand" aria-label="冷战对峙">
        <span class="brand-mark" aria-hidden="true"><i></i><i></i></span>
        <span><strong>冷战对峙</strong><small>1945—1989</small></span>
      </span>`;
  }

  function connectionHtml() {
    const labels = { online: '已同步', syncing: '同步中', offline: '连接中断' };
    return `<span class="connection-pill ${ui.connection}" data-connection><i aria-hidden="true"></i><span>${labels[ui.connection]}</span></span>`;
  }

  function topbarHtml(kind) {
    const isGame = kind === 'game';
    const isWaiting = kind === 'waiting';
    const view = ui.view;
    const myTurn = Boolean(view && view.status === 'active' && view.state.activeSide === view.selfSide);
    const middle = isGame
      ? `<div class="turn-indicator"><i class="${escapeHtml(view?.state.activeSide || '')}" aria-hidden="true"></i><span><small>${myTurn ? '等待你的决定' : '对手正在思考'}</small><strong>${myTurn ? '轮到你行动' : `轮到${escapeHtml(view?.state.activeSide ? SIDE_LABELS[view.state.activeSide] : '—')}`}</strong></span></div>`
      : brandHtml();
    const roomButton = view
      ? `<button class="room-button" type="button" data-action="copy-invite" aria-label="复制房间 ${escapeHtml(view.code)} 的邀请链接"><small>房间</small>${escapeHtml(view.code)}</button>`
      : '';
    return `
      <header class="topbar ${kind === 'lobby' ? 'public-topbar' : 'game-topbar'}">
        <div class="topbar-side">
          <a class="back-link" href="../" aria-label="返回游戏详情">← <span>游戏详情</span></a>
          ${isGame ? brandHtml() : ''}
        </div>
        ${middle}
        <div class="topbar-side">
          ${(isGame || isWaiting) ? roomButton : ''}
          ${connectionHtml()}
          <button class="quiet-button" type="button" data-action="open-rules">规则</button>
          ${isGame && view?.status === 'active' ? '<button class="quiet-button danger" type="button" data-action="open-concede">认输</button>' : ''}
        </div>
      </header>`;
  }

  function renderBootError() {
    return `
      <main class="lobby-screen">
        ${topbarHtml('lobby')}
        <section class="lobby-layout">
          <div class="lobby-copy">
            <p class="eyebrow">通讯暂时中断</p>
            <h1>战情室未能<br><em>完成恢复。</em></h1>
            <p>你的房间凭证仍安全保存在这台设备上。网络恢复后可以继续，不必重新加入。</p>
          </div>
          <section class="lobby-panel" aria-labelledby="recovery-title">
            <p class="eyebrow">连接错误</p>
            <h2 id="recovery-title">暂时无法联系游戏服务器</h2>
            <p class="inline-error" role="alert">${escapeHtml(ui.bootError)}</p>
            <button class="primary-button" type="button" data-action="retry-restore">重新连接 <span>→</span></button>
            <button class="secondary-button" type="button" data-action="leave-room">返回房间入口</button>
          </section>
        </section>
      </main>`;
  }

  function renderLobby() {
    const joining = ui.lobbyMode === 'join';
    return `
      <main class="lobby-screen">
        ${topbarHtml('lobby')}
        <section class="lobby-layout">
          <div class="lobby-copy">
            <p class="eyebrow">一场牌桌上的世界角力</p>
            <h1>铁幕落下。<br><em>轮到你出牌。</em></h1>
            <p>用事件、影响力与有限的行动，在核危机边缘争夺世界格局。创建一间战情室，把房间码发给朋友即可开局。</p>
            <div class="feature-row" aria-label="游戏信息"><span>双人远程</span><span>20–40 分钟</span><span>无需注册</span><span>手机可玩</span></div>
          </div>
          <section class="lobby-panel" aria-label="创建或加入战情室">
            <div class="mode-tabs" role="tablist" aria-label="进入方式">
              <button class="mode-tab ${joining ? '' : 'active'}" type="button" role="tab" aria-selected="${joining ? 'false' : 'true'}" data-action="lobby-create">创建房间</button>
              <button class="mode-tab ${joining ? 'active' : ''}" type="button" role="tab" aria-selected="${joining ? 'true' : 'false'}" data-action="lobby-join">加入朋友</button>
            </div>
            <form class="lobby-form" data-lobby-form novalidate>
              <label for="commander-name">你的代号</label>
              <input id="commander-name" name="name" data-field="name" value="${escapeHtml(ui.name)}" maxlength="16" autocomplete="nickname" placeholder="例如：北极星" required>
              ${joining ? `
                <label for="room-code">房间码</label>
                <input id="room-code" class="code-input" name="code" data-field="room-code" value="${escapeHtml(ui.roomInput)}" maxlength="9" inputmode="text" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="ABCD-EFGH" required>` : ''}
              ${ui.resumeNote ? `<p class="inline-note">${escapeHtml(ui.resumeNote)}</p>` : ''}
              ${ui.formError ? `<p class="inline-error" role="alert">${escapeHtml(ui.formError)}</p>` : ''}
              <button class="primary-button" type="submit" ${ui.formBusy ? 'disabled' : ''}>${ui.formBusy ? '正在建立安全连接…' : joining ? '进入战情室' : '创建战情室'} <span>→</span></button>
              <p class="privacy-note">会话凭证仅保存在这台设备，不会出现在邀请链接中。</p>
            </form>
          </section>
        </section>
      </main>`;
  }

  function renderWaiting() {
    const view = ui.view;
    const host = view.players.ussr?.name || '房主';
    return `
      <main class="waiting-screen">
        ${topbarHtml('waiting')}
        <section class="waiting-card" aria-labelledby="waiting-title">
          <div class="radar" aria-hidden="true"></div>
          <p class="eyebrow">战情室已加密建立</p>
          <h1 id="waiting-title">等待另一位<br>指挥官入席</h1>
          <p>把房间码或邀请链接发给朋友。对方加入后，这里会自动切换到棋盘。</p>
          <button class="big-code" type="button" data-action="copy-code" aria-label="复制房间码 ${escapeHtml(view.code)}">${escapeHtml(view.code)}<small>轻触复制</small></button>
          <div class="waiting-actions">
            <button class="primary-button" type="button" data-action="share-invite">分享邀请 <span>↗</span></button>
            <button class="secondary-button" type="button" data-action="copy-invite">复制链接</button>
          </div>
          <span class="listening"><i aria-hidden="true"></i>${ui.connection === 'offline' ? '连接中断，正在重试' : '正在监听加入信号'}</span>
          <div class="seat-row" aria-label="玩家席位">
            <div class="seat"><b>莫</b><span>${escapeHtml(host)}<small>房主 · 莫斯科</small></span></div>
            <div class="seat-line" aria-hidden="true"></div>
            <div class="seat empty"><b>?</b><span>等待加入<small>华盛顿</small></span></div>
          </div>
        </section>
      </main>`;
  }

  function controlFor(state, countryId) {
    const country = COUNTRY_BY_ID[countryId];
    const influence = state.countries[countryId];
    if (!country || !influence) return null;
    if (influence.us >= country.stability && influence.us - influence.ussr >= country.stability) return 'us';
    if (influence.ussr >= country.stability && influence.ussr - influence.us >= country.stability) return 'ussr';
    return null;
  }

  function influenceAccess(state, side) {
    const result = new Set();
    for (const country of COUNTRIES) {
      if ((state.countries[country.id]?.[side] || 0) > 0 || country.homeAdjacent?.includes(side)) result.add(country.id);
    }
    for (const country of COUNTRIES) {
      if (country.adjacent.some((id) => (state.countries[id]?.[side] || 0) > 0)) result.add(country.id);
    }
    return result;
  }

  function eventBeneficiary(card, actor) {
    return card.alignment === 'neutral' ? actor : card.alignment;
  }

  function eventTargetOptions(state, card, actor) {
    const effect = card.effect;
    if (effect.kind !== 'influence' && effect.kind !== 'remove') return [];
    const beneficiary = eventBeneficiary(card, actor);
    return COUNTRIES.filter((country) => {
      if (!effect.regions.includes(country.region)) return false;
      return effect.kind === 'influence' || (state.countries[country.id]?.[otherSide(beneficiary)] || 0) > 0;
    });
  }

  function coupTargetOptions(state, actor) {
    const enemy = otherSide(actor);
    return COUNTRIES.filter((country) => {
      const blockedAt = DEFCON_BLOCKED_REGIONS[country.region];
      return (state.countries[country.id]?.[enemy] || 0) > 0 && (!blockedAt || state.defcon > blockedAt);
    });
  }

  function placementCost(state, side, placements) {
    const simulated = Object.fromEntries(
      Object.entries(state.countries).map(([id, influence]) => [id, { us: influence.us, ussr: influence.ussr }]),
    );
    let total = 0;
    for (const [countryId, amount] of Object.entries(placements)) {
      const country = COUNTRY_BY_ID[countryId];
      if (!country) continue;
      for (let point = 0; point < amount; point += 1) {
        const influence = simulated[countryId];
        const enemy = otherSide(side);
        const enemyControls = influence[enemy] >= country.stability && influence[enemy] - influence[side] >= country.stability;
        total += enemyControls ? 2 : 1;
        influence[side] += 1;
      }
    }
    return total;
  }

  function selectedCard() {
    if (!ui.view || !ui.selectedCardId) return null;
    return ui.view.hand.find((card) => card.id === ui.selectedCardId) || null;
  }

  function renderStatusRibbon() {
    const state = ui.view.state;
    const vpText = state.vp === 0 ? '势均力敌' : state.vp > 0 ? `华盛顿 +${state.vp}` : `莫斯科 +${Math.abs(state.vp)}`;
    const vpClass = state.vp > 0 ? 'us-text' : state.vp < 0 ? 'ussr-text' : '';
    return `
      <section class="status-ribbon" aria-label="当前对局状态">
        <div class="status-item"><small>回合</small><strong>${state.round}<em> / ${MAX_ROUNDS}</em></strong></div>
        <div class="status-item"><small>行动轮</small><strong>${state.actionRound}<em> / ${ACTIONS_PER_ROUND}</em></strong></div>
        <div class="status-item defcon"><small>DEFCON</small><strong class="${state.defcon <= 2 ? 'danger' : ''}">${state.defcon}</strong></div>
        <div class="status-item vp"><small>胜利点</small><strong class="${vpClass}">${escapeHtml(vpText)}</strong></div>
        <div class="status-item milops"><small>军事行动 · 太空 ${state.space.us}/${state.space.ussr}</small><strong class="milops-value"><i></i>${state.milOps.us} · ${state.milOps.ussr}<i></i></strong></div>
      </section>`;
  }

  function renderBoard() {
    const view = ui.view;
    const state = view.state;
    const access = influenceAccess(state, view.selfSide);
    const coups = new Set(coupTargetOptions(state, view.selfSide).map((country) => country.id));
    const heading = ui.mode === 'influence' ? '选择国家部署影响力' : ui.mode === 'coup' ? '选择政变目标' : '世界棋盘';
    const regionHtml = REGIONS.map((region) => {
      const cards = COUNTRIES.filter((country) => country.region === region).map((country) => {
        const influence = state.countries[country.id] || { us: 0, ussr: 0 };
        const control = controlFor(state, country.id);
        const selectable = ui.mode === 'influence' ? access.has(country.id) : ui.mode === 'coup' ? coups.has(country.id) : false;
        const drafted = ui.placements[country.id] || 0;
        const label = `${country.name}，稳定度 ${country.stability}${country.battleground ? '，战场国' : ''}；华盛顿影响力 ${influence.us}，莫斯科影响力 ${influence.ussr}${selectable ? '；可选择' : ''}`;
        return `
          <article class="country-card ${control ? `controlled-${control}` : ''} ${selectable ? 'selectable' : ''} ${ui.coupTarget === country.id ? 'targeted' : ''}">
            <button class="country-main" type="button" data-action="select-country" data-country="${country.id}" aria-label="${escapeHtml(label)}" ${selectable ? '' : 'disabled'}>
              <span class="country-title"><strong>${escapeHtml(country.name)}</strong><small>${country.battleground ? '◆ ' : ''}稳定 ${country.stability}</small></span>
              <span class="influence-pair" aria-hidden="true"><i class="influence-counter us"><b>${influence.us}</b><small>华</small></i><i class="influence-counter ussr"><b>${influence.ussr}</b><small>莫</small></i></span>
            </button>
            ${drafted > 0 ? `<button class="draft-button ${view.selfSide}" type="button" data-action="remove-placement" data-country="${country.id}" aria-label="撤回在${escapeHtml(country.name)}的一点影响力">+${drafted}</button>` : ''}
          </article>`;
      }).join('');
      const battlegrounds = COUNTRIES.filter((country) => country.region === region && country.battleground).length;
      return `<section class="region-zone ${region}"><header><strong>${REGION_LABELS[region]}</strong><small>${battlegrounds} 个战场国</small></header><div class="country-grid">${cards}</div></section>`;
    }).join('');
    return `
      <section class="board-panel" aria-labelledby="board-title">
        <div class="panel-heading"><div><p class="eyebrow">全球影响力态势</p><h1 id="board-title">${heading}</h1></div><div class="board-legend" aria-label="图例"><span><i class="blue"></i>华盛顿</span><span><i class="red"></i>莫斯科</span><span>◆ 战场国</span></div></div>
        <div class="region-grid">${regionHtml}</div>
        <p class="board-footnote">影响力部署范围在行动开始时锁定；对手控制的国家每点通常消耗 2 行动值。点按右下角的 + 数字可撤回本次部署。</p>
      </section>`;
  }

  function renderCard(card, disabled) {
    const faction = card.alignment === 'us' ? '华盛顿' : card.alignment === 'ussr' ? '莫斯科' : '中立';
    const selected = ui.selectedCardId === card.id;
    return `
      <button class="strategy-card ${escapeHtml(card.alignment)} ${selected ? 'selected' : ''}" type="button" data-action="select-card" data-card="${escapeHtml(card.id)}" aria-pressed="${selected}" ${disabled ? 'disabled' : ''}>
        <span class="card-band"><b>${card.ops || 'S'}</b><small>${escapeHtml(card.year)}</small></span>
        <strong>${escapeHtml(card.title)}</strong>
        <p>${escapeHtml(card.text)}</p>
        <span class="card-faction">${faction}</span>
      </button>`;
  }

  function renderSidePanel() {
    const view = ui.view;
    const state = view.state;
    const opponent = otherSide(view.selfSide);
    const opponentName = view.players[opponent]?.name || '等待对手';
    const myTurn = view.status === 'active' && state.activeSide === view.selfSide;
    const cards = view.hand.length
      ? view.hand.map((card) => renderCard(card, !myTurn)).join('')
      : '<p class="empty-panel">手牌已经打完，等待本回合结算。</p>';
    const log = state.log.length
      ? [...state.log].reverse().map((entry) => {
          const sideName = entry.side === 'system' ? '战情系统' : SIDE_LABELS[entry.side];
          return `<article class="log-entry ${escapeHtml(entry.side)}"><i aria-hidden="true"></i><div><small>${escapeHtml(sideName)} · ${escapeHtml(formatTime(entry.at))}</small><p>${escapeHtml(entry.text)}</p></div></article>`;
        }).join('')
      : '<p class="empty-panel">暂无公开战报。</p>';
    return `
      <aside class="side-panel">
        <div class="opponent-strip"><span class="side-avatar ${opponent}">${opponent === 'us' ? '华' : '莫'}</span><span><small>对手</small><strong>${escapeHtml(opponentName)}</strong></span><small>${state.opponentHandCount} 张手牌</small></div>
        <section class="hand-panel" aria-labelledby="hand-title"><div class="panel-heading"><div><p class="eyebrow">绝密手牌</p><h2 id="hand-title">你的指令</h2></div><span class="hand-count">${view.hand.length} 张</span></div><div class="hand-list">${cards}</div>${!myTurn && view.status === 'active' ? `<p class="waiting-turn"><i aria-hidden="true"></i>等待${SIDE_LABELS[state.activeSide || opponent]}行动</p>` : ''}</section>
        <section class="log-panel" aria-labelledby="log-title"><div class="panel-heading"><div><p class="eyebrow">公开通讯</p><h2 id="log-title">战报</h2></div></div><div class="log-list">${log}</div></section>
      </aside>`;
  }

  function formatTime(value) {
    try {
      return new Date(value).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '—';
    }
  }

  function actionRequirements(card) {
    const view = ui.view;
    const state = view.state;
    const targets = eventTargetOptions(state, card, view.selfSide);
    const enemyEvent = card.alignment !== 'neutral' && card.alignment !== view.selfSide && ui.mode !== 'event' && ui.mode !== 'space';
    const targetNeeded = (ui.mode === 'event' || enemyEvent)
      && (card.effect.kind === 'influence' || card.effect.kind === 'remove')
      && targets.length > 0;
    const coups = coupTargetOptions(state, view.selfSide);
    const spent = placementCost(state, view.selfSide, ui.placements);
    const spaceRequirement = state.space[view.selfSide] < 2 ? 2 : 3;
    const spaceAllowed = !state.spaceAttempted[view.selfSide] && state.space[view.selfSide] < 4 && card.ops >= spaceRequirement;
    const canConfirm = Boolean(ui.mode)
      && (!targetNeeded || Boolean(ui.eventTarget))
      && (ui.mode !== 'influence' || (spent > 0 && spent <= card.ops))
      && (ui.mode !== 'coup' || Boolean(ui.coupTarget))
      && (ui.mode !== 'space' || spaceAllowed);
    return { targets, enemyEvent, targetNeeded, coups, spent, spaceRequirement, spaceAllowed, canConfirm };
  }

  function renderActionDrawer() {
    const card = selectedCard();
    const view = ui.view;
    if (!card || view.status !== 'active' || view.state.activeSide !== view.selfSide) return '';
    const requirements = actionRequirements(card);
    const scoring = card.effect.kind === 'score';
    const options = (items, selected) => items.map((country) => `<option value="${country.id}" ${selected === country.id ? 'selected' : ''}>${escapeHtml(country.name)}${country.battleground ? ' ◆' : ''}</option>`).join('');
    const selectBlock = requirements.targetNeeded
      ? `<label class="drawer-select">${requirements.enemyEvent ? '对手事件目标（行动后触发）' : '事件目标'}<select data-field="event-target"><option value="">请选择国家</option>${options(requirements.targets, ui.eventTarget)}</select></label>`
      : '';
    const contextual = ui.mode === 'influence'
      ? `<p class="drawer-hint">在棋盘上点选国家 · 已使用 <b>${requirements.spent}</b> / ${card.ops} 行动值</p>`
      : ui.mode === 'coup'
        ? `<label class="drawer-select">政变目标<select data-field="coup-target"><option value="">请选择合法国家</option>${options(requirements.coups, ui.coupTarget)}</select></label>`
        : ui.mode === 'space'
          ? `<p class="drawer-hint">需要 ${requirements.spaceRequirement} 行动值；掷骰成功可推进太空轨并得分，对手事件不会触发。</p>`
          : ui.mode === 'event'
            ? `<p class="drawer-hint">立即执行卡牌文字，然后把行动权交给对手。</p>`
            : '<p class="drawer-hint">选择这张牌的使用方式。</p>';
    const retrying = Boolean(ui.pendingAction);
    return `
      <section class="action-drawer" aria-label="打出${escapeHtml(card.title)}">
        <div class="drawer-ops ${escapeHtml(card.alignment)}">${card.ops || 'S'}</div>
        <div class="drawer-main">
          <div class="drawer-title"><span><small>准备打出</small><strong>${escapeHtml(card.title)}</strong></span><button class="close-button" type="button" data-action="cancel-action" aria-label="取消选择">×</button></div>
          <div class="action-modes" aria-label="出牌方式">
            <button class="${ui.mode === 'event' ? 'active' : ''}" type="button" data-action="select-mode" data-mode="event">作为事件</button>
            <button class="${ui.mode === 'influence' ? 'active' : ''}" type="button" data-action="select-mode" data-mode="influence" ${scoring ? 'disabled' : ''}>部署影响力</button>
            <button class="${ui.mode === 'coup' ? 'active' : ''}" type="button" data-action="select-mode" data-mode="coup" ${scoring ? 'disabled' : ''}>发动政变</button>
            <button class="${ui.mode === 'space' ? 'active' : ''}" type="button" data-action="select-mode" data-mode="space" ${scoring || !requirements.spaceAllowed ? 'disabled' : ''}>太空竞赛</button>
          </div>
          ${contextual}${selectBlock}${requirements.enemyEvent ? '<p class="enemy-warning">注意：这是对手阵营事件。用于行动后，事件仍会为对手触发。</p>' : ''}
        </div>
        <button class="confirm-action" type="button" data-action="confirm-action" ${(!retrying && !requirements.canConfirm) || ui.actionBusy ? 'disabled' : ''}>${ui.actionBusy ? '正在提交…' : retrying ? '重试同一指令' : '确认出牌'}<span>→</span></button>
      </section>`;
  }

  function renderMobileNav() {
    return `
      <nav class="mobile-nav" aria-label="游戏视图">
        <button class="mobile-tab ${ui.mobileTab === 'board' ? 'active' : ''}" type="button" data-action="mobile-tab" data-tab="board"><b>◎</b>棋盘</button>
        <button class="mobile-tab ${ui.mobileTab === 'hand' ? 'active' : ''}" type="button" data-action="mobile-tab" data-tab="hand"><b>▱</b>手牌<small>${ui.view.hand.length}</small></button>
        <button class="mobile-tab ${ui.mobileTab === 'log' ? 'active' : ''}" type="button" data-action="mobile-tab" data-tab="log"><b>≡</b>战报</button>
      </nav>`;
  }

  function renderActionError() {
    if (!ui.actionError) return '';
    return `<div class="action-error" role="alert"><span>${escapeHtml(ui.actionError)}</span>${ui.pendingAction ? '<button type="button" data-action="retry-action">重试同一指令</button>' : '<button type="button" data-action="dismiss-action-error">关闭</button>'}</div>`;
  }

  function renderGameOver() {
    const view = ui.view;
    if (view.status !== 'finished' || ui.rulesOpen) return '';
    const won = view.state.winner === view.selfSide;
    const draw = view.state.winner === 'draw';
    const score = view.state.vp > 0 ? `华盛顿 +${view.state.vp}` : view.state.vp < 0 ? `莫斯科 +${Math.abs(view.state.vp)}` : '0 · 0';
    return `
      <div class="modal-backdrop">
        <section class="modal-card game-over-card ${won ? 'won' : draw ? 'draw' : 'lost'}" role="dialog" aria-modal="true" aria-labelledby="result-title">
          <p class="eyebrow">最终公报</p><span class="result-seal">${draw ? '和' : won ? '胜' : '败'}</span>
          <h2 id="result-title">${draw ? '世界维持脆弱平衡' : won ? '你的阵营赢得了这场对峙' : '对手改变了世界走向'}</h2>
          <p>${escapeHtml(view.state.endReason || '对局已经结束。')}</p>
          <div class="final-score"><span>最终胜利点</span><strong>${escapeHtml(score)}</strong></div>
          <button class="primary-button" type="button" data-action="leave-room">返回房间入口 <span>→</span></button>
        </section>
      </div>`;
  }

  function renderRules() {
    if (!ui.rulesOpen) return '';
    return `
      <div class="modal-backdrop" data-action="close-rules">
        <section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="rules-title">
          <button class="close-button" type="button" data-action="close-rules" aria-label="关闭规则">×</button>
          <p class="eyebrow">快速规则</p><h2 id="rules-title">四回合决定世界走向</h2>
          <ol class="rules-list">
            <li><b>轮流出牌</b><span>每回合双方各打 4 张牌，莫斯科先行。</span></li>
            <li><b>四种用法</b><span>牌可作为事件、用行动值部署影响力、发动政变或投入太空竞赛。对手阵营牌用于行动时，对手事件仍会触发。</span></li>
            <li><b>控制国家</b><span>己方影响力达到稳定值，并至少领先对手一个稳定值即获控制；◆ 是战场国。</span></li>
            <li><b>避免核战</b><span>战场国政变会降低 DEFCON；把它降到 1 的行动方立即失败。低 DEFCON 也会封锁部分区域。</span></li>
            <li><b>赢得胜利</b><span>领先达到 15 分、完全控制欧洲，或四回合最终结算后领先即可获胜。</span></li>
          </ol>
          <p class="rules-note">这是采用原创牌组、地图结构与文案的非官方快局版本，保留卡牌驱动、影响力、政变、DEFCON、太空竞赛和区域计分等核心体验。</p>
        </section>
      </div>`;
  }

  function renderConcedeDialog() {
    if (!ui.concedeOpen) return '';
    return `
      <div class="modal-backdrop" data-action="cancel-concede">
        <section class="modal-card confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="concede-title">
          <p class="eyebrow">确认指令</p><h2 id="concede-title">现在认输？</h2>
          <p>本局会立即结束，对手获胜。这项操作无法撤销。</p>
          <div class="dialog-actions"><button class="secondary-button" type="button" data-action="cancel-concede">继续对局</button><button class="primary-button" type="button" data-action="confirm-concede">确认认输 <span>→</span></button></div>
        </section>
      </div>`;
  }

  function renderGame() {
    return `
      <main class="game-screen side-${ui.view.selfSide} tab-${ui.mobileTab}">
        ${topbarHtml('game')}
        ${renderStatusRibbon()}
        <div class="game-layout">${renderBoard()}${renderSidePanel()}</div>
        ${renderMobileNav()}
        ${renderActionDrawer()}
        ${renderActionError()}
        ${renderGameOver()}
      </main>`;
  }

  function render() {
    let content;
    if (ui.booting) {
      content = `<main class="boot-screen" aria-label="正在加载游戏">${brandHtml()}<span class="loading-line" aria-hidden="true"></span><p>正在恢复战情室…</p></main>`;
    } else if (ui.bootError) {
      content = renderBootError();
    } else if (!ui.view) {
      content = renderLobby();
    } else if (ui.view.status === 'waiting') {
      content = renderWaiting();
    } else {
      content = renderGame();
    }
    app.innerHTML = `${content}${renderRules()}${renderConcedeDialog()}${ui.toast ? `<div class="toast" role="status">${escapeHtml(ui.toast)}</div>` : ''}`;
    app.setAttribute('aria-busy', ui.booting || ui.formBusy || ui.actionBusy ? 'true' : 'false');
    if (ui.rulesOpen) focusSoon('[data-action="close-rules"]');
    else if (ui.concedeOpen) focusSoon('[data-action="cancel-concede"]');
  }

  function focusSoon(selector) {
    window.requestAnimationFrame(() => app.querySelector(selector)?.focus());
  }

  function announce(message) {
    liveRegion.textContent = '';
    window.setTimeout(() => { liveRegion.textContent = message; }, 10);
  }

  function flash(message) {
    ui.toast = message;
    announce(message);
    window.clearTimeout(toastTimer);
    render();
    toastTimer = window.setTimeout(() => {
      ui.toast = '';
      render();
    }, 2400);
  }

  function updateConnection(status) {
    if (!['online', 'syncing', 'offline'].includes(status)) return;
    ui.connection = status;
    const labels = { online: '已同步', syncing: '同步中', offline: '连接中断' };
    app.querySelectorAll('[data-connection]').forEach((element) => {
      element.classList.remove('online', 'syncing', 'offline');
      element.classList.add(status);
      const label = element.querySelector('span');
      if (label) label.textContent = labels[status];
    });
  }

  function resetAction() {
    ui.selectedCardId = '';
    ui.mode = null;
    ui.placements = {};
    ui.coupTarget = '';
    ui.eventTarget = '';
    ui.actionBusy = false;
    ui.actionError = '';
    ui.pendingAction = null;
  }

  function acceptView(nextView) {
    if (!nextView || typeof nextView !== 'object' || !ROOM_PATTERN.test(nextView.code || '')) {
      throw new Error('服务器返回了无法识别的房间状态。');
    }
    if (ui.pendingAction && Number(nextView.version) > Number(ui.pendingAction.baseVersion)) resetAction();
    ui.view = nextView;
    const selectedStillExists = nextView.hand?.some((card) => card.id === ui.selectedCardId);
    const stillMyTurn = nextView.status === 'active' && nextView.state.activeSide === nextView.selfSide;
    if (!selectedStillExists || !stillMyTurn) resetAction();
    updateConnection('online');
  }

  function currentRoomUrl(code) {
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('room', code);
    return url.toString();
  }

  function setRoomUrl(code) {
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    if (code) url.searchParams.set('room', code);
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  }

  async function apiRequest(path, { method = 'GET', token = '', body } = {}) {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    if (body !== undefined) {
      headers['Content-Type'] = 'application/json';
      headers['X-Coldwar-Client'] = 'web';
    }
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    let response;
    try {
      response = await fetch(`${API_BASE}${path}`, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
        cache: 'no-store',
        credentials: 'omit',
        signal: controller.signal,
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') throw new ApiError('连接超时，请检查网络后重试。', 0, 'NETWORK_TIMEOUT');
      throw new ApiError('无法联系游戏服务器，请检查网络后重试。', 0, 'NETWORK_ERROR');
    } finally {
      window.clearTimeout(timeout);
    }
    if (response.status === 204) return null;
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new ApiError(result.message || '战情室暂时无法响应。', response.status, result.error || 'REQUEST_FAILED');
    return result;
  }

  async function restoreRoom(code, fromRetry = false) {
    const token = sessionFor(code);
    if (!token) {
      ui.booting = false;
      ui.bootError = '';
      ui.lobbyMode = 'join';
      ui.roomInput = code;
      render();
      focusSoon('#commander-name');
      return;
    }
    ui.booting = true;
    ui.bootError = '';
    if (fromRetry) render();
    try {
      const view = await apiRequest(`/api/games/${encodeURIComponent(code)}`, { token });
      acceptView(view);
      ui.booting = false;
      render();
      beginPolling();
    } catch (error) {
      ui.booting = false;
      if (error instanceof ApiError && error.status === 401) {
        forgetSession(code);
        ui.lobbyMode = 'join';
        ui.roomInput = code;
        ui.resumeNote = '这台设备没有该房间的有效席位凭证，请输入代号加入；已经开局的房间不能重新占座。';
        render();
      } else {
        ui.bootError = error instanceof Error ? error.message : '无法恢复房间。';
        updateConnection('offline');
        render();
      }
    }
  }

  async function enterRoom() {
    const action = ui.lobbyMode;
    const name = ui.name.trim().replace(/\s+/g, ' ');
    const code = normalizeCode(ui.roomInput);
    if (!name) {
      ui.formError = '请先输入你的代号。';
      render();
      focusSoon('#commander-name');
      return;
    }
    if ([...name].length > 16) {
      ui.formError = '代号最多 16 个字符。';
      render();
      return;
    }
    if (action === 'join' && !ROOM_PATTERN.test(code)) {
      ui.formError = '请输入完整有效的 8 位房间码。';
      render();
      focusSoon('#room-code');
      return;
    }
    ui.formBusy = true;
    ui.formError = '';
    ui.resumeNote = '';
    updateConnection('syncing');
    render();
    try {
      const result = await apiRequest('/api/rooms', {
        method: 'POST',
        body: { action, name, ...(action === 'join' ? { code } : {}) },
      });
      const token = result.sessionToken;
      if (!TOKEN_PATTERN.test(token || '')) throw new Error('服务器没有返回有效的房间凭证。');
      if (!saveSession(result.code, token)) throw new Error('浏览器无法保存房间凭证，请允许本网站使用本地存储。');
      safeStorageSet(NAME_KEY, name);
      ui.name = name;
      ui.formBusy = false;
      setRoomUrl(result.code);
      const view = { ...result };
      delete view.sessionToken;
      acceptView(view);
      render();
      beginPolling();
      announce(action === 'create' ? `房间 ${view.code} 已创建` : '已加入战情室，对局开始');
    } catch (error) {
      ui.formBusy = false;
      ui.formError = error instanceof Error ? error.message : '无法进入战情室。';
      updateConnection(error instanceof ApiError && error.status > 0 ? 'online' : 'offline');
      render();
    }
  }

  function beginPolling(immediate = false) {
    window.clearTimeout(pollTimer);
    if (!ui.view || ui.view.status === 'finished') return;
    pollTimer = window.setTimeout(runPoll, immediate ? 0 : ui.view.status === 'waiting' ? 1100 : 1800);
  }

  async function runPoll() {
    if (pollInFlight || !ui.view || ui.view.status === 'finished') return;
    const code = ui.view.code;
    const token = sessionFor(code);
    if (!token) {
      updateConnection('offline');
      return;
    }
    pollInFlight = true;
    if (ui.connection === 'offline') updateConnection('syncing');
    try {
      const next = await apiRequest(`/api/games/${encodeURIComponent(code)}?since=${encodeURIComponent(ui.view.version)}`, { token });
      if (next) {
        const previousStatus = ui.view.status;
        acceptView(next);
        render();
        if (previousStatus === 'waiting' && next.status === 'active') announce('双方已就位，对局开始');
      } else {
        updateConnection('online');
      }
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        forgetSession(code);
        stopPolling();
        ui.view = null;
        ui.lobbyMode = 'join';
        ui.roomInput = code;
        ui.formError = '房间凭证已经失效，请返回房间入口。';
        setRoomUrl(code);
        render();
        return;
      }
      updateConnection('offline');
    } finally {
      pollInFlight = false;
      if (ui.view && ui.view.status !== 'finished') {
        const delay = ui.connection === 'offline' ? 3600 : ui.view.status === 'waiting' ? 1700 : 2400;
        pollTimer = window.setTimeout(runPoll, delay);
      }
    }
  }

  function stopPolling() {
    window.clearTimeout(pollTimer);
    pollTimer = 0;
  }

  function leaveRoom() {
    stopPolling();
    ui.view = null;
    ui.booting = false;
    ui.bootError = '';
    ui.connection = navigator.onLine ? 'online' : 'offline';
    ui.lobbyMode = 'create';
    ui.roomInput = '';
    ui.formError = '';
    ui.resumeNote = '';
    ui.mobileTab = 'board';
    ui.rulesOpen = false;
    ui.concedeOpen = false;
    resetAction();
    setRoomUrl('');
    render();
  }

  function selectCard(cardId) {
    if (!ui.view || ui.view.state.activeSide !== ui.view.selfSide || ui.view.status !== 'active') return;
    const card = ui.view.hand.find((item) => item.id === cardId);
    if (!card) return;
    resetAction();
    ui.selectedCardId = card.id;
    ui.mode = card.effect.kind === 'score' ? 'event' : null;
    ui.mobileTab = 'board';
    render();
  }

  function selectMode(mode) {
    const card = selectedCard();
    if (!card || !['event', 'influence', 'coup', 'space'].includes(mode)) return;
    const requirements = actionRequirements(card);
    if (card.effect.kind === 'score' && mode !== 'event') return;
    if (mode === 'space' && !requirements.spaceAllowed) return;
    ui.mode = mode;
    ui.placements = {};
    ui.coupTarget = '';
    ui.eventTarget = '';
    ui.actionError = '';
    ui.pendingAction = null;
    render();
  }

  function selectCountry(countryId) {
    const card = selectedCard();
    if (!card || !COUNTRY_BY_ID[countryId]) return;
    if (ui.mode === 'coup') {
      if (coupTargetOptions(ui.view.state, ui.view.selfSide).some((country) => country.id === countryId)) ui.coupTarget = countryId;
      render();
      return;
    }
    if (ui.mode !== 'influence' || !influenceAccess(ui.view.state, ui.view.selfSide).has(countryId)) return;
    const candidate = { ...ui.placements, [countryId]: (ui.placements[countryId] || 0) + 1 };
    if (placementCost(ui.view.state, ui.view.selfSide, candidate) <= card.ops) {
      ui.placements = candidate;
      ui.actionError = '';
      ui.pendingAction = null;
      render();
    } else {
      flash('这张牌的行动值不足');
    }
  }

  function removePlacement(countryId) {
    const next = { ...ui.placements };
    if ((next[countryId] || 0) <= 1) delete next[countryId];
    else next[countryId] -= 1;
    ui.placements = next;
    ui.actionError = '';
    ui.pendingAction = null;
    render();
  }

  function buildPlayAction() {
    const card = selectedCard();
    if (!card || !ui.mode) return null;
    const requirements = actionRequirements(card);
    if (!requirements.canConfirm) return null;
    return {
      kind: 'play_card',
      clientActionId: crypto.randomUUID(),
      baseVersion: ui.view.version,
      phaseNonce: ui.view.state.phaseNonce,
      cardId: card.id,
      mode: ui.mode,
      ...(ui.mode === 'influence' ? { placements: Object.entries(ui.placements).map(([countryId, amount]) => ({ countryId, amount })) } : {}),
      ...(ui.mode === 'coup' ? { countryId: ui.coupTarget } : {}),
      ...(ui.eventTarget ? { eventTarget: ui.eventTarget } : {}),
    };
  }

  async function sendAction(action) {
    if (!ui.view || ui.actionBusy || !action) return;
    const code = ui.view.code;
    const token = sessionFor(code);
    if (!token) {
      ui.actionError = '找不到这个房间的设备凭证。';
      render();
      return;
    }
    ui.actionBusy = true;
    ui.actionError = '';
    ui.pendingAction = action;
    updateConnection('syncing');
    render();
    try {
      const next = await apiRequest(`/api/games/${encodeURIComponent(code)}`, { method: 'POST', token, body: action });
      ui.pendingAction = null;
      ui.actionBusy = false;
      resetAction();
      acceptView(next);
      render();
      beginPolling();
    } catch (error) {
      ui.actionBusy = false;
      ui.actionError = error instanceof Error ? error.message : '行动提交失败。';
      updateConnection(error instanceof ApiError && error.status > 0 ? 'online' : 'offline');
      render();
    }
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.className = 'sr-only';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      textarea.remove();
      return copied;
    }
  }

  async function copyInvite() {
    if (!ui.view) return;
    const copied = await copyText(currentRoomUrl(ui.view.code));
    flash(copied ? '邀请链接已复制' : `请把房间码 ${ui.view.code} 发给朋友`);
  }

  async function shareInvite() {
    if (!ui.view) return;
    const url = currentRoomUrl(ui.view.code);
    if (navigator.share) {
      try {
        await navigator.share({ title: '加入冷战对峙', text: `加入我的战情室，房间码 ${ui.view.code}`, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }
    await copyInvite();
  }

  app.addEventListener('submit', (event) => {
    if (!(event.target instanceof HTMLFormElement) || !event.target.matches('[data-lobby-form]')) return;
    event.preventDefault();
    void enterRoom();
  });

  app.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.dataset.field === 'name') ui.name = target.value;
    if (target.dataset.field === 'room-code') {
      ui.roomInput = normalizeCode(target.value);
      target.value = ui.roomInput;
    }
  });

  app.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    if (target.dataset.field === 'coup-target') {
      ui.coupTarget = target.value;
      ui.pendingAction = null;
      ui.actionError = '';
      render();
    }
    if (target.dataset.field === 'event-target') {
      ui.eventTarget = target.value;
      ui.pendingAction = null;
      ui.actionError = '';
      render();
    }
  });

  app.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('[data-action]') : null;
    if (!target || !app.contains(target)) return;
    const action = target.dataset.action;
    if (action === 'lobby-create') {
      ui.lobbyMode = 'create';
      ui.formError = '';
      ui.resumeNote = '';
      render();
      focusSoon('#commander-name');
    } else if (action === 'lobby-join') {
      ui.lobbyMode = 'join';
      ui.formError = '';
      render();
      focusSoon(ui.name ? '#room-code' : '#commander-name');
    } else if (action === 'open-rules') {
      ui.rulesOpen = true;
      render();
    } else if (action === 'close-rules') {
      if (target === event.target || target.matches('button')) {
        ui.rulesOpen = false;
        render();
        focusSoon('[data-action="open-rules"]');
      }
    } else if (action === 'retry-restore') {
      const code = normalizeCode(new URLSearchParams(window.location.search).get('room') || ui.roomInput);
      if (ROOM_PATTERN.test(code)) void restoreRoom(code, true);
    } else if (action === 'leave-room') {
      leaveRoom();
    } else if (action === 'copy-code') {
      if (ui.view) void copyText(ui.view.code).then((copied) => flash(copied ? '房间码已复制' : `房间码：${ui.view.code}`));
    } else if (action === 'copy-invite') {
      void copyInvite();
    } else if (action === 'share-invite') {
      void shareInvite();
    } else if (action === 'mobile-tab') {
      if (['board', 'hand', 'log'].includes(target.dataset.tab)) {
        ui.mobileTab = target.dataset.tab;
        render();
      }
    } else if (action === 'select-card') {
      selectCard(target.dataset.card || '');
    } else if (action === 'select-mode') {
      selectMode(target.dataset.mode || '');
    } else if (action === 'select-country') {
      selectCountry(target.dataset.country || '');
    } else if (action === 'remove-placement') {
      removePlacement(target.dataset.country || '');
    } else if (action === 'cancel-action') {
      resetAction();
      render();
    } else if (action === 'confirm-action') {
      void sendAction(ui.pendingAction || buildPlayAction());
    } else if (action === 'retry-action') {
      void sendAction(ui.pendingAction);
    } else if (action === 'dismiss-action-error') {
      ui.actionError = '';
      render();
    } else if (action === 'open-concede') {
      ui.concedeOpen = true;
      render();
    } else if (action === 'cancel-concede') {
      if (target === event.target || target.matches('button')) {
        ui.concedeOpen = false;
        render();
      }
    } else if (action === 'confirm-concede') {
      if (!ui.view) return;
      ui.concedeOpen = false;
      const concedeAction = {
        kind: 'concede',
        clientActionId: crypto.randomUUID(),
        baseVersion: ui.view.version,
        phaseNonce: ui.view.state.phaseNonce,
      };
      resetAction();
      void sendAction(concedeAction);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (ui.rulesOpen) {
      ui.rulesOpen = false;
      render();
    } else if (ui.concedeOpen) {
      ui.concedeOpen = false;
      render();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && ui.view && ui.view.status !== 'finished') {
      updateConnection('syncing');
      beginPolling(true);
    }
  });

  window.addEventListener('online', () => {
    updateConnection('syncing');
    if (ui.view) beginPolling(true);
  });

  window.addEventListener('offline', () => updateConnection('offline'));

  async function initialize() {
    const room = normalizeCode(new URLSearchParams(window.location.search).get('room') || '');
    ui.connection = navigator.onLine ? 'syncing' : 'offline';
    if (ROOM_PATTERN.test(room)) {
      ui.roomInput = room;
      ui.lobbyMode = 'join';
      await restoreRoom(room);
      return;
    }
    ui.booting = false;
    ui.connection = navigator.onLine ? 'online' : 'offline';
    render();
  }

  void initialize();
})();

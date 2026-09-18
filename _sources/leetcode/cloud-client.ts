export const CLOUD_ORIGIN = 'https://interview-desk-daily.tjcxs136720.chatgpt.site';
const CHANGE_EVENT = 'interview-cloud-change';
let popup: Window | null = null;
let channel = '';
let ready = false;
let message = '进度保存在当前浏览器';
let monitor: ReturnType<typeof setInterval> | undefined;
const pending = new Map<string, { resolve: (response: Response) => void; reject: (error: Error) => void; clean: () => void }>();

function changed(text: string) {
  message = text;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function disconnect(text: string) {
  ready = false;
  for (const task of pending.values()) {
    task.clean();
    task.reject(new Error('Cloud connection closed'));
  }
  pending.clear();
  changed(text);
  window.dispatchEvent(new Event('focus'));
}

export function cloudState() { return { ready, message }; }
export function subscribeCloud(listener: () => void) {
  window.addEventListener(CHANGE_EVENT, listener);
  return () => window.removeEventListener(CHANGE_EVENT, listener);
}

export function connectCloud() {
  disconnect('请在新窗口登录并允许同步');
  channel = crypto.randomUUID();
  // Keep the opener for this explicitly authorized, origin-checked bridge.
  popup = window.open(`${CLOUD_ORIGIN}/github-sync#${channel}`, 'interview-desk-cloud', 'popup,width=540,height=680');
  if (!popup) { changed('窗口被拦截，请允许弹出窗口后重试'); return; }
  if (monitor) clearInterval(monitor);
  monitor = setInterval(() => {
    if (popup?.closed) {
      clearInterval(monitor);
      popup = null;
      disconnect('同步窗口已关闭，进度仍保存在本机');
    }
  }, 1000);
}

window.addEventListener('message', (event: MessageEvent) => {
  if (event.origin !== CLOUD_ORIGIN || event.source !== popup) return;
  const data = event.data;
  if (!data || data.channel !== channel) return;
  if (data.type === 'interview-sync:ready') {
    ready = true;
    changed('云端已连接，请保留同步窗口');
    window.dispatchEvent(new Event('focus'));
  } else if (data.type === 'interview-sync:response') {
    const task = pending.get(data.id);
    if (!task) return;
    pending.delete(data.id);
    task.clean();
    if (data.error) task.reject(new Error('Cloud request failed'));
    else task.resolve(new Response(JSON.stringify(data.body), { status: data.status, headers: { 'content-type': 'application/json' } }));
  }
});

export async function progressFetch(_url: string, init: RequestInit = {}): Promise<Response> {
  if (!ready || !popup || popup.closed) return new Response('{}', { status: 401 });
  const target = popup;
  const id = crypto.randomUUID();
  if (init.signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  return new Promise((resolve, reject) => {
    const abort = () => {
      pending.get(id)?.clean();
      pending.delete(id);
      reject(new DOMException('Aborted', 'AbortError'));
    };
    const timer = setTimeout(() => {
      pending.get(id)?.clean();
      pending.delete(id);
      changed('云端暂未响应，本机进度已保留');
      reject(new Error('Cloud request timed out'));
    }, 15000);
    const clean = () => { clearTimeout(timer); init.signal?.removeEventListener('abort', abort); };
    pending.set(id, { resolve, reject, clean });
    init.signal?.addEventListener('abort', abort, { once: true });
    target.postMessage({ type: 'interview-sync:request', channel, id, method: init.method || 'GET', body: typeof init.body === 'string' ? init.body : undefined }, CLOUD_ORIGIN);
  });
}

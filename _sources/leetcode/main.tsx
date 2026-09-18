import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import { CLOUD_ORIGIN, cloudState, connectCloud, subscribeCloud } from './cloud-client';
import './app/globals.css';
import './pages.css';

function App() {
  const [cloud, setCloud] = useState(cloudState);
  useEffect(() => subscribeCloud(() => setCloud(cloudState())), []);
  return <>
    <nav className="pages-bar" aria-label="站点与同步">
      <a href="/">← 首页</a>
      <span className="pages-sync-status" role="status">{cloud.message}</span>
      <button type="button" onClick={connectCloud}>{cloud.ready ? '重新连接' : '连接云同步'}</button>
      <a href={CLOUD_ORIGIN} target="_blank" rel="noopener noreferrer">云端版</a>
    </nav>
    <Home />
  </>;
}

createRoot(document.getElementById('root')!).render(<App />);

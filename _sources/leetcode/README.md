# Interview Desk · GitHub Pages

访问：https://doubleclass.github.io/leetcode/

基于原 Interview Desk 的题库、卡片 UI 和间隔复习逻辑，保留 Hot 100、大模型手撕、每天 20 张新卡、收藏、搜索及本机进度。

## 云同步

GitHub Pages 不运行服务端。点击页面顶部“连接云同步”，在打开的原站窗口用原账号登录，然后点击“允许同步”。请保留此窗口；手机与电脑分别连接同一账号即可合并进度。连接失败时仍保存在当前浏览器，不会清空本地数据。

原云端版：https://interview-desk-daily.tjcxs136720.chatgpt.site

原站 `/github-sync` 桥接页只接受 `https://doubleclass.github.io` 的请求，同时验证窗口来源和随机通道。登录凭据不会发送给 GitHub 页面；原站的访问权限不变。只有复习数据在获准后进行通信。

## 构建

需要 Node.js 22.12+ 或 24。

```sh
npm install
npm run build
```

输出到仓库根目录 `leetcode/`。提交源码和构建结果至 GitHub Pages 的 `games` 分支即可发布。不要提交 `node_modules` 或任何个人进度、登录凭据。

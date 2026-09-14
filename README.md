# DOUBLECLASS 独立游戏馆

`doubleclass.github.io` 的纯静态中文独立游戏门户。当前馆藏为双人远程策略游戏《冷战对峙》，门户结构可在未来直接扩展更多游戏卡片与详情页。

## 页面结构

- `/`：游戏馆首页与当前馆藏主展卡
- `/games/cold-war-standoff/`：《冷战对峙》可索引详情页
- `/games/cold-war-standoff/play/`：实际游玩入口，由游戏本体维护
- `/404.html`：GitHub Pages 自定义未找到页面
- `/assets/site.css`：门户与详情页共用样式
- `/assets/site.js`：移动导航及旧邀请链接兼容逻辑

## 本地查看

请通过本地 HTTP 服务查看，避免直接打开文件时根路径资源无法加载：

```sh
python3 -m http.server 8000
```

随后访问 `http://localhost:8000/`。

## 邀请链接兼容

根目录收到旧式 `?room=XXXX-XXXX` 链接时，会保留完整查询参数和片段，并重定向至：

```text
/games/cold-war-standoff/play/?room=XXXX-XXXX
```

## 实现约束

- 纯 HTML、CSS 与原生 JavaScript，无第三方运行时依赖
- 页面使用严格的 Content Security Policy meta，不允许内联脚本或样式
- 详情页提供独立标题、描述、canonical、Open Graph 与 X 卡片信息
- 移动导航支持键盘关闭、清晰的焦点样式与无脚本回退
- 支持减少动态效果和增强对比度的系统偏好

`.nojekyll` 用于让 GitHub Pages 原样提供静态目录。

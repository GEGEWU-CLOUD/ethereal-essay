# ❄️ 冰雪随笔 · Ethereal Note

> 江畔何人初见雪、江雪何年初映人

一个优雅的命令片段管理器，基于纯静态前端技术构建，支持分类管理、语法高亮、多格式导入导出、GitHub Gist 云端同步。

---

## ✨ 功能特性

- **命令卡片管理** — 增删改查命令片段，支持 Bash / Python / Docker / YAML / SQL 等 15+ 语言语法高亮
- **分类 & 图标** — 侧边栏分类筛选，支持自定义分类名称和 Bootstrap 图标
- **全屏浏览** — 右键卡片进入全屏模式，展开/收起代码块，一键复制
- **多格式导出** — 支持导出为 JSON / Markdown / CSV / 纯文本
- **JSON 导入** — 批量导入命令数据
- **☁️ GitHub Gist 同步** — 配置 Token 后可将数据上传/拉取到 Gist，实现跨设备同步
- **🌓 暗色模式** — 一键切换，暗色模式下自动展示星空星云特效
- **✨ 视觉特效** — 雪花飘落、樱花花瓣、气泡上升，可独立开关；暗色模式下有星空流星特效
- **🐱 Live2D 看板猫** — 右下角猫咪挂件
- **🎨 个性化设置** — 自定义品牌名称、Logo、标签页图标、背景图片及内容透明度
- **📱 响应式设计** — 适配桌面端和移动端，移动端自动禁用特效以保证流畅
- **点击空白处出诗句** — 点击页面空白区域飘出 "江畔何人初见雪、江雪何年初映人"

---

## 🚀 快速开始

### 本地运行

直接用浏览器打开 `ethereal-notev1.2.html` 即可，无需任何构建工具或服务器。

### Vercel 部署

项目已包含 `vercel.json` 配置文件，一键部署：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

> 也可以直接在 [vercel.com](https://vercel.com) 导入 Git 仓库，Framework 选择 **Other**（无需构建步骤）。

---

## 📁 项目结构

```
├── ethereal-notev1.2.html   # 主入口文件（包含所有 HTML + 内联 CSS + 核心 JS）
├── css/
│   └── universe.css         # 暗色模式星空特效样式
├── js/
│   ├── sakura.js            # 樱花/花瓣飘落特效
│   └── snow.min.js          # 雪花飘落特效
├── vercel.json              # Vercel 部署配置
└── README.md
```

---

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 数据存储 | IndexedDB（浏览器本地数据库） |
| 云端同步 | GitHub Gist API |
| 语法高亮 | highlight.js |
| 图标 | Bootstrap Icons |
| 特效 | Canvas 动画 + jQuery circlemagic |
| 看板猫 | Live2D Widget |
| 部署 | Vercel / 任意静态托管 |

---

## ☁️ GitHub Gist 同步配置

1. 打开 [GitHub Token 设置页](https://github.com/settings/tokens)
2. 生成一个具有 `gist` 权限的 Personal Access Token
3. 在侧边栏点击 **☁️ Gist** 展开配置面板
4. 填入 Token，点击「保存配置」
5. 点击「上传到 Gist」即可将数据备份到云端
6. 在其他设备填入相同的 Token 和 Gist ID，点击「从 Gist 拉取」即可同步

---

## 📝 默认数据

首次打开会自动加载 5 条示例命令：

- MinIO Docker Compose 配置
- `git log` 图形化查看提交历史
- `docker ps` 格式化容器列表
- GitHub API curl 请求
- `kubectl get pods` 查看 Pod 详情

---

## 🎨 自定义

- **品牌名称** — 点击标题旁的 ✎ 按钮，或双击标题文字
- **Logo** — 点击 🖼 按钮，支持 emoji / 图片 URL / 文字
- **标签页图标** — 点击 🔖 按钮，支持 emoji / 图片 URL / 文字
- **背景图片** — 点击 🖼 按钮（导航栏），可设置图片 URL 和内容透明度
- **分类图标** — 编辑分类时可从 36 个 Bootstrap 图标中选择

---

## 📄 License

MIT

# 🏯 凌烟阁·智能笔记

> 江畔何人初见雪、江雪何年初映人

一款本地化的「命令 / 笔记 / 代码片段」管理器，内置 AI 智能助手（凌烟阁·小猫AI），支持分类管理、语法高亮、Markdown 可视化编辑、知识库检索、GitHub Gist 云端同步与多格式导入导出。纯静态前端实现，数据保存在浏览器本地，无需登录、无需后端。

---

## ✨ 功能特性

- **命令 / 笔记 / 代码片段管理** — 增删改查，支持 Bash / Python / Docker / YAML / SQL 等 15+ 语言语法高亮
- **三级分类目录** — `分类 → 一级子目录 → 二级子目录`，支持自定义名称、排序、折叠与图标
- **Markdown 可视化编辑** — 描述字段支持工具栏 + 实时预览 + 全屏分屏编辑，支持标题、加粗、列表、代码块、表格、引用等排版
- **🤖 AI 智能助手（凌烟阁·小猫AI）** — 基于 DeepSeek，流式输出，多会话历史管理，回答一键复制
- **📚 知识库检索（RAG）** — AI 回答前自动检索本地 IndexedDB 与 GitHub Gist 中的随笔/笔记/命令并注入上下文
- **全屏浏览** — 进入全屏阅读长命令，展开/收起代码块，一键复制
- **多格式导入导出** — JSON / Markdown / CSV / 纯文本
- **☁️ GitHub Gist 同步** — 命令同步 Gist 与随笔检索 Gist 可分别配置，实现跨设备备份与 AI 远程检索
- **🌓 暗色模式** — 一键切换，暗色模式自动展示星空星云特效
- **✨ 视觉特效** — 雪花飘落、樱花花瓣、气泡上升，可独立开关；暗色模式带星空流星
- **🐱 Live2D 看板猫** — 右下角猫咪挂件，可拖拽互动
- **🎨 个性化设置** — 自定义品牌名称、Logo、标签页图标、背景图片与内容透明度
- **📱 响应式设计** — 适配桌面端与移动端，移动端自动禁用特效保证流畅
- **点击空白处出诗句** — 点击页面空白区域飘出「江畔何人初见雪、江雪何年初映人」

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

> 也可直接在 [vercel.com](https://vercel.com) 导入 Git 仓库，Framework 选择 **Other**（无需构建步骤）。

---

## 🤖 AI 智能助手（凌烟阁·小猫AI）使用

1. 打开页面右下角（或导航栏）的 AI 助手入口，展开「凌烟阁·小猫AI」面板。
2. 在底部输入框输入问题，回车发送。
3. AI 支持流式回答，回答块右下角有「📋 复制」按钮可一键复制整段回答。

### 配置 DeepSeek Token

- 在 AI 面板底部「DeepSeek Token」输入框填入你的密钥，点击「保存Token」。
- 未配置时会使用内置默认 Token（仅本地个人使用场景）。

### 知识库检索（RAG）

回答前 AI 会自动从你的知识库中检索相关内容作为上下文，相关开关位于 AI 面板底部：

| 开关 / 参数 | 作用 |
|------|------|
| **知识库** | 总开关，开启后 AI 回答前检索本地 IndexedDB 与 Gist 内容 |
| **随笔Gist** | 配置独立 Gist（Token + Gist ID）作为随笔检索源，与命令同步 Gist 分离 |
| **含随笔库** | 将随笔 Gist 与本地库、命令 Gist 一起检索 |
| **仅随笔库** | 只检索随笔 Gist，忽略本地库与命令 Gist |
| **条数** | 每次注入给 AI 的知识资料条数（默认 60，可设 1–200） |

> 检索采用本地关键字（BM25-lite）匹配，无需外接向量数据库或 embedding。

---

## 📝 笔记管理

新增 / 编辑笔记时涉及以下字段：

| 字段 | 说明 |
|------|------|
| 标题（名称） | 笔记或命令的名称 |
| 分类 | 所属分类，支持三级目录 |
| 卡片标题 / 脚本名称 | 卡片展示标题与脚本名 |
| 描述 | **支持 Markdown**，带可视化编辑器（工具栏 + 预览 + 全屏分屏） |
| 示例 | 示例命令或用法 |
| 代码语言 | 语法高亮语言 |
| 代码块 | 可添加多个命名代码块 |

### 描述字段的 Markdown 编辑器

- 编辑时点击工具栏按钮插入格式（加粗、斜体、标题、代码、代码块、列表、引用、链接、表格、分割线）。
- 点击「预览 / 阅览」实时查看渲染效果（含表格、代码高亮）。
- 点击全屏按钮进入全屏分屏编辑模式。

---

## ☁️ GitHub Gist 同步配置

> 项目区分两套 Gist 配置：**命令同步 Gist**（数据备份/还原）与 **随笔 Gist**（仅供 AI 检索）。

1. 打开 [GitHub Token 设置页](https://github.com/settings/tokens)
2. 生成一个具有 `gist` 权限的 Personal Access Token
3. 在侧边栏点击 **Gist** 展开配置面板，填入 Token（与 Gist ID），点击「保存配置」
4. 点击「上传到 Gist」将数据备份到云端
5. 在其他设备填入相同 Token 与 Gist ID，点击「从 Gist 拉取」即可同步
6. 随笔 Gist 在 AI 面板底部单独配置，配置后 AI 会自动检索其中的内容

---

## 📥 导入 / 导出

- **导出**：JSON（结构化数据）/ Markdown / CSV / 纯文本
- **导入**：JSON 文件批量导入

---

## 📁 项目结构

```
├── ethereal-notev1.2.html   # 主入口（含所有 HTML + 内联 CSS + 核心 JS）
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
| 云端同步 / 检索 | GitHub Gist API |
| AI 对话 | DeepSeek（OpenAI 兼容接口，流式 SSE） |
| 知识库检索 | 客户端关键字检索（BM25-lite，无 embedding） |
| 语法高亮 | highlight.js |
| 图标 | Bootstrap Icons |
| 特效 | Canvas 动画 + jQuery circlemagic |
| 看板猫 | Live2D Widget |
| 部署 | Vercel / 任意静态托管 |

---

## 🗄 数据存储说明

- **IndexedDB**：数据库 `CommandMasterDB`，对象仓库 `commands`，存储所有笔记/命令数据。
- **localStorage**：用于保存配置与会话，常用键如下：

| 键 | 用途 |
|------|------|
| `deepseek_token` | DeepSeek API Token（XOR + 十六进制混淆存储，非明文） |
| `ai_sessions` | AI 会话历史 |
| `ai_rag_enabled` / `ai_essay_include` / `ai_essay_only` / `ai_kb_topk` | 知识库检索开关与条数 |
| `gist_token` / `gist_id` | 命令同步 Gist 配置 |
| `essay_gist_token` / `essay_gist_id` | 随笔检索 Gist 配置 |
| `brand_text` / `brand_subtitle` | 品牌名称 / 副标题 |
| `theme` / `view_mode` | 主题 / 视图模式 |
| `bg_image_url` / `hero_bg_url` / `bg_opacity` | 背景图与透明度 |

---

## 🎨 自定义

- **品牌名称** — 点击侧边栏品牌名旁 ⚙ 按钮，或双击品牌名
- **Logo / 标签页图标** — 支持 Emoji / 图片 URL / 文字
- **背景图片** — 导航栏图片图标，可设置首屏背景、内容背景与内容透明度
- **分类图标** — 编辑分类时可从 Bootstrap 图标中选择
- **副标题** — 双击首屏副标题文字修改

---

## 🔒 安全提示

> **请勿将本页面公开部署或分享给他人。** 应用为纯前端实现，以下信息仍会暴露在浏览器端：

- DeepSeek Token 已做混淆存储（XOR + 十六进制），源码与 `localStorage` 中不再出现明文；但解密密钥与算法同样位于前端，仍可被反解；
- Gist Token（`gist_token`、`essay_gist_token`）仍以明文存储在 `localStorage`。

本项目仅适合**本地个人使用**；如需公开部署，请移除前端密钥，改为后端代理或由用户自行输入并妥善保管。

---

## 📄 License

MIT

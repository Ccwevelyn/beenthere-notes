# BeenThere Notes

一个按「年级 → 学期 → 课程 → Notes / Tips」组织的**中英双语开源学习笔记站**。

学弟学妹可以按自己的年级逐级找到对应课程的复习笔记与考试 Tips；任何人都能通过内置的
内容编辑器投稿，文章提交到仓库后自动部署上线。

## 功能特性

- **双语站点**：中文 `/zh/` 与 English `/en/`，页面可一键切换语言。
- **分层导航**：年级 → 学期 → 课程 → 文章，逐级筛选，快速定位资料。
- **两类内容**：`note`（复习笔记）与 `tip`（考试提醒），支持 PDF / 图片等附件。
- **在线投稿**：基于 Decap CMS 的 `/admin/` 编辑器，用 GitHub 登录即可写文章。
- **浏览量统计**：独立的 Node API + PostgreSQL 记录每篇文章浏览量，每个浏览器会话只计一次。
- **静态部署**：Astro 输出纯静态站点，配合 `render.yaml` 一键部署到 Render。

## 技术栈

| 部分 | 技术 |
| --- | --- |
| 站点框架 | [Astro 5](https://astro.build/)（静态输出 + i18n） |
| 内容管理 | Markdown 内容集合 + [Decap CMS](https://decapcms.org/) |
| 浏览量 API | 原生 Node `http` 服务（`services/views-api/server.mjs`） |
| 数据库 | PostgreSQL（通过 `pg` 连接） |
| 部署 | [Render](https://render.com/)（静态站点 + Web Service + 数据库） |

## 目录结构

```
.
├── astro.config.mjs          # Astro 配置（站点地址、i18n）
├── render.yaml               # Render 部署蓝图（站点 / API / 数据库）
├── .env.example              # 环境变量示例
├── public/
│   ├── admin/config.yml      # Decap CMS 配置（后台字段、课程下拉框）
│   └── favicon.svg
├── services/
│   └── views-api/server.mjs  # 浏览量与 GitHub OAuth 服务
└── src/
    ├── content.config.ts     # notes 内容集合的 schema
    ├── content/notes/        # 文章内容（zh / en 子目录）
    ├── data/site.ts          # 年级 / 学期 / 课程 / 文案配置
    ├── layouts/              # 页面布局
    ├── pages/                # 路由（[lang]/[grade]/[semester]/[course]）
    └── styles/global.css     # 全局样式
```

> 说明：`node_modules/`、`dist/`、`.astro/` 均为依赖安装或构建生成的产物，已在 `.gitignore`
> 中忽略，不纳入版本库。

## 本地开发

```bash
npm install
npm run dev
```

访问：

- 中文站：`http://localhost:4321/zh/`
- English：`http://localhost:4321/en/`
- 管理总览：`http://localhost:4321/zh/console/`
- 内容编辑器：`http://localhost:4321/admin/`

本地使用 Decap CMS 编辑时，另开一个终端运行代理：

```bash
npx decap-server
```

### 常用脚本

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 类型检查并构建静态站点到 `dist/` |
| `npm run preview` | 预览构建产物 |
| `npm run check` | 运行 `astro check` 类型检查 |
| `npm run start:api` | 启动浏览量 / OAuth API 服务 |

## 添加文章

部署后进入 `/admin/`，用 GitHub 登录并创建文章。文章会提交到
`src/content/notes/<语言>/`，随后触发 Render 自动部署。

每篇文章的 frontmatter 字段由 `src/content.config.ts` 定义：`title`、`description`、
`type`（note / tip）、`lang`、`grade`、`semester`、`course`、`date`、`published`、`attachments`。

**新增课程时需要同时更新两处**：

- 网站导航与课程列表：`src/data/site.ts`
- 后台下拉选项：`public/admin/config.yml`

## 环境变量

复制 `.env.example` 为 `.env` 后按需填写：

| 变量 | 用途 |
| --- | --- |
| `SITE_URL` | 站点公开地址（用于构建生成绝对链接） |
| `PUBLIC_VIEWS_API_URL` | 前端调用的浏览量 API 地址 |
| `DATABASE_URL` | PostgreSQL 连接串（API 服务使用） |
| `ALLOWED_ORIGINS` | 允许跨域访问 API 的来源，逗号分隔 |
| `API_BASE_URL` | API 服务自身地址（用于 OAuth 回调） |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub OAuth App 凭据（仅作为 Render 密钥配置） |

## 浏览量 API

`services/views-api/server.mjs` 提供以下接口：

- `GET /health` — 健康检查
- `GET /api/stats` — 返回全部文章浏览量
- `GET /api/views/:slug` — 读取指定文章浏览量
- `POST /api/views/:slug` — 浏览量自增
- `GET /auth`、`GET /auth/callback` — Decap CMS 的 GitHub OAuth 登录流程

文章页每个浏览器会话只自增一次，避免刷新重复计数；控制台从 `GET /api/stats`
读取并按文章展示。本地未配置 API 时使用演示数字。

## Render 部署

仓库中的 `render.yaml` 定义了三个资源：

1. Astro 静态网站
2. 浏览量与 GitHub OAuth Web Service
3. PostgreSQL 浏览量数据库

部署前需要完成：

1. 将 `public/admin/config.yml` 中的 `repo` 改为你的真实 GitHub 仓库。
2. 将其中的 `base_url` 改成你的 Render API 服务地址。
3. 在 GitHub 创建 OAuth App，回调地址为
   `https://你的-api.onrender.com/auth/callback`。
4. 在 Render API 服务中设置 `GITHUB_CLIENT_ID` 与 `GITHUB_CLIENT_SECRET`。
5. 核对 `SITE_URL`、`PUBLIC_VIEWS_API_URL`、`ALLOWED_ORIGINS`、`API_BASE_URL`
   是否与实际 Render 域名一致。

> 数据库和 Web Service 是否有免费套餐取决于 Render 当时的定价，创建资源前请在 Render
> 控制台确认费用。

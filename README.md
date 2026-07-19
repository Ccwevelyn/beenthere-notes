# BeenThere Notes

一个按「年级 → 学期 → 课程 → Notes / Tips」组织的**中英双语开源学习笔记站**。

学弟学妹可以按自己的年级逐级找到对应课程的复习笔记与考试 Tips；任何人都能通过内置的
内容编辑器投稿，文章提交到仓库后自动部署上线。

## 功能特性

- **双语站点**：中文 `/zh/` 与 English `/en/`，页面可一键切换语言。
- **分层导航**：年级 → 学期 → 课程 → 文章，逐级筛选，快速定位资料。
- **两类内容**：`note`（复习笔记）与 `tip`（考试提醒），支持 PDF / 图片等附件。
- **在线投稿**：基于 Decap CMS 的 `/admin/` 编辑器，用 GitHub 登录即可写文章。
- **浏览量统计**（可选）：可另接 Node API + PostgreSQL；未配置时站点与后台仍可正常使用。
- **静态部署**：推荐免费部署到 [Netlify](https://www.netlify.com/)（`netlify.toml`）。

## 技术栈

| 部分 | 技术 |
| --- | --- |
| 站点框架 | [Astro 5](https://astro.build/)（静态输出 + i18n） |
| 内容管理 | Markdown 内容集合 + [Decap CMS](https://decapcms.org/)（GitHub 登录） |
| 浏览量 API（可选） | 原生 Node `http` 服务（`services/views-api/server.mjs`） |
| 部署 | [Netlify](https://www.netlify.com/)（网站 + 后台） |

## 目录结构

```
.
├── astro.config.mjs          # Astro 配置（站点地址、i18n）
├── netlify.toml              # Netlify 构建与发布配置
├── render.yaml               # 可选：以后部署浏览量 API 时用
├── .env.example              # 环境变量示例
├── public/
│   ├── admin/config.yml      # Decap CMS 配置（后台字段、课程下拉框）
│   └── favicon.svg
├── services/
│   └── views-api/server.mjs  # 可选浏览量 API
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

部署后进入 `/admin/`，用 **GitHub** 登录并创建文章。文章会提交到
`src/content/notes/<语言>/`，随后触发 Netlify 自动部署。

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
| `PUBLIC_VIEWS_API_URL` | 可选；浏览量 API 地址，留空则不统计真实点击量 |

## Netlify 部署（推荐，免费）

1. 打开 [Netlify](https://app.netlify.com/) → **Add new site** → **Import an existing project**。
2. 连接 GitHub 仓库 `Ccwevelyn/beenthere-notes`，构建配置会读取 `netlify.toml`。
3. 在 GitHub 创建 **OAuth App**（Settings → Developer settings → OAuth Apps → New）：
   - Homepage URL：`https://你的站点.netlify.app`
   - Authorization callback URL：`https://你的站点.netlify.app/auth/callback`
4. 在 Netlify **Environment variables** 中设置：
   - `SITE_URL` = `https://你的站点.netlify.app`
   - `GITHUB_CLIENT_ID` = OAuth App 的 Client ID
   - `GITHUB_CLIENT_SECRET` = OAuth App 的 Client Secret  
   然后 **Trigger deploy → Clear cache and deploy site**。
5. 打开 `https://你的站点.netlify.app/admin/`，点登录，用有该仓库写权限的 **GitHub 账号** 授权即可写 Markdown、上传附件、增删改文章。

> 不需要 Netlify Identity / 邮箱注册。浏览量可稍后接入；未配置 `PUBLIC_VIEWS_API_URL` 时站点仍可用。

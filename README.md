# BeenThere Notes

一个按「年级 → 学期 → 课程 → Notes / Tips」组织的中英双语开源笔记站。

## 本地预览

```bash
npm install
npm run dev
```

访问：

- 中文站：`http://localhost:4321/zh/`
- English：`http://localhost:4321/en/`
- 管理总览：`http://localhost:4321/zh/console/`
- 内容编辑器：`http://localhost:4321/admin/`

本地使用 Decap CMS 编辑时，另开终端运行：

```bash
npx decap-server
```

## 添加文章

部署后进入 `/admin/`，使用 GitHub 登录并创建文章。文章会提交到
`src/content/notes/<语言>/`，随后触发 Render 自动部署。

文章支持多种内容形式：

- 正文使用 Markdown 编辑，可以直接插入图片；
- 「附件」字段可以上传 PDF、手写笔记扫描件、截图等任意文件，
  上传的文件保存在 `public/uploads/`，并显示在文章底部
  （图片会直接展示，PDF 等文件显示为下载链接）。

课程选项目前维护在两处：

- 网站导航：`src/data/site.ts`
- 控制台下拉框：`public/admin/config.yml`

新增课程时需要同时更新这两个文件。

## Render 部署

仓库中的 `render.yaml` 包含：

1. Astro 静态网站
2. 浏览量与 GitHub OAuth Web Service
3. PostgreSQL 浏览量数据库

部署前必须完成：

1. 将 `public/admin/config.yml` 中的 `repo` 改为真实 GitHub 仓库。
2. 将配置中的 `base_url` 改成 Render API 服务地址。
3. 在 GitHub 创建 OAuth App，回调地址为：
   `https://你的-api.onrender.com/auth/callback`
4. 在 Render API 服务中设置 `GITHUB_CLIENT_ID` 和 `GITHUB_CLIENT_SECRET`。
5. 检查 `SITE_URL`、`PUBLIC_VIEWS_API_URL`、`ALLOWED_ORIGINS` 和
   `API_BASE_URL` 是否与实际 Render 域名一致。

数据库和 Web Service 是否有免费套餐取决于 Render 当时的定价；创建资源前请在
Render 控制台确认费用。

## 浏览量

文章页每个浏览器会话只自增一次，避免刷新时重复计数。控制台从
`GET /api/stats` 读取并按文章展示浏览量。本地未配置 API 时使用演示数字。

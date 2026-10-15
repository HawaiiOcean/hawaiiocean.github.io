# Wangyang Han · Personal website

韩汪洋的个人主页，基于简历整理研究、项目、实习与教育经历。中英双语，纯静态 HTML / CSS / JavaScript，无运行时依赖。

- Website: https://hawaiiocean.github.io
- Repository: https://github.com/HawaiiOcean/hawaiiocean.github.io

## 本地预览

```sh
python3 -m http.server 8080
```

打开 http://localhost:8080 。

## 内容维护

- `index.html`：简介、实习、教育、技能、联系方式；`data-zh` / `data-en` 是双语文本。
- `script.js`：项目详情与语言切换。
- `styles.css`：布局与响应式样式。
- `assets/Wangyang-Han-Resume.pdf`：下载版简历（公开发布）。

## GitHub Pages

仓库名必须为 `hawaiiocean.github.io`。在 Settings → Pages 选择 Deploy from a branch，分支 `main`、目录 `/ (root)`。推送后 GitHub 自动发布。`.nojekyll` 用于直接发布静态文件。

```sh
git add .
git commit -m "Update personal website"
git push origin main
```

## 内容依据

全部经历与指标来自用户提供的简历；256 Gbps 为每方向理论峰值，8% 为指定关键路径下的端到端运行时间改善。网站不推断额外的职位、论文或个人贡献。原始英文简历为内容依据。

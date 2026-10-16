# Wangyang Han · Personal website

韩汪洋的个人主页，基于简历整理研究、项目、实习与教育经历。中英双语，纯静态 HTML / CSS / JavaScript，无运行时依赖。采用暖白背景、鼠尾草绿点缀与侧栏式学术主页排版，不提供简历下载。

- Website: https://hawaiiocean.github.io
- Repository: https://github.com/HawaiiOcean/hawaiiocean.github.io

## 本地预览

```sh
python3 -m http.server 8080
```

打开 http://localhost:8080 。

## 内容维护

- `index.html`：简介、实习、教育、技能、联系方式；`data-zh` / `data-en` 是双语文本。
- `script.js`：`projects` 数组维护研究项目的标题、时间、指标、标签与详情；每个项目的 `zh` / `en` 分别是中英文内容。也包含语言切换逻辑。
- `styles.css`：背景、字体、颜色、间距、布局与手机适配。
- `assets/favicon.svg`：浏览器标签页图标；侧栏图标直接写在 `index.html` 中。

修改双语内容时，请同步更新 `data-zh` 和 `data-en`，并让标签中的默认文本与 `data-zh` 保持一致。修改完成后，在项目目录执行下方 Git 命令发布。

## GitHub Pages

仓库名必须为 `hawaiiocean.github.io`。在 Settings → Pages 选择 Deploy from a branch，分支 `main`、目录 `/ (root)`。推送后 GitHub 自动发布。`.nojekyll` 用于直接发布静态文件。

```sh
git add .
git commit -m "Update personal website"
git push origin main
```

## 内容依据

全部经历与指标来自用户提供的简历；256 Gbps 为每方向理论峰值，8% 为指定关键路径下的端到端运行时间改善。网站不推断额外的职位、论文或个人贡献。原始英文简历为内容依据。

# Nahuel García

**Software Developer** · Buenos Aires, Argentina

🌐 [www.nahuelgrc.dev](https://www.nahuelgrc.dev) · ✉️ [nahuelgrc@gmail.com](mailto:nahuelgrc@gmail.com) · 💻 [GitHub](https://github.com/Nahuelgrc) · 💼 [LinkedIn](https://www.linkedin.com/in/nahuelgrc/)

---

Full-stack developer with 10+ years of experience building and modernizing
web platforms end to end — from high-availability .NET backends and cloud-native
architectures (AWS/Azure) to responsive React + TypeScript frontends. Comfortable
owning features from concept to deployment and aligning directly with
international stakeholders.

## Experience

### Full-Stack Developer — DataArt
*Nov 2022 – Present*

Leading the technical evolution of a large-scale U.S. business-travel platform:
migration from Angular 1.5 to React 18 and scalable ASP.NET Core backend
features, with rigorous code review, testing and documentation.

### Full-Stack Developer — Parser Digital
*Nov 2020 – Nov 2022*

Delivered full-stack solutions for a UK healthcare provider — cloud scalability
on AWS (SQS, CloudSearch, CloudWatch), secure authentication, and a billing /
subscription system integrated with Chargify.

### Software Developer — SOUTHWORKS
*Aug 2018 – Nov 2020*

Built multi-cloud serverless architectures (AWS/Azure) and high-performance
streaming apps for international clients, using strict TDD (90%+ coverage) and
optimized CI/CD pipelines on Azure DevOps.

### Intermediate Software Developer — Hexacta
*May 2017 – Aug 2018*

Maintained and extended corporate web platforms for a French enterprise firm
using ASP.NET (C#), fixing critical production issues and shipping custom
features on legacy architectures.

### Jr. Software Developer — Accenture
*Mar 2010 – Mar 2016*

Started my career delivering enterprise web apps across industries with
.NET WebForms, C# and Angular, within structured Agile teams.

## Skills

- **Languages:** C#, TypeScript, JavaScript, SQL, HTML, CSS, Cobol
- **Backend:** .NET Core, ASP.NET, .NET Framework, Node.js
- **Frontend:** React, Angular
- **Data:** SQL Server, MySQL, NoSQL
- **Cloud & DevOps:** AWS, Azure, Docker, Azure DevOps, CI/CD
- **Testing:** NUnit, XUnit, Jest, TDD
- **Tools:** Git, GitHub Copilot

## Education

- **Bachelor of information technologies** — Universidad de Palermo (2021)
- **Senior technician in computer systems** — Universidad Tecnológica Nacional (UTN) (2015)

## Languages

- **Spanish** — Native
- **English** — Professional (C1)

---

## About this project

This repository is the source of my CV website
([www.nahuelgrc.dev](https://www.nahuelgrc.dev)) — a **React + TypeScript** app
that renders my CV as a web page and lets anyone download it as a **real,
selectable-text PDF** (via [`@react-pdf/renderer`](https://react-pdf.org)), not
an image. All content comes from a single source of truth: `src/data/data.json`.

### Run locally

```bash
npm install
npm run dev
```

### Build / type-check

```bash
npm run build      # tsc --noEmit && vite build
npm run typecheck
```

### Deploy

Automatic on every push to `master` via GitHub Actions
(`.github/workflows/deploy.yml`) → published to GitHub Pages at
[www.nahuelgrc.dev](https://www.nahuelgrc.dev).

### Project structure

```
src/
├── data/     data.json (source of truth) + transform + photo
├── web/      the CV as an HTML page (components + styles)
└── pdf/      the CV as a PDF document (@react-pdf/renderer)
```

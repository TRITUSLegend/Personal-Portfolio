# Aditya Raj Kar | Personal Portfolio

Personal portfolio of Aditya Raj Kar, a data analyst working in SQL, Python, Power BI and
machine learning. B.Tech CSE (Internet of Things) at VIT Vellore.

**Live site:** https://adityarajkar.netlify.app

## Sections

| Section | Contents |
| --- | --- |
| Hero | Analyst summary, resume link, headline stats |
| What I Do | Skills grouped as Analytics & BI, Data Science & ML, AI & LLM Workflows and Engineering Foundations |
| Projects | CommerceLens (e-commerce revenue and retention analytics), OpinionMap (market sentiment analysis), BUSIT, Smart Room Dashboard |
| Experience | Software Intern, Perennial Systems Pvt. Ltd. |
| Background | Education, certifications and leadership |
| Get in Touch | Email, GitHub, LinkedIn and LeetCode |

## Design

A single-page, terminal-style layout: black background, `#00FF41` accent, Space Mono and Inter,
square corners, `// SECTION_0N` labels, terminal-window cards with syntax-highlighted JS, a
scanline overlay and fade-up animations on scroll.

## Tech stack

- **React 19** (Create React App)
- **Framer Motion** for fade-up and staggered reveal animations
- **react-scroll** for smooth scrolling between sections
- **CSS Modules**, one stylesheet per component in `src/styles`
- **react-icons**
- Hosted on **Netlify** (`public/_redirects` handles single-page routing)

## Project structure

```
public/
  index.html       # title, meta description and Open Graph tags
  _redirects       # Netlify single-page redirect
src/
  App.jsx          # section order and scanline overlay
  components/      # Navbar, Hero, Skills, Projects, Experience, Background, ContactIcons, Footer
  styles/          # CSS Modules; Shared.module.css holds terminal-card styles for newer sections
```

Site content lives in data arrays at the top of each component (for example `projects` in
`Projects.jsx` and `categories` in `Skills.jsx`), so most updates are edits to those arrays.

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/TRITUSLegend/Personal-Portfolio.git
cd Personal-Portfolio
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build in build/
```

Netlify builds with `CI=true`, which turns ESLint warnings into build errors. Run
`CI=true npm run build` locally to catch them before deploying.

## Contact

- Email: [adityarajkar1105@gmail.com](mailto:adityarajkar1105@gmail.com)
- GitHub: [TRITUSLegend](https://github.com/TRITUSLegend)
- LinkedIn: [adityarajkar](https://www.linkedin.com/in/adityarajkar)
- LeetCode: [TRITUSLegend](https://leetcode.com/u/TRITUSLegend/)

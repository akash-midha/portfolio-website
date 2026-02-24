# My Portfolio Website

This is my personal portfolio—a single-page site I built with React and Vite. In this doc I’m explaining what I did: the choices I made, how I structured the project, and how everything fits together so I (or someone else) can change or extend it later.

---

## Table of Contents

1. [What I Built](#1-what-i-built)
2. [Tech Choices](#2-tech-choices)
3. [How I Structured the Project](#3-how-i-structured-the-project)
4. [The Data File: portfolio.js](#4-the-data-file-portfoliojs)
5. [How the App Runs](#5-how-the-app-runs)
6. [What Each Section Does](#6-what-each-section-does)
7. [How I Did Navigation & Scroll](#7-how-i-did-navigation--scroll)
8. [How I Styled It](#8-how-i-styled-it)
9. [Assets & Favicon](#9-assets--favicon)
10. [How to Change Things](#10-how-to-change-things)
11. [Running & Deploying](#11-running--deploying)

---

## 1. What I Built

I wanted one long page that scrolls through everything: a hero at the top, then about me, skills, education (with my research papers), projects, experience, and contact at the bottom. No separate pages—just one page with a fixed header so you can jump to any section. I also wanted all my personal info (name, bio, links, images, etc.) in one place so I never have to hunt through components to update something. So I built a single React app with no router; the “navigation” is really scrolling to sections by id (`#home`, `#about`, etc.), and the header highlights whichever section you’re in and lets you click to smooth-scroll there.

---

## 2. Tech Choices

I used **React 19** with **Vite 5** for the build. No Redux—I didn’t need global state; each component gets what it needs from the one data file or from props. I didn’t use React Router either, because the whole site is one page and the sections are just divs with ids. For styling I went with plain CSS and kept it simple: one global stylesheet plus one CSS file per component, with BEM-style class names so I don’t get class clashes. I use **ESLint** for linting. Runtime is Node 18+.

---

## 3. How I Structured the Project

I kept the repo flat and predictable. At the root I have `index.html` (entry point, favicon, and a generic title that the app overwrites), `package.json`, and `vite.config.js`. All static assets go in `public/`: I have `personalisedImages/` for my avatar, about photo, project screenshots, and education logos, and `personalisedLogo/` for the header logo and the favicon.

Inside `src/` I have:

- **main.jsx** — Where React mounts and where I import the global CSS.
- **App.jsx** — The shell: it holds the active-section state, the scroll listener, and the nav click handler, and it renders the Header and all the sections in order.
- **index.css** and **App.css** — Global and app-level styles.
- **data/portfolio.js** — The single file where I put all my content (see below).
- **components/** — One folder per section. Each folder has an `index.jsx` (the component) and a `ComponentName.css` (its styles). The components import from `../../data/portfolio` and don’t hardcode any of my personal info.

So the structure looks like:

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── personalisedImages/   (avatar, about photo, projects, education logos)
│   └── personalisedLogo/      (AmLogo.png, AmLogo-favicon.png)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css, App.css
│   ├── data/
│   │   └── portfolio.js       ← all content lives here
│   └── components/
│       ├── Header/
│       ├── Hero/
│       ├── About/
│       ├── Skills/
│       ├── Education/
│       ├── Work/
│       ├── Experience/
│       ├── Contact/
│       └── Research/           (optional standalone research section)
```

---

## 4. The Data File: portfolio.js

I put **everything** that’s specific to me in `src/data/portfolio.js`. That way I never have to open a component to change my bio or add a project—I just edit that one file.

Here’s what I export from it:

- **site** — My name, tagline, page title, email, phone, location, resume URL, and paths for avatar, about photo, and header logo. I also put the hero subline (“NSUT Delhi Graduate · Batch of 2023”), the rotating taglines (Software Developer, Frontend Developer, etc.), my bio paragraph, and the short contact intro text here.
- **navLinks** — Array of `{ id, label }` for the header and footer. The `id` matches the section’s `id` (e.g. `home`, `about`).
- **socialLinks** — LinkedIn, GitHub, Instagram: name, url, and icon key so the right SVG is rendered.
- **skillsByCategory** — Groups of skills (e.g. Languages, Frameworks) with a title and list of items.
- **education** — My degrees/schools: title, institution, duration, status, cgpa, and image path.
- **researchPapers** — My published papers: id, title, venue, optional publisher, and link.
- **projects** — Portfolio projects: id, title, description, image, link, and tags.
- **experience** — Job timeline: company, role, location, duration, and which side of the timeline (left/right). I keep the order most recent first.
- **achievements** — A list of achievement strings; I have it in the data in case I want to add an achievements section later.

By keeping all of this in one place, the components stay generic and reusable—they just read from these exports.

---

## 5. How the App Runs

When the page loads, `index.html` loads `main.jsx`, which mounts `<App />` and imports the global CSS. Inside App I do two things on mount: set `document.title` from `site.siteTitle` so the browser tab shows “Akash Midha | Portfolio” (or whatever I put there), and add a scroll listener. That listener looks at the current scroll position and figures out which section is in view (by comparing scroll position to each section’s `offsetTop` with a small offset). It updates `activeSection` state so the header can highlight the right nav link. When you click a nav link, I prevent the default, find the section by id, and call `scrollIntoView` with smooth behavior so it scrolls there nicely. So the flow is: scroll drives which section is “active,” and click drives smooth scroll to that section. All the actual content comes from `portfolio.js`; there’s no other state layer.

---

## 6. What Each Section Does

- **Header** — Fixed at the top. I show my logo (or “AM” if the image fails), my name, and the nav links. The active link is highlighted based on `activeSection`. Clicking a link triggers the smooth scroll I described above.

- **Hero** — First thing you see. I have a greeting, “I’m [First] [Last]” (split from `site.name`), and a rotating tagline that cycles every 3.2 seconds through “Software Developer,” “Frontend Developer,” etc. I added an optional subline (e.g. “NSUT Delhi Graduate · Batch of 2023”), an “About Me” button that scrolls to the about section, social icons, and my avatar. If the avatar image fails to load, I show an “AM” placeholder.

- **About** — My photo, name, tagline, and a long bio paragraph. I also show email, phone, and location, plus the same social links. If I set a resume URL in `site.resumeUrl` (and it’s not `#`), a “Resume →” link appears here.

- **Skills** — I grouped my skills by category (Languages, Frameworks, Web Dev, etc.) in `skillsByCategory`. This section just renders those groups with a title and a list of items.

- **Education** — A list of education entries: each has an image (or a two-letter fallback if the image fails), title, institution, and meta like duration, status, and CGPA. Below that I added a subsection “Academic Research & Review Papers” that lists my research papers from `researchPapers` with links to the actual papers.

- **Work** — A grid of project cards. Each card uses the project’s image, title, description, and tags, and links out to the live project. I handle image load errors with a simple fallback.

- **Experience** — A timeline of my jobs. Each entry shows company, role, location, and duration. I alternate left/right using the `side` field in the data so it looks like a timeline.

- **Contact** — The footer. I have a heading like “Akash Midha’s Portfolio,” the short intro text from `site.contactIntro`, quick links (same as the header nav), contact info (email, phone, location), and social links with labels. At the bottom I put “Made with ❤️ by [name]” and a scroll-to-top link.

I also have a standalone **Research** component that only shows the research papers; it’s not in the main App flow right now, but the data is the same as in the Education subsection. I can add it to the nav and to App if I want a dedicated research section later.

---

## 7. How I Did Navigation & Scroll

The nav items come from `navLinks`. Each link is an anchor with `href="#home"`, `href="#about"`, etc. When you click, I run `onNavClick(e, id)`: I prevent default, get the section element by id, and call `el.scrollIntoView({ behavior: 'smooth', block: 'start' })`. I also set `activeSection` to that id so the header updates immediately. For scroll-based highlighting I loop through the section ids from bottom to top and find the first section where `offsetTop - 120 <= scrollY`; that section becomes active. I used a 120px offset so the highlight switches a bit before the section is fully at the top. The scroll listener is passive for performance.

---

## 8. How I Styled It

I didn’t use Tailwind or CSS-in-JS. I have `index.css` for resets and any global stuff, and `App.css` for app-level layout if needed. Each component has its own CSS file (e.g. `Hero.css`, `About.css`) and I use BEM-style names: a block like `hero`, then elements like `hero__title`, and modifiers like `header__link--active`. That keeps things scoped and avoids naming collisions. Section titles often share a common pattern (e.g. a `section-title` class with an icon span). All theme colors and spacing are in these CSS files, so I can tweak the look without touching the data file.

---

## 9. Assets & Favicon

All assets live in `public/`. I reference them by path from the root (e.g. `/personalisedImages/AkashAvvatar.png`). In `portfolio.js` I store these paths in `site.avatarImage`, `site.aboutPhoto`, `site.logoImage`, and in the education and project entries, so the components never hardcode a path. For the favicon I wanted the AM logo to read clearly at small size, so I created a separate 64×64 image: I center-cropped the main logo (which was wide) to a square and resized it. That file is `AmLogo-favicon.png` in `personalisedLogo/`, and I reference it in `index.html` with `<link rel="icon" type="image/png" sizes="64x64" href="/personalisedLogo/AmLogo-favicon.png" />`.

---

## 10. How to Change Things

- **Any text or links** — Edit only `portfolio.js`. Change `site`, `navLinks`, `socialLinks`, `education`, `researchPapers`, `projects`, `experience`, `skillsByCategory`, or `achievements` as needed.
- **Section order** — Reorder the components in `App.jsx` and reorder `navLinks` in `portfolio.js` so the nav matches.
- **Add a section** — Add a new component folder, add an entry to `navLinks`, render the component in App with the matching `id`, and have the component read from the right export in `portfolio.js` (e.g. I could add an Achievements section that uses `achievements`).
- **Remove a section** — Remove it from App and remove its entry from `navLinks`.
- **Page title** — Change `site.siteTitle` in `portfolio.js`; the app sets `document.title` on load.
- **Resume link** — Set `site.resumeUrl` to the real URL; the About section only shows “Resume →” when it’s set and not `'#'`.

---

## 11. Running & Deploying

- **`npm run dev`** — Starts the Vite dev server so I can work locally.
- **`npm run build`** — Builds for production into `dist/`.
- **`npm run preview`** — Serves the `dist/` folder locally so I can test the production build.
- **`npm run lint`** — Runs ESLint.

To deploy I use the contents of `dist/` on whatever static host I want (e.g. Vercel, Netlify, GitHub Pages). Asset paths are root-relative, so they work as long as the site is at the domain root; if I ever deploy to a subpath I’d set the `base` option in `vite.config.js` accordingly.

---

That’s the full picture of what I built and how it works. Everything personal lives in `portfolio.js`, and the rest is structure and presentation so the site is easy to maintain and extend.

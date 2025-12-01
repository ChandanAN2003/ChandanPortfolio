## Chandan A N – Portfolio (React + Vite + Tailwind + Framer Motion)

Production-ready personal portfolio for **Chandan A N** built with:

- React (Vite)
- Tailwind CSS
- Framer Motion

It showcases cloud & DevOps work, backend projects, experience, and contact information in a clean, interview‑ready layout with light/dark mode.

---

### Tech Stack

- React + Vite
- Tailwind CSS (utility-first styling)
- Framer Motion (animations, layout transitions, modals)
- ESLint (code quality)

---

### Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The dev server typically runs on `http://localhost:5173`.

---

### Project Structure (key files)

- `src/App.jsx` – main layout and section composition
- `src/data/resume.js` – all portfolio content (name, skills, projects, etc.)
- `src/components/*` – reusable UI sections:
  - `Header`, `Hero`, `About`, `Skills`, `Projects`, `Experience`
  - `Certifications`, `Education`, `Contact`, `Footer`
  - `ProjectCard`, `ProjectModal`

Update text/content primarily in `src/data/resume.js` to keep components reusable.

---

### Deployment

Any static host works. Common options:

- **Netlify**
  - Build command: `npm run build`
  - Publish directory: `dist`
- **Vercel**
  - Framework preset: Vite
  - Build command: `npm run build`
  - Output directory: `dist`

---

### License

Personal portfolio for **Chandan A N**.  
You may reference structure/ideas, but content (text, resume data) is personal.

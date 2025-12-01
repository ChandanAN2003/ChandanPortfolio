export function Footer({ name }) {
  return (
    <footer className="mt-12 border-t border-slate-200/70 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
      <p>
        © {new Date().getFullYear()} {name}. Crafted with React, Tailwind, and Framer Motion.
      </p>
    </footer>
  );
}


import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ theme, toggleTheme, resumeUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderNavLinks = (variant) =>
    navItems.map((item) => (
      <motion.a
        key={item.href}
        href={item.href}
        className={`text-sm font-medium tracking-wide text-zinc-600 transition hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-300 ${
          variant === 'mobile' ? 'py-2' : ''
        }`}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </motion.a>
    ));

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 text-zinc-900 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.a
          href="#hero"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-600 dark:text-emerald-300">CA</span>
          <span>Chandan A N</span>
        </motion.a>

        <nav className="hidden items-center gap-6 text-zinc-700 dark:text-zinc-50 md:flex">{renderNavLinks('desktop')}</nav>

        <div className="flex items-center gap-2">
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-emerald-500/50 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:border-emerald-400 dark:border-emerald-400/60 dark:text-emerald-200 md:inline-flex"
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </motion.a>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-zinc-300 p-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          <button
            type="button"
            className="md:hidden rounded-full border border-zinc-300 p-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-zinc-200/70 bg-white/90 px-6 pb-4 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-50"
        >
          {renderNavLinks('mobile')}
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full justify-center rounded-full border border-emerald-500/50 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:border-emerald-400 dark:border-emerald-400/60 dark:text-emerald-200"
            whileHover={{ scale: 1.02 }}
          >
            Download Resume
          </motion.a>
        </motion.nav>
      )}
    </header>
  );
}


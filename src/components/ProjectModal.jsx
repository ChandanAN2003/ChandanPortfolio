import { AnimatePresence, motion } from 'framer-motion';

export function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-3xl rounded-3xl border border-slate-200/70 bg-white/95 p-8 text-slate-900 shadow-2xl dark:border-white/10 dark:bg-slate-900/90 dark:text-white"
            onClick={(e) => e.stopPropagation()}
            layout
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{project.category}</p>
                <h3 className="mt-2 text-3xl font-semibold">{project.title}</h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-slate-200/70 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <p className="mt-6 text-lg text-slate-700 dark:text-slate-200">{project.preview}</p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>
            <p className="mt-4 text-slate-500 dark:text-slate-400">{project.highlight}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 dark:text-slate-900"
              >
                Visit Project
              </a>
              <button
                type="button"
                className="rounded-full border border-slate-200/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 dark:border-white/20 dark:text-white"
                onClick={onClose}
              >
                Back to list
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


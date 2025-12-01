import { motion } from 'framer-motion';

export function ProjectCard({ project, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      className="w-full text-left"
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 text-slate-900 shadow-xl transition hover:border-sky-400/60 dark:border-white/10 dark:bg-slate-900/50 dark:text-white">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{project.category}</p>
          <span className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            Preview
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{project.highlight}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 dark:bg-slate-800/70 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}


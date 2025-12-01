import { motion } from 'framer-motion';

export function Skills({ skills }) {
  return (
    <section id="skills" className="rounded-3xl bg-white p-8 text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-50 lg:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">Skills</p>
          <h2 className="text-3xl font-semibold">End-to-end delivery stack</h2>
        </div>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          A snapshot of the toolset I rely on—from AWS-native infrastructure to data storytelling.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/60"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">{skill.icon}</span>
              <motion.span
                className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                {skill.category}
              </motion.span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 transition group-hover:border-emerald-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


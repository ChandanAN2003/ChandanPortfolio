import { motion } from 'framer-motion';

export function Experience({ experience }) {
  return (
    <section
      id="experience"
      className="rounded-3xl border border-slate-200/70 bg-white/70 p-10 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Experience</p>
      <h2 className="mt-2 text-3xl font-semibold">Impact timeline</h2>

      <div className="mt-8 space-y-6">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            className="relative rounded-3xl border border-slate-200/70 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/40"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">{item.company}</p>
                <h3 className="text-2xl font-semibold">{item.role}</h3>
              </div>
              <span className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-400">
                {item.period}
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-200">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


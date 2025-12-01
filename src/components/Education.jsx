import { motion } from 'framer-motion';

export function Education({ education }) {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white/70 p-10 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Education</p>
          <h2 className="text-3xl font-semibold">Academic foundation</h2>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {education.map((edu) => (
          <motion.div
            key={edu.program}
            className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/50"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{edu.period}</p>
            <h3 className="mt-2 text-xl font-semibold">{edu.program}</h3>
            <p className="text-slate-300">{edu.institution}</p>
            {edu.note && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{edu.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}


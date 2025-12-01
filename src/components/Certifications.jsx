import { motion } from 'framer-motion';

export function Certifications({ certifications }) {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-10 text-slate-900 dark:border-white/10 dark:bg-slate-900/50 dark:text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Certifications</p>
          <h2 className="text-3xl font-semibold">Proof of continuous learning</h2>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-800/70"
            whileHover={{ y: -4 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{cert.year}</p>
            <h3 className="mt-2 text-xl font-semibold">{cert.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';

export function About({ summary }) {
  return (
    <section
      id="about"
      className="rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-white to-zinc-50 p-10 text-zinc-900 backdrop-blur-xl dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-800/60 dark:text-zinc-50"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">About</p>
          <h2 className="text-3xl font-semibold">Builder mindset + systems thinking</h2>
        </div>
        <motion.span
          className="rounded-full border border-emerald-500/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-600 dark:border-emerald-400/40 dark:text-emerald-300"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          Always shipping
        </motion.span>
      </div>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-200">{summary}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { label: 'Core strengths', value: 'Serverless, DevOps, AI workflows' },
          { label: 'Collaboration', value: 'Cross-functional squads & client demos' },
          { label: 'Mindset', value: 'Impact-driven, metrics-first delivery' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-zinc-200/70 bg-white px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <p className="text-zinc-500 dark:text-zinc-400">{item.label}</p>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


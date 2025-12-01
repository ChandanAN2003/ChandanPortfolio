import { motion } from 'framer-motion';

export function Hero({ name, title, summary, contact, resumeUrl }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center gap-12 overflow-hidden rounded-3xl bg-white p-8 text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-50 lg:flex-row lg:items-center lg:p-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-transparent dark:from-zinc-900 dark:via-zinc-800 dark:to-transparent" />
      <div className="relative flex-1 space-y-6">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-white/20 dark:text-slate-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cloud-native · DevOps · AI-ready
        </motion.span>

        <motion.h1
          className="text-4xl font-semibold leading-tight md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I&apos;m <span className="text-emerald-600 dark:text-emerald-300">{name}</span>
        </motion.h1>

        <motion.p className="text-xl text-zinc-700 dark:text-zinc-200" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {title}
        </motion.p>

        <motion.p className="text-lg text-zinc-600 dark:text-zinc-300" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {summary}
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <a
            href="#projects"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-400"
          >
            View Projects
          </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:border-zinc-500 dark:border-zinc-600 dark:text-zinc-50"
            >
            Let&apos;s Collaborate
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-600 hover:border-emerald-500 dark:border-emerald-500 dark:text-emerald-200"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div className="grid gap-4 sm:grid-cols-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {[
            { label: 'Phone', value: contact.phone },
            { label: 'Email', value: contact.email },
            { label: 'LinkedIn', value: 'Connect', href: contact.linkedin },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
              <p className="text-zinc-500 dark:text-zinc-300">{item.label}</p>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="font-semibold text-emerald-600 dark:text-emerald-300">
                  {item.value}
                </a>
              ) : (
                <p className="font-semibold">{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative flex-1">
        <motion.div className="absolute inset-0 rounded-3xl border border-dashed border-zinc-200/60 dark:border-zinc-700" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 6 }} />
        <motion.div
          className="relative z-10 rounded-3xl border border-zinc-100 bg-white p-8 text-zinc-900 shadow-lg dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-600 dark:bg-zinc-800 dark:text-emerald-300"
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          >
            ⚙️
          </motion.div>
          <p className="text-zinc-600 dark:text-zinc-300">
            Clean deployments, resilient cloud backends, and AI-integrated workflows aimed at delivering production-ready experiences.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-zinc-500 dark:text-zinc-300">
            <div>
              <p className="font-semibold text-zinc-800 dark:text-zinc-50">Focus</p>
              <p>Serverless engineering</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-800 dark:text-zinc-50">Specialty</p>
              <p>AI + backend orchestration</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-800 dark:text-zinc-50">Availability</p>
              <p>Interview-ready</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-800 dark:text-zinc-50">Timezone</p>
              <p>IST (GMT+5:30)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


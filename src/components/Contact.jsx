import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact({ contact }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="rounded-3xl border border-slate-200/70 bg-white/80 p-10 text-slate-900 dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold">Let&apos;s build something</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Ready for internships, freelance backend work, and cloud transformation projects. Drop a note and expect a
            response within 24 hours.
          </p>
          <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-200">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Email</p>
              <a href={`mailto:${contact.email}`} className="text-lg font-semibold text-sky-600 dark:text-sky-300">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Phone</p>
              <p className="text-lg font-semibold">{contact.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">LinkedIn</p>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-lg font-semibold text-sky-600 dark:text-sky-300">
                {contact.linkedin}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {field === 'name' ? 'Your Name' : 'Email Address'}
              </label>
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                required
                value={formData[field]}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500/60 focus:outline-none dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-slate-500"
                placeholder={field === 'name' ? 'Enter your name' : 'you@example.com'}
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500/60 focus:outline-none dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-slate-500"
              placeholder="Share your project goals..."
            />
          </div>
          <motion.button
            type="submit"
            className="w-full rounded-2xl bg-sky-500 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 dark:text-slate-900"
            whileHover={{ scale: 1.01 }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </section>
  );
}


import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { resumeData } from './data/resume';

function App() {
  const prefersDark = useMemo(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  const [theme, setTheme] = useState(prefersDark ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className={theme === 'dark' ? 'dark bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 via-transparent to-transparent dark:from-zinc-800/60" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 lg:px-6 xl:max-w-7xl">
          <Header theme={theme} toggleTheme={toggleTheme} resumeUrl={resumeData.resumeUrl} />
          <main className="mt-10 flex flex-col gap-14 pb-10">
            <Hero
              name={resumeData.name}
              title={resumeData.title}
              summary={resumeData.summary}
              contact={resumeData.contact}
              resumeUrl={resumeData.resumeUrl}
            />
            <About summary={resumeData.summary} />
            <Skills skills={resumeData.skills} />
            <Projects projects={resumeData.projects} />
            <Experience experience={resumeData.experience} />
            <div className="grid gap-8 md:grid-cols-2">
              <Certifications certifications={resumeData.certifications} />
              <Education education={resumeData.education} />
            </div>
            <Contact contact={resumeData.contact} />
          </main>
          <Footer name={resumeData.name} />
        </div>
      </div>
      </div>
  );
}

export default App;

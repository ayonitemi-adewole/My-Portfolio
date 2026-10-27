import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { education, work } from '../../data/site';
import SectionHeading from '../ui/SectionHeading';

const tabs = [
  { id: 'work', label: 'Work', icon: Briefcase, items: work },
  { id: 'education', label: 'Education', icon: GraduationCap, items: education },
];

const Experience = () => {
  const [active, setActive] = useState('work');
  const current = tabs.find((t) => t.id === active);

  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="Journey"
        title="Work & education"
        description="Where I've worked and what I've studied along the way."
      />

      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <div role="tablist" aria-label="Experience type" className="flex gap-2 lg:flex-col">
          {tabs.map(({ id, label, icon: Icon, items }) => (
            <button
              key={id}
              role="tab"
              aria-selected={active === id}
              aria-controls={`panel-${id}`}
              onClick={() => setActive(id)}
              className={`relative flex flex-1 items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-colors lg:flex-none ${
                active === id ? 'border-accent/50 text-fg' : 'border-line text-muted hover:text-fg'
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="exp-tab"
                  className="absolute inset-0 rounded-2xl bg-accent/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <Icon className="relative h-5 w-5" />
              <span className="relative font-medium">{label}</span>
              <span className="relative ml-auto font-mono text-xs text-subtle">
                {String(items.length).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>

        <div id={`panel-${active}`} role="tabpanel" className="relative">
          <AnimatePresence mode="wait">
            <motion.ol
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="relative space-y-4 border-l border-line pl-8"
            >
              {current.items.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative"
                >
                  <span
                    className={`absolute -left-[39px] top-7 h-3.5 w-3.5 rounded-full border-2 border-bg ${
                      item.current ? 'bg-lime shadow-[0_0_0_4px] shadow-lime/20' : 'bg-subtle group-hover:bg-accent'
                    } transition-colors`}
                  />
                  <div className="card p-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/40">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-subtle">{item.period}</span>
                      {item.current && (
                        <span className="rounded-full bg-lime/15 px-2.5 py-0.5 text-xs font-medium text-lime">Current</span>
                      )}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold md:text-2xl">{item.title}</h3>
                    <p className="mt-1 text-accent-strong">{item.org}</p>
                    {item.description && <p className="mt-3 text-muted">{item.description}</p>}
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;

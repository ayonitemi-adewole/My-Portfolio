import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { skillCategories, skills } from '../../data/site';
import SectionHeading from '../ui/SectionHeading';

const Skills = () => {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);
  const visible = category === 'All' ? skills : skills.filter((s) => s.category === category);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="My toolkit"
        description="Tap any skill to hear the story of how I picked it up."
      />

      <div role="tablist" aria-label="Skill category" className="mb-8 flex flex-wrap gap-2">
        {skillCategories.map((c) => {
          const count = c === 'All' ? skills.length : skills.filter((s) => s.category === c).length;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                category === c ? 'text-accent-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {category === c && (
                <motion.span
                  layoutId="skill-filter"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">
                {c} <span className="opacity-60">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {visible.map((skill) => (
            <motion.li
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <motion.button
                layoutId={`skill-${skill.name}`}
                onClick={() => setSelected(skill)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="card group flex w-full flex-col items-start gap-6 p-5 text-left transition-colors hover:border-accent/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-elevated transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt=""
                    loading="lazy"
                    className={`h-7 w-7 ${skill.invertOnDark ? 'dark:invert' : ''}`}
                  />
                </span>
                <span>
                  <span className="block font-medium">{skill.name}</span>
                  <span className="font-mono text-xs text-subtle">since {skill.since}</span>
                </span>
              </motion.button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`skill-${selected.name}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="skill-dialog-title"
              onClick={(e) => e.stopPropagation()}
              className="card relative w-full max-w-md p-8"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                autoFocus
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line text-muted hover:text-fg"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-elevated">
                <img
                  src={selected.icon}
                  alt=""
                  className={`h-10 w-10 ${selected.invertOnDark ? 'dark:invert' : ''}`}
                />
              </span>
              <div className="mt-6 flex items-center gap-3">
                <h3 id="skill-dialog-title" className="text-3xl font-semibold">{selected.name}</h3>
                <span className="chip">{selected.category}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-subtle">Using it since {selected.since}</p>
              <p className="mt-5 leading-relaxed text-muted">{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;

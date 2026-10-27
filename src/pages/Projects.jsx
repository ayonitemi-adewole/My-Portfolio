import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import ProjectCard, { ProjectCardSkeleton } from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const [query, setQuery] = useState('');
  const [tech, setTech] = useState('All');

  const allTech = useMemo(
    () => ['All', ...new Set(projects.flatMap((p) => p.tech))],
    [projects]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (tech === 'All' || p.tech.includes(tech)) &&
        (!q || `${p.name} ${p.title} ${p.intro}`.toLowerCase().includes(q))
    );
  }, [projects, query, tech]);

  const clear = () => {
    setQuery('');
    setTech('All');
  };

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Things I've built."
        description="Fintech dashboards, investment platforms and job boards — each designed and developed end to end."
      />

      <section className="container-page">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="scrollbar-hide -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:px-0">
            {allTech.map((t) => (
              <button
                key={t}
                onClick={() => setTech(t)}
                aria-pressed={tech === t}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                  tech === t
                    ? 'border-accent bg-accent text-accent-fg'
                    : 'border-line text-muted hover:border-accent/50 hover:text-fg'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="relative w-full lg:max-w-xs">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="input rounded-full py-3 pl-11 pr-10"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-subtle hover:text-fg"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>

        {!loading && !error && (
          <p className="mb-6 font-mono text-xs text-subtle" aria-live="polite">
            Showing {filtered.length} of {projects.length} projects
          </p>
        )}

        {error && (
          <div className="card p-10 text-center text-muted">
            Couldn&apos;t load projects right now. Please refresh the page.
          </div>
        )}

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {loading && Array.from({ length: 4 }, (_, i) => <ProjectCardSkeleton key={i} />)}
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!loading && !error && filtered.length === 0 && (
          <div className="card flex flex-col items-center gap-4 p-14 text-center">
            <p className="font-display text-2xl font-semibold">No matching projects</p>
            <p className="text-muted">Try a different search or filter.</p>
            <button onClick={clear} className="btn btn-ghost">Reset filters</button>
          </div>
        )}
      </section>

      <div className="mt-24">
        <ContactCTA />
      </div>
    </>
  );
};

export default Projects;

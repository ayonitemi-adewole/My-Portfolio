import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, Link2 } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import { useCopy } from '../hooks/useCopy';
import Lightbox from '../components/Lightbox';
import Reveal from '../components/ui/Reveal';
import ContactCTA from '../components/ContactCTA';

const ease = [0.22, 1, 0.36, 1];

const ProjectDetails = () => {
  const { id } = useParams();
  const { projects, loading } = useProjects();
  const copy = useCopy();
  const [lightbox, setLightbox] = useState(null);

  const index = projects.findIndex((p) => p.id === Number(id));
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const gallery = useMemo(
    () => (project ? [...new Set([project.primaryImage, ...project.additionalImages])] : []),
    [project]
  );

  if (loading) {
    return (
      <div className="container-page animate-pulse pt-40">
        <div className="h-4 w-32 rounded bg-elevated" />
        <div className="mt-8 h-16 w-2/3 rounded bg-elevated" />
        <div className="mt-6 h-5 w-1/2 rounded bg-elevated" />
        <div className="mt-12 aspect-[16/9] rounded-[2rem] bg-elevated" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-32 text-center">
        <p className="font-display text-4xl font-semibold">Project not found</p>
        <p className="text-muted">It may have been moved or the link is incorrect.</p>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    );
  }

  const openAt = (src) => setLightbox(gallery.indexOf(src));

  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
        <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

        <div className="container-page">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/projects" className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All projects
            </Link>
          </motion.div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-sm text-accent-strong"
              >
                {String(project.id).padStart(2, '0')} — {project.title}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6, ease }}
                className="mt-3 text-5xl font-bold md:text-7xl"
              >
                {project.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.6 }}
                className="mt-5 max-w-2xl text-lg text-muted md:text-xl"
              >
                {project.intro}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="flex flex-wrap gap-3"
            >
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary group">
                Visit live site
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button onClick={() => copy(window.location.href, 'Link copied')} className="btn btn-ghost">
                <Link2 className="h-4 w-4" /> Share
              </button>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            onClick={() => openAt(project.primaryImage)}
            className="group relative mt-12 block w-full overflow-hidden rounded-[2rem] border border-line bg-surface p-2 md:p-3"
            aria-label="Open screenshot viewer"
          >
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={project.primaryImage}
                alt={`${project.name} main screenshot`}
                className="aspect-[16/9] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <span className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              <Expand className="h-4 w-4" /> Expand
            </span>
          </motion.button>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="space-y-14">
          <Reveal>
            <h2 className="text-3xl font-semibold">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl font-semibold">The outcome</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="card divide-y divide-line">
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-subtle">Category</p>
              <p className="mt-1 font-medium">{project.title}</p>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-subtle">Tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-subtle">Live site</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center gap-1 break-all font-medium text-accent-strong hover:underline"
              >
                {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </Reveal>
        </aside>
      </section>

      {gallery.length > 1 && (
        <section className="container-page pb-20">
          <Reveal className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-semibold">Gallery</h2>
            <p className="font-mono text-sm text-subtle">{gallery.length} screens</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 0.06}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-surface"
                  aria-label={`Open screenshot ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Expand className="h-6 w-6 text-white" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {projects.length > 1 && (
        <nav aria-label="More projects" className="container-page grid gap-4 pb-12 md:grid-cols-2">
          {[
            { p: prev, label: 'Previous project', Icon: ArrowLeft, align: 'text-left' },
            { p: next, label: 'Next project', Icon: ArrowRight, align: 'md:text-right' },
          ].map(({ p, label, Icon, align }) => (
            <Link
              key={label}
              to={`/project-details/${p.id}`}
              className={`card group flex flex-col gap-2 p-6 transition-colors hover:border-accent/50 md:p-8 ${align}`}
            >
              <span className={`flex items-center gap-2 text-sm text-subtle ${align === 'text-left' ? '' : 'md:justify-end'}`}>
                {label === 'Previous project' && <Icon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />}
                {label}
                {label === 'Next project' && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </span>
              <span className="font-display text-2xl font-semibold md:text-3xl">{p.name}</span>
            </Link>
          ))}
        </nav>
      )}

      <ContactCTA />

      <Lightbox
        images={gallery}
        index={lightbox}
        onIndexChange={setLightbox}
        onClose={() => setLightbox(null)}
        alt={project.name}
      />
    </>
  );
};

export default ProjectDetails;

import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index = 0 }) => {
  // Subtle 3D tilt that follows the pointer.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <Link to={`/project-details/${project.id}`} className="group block" aria-label={`${project.name} — view case study`}>
        <motion.div
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          style={{ rotateX, rotateY }}
          className="card relative overflow-hidden p-3 transition-colors duration-500 group-hover:border-accent/40"
        >
          <div className="relative overflow-hidden rounded-2xl border border-line bg-elevated">
            {/* Faux browser bar */}
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="ml-3 truncate font-mono text-[11px] text-subtle">
                {project.link?.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.primaryImage}
                alt={`${project.name} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                View case study <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-5">
            <div>
              <p className="font-mono text-xs text-subtle">
                {String(project.id).padStart(2, '0')} — {project.title}
              </p>
              <h3 className="mt-1.5 text-2xl font-semibold md:text-3xl">{project.name}</h3>
              <p className="mt-2 line-clamp-2 text-muted">{project.intro}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};

export const ProjectCardSkeleton = () => (
  <div className="card animate-pulse p-3">
    <div className="aspect-[16/10] rounded-2xl bg-elevated" />
    <div className="space-y-3 px-3 pb-3 pt-5">
      <div className="h-3 w-1/3 rounded bg-elevated" />
      <div className="h-6 w-1/2 rounded bg-elevated" />
      <div className="h-4 w-full rounded bg-elevated" />
    </div>
  </div>
);

export default ProjectCard;

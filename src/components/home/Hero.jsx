import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import portrait from '../../assets/imgs/hero.png';
import { profile, skills, socials } from '../../data/site';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useProjects } from '../../hooks/useProjects';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const Hero = () => {
  const role = useTypewriter(profile.roles);
  const { projects } = useProjects();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, 80]);

  const stats = [
    { value: profile.yearsExperience, label: 'Years experience' },
    { value: projects.length || '4', label: 'Featured projects' },
    { value: `${skills.length}+`, label: 'Technologies' },
  ];

  return (
    <section className="relative overflow-hidden pt-32 md:pt-36">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -top-32 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[140px]" />
      <div aria-hidden className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-lime/10 blur-[120px]" />

      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="flex flex-col items-start">
          {profile.available && (
            <motion.div {...fadeUp(0)}>
              <Link
                to="/contact"
                className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2 pr-4 text-sm text-muted backdrop-blur transition-colors hover:border-lime/50"
              >
                <span className="relative flex h-2.5 w-2.5 ml-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
                </span>
                Available for new projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          )}

          <motion.p {...fadeUp(0.1)} className="font-display text-2xl font-medium text-muted md:text-3xl">
            Hi, I&apos;m Ayonitemi 👋
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="mt-3 text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95]"
          >
            I build{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-accent via-accent-strong to-lime bg-clip-text text-transparent">
                delightful
              </span>
              <svg aria-hidden viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full text-accent/60" preserveAspectRatio="none">
                <motion.path
                  d="M2 14 C 80 4, 200 4, 298 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 1, ease }}
                />
              </svg>
            </span>
            <br />
            digital products.
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="mt-8 flex items-center gap-2 font-mono text-sm text-muted md:text-base">
            <span className="text-accent">&gt;</span>
            <span className="text-fg">{role}</span>
            <span className="inline-block h-5 w-2 animate-blink bg-accent" />
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="mt-5 max-w-xl text-lg text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn btn-primary group px-7 py-3.5 text-base">
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn btn-ghost px-7 py-3.5 text-base">
              Let&apos;s talk
            </Link>
            <div className="ml-1 flex gap-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition-all hover:-translate-y-0.5 hover:bg-surface hover:text-accent"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          style={{ y: portraitY }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-b from-accent/40 via-accent/10 to-surface">
            <div aria-hidden className="absolute inset-x-0 top-1/4 mx-auto h-2/3 w-2/3 rounded-full bg-accent/40 blur-3xl" />
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              className="relative h-full w-full object-cover object-top"
              fetchPriority="high"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -left-4 top-10 md:-left-10"
          >
            <p className="flex animate-float items-center gap-2 rounded-2xl border border-line bg-surface/90 px-4 py-3 text-sm font-medium shadow-xl shadow-black/20 backdrop-blur">
              <Sparkles className="h-4 w-4 text-accent" /> {profile.role}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -right-3 bottom-24 md:-right-8"
          >
            <p
              style={{ animationDelay: '1.5s' }}
              className="flex animate-float items-center gap-2 rounded-2xl border border-line bg-surface/90 px-4 py-3 text-sm font-medium shadow-xl shadow-black/20 backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-lime" /> {profile.location}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container-page mt-16 md:mt-20">
        <motion.dl
          {...fadeUp(0.7)}
          className="grid grid-cols-3 divide-x divide-line rounded-3xl border border-line bg-surface/60 backdrop-blur"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 px-4 py-6 text-center md:px-8 md:text-left">
              <dt className="order-2 text-xs text-muted md:text-sm">{s.label}</dt>
              <dd className="order-1 font-display text-3xl font-bold md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mx-auto mt-12 hidden w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-subtle transition-colors hover:text-fg md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import ContactCTA from '../components/ContactCTA';
import { faqs, process, services } from '../data/site';

// Card with a soft spotlight that follows the pointer.
const ServiceCard = ({ service, index }) => {
  const { icon: Icon, title, description, points } = service;
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <div
        onPointerMove={onMove}
        className="card group relative h-full overflow-hidden p-7 transition-colors hover:border-accent/40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(320px circle at var(--x) var(--y), color-mix(in oklab, var(--color-accent) 16%, transparent), transparent 70%)',
          }}
        />
        <div className="relative">
          <div className="flex items-start justify-between">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-fg">
              <Icon className="h-6 w-6" />
            </span>
            <span className="font-mono text-xs text-subtle">0{index + 1}</span>
          </div>
          <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-muted">{description}</p>
          <ul className="mt-6 space-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-lime" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};

const Faq = ({ item, open, onToggle, id }) => (
  <div className="border-b border-line">
    <button
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={`faq-${id}`}
      className="flex w-full items-center justify-between gap-6 py-6 text-left"
    >
      <span className="font-display text-lg font-medium md:text-xl">{item.q}</span>
      <motion.span
        animate={{ rotate: open ? 45 : 0 }}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
          open ? 'border-accent bg-accent text-accent-fg' : 'border-line'
        }`}
      >
        <Plus className="h-4 w-4" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={`faq-${id}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="max-w-2xl pb-6 text-muted">{item.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Services = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            How I can <span className="text-accent">help.</span>
          </>
        }
        description="From a single landing page to a full product, I design and build interfaces that look sharp and work beautifully."
      />

      <section className="container-page">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <SectionHeading eyebrow="Process" title="How we'll work together" />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 0.08} className="relative">
              <div className="card h-full p-7">
                <span className="font-display text-5xl font-bold text-accent/30">{p.step}</span>
                <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-page grid gap-12 pb-24 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent" />
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Questions, answered.</h2>
          <p className="mt-4 text-muted">Can&apos;t find what you&apos;re looking for? Just send me a message.</p>
        </Reveal>
        <Reveal delay={0.1} className="border-t border-line">
          {faqs.map((f, i) => (
            <Faq
              key={f.q}
              id={i}
              item={f}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
};

export default Services;

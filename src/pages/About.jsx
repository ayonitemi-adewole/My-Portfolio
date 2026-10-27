import { Code2, LayoutDashboard, PenTool, Smartphone } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import Experience from '../components/home/Experience';
import Skills from '../components/home/Skills';
import ContactCTA from '../components/ContactCTA';
import { profile } from '../data/site';

const focusAreas = [
  { icon: Code2, title: 'Front-End Development', desc: 'React, TypeScript, Tailwind and modern CSS.' },
  { icon: LayoutDashboard, title: 'Web App Development', desc: 'Dashboards and SaaS products with real data.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Cross-platform apps that feel native.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'User-centred flows and clean visual design.' },
];

const principles = [
  { title: 'Users first', desc: 'Every decision starts with the person on the other side of the screen.' },
  { title: 'Details matter', desc: 'Loading states, empty states, motion and focus rings — the polish is the product.' },
  { title: 'Readable code', desc: 'Clear, consistent code that is easy to change six months from now.' },
];

const About = () => (
  <>
    <PageHeader
      eyebrow="About me"
      title={
        <>
          Developer, designer at heart, <span className="text-accent">always learning.</span>
        </>
      }
      description={profile.tagline}
    />

    <section className="container-page">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-line">
        <img
          src="/assets/img/meeting.jpg"
          alt="Collaborating with a team"
          className="h-[320px] w-full object-cover md:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </Reveal>
    </section>

    <section className="container-page grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_1.2fr]">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent" />
          My story
        </span>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Professional web solutions for digital products.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-muted">
        {profile.bio.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </Reveal>
    </section>

    <section className="container-page">
      <SectionHeading eyebrow="What I do" title="Focus areas" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 0.06} className="card group p-6 transition-colors hover:border-accent/50">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-fg">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted">{desc}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="rounded-3xl border border-dashed border-line p-6">
            <p className="font-mono text-xs text-accent">0{i + 1}</p>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-muted">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <Experience />
    <Skills />
    <ContactCTA />
  </>
);

export default About;

import { Link } from 'react-router-dom';
import { ArrowRight, Cake, Code2, GraduationCap, MapPin } from 'lucide-react';
import { profile, skills } from '../../data/site';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const AboutPreview = () => {
  const facts = [
    { icon: MapPin, label: 'Based in', value: profile.location },
    { icon: GraduationCap, label: 'Studied', value: 'B.Sc. Software Engineering' },
    { icon: Code2, label: 'Experience', value: `${profile.yearsExperience} years` },
    { icon: Cake, label: 'Birthday', value: profile.birthday },
  ];

  return (
    <section id="about" className="container-page scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        eyebrow="About me"
        title={
          <>
            Turning ideas into <span className="text-accent">clean</span>, functional products.
          </>
        }
        action={
          <Link to="/about" className="btn btn-ghost group">
            More about me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />

      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="card flex flex-col justify-between gap-8 p-8 md:col-span-4 md:p-10">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            Passionate about crafting <span className="text-muted">clean, scalable and efficient</span> digital
            solutions — I build modern, user-friendly web applications that bridge{' '}
            <span className="text-accent-strong">creativity and functionality.</span>
          </p>
          <p className="text-muted">{profile.bio[1]}</p>
        </Reveal>

        <Reveal delay={0.1} className="card grid grid-cols-2 gap-px overflow-hidden bg-line p-0 md:col-span-2 md:grid-cols-1">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 bg-surface p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-subtle">{label}</p>
                <p className="truncate font-medium">{value}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="card relative overflow-hidden p-8 md:col-span-6">
          <p className="mb-6 text-sm text-muted">Tools I reach for every day</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s.name}
                className="flex items-center gap-2 rounded-full border border-line bg-bg px-3.5 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-accent/50"
              >
                <img
                  src={s.icon}
                  alt=""
                  loading="lazy"
                  className={`h-4 w-4 ${s.invertOnDark ? 'dark:invert' : ''}`}
                />
                {s.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutPreview;

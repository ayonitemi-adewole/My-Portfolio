import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Copy } from 'lucide-react';
import logo from '../assets/logo/logo-2.png';
import { navItems, profile, services, socials } from '../data/site';
import { useCopy } from '../hooks/useCopy';

const useLocalTime = () => {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Lagos',
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Footer = () => {
  const copy = useCopy();
  const time = useLocalTime();

  return (
    <footer className="relative mt-24 border-t border-line bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="" className="h-10 w-10" />
              <span className="font-display text-xl font-bold">
                {profile.name}
              </span>
            </Link>
            <p className="max-w-sm text-muted">{profile.tagline}</p>
            <button
              onClick={() => copy(profile.email, 'Email copied')}
              className="group flex w-fit items-center gap-3 rounded-full border border-line bg-bg px-4 py-2.5 text-sm transition-colors hover:border-accent/50"
            >
              {profile.email}
              <Copy className="h-4 w-4 text-subtle transition-colors group-hover:text-accent" />
            </button>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted transition-colors hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Services</p>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="text-muted transition-colors hover:text-fg">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-1 text-sm text-subtle">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <p className="flex items-center gap-2 font-mono text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {profile.location} · {time} WAT
            </p>
          </div>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="group grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon />
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="hidden h-11 items-center gap-1 rounded-full border border-line px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
            >
              Email <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

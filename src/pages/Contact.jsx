import { ArrowUpRight, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/ContactForm';
import { profile, socials } from '../data/site';
import { useCopy } from '../hooks/useCopy';

const Contact = () => {
  const copy = useCopy();

  const methods = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      onCopy: () => copy(profile.email, 'Email copied'),
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
      onCopy: () => copy(profile.phone, 'Phone number copied'),
    },
    { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat with me', href: 'https://wa.link/yq00wz', external: true },
    { icon: MapPin, label: 'Location', value: `${profile.location} · Remote friendly` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about your <span className="text-accent">next project.</span>
          </>
        }
        description="Feel free to reach out for collaborations, freelance work, or just a friendly hello."
      />

      <section className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-3">
          {methods.map(({ icon: Icon, label, value, href, external, onCopy }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div className="card group flex items-center gap-4 p-5 transition-colors hover:border-accent/40">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-subtle">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="flex items-center gap-1 truncate font-medium hover:text-accent-strong"
                    >
                      <span className="truncate">{value}</span>
                      {external && <ArrowUpRight className="h-4 w-4 shrink-0" />}
                    </a>
                  ) : (
                    <p className="truncate font-medium">{value}</p>
                  )}
                </div>
                {onCopy && (
                  <button
                    onClick={onCopy}
                    aria-label={`Copy ${label.toLowerCase()}`}
                    title={`Copy ${label.toLowerCase()}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="card mt-2 p-6">
            <p className="text-sm text-muted">Find me online</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon /> {label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
};

export default Contact;

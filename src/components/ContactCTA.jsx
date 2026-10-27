import { Link } from 'react-router-dom';
import { ArrowUpRight, Copy } from 'lucide-react';
import { profile } from '../data/site';
import { useCopy } from '../hooks/useCopy';
import Reveal from './ui/Reveal';

const ContactCTA = () => {
  const copy = useCopy();

  return (
    <section className="container-page py-12">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-accent px-6 py-16 text-center text-accent-fg md:px-16 md:py-24">
        <div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-lime/40 blur-3xl" />
        <div className="relative flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">Got a project in mind?</span>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] md:text-7xl">
            Let&apos;s build something great together.
          </h2>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn group bg-white px-7 py-4 text-base text-black hover:bg-white/90"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => copy(profile.email, 'Email copied')}
              className="btn border border-white/30 px-7 py-4 text-base text-white hover:bg-white/10"
            >
              <Copy className="h-4 w-4" />
              Copy email
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactCTA;

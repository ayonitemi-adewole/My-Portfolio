import { Sparkle } from 'lucide-react';

const Marquee = ({ items }) => (
  <div className="group relative flex overflow-hidden border-y border-line bg-surface py-6 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
    {/* Two identical tracks so the -50% translate loops seamlessly. */}
    <div className="flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-8 pr-8 font-display text-2xl font-semibold md:text-4xl">
          <span className={i % 2 ? 'text-subtle' : 'text-fg'}>{item}</span>
          <Sparkle className="h-6 w-6 text-accent" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;

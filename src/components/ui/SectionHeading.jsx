import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, description, action, align = 'left' }) => (
  <div
    className={`mb-12 flex flex-col gap-6 md:mb-16 ${
      align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
    }`}
  >
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${align === 'center' ? 'items-center' : ''}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl">{title}</h2>
      {description && <p className="text-lg text-muted">{description}</p>}
    </Reveal>
    {action && <Reveal delay={0.1}>{action}</Reveal>}
  </div>
);

export default SectionHeading;

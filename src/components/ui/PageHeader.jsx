import { motion } from 'framer-motion';

// Large intro block used at the top of inner pages.
const PageHeader = ({ eyebrow, title, description, children }) => (
  <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
    <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
    <div aria-hidden className="absolute left-1/2 top-10 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
    <div className="container-page">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="eyebrow"
      >
        <span className="h-px w-6 bg-accent" />
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  </section>
);

export default PageHeader;

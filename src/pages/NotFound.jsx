import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Command } from 'lucide-react';
import { openCommandPalette } from '../lib/commandPalette';

const NotFound = () => (
  <section className="container-page flex min-h-[80vh] flex-col items-center justify-center pt-32 text-center">
    <motion.p
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="bg-gradient-to-b from-accent to-accent/10 bg-clip-text font-display text-[9rem] font-bold leading-none text-transparent md:text-[14rem]"
    >
      404
    </motion.p>
    <h1 className="mt-4 text-3xl font-semibold md:text-4xl">This page wandered off.</h1>
    <p className="mt-3 max-w-md text-muted">
      The link may be broken or the page may have moved. Let&apos;s get you back on track.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <Link to="/" className="btn btn-primary">
        <ArrowLeft className="h-4 w-4" /> Back home
      </Link>
      <button onClick={openCommandPalette} className="btn btn-ghost">
        <Command className="h-4 w-4" /> Search the site
      </button>
    </div>
  </section>
);

export default NotFound;

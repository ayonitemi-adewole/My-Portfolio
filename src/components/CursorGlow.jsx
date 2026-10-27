import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

// Soft accent glow that trails the pointer on devices with a fine pointer.
const CursorGlow = () => {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const background = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, color-mix(in oklab, var(--color-accent) 12%, transparent), transparent 70%)`;

  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ background }}
      className="pointer-events-none fixed inset-0 -z-10 hidden md:block"
    />
  );
};

export default CursorGlow;

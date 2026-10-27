import { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Full-screen image viewer: arrow keys / swipe to navigate, Esc or backdrop to close.
const Lightbox = ({ images, index, onIndexChange, onClose, alt }) => {
  const open = index !== null;
  const count = images.length;

  const go = useCallback(
    (dir) => onIndexChange((i) => (i + dir + count) % count),
    [count, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[70] flex flex-col bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <div className="flex items-center justify-between p-4 text-white md:p-6">
            <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-sm">
              {index + 1} / {count}
            </span>
            <button
              onClick={onClose}
              aria-label="Close viewer"
              autoFocus
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={index}
                src={images[index]}
                alt={`${alt} — image ${index + 1}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                drag={count > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[75vh] max-w-full cursor-grab select-none rounded-xl object-contain shadow-2xl active:cursor-grabbing"
                draggable={false}
              />
            </AnimatePresence>

            {count > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 hidden h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:grid"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label="Next image"
                  className="absolute right-4 hidden h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:grid"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {count > 1 && (
            <div className="scrollbar-hide flex justify-center gap-2 overflow-x-auto p-4 md:p-6">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  onClick={(e) => {
                    e.stopPropagation();
                    onIndexChange(i);
                  }}
                  aria-label={`Show image ${i + 1}`}
                  className={`h-12 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    i === index ? 'border-accent opacity-100' : 'border-transparent opacity-40 hover:opacity-80'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;

import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Copy, CornerDownLeft, FileText, FolderGit2, Mail, Search, SunMoon } from 'lucide-react';
import { navItems, profile, socials } from '../data/site';
import { OPEN_PALETTE_EVENT } from '../lib/commandPalette';
import { useProjects } from '../hooks/useProjects';
import { useTheme } from '../hooks/useTheme';
import { useCopy } from '../hooks/useCopy';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { projects } = useProjects();
  const { toggle } = useTheme();
  const copy = useCopy();

  const commands = useMemo(
    () => [
      ...navItems.map((item) => ({
        group: 'Pages',
        label: item.label,
        icon: FileText,
        run: () => navigate(item.to),
      })),
      ...projects.map((p) => ({
        group: 'Projects',
        label: p.name,
        hint: p.title,
        icon: FolderGit2,
        run: () => navigate(`/project-details/${p.id}`),
      })),
      { group: 'Actions', label: 'Copy email address', hint: profile.email, icon: Copy, run: () => copy(profile.email, 'Email copied') },
      { group: 'Actions', label: 'Send an email', icon: Mail, run: () => (window.location.href = `mailto:${profile.email}`) },
      { group: 'Actions', label: 'Toggle light / dark theme', icon: SunMoon, run: toggle },
      ...socials.map((s) => ({
        group: 'Socials',
        label: s.label,
        icon: s.icon,
        run: () => window.open(s.href, '_blank', 'noopener'),
      })),
    ],
    [navigate, projects, toggle, copy]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.hint ?? ''} ${c.group}`.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const run = (cmd) => {
    setOpen(false);
    cmd.run();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      run(results[active]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  let lastGroup = null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="h-4 w-4 text-subtle" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search pages, projects, actions…"
                className="h-14 w-full bg-transparent text-fg outline-none placeholder:text-subtle"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={results[active] ? `palette-${active}` : undefined}
              />
              <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">ESC</kbd>
            </div>

            <ul id="palette-list" ref={listRef} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-3 py-10 text-center text-sm text-subtle">No results for “{query}”</li>
              )}
              {results.map((cmd, i) => {
                const showGroup = cmd.group !== lastGroup;
                lastGroup = cmd.group;
                const Icon = cmd.icon;
                return (
                  <li key={`${cmd.group}-${cmd.label}`} role="presentation">
                    {showGroup && (
                      <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-subtle">
                        {cmd.group}
                      </p>
                    )}
                    <button
                      id={`palette-${i}`}
                      data-index={i}
                      role="option"
                      aria-selected={i === active}
                      onMouseMove={() => setActive(i)}
                      onClick={() => run(cmd)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                        i === active ? 'bg-accent text-accent-fg' : 'text-fg'
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0 opacity-80" />
                      <span className="flex-1 truncate">{cmd.label}</span>
                      {cmd.hint && (
                        <span className={`truncate text-xs ${i === active ? 'text-accent-fg/70' : 'text-subtle'}`}>
                          {cmd.hint}
                        </span>
                      )}
                      {i === active ? <CornerDownLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5 opacity-0" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

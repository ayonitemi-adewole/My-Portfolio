import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, RotateCcw, Send } from 'lucide-react';
import { profile } from '../data/site';
import { useToast } from '../hooks/useToast';

const topics = ['Website', 'Web app', 'Mobile app', 'UI/UX design', 'Something else'];
const MAX_MESSAGE = 1000;
const empty = { name: '', email: '', topic: topics[0], message: '' };

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please tell me your name';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address';
  if (form.message.trim().length < 10) errors.message = 'A few more words, please (10+ characters)';
  return errors;
};

const Field = ({ label, error, children, id }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-medium text-muted">{label}</label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          id={`${id}-error`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

// No backend: submitting opens the visitor's mail client with everything pre-filled.
const ContactForm = () => {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);
  const toast = useToast();

  const update = (key) => (e) => {
    const next = { ...form, [key]: e.target.value };
    setForm(next);
    if (touched) setErrors(validate(next));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      toast('Please fix the highlighted fields', { type: 'error' });
      return;
    }
    const subject = `${form.topic} enquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast('Opening your email app…', { type: 'info' });
  };

  const reset = () => {
    setForm(empty);
    setErrors({});
    setTouched(false);
    setSent(false);
  };

  const inputClass = (key) => `input ${errors[key] ? 'border-red-400/70 focus:border-red-400' : ''}`;

  return (
    <div className="card relative overflow-hidden p-6 md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.1 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-lime/15"
            >
              <CheckCircle2 className="h-10 w-10 text-lime" />
            </motion.div>
            <h3 className="text-3xl font-semibold">Thanks, {form.name.split(' ')[0]}!</h3>
            <p className="max-w-sm text-muted">
              Your email app should have opened with the message ready to send. If it didn&apos;t, write to me
              directly at <a href={`mailto:${profile.email}`} className="text-accent-strong underline">{profile.email}</a>.
            </p>
            <button onClick={reset} className="btn btn-ghost">
              <RotateCcw className="h-4 w-4" /> Write another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-6"
          >
            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 text-sm font-medium text-muted">What can I help with?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, topic: t })}
                    aria-pressed={form.topic === t}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      form.topic === t
                        ? 'border-accent bg-accent text-accent-fg'
                        : 'border-line text-muted hover:border-accent/50 hover:text-fg'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Your name" id="cf-name" error={errors.name}>
                <input
                  id="cf-name"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'cf-name-error' : undefined}
                  className={inputClass('name')}
                />
              </Field>
              <Field label="Email address" id="cf-email" error={errors.email}>
                <input
                  id="cf-email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@company.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'cf-email-error' : undefined}
                  className={inputClass('email')}
                />
              </Field>
            </div>

            <Field label="Tell me about your project" id="cf-message" error={errors.message}>
              <div className="relative">
                <textarea
                  id="cf-message"
                  rows={6}
                  maxLength={MAX_MESSAGE}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="I'd like to build…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'cf-message-error' : undefined}
                  className={`${inputClass('message')} resize-none pb-8`}
                />
                <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-xs text-subtle">
                  {form.message.length}/{MAX_MESSAGE}
                </span>
              </div>
            </Field>

            <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-subtle">
                Prefer chatting?{' '}
                <a href="https://wa.link/yq00wz" target="_blank" rel="noreferrer" className="text-accent-strong hover:underline">
                  Message me on WhatsApp
                </a>
              </p>
              <button type="submit" className="btn btn-primary group w-full sm:w-auto">
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;

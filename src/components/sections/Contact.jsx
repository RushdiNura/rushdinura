import { useRef, useState } from 'react';
import { FiGithub, FiMail, FiMapPin } from 'react-icons/fi';

const EMAIL = 'rushdinurafita@gmail.com';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const deliveryConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const empty = { name: '', email: '', subject: '', message: '', website: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.subject.trim()) e.subject = 'Add a subject.';
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.';
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);
  const busy = useRef(false);

  const change = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
    setStatus({ type: '', text: '' });
  };
  const blur = (event) => {
    setTouched((t) => ({ ...t, [event.target.name]: true }));
    setErrors(validate(values));
  };
  const shown = (name) => (touched[name] ? errors[name] : undefined);
  const control = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: change,
    onBlur: blur,
    disabled: sending,
    'aria-invalid': Boolean(shown(name)),
    'aria-describedby': shown(name) ? `contact-${name}-error` : undefined,
    required: true,
  });

  const submit = async (event) => {
    event.preventDefault();
    if (busy.current) return;
    if (values.website) return; // honeypot: real visitors never see this field

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    const first = Object.keys(found)[0];
    if (first) {
      setStatus({ type: 'error', text: 'Please fix the fields marked below.' });
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    const clean = { name: values.name.trim(), email: values.email.trim(), subject: values.subject.trim(), message: values.message.trim() };

    if (!deliveryConfigured) {
      // No delivery service is configured, so do not claim anything was sent:
      // hand the message to the visitor's own email app instead.
      const body = `${clean.message}\n\n— ${clean.name} (${clean.email})`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(clean.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ type: 'info', text: `Your email app should open with this message ready to send. Nothing has been sent yet. If nothing opens, write to ${EMAIL}.` });
      return;
    }

    busy.current = true;
    setSending(true);
    setStatus({ type: 'info', text: 'Sending…' });
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, clean, PUBLIC_KEY);
      setValues(empty);
      setTouched({});
      setErrors({});
      setStatus({ type: 'success', text: 'Message sent. I’ll reply by email.' });
    } catch {
      setStatus({ type: 'error', text: `The message could not be sent. Please try again or write to ${EMAIL}.` });
    } finally {
      busy.current = false;
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact section-band" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div>
          <header className="section-heading">
            <p className="label">Contact</p>
            <h2 id="contact-title">Get in touch</h2>
            <p className="section-intro">I’m looking for software engineering roles and freelance web projects. Email is the quickest way to reach me.</p>
          </header>
          <ul className="contact-list">
            <li><FiMail aria-hidden="true" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><FiGithub aria-hidden="true" /><a href="https://github.com/RushdiNura" target="_blank" rel="noopener noreferrer">github.com/RushdiNura</a></li>
            <li><FiMapPin aria-hidden="true" /><span>Agaro, Ethiopia (UTC+3)</span></li>
          </ul>
        </div>

        <form className="form" onSubmit={submit} noValidate>
          <div className="form-row">
            <Field id="contact-name" label="Your name" error={shown('name')}>
              <input type="text" autoComplete="name" maxLength={100} {...control('name')} />
            </Field>
            <Field id="contact-email" label="Email address" error={shown('email')}>
              <input type="email" autoComplete="email" maxLength={254} {...control('email')} />
            </Field>
          </div>
          <Field id="contact-subject" label="Subject" error={shown('subject')}>
            <input type="text" maxLength={150} {...control('subject')} />
          </Field>
          <Field id="contact-message" label="Message" error={shown('message')}>
            <textarea rows="5" maxLength={4000} {...control('message')} />
          </Field>

          <div className="visually-hidden" aria-hidden="true">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={change} />
          </div>

          <div className="form-footer">
            <p className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.text}</p>
            <button className="button" type="submit" disabled={sending}>
              {sending ? 'Sending…' : deliveryConfigured ? 'Send message' : 'Open in email app'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { FiArrowUpRight, FiCheckCircle, FiGithub, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const initialForm = { name: '', email: '', subject: '', message: '' };
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!values.email.trim()) errors.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Add a subject.';
  if (!values.message.trim()) errors.message = 'Write a short message.';
  else if (values.message.trim().length < 10) errors.message = 'Use at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);
  const sendingRef = useRef(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    setStatus({ type: '', message: '' });
    if (touched[name]) setErrors(validate(nextValues));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sendingRef.current) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please review the fields marked below.' });
      const firstInvalidField = Object.keys(nextErrors)[0];
      window.requestAnimationFrame(() => document.getElementById(`contact-${firstInvalidField}`)?.focus());
      return;
    }

    if (!emailJsConfigured) {
      // No delivery service is configured: do not claim anything was sent.
      // Hand the message to the visitor's own email app instead.
      const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
      window.location.href = `mailto:rushdinurafita@gmail.com?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
      setStatus({
        type: 'pending',
        message: 'Your email app should open with this message ready to send. Nothing has been sent yet. If nothing opens, write to rushdinurafita@gmail.com.',
      });
      return;
    }

    sendingRef.current = true;
    setSending(true);
    setStatus({ type: 'pending', message: 'Sending your message…' });
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      }, PUBLIC_KEY);
      setValues(initialForm);
      setTouched({});
      setErrors({});
      setStatus({ type: 'success', message: 'Your message was sent. Thank you for reaching out.' });
    } catch {
      setStatus({ type: 'error', message: 'The message could not be sent. Please try again or email me directly.' });
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  };

  const fieldClass = (name) => `form-control${errors[name] && touched[name] ? ' has-error' : ''}`;

  return (
    <section id="contact" className="contact-section section-band">
      <div className="fieldbook-shell contact-layout">
        <div className="contact-intro">
          <SectionHeading
            eyebrow="Contact"
            title="Have a useful problem to solve?"
            description="For software roles, project conversations, or questions about something you’ve seen here, send me a note."
          />
          <div className="contact-details">
            <a href="mailto:rushdinurafita@gmail.com" className="contact-detail">
              <span className="contact-detail-icon"><FiMail aria-hidden="true" /></span>
              <span><small>EMAIL</small><strong>rushdinurafita@gmail.com</strong></span>
              <FiArrowUpRight className="contact-detail-arrow" aria-hidden="true" />
            </a>
            <a href="https://github.com/RushdiNura" target="_blank" rel="noopener noreferrer" className="contact-detail">
              <span className="contact-detail-icon"><FiGithub aria-hidden="true" /></span>
              <span><small>GITHUB</small><strong>github.com/RushdiNura</strong></span>
              <FiArrowUpRight className="contact-detail-arrow" aria-hidden="true" />
            </a>
            <div className="contact-detail contact-location">
              <span className="contact-detail-icon"><FiMapPin aria-hidden="true" /></span>
              <span><small>LOCATION</small><strong>Agaro, Ethiopia</strong></span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form-header">
            <span>WRITE A MESSAGE</span>
            <span>01—04</span>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" className={fieldClass('name')} name="name" type="text" autoComplete="name" maxLength={100} disabled={sending} value={values.name} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.name && touched.name)} aria-describedby={errors.name && touched.name ? 'contact-name-error' : undefined} required />
              {errors.name && touched.name && <p className="form-error" id="contact-name-error">{errors.name}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" className={fieldClass('email')} name="email" type="email" autoComplete="email" maxLength={254} disabled={sending} value={values.email} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.email && touched.email)} aria-describedby={errors.email && touched.email ? 'contact-email-error' : undefined} required />
              {errors.email && touched.email && <p className="form-error" id="contact-email-error">{errors.email}</p>}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" className={fieldClass('subject')} name="subject" type="text" maxLength={150} disabled={sending} value={values.subject} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.subject && touched.subject)} aria-describedby={errors.subject && touched.subject ? 'contact-subject-error' : undefined} required />
            {errors.subject && touched.subject && <p className="form-error" id="contact-subject-error">{errors.subject}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" className={fieldClass('message')} name="message" rows="4" maxLength={4000} disabled={sending} value={values.message} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.message && touched.message)} aria-describedby={errors.message && touched.message ? 'contact-message-error' : undefined} required />
            {errors.message && touched.message && <p className="form-error" id="contact-message-error">{errors.message}</p>}
          </div>
          <div className="contact-form-footer">
            <p className={`form-status${status.type ? ` status-${status.type}` : ''}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live={status.type === 'error' ? 'assertive' : 'polite'}>
              {status.message && (status.type === 'success' ? <FiCheckCircle aria-hidden="true" /> : null)}
              {status.message}
            </p>
            <button className="button button-dark form-submit" type="submit" disabled={sending}>
              {sending ? 'Sending…' : emailJsConfigured ? 'Send message' : 'Open in email app'} <FiSend aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

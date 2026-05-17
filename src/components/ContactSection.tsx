import { CheckCircle2 } from 'lucide-react';
import { type FormEvent, useState } from 'react';

import { SITE_CONTENT } from '../content/siteContent';
import { Reveal } from './Reveal';

type SubmitStatus = 'idle' | 'sending' | 'error';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setSubmitted(false);
    setStatus('idle');
    setFeedback('');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFeedback(SITE_CONTENT.contact.form.validationError);
      setTimeout(() => setFeedback(''), 3000);
      return;
    }

    setStatus('sending');
    setFeedback(SITE_CONTENT.contact.form.sending);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const payload: unknown = await response.json().catch(() => null);
      const errorMessage =
        typeof payload === 'object' &&
        payload !== null &&
        'error' in payload &&
        typeof (payload as { error?: unknown }).error === 'string'
          ? (payload as { error: string }).error
          : SITE_CONTENT.contact.form.genericError;

      if (!response.ok) {
        setStatus('error');
        setFeedback(errorMessage);
        setTimeout(() => {
          setFeedback('');
          setStatus('idle');
        }, 5000);
        return;
      }

      setSubmitted(true);
      setStatus('idle');
      setFeedback('');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setFeedback(SITE_CONTENT.contact.form.genericError);
      setTimeout(() => {
        setFeedback('');
        setStatus('idle');
      }, 5000);
    }
  };

  const labels = SITE_CONTENT.contact.form;

  return (
    <section id="contact" className="bg-background-darker py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <Reveal className="fade-in-up">
            <h2 id="contact-heading" className="mb-3 text-4xl font-bold text-gradient">
              {SITE_CONTENT.contact.title}
            </h2>
          </Reveal>
          <Reveal className="fade-in-up delay-100">
            <p className="mx-auto max-w-xl text-lg text-gray-400">{SITE_CONTENT.contact.subtitle}</p>
          </Reveal>
        </div>

        <Reveal className="fade-in-up delay-200 theme-card mx-auto max-w-2xl p-8 shadow-2xl sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="contact-name" className="mb-2 block font-medium text-gray-300">
                  {labels.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={200}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="theme-input w-full rounded-lg px-4 py-3 outline-none transition duration-300 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-email" className="mb-2 block font-medium text-gray-300">
                  {labels.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={320}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="theme-input w-full rounded-lg px-4 py-3 outline-none transition duration-300 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="contact-message" className="mb-2 block font-medium text-gray-300">
                  {labels.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  maxLength={8000}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="theme-input resize-none rounded-lg px-4 py-3 outline-none transition duration-300 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="gradient-button rounded-lg px-12 py-3 text-lg font-bold text-white shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {labels.submit}
                </button>
              </div>

              {feedback ? (
                <p
                  className={`mt-4 text-center text-sm ${status === 'error' ? 'text-red-400' : 'text-blue-400'}`}
                  role={status === 'error' ? 'alert' : 'status'}
                >
                  {feedback}
                </p>
              ) : null}

              <div className="mt-6 flex justify-center">
                <p className="mt-4 flex flex-wrap items-center justify-center gap-1 text-xs text-gray-500">
                  <span>Protected by</span>
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt=""
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                  <span>reCAPTCHA</span>
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-400" aria-hidden strokeWidth={1.75} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">{labels.thankYouHeading}</h3>
              <p className="mb-6 text-gray-300">{labels.thankYouBody}</p>
              <button
                type="button"
                className="rounded-lg border-2 border-[var(--color-primary)] px-4 py-2 font-semibold text-[var(--color-primary-light)] transition duration-300 hover:bg-[var(--color-primary)] hover:text-white"
                onClick={resetForm}
              >
                {labels.sendAnother}
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

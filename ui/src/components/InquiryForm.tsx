import { useEffect, useState, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ApiError, api } from '../services/api';
import type { InquiryLanguage, InquiryPayload } from '../types/inquiry';

interface Props {
  date: string;
  packageId: string;
  onDateChange: (date: string) => void;
}

type Errors = Partial<Record<'names' | 'email' | 'date' | 'guests' | 'language', 'required' | 'invalid'>>;
type Status = 'idle' | 'sending' | 'sent' | 'mailed' | 'network';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Static hosting (e.g. GitHub Pages) has no API. When a contact address is
 * configured at build time, the form opens a pre-filled email instead.
 */
const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || '';

export function InquiryForm({ date, packageId, onDateChange }: Props) {
  const { t } = useLanguage();
  const f = t.form;
  const [language, setLanguage] = useState<InquiryLanguage>(packageId === 'bilingual' ? 'both' : 'hu');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (packageId === 'bilingual') setLanguage('both');
  }, [packageId]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const guestsRaw = get('guests');
    const payload: InquiryPayload = {
      names: get('names'),
      email: get('email'),
      date,
      venue: get('venue') || undefined,
      guests: guestsRaw ? Number(guestsRaw) : undefined,
      language,
      package: packageId || undefined,
      message: get('message') || undefined,
    };

    const next: Errors = {};
    if (!payload.names) next.names = 'required';
    if (!payload.email) next.email = 'required';
    else if (!EMAIL.test(payload.email)) next.email = 'invalid';
    if (!payload.date) next.date = 'required';
    if (payload.guests !== undefined && (!Number.isInteger(payload.guests) || payload.guests < 1)) next.guests = 'invalid';
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (CONTACT_EMAIL) {
      const lines = [
        `${f.names}: ${payload.names}`,
        `${f.email}: ${payload.email}`,
        `${f.date}: ${payload.date}`,
        payload.venue && `${f.venue}: ${payload.venue}`,
        payload.guests && `${f.guests}: ${payload.guests}`,
        `${f.language} ${f.languageOptions[payload.language]}`,
        payload.package && `${t.packages.title}: ${t.packages.items.find((p) => p.id === payload.package)?.name ?? payload.package}`,
        payload.message && `\n${payload.message}`,
      ].filter(Boolean);
      const subject = `${f.mailSubject}: ${payload.date}, ${payload.names}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      setStatus('mailed');
      return;
    }

    setStatus('sending');
    try {
      await api.post('/inquiries', payload);
      setStatus('sent');
    } catch (err) {
      if (err instanceof ApiError && err.status === 400) {
        setErrors(((err.body as { errors?: Errors })?.errors ?? {}) as Errors);
        setStatus('idle');
      } else {
        setStatus('network');
      }
    }
  }

  const describe = (field: keyof Errors) => (errors[field] ? `${field}-error` : undefined);
  const errorText = (field: keyof Errors) =>
    errors[field] ? (
      <p className="field__error" id={`${field}-error`}>
        {f.errors[errors[field]!]}
      </p>
    ) : null;

  return (
    <section className="enquire" id="enquire" aria-labelledby="enquire-title">
      <div className="enquire__intro">
        <h2 id="enquire-title">{f.title}</h2>
        <p>{f.intro}</p>
      </div>

      {status === 'sent' || status === 'mailed' ? (
        <div className="enquire__done" role="status">
          <p className="enquire__done-title">{status === 'mailed' ? f.sentMail : f.sent}</p>
          <p>{status === 'mailed' ? f.sentMailBody : f.sentBody}</p>
          {status === 'mailed' && (
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          )}
          <button type="button" className="button button--outline" onClick={() => setStatus('idle')}>
            {f.sendAnother}
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="field field--wide">
            <label htmlFor="names">{f.names}</label>
            <input id="names" name="names" autoComplete="name" aria-invalid={!!errors.names} aria-describedby={describe('names')} />
            {errorText('names')}
          </div>
          <div className="field">
            <label htmlFor="email">{f.email}</label>
            <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={describe('email')} />
            {errorText('email')}
          </div>
          <div className="field">
            <label htmlFor="date">{f.date}</label>
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
              aria-invalid={!!errors.date}
              aria-describedby={describe('date')}
            />
            {errorText('date')}
          </div>
          <div className="field">
            <label htmlFor="venue">{f.venue}</label>
            <input id="venue" name="venue" />
          </div>
          <div className="field">
            <label htmlFor="guests">{f.guests}</label>
            <input id="guests" name="guests" type="number" min={1} inputMode="numeric" aria-invalid={!!errors.guests} aria-describedby={describe('guests')} />
            {errorText('guests')}
          </div>
          <fieldset className="field field--wide segmented">
            <legend>{f.language}</legend>
            {(['hu', 'en', 'both'] as const).map((code) => (
              <label key={code} className="segmented__option">
                <input type="radio" name="language" value={code} checked={language === code} onChange={() => setLanguage(code)} />
                <span>{f.languageOptions[code]}</span>
              </label>
            ))}
          </fieldset>
          <div className="field field--wide">
            <label htmlFor="message">{f.message}</label>
            <textarea id="message" name="message" rows={4} placeholder={f.messagePlaceholder} />
          </div>
          {status === 'network' && (
            <p className="form__alert field--wide" role="alert">
              {f.errors.network}
            </p>
          )}
          <div className="field--wide">
            <button className="button" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? f.sending : CONTACT_EMAIL ? f.submitMail : f.submit}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

import { randomUUID } from 'node:crypto';
import type { Inquiry, InquiryInput, InquiryLanguage } from '../models/inquiry.model.js';

const LANGUAGES: InquiryLanguage[] = ['hu', 'en', 'both'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

// In-memory store until a database is added.
const inquiries: Inquiry[] = [];

export type ValidationResult =
  | { ok: true; value: InquiryInput }
  | { ok: false; errors: Record<string, string> };

export function validateInquiry(body: unknown): ValidationResult {
  const b = (body ?? {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};
  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

  const names = str(b.names);
  const email = str(b.email);
  const date = str(b.date);
  const language = str(b.language) as InquiryLanguage;
  const guests = b.guests === undefined || b.guests === '' ? undefined : Number(b.guests);

  if (!names) errors.names = 'required';
  if (!EMAIL.test(email)) errors.email = 'invalid';
  if (!DATE.test(date) || Number.isNaN(Date.parse(date))) errors.date = 'invalid';
  if (!LANGUAGES.includes(language)) errors.language = 'invalid';
  if (guests !== undefined && (!Number.isInteger(guests) || guests < 1)) errors.guests = 'invalid';

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    value: {
      names,
      email,
      date,
      language,
      guests,
      venue: str(b.venue) || undefined,
      package: str(b.package) || undefined,
      message: str(b.message) || undefined,
    },
  };
}

export const inquiryService = {
  create(input: InquiryInput): Inquiry {
    const inquiry = { ...input, id: randomUUID(), createdAt: new Date().toISOString() };
    inquiries.push(inquiry);
    return inquiry;
  },
};

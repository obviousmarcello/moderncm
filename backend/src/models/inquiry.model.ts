export type InquiryLanguage = 'hu' | 'en' | 'both';

export interface InquiryInput {
  names: string;
  email: string;
  date: string; // YYYY-MM-DD
  venue?: string;
  guests?: number;
  language: InquiryLanguage;
  package?: string;
  message?: string;
}

export interface Inquiry extends InquiryInput {
  id: string;
  createdAt: string;
}

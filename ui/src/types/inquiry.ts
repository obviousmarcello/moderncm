export type InquiryLanguage = 'hu' | 'en' | 'both';

export interface InquiryPayload {
  names: string;
  email: string;
  date: string;
  venue?: string;
  guests?: number;
  language: InquiryLanguage;
  package?: string;
  message?: string;
}

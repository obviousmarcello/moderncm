import type { Request, Response } from 'express';
import { inquiryService, validateInquiry } from '../services/inquiry.service.js';
import { logger } from '../utils/logger.js';

export function createInquiry(req: Request, res: Response) {
  const result = validateInquiry(req.body);
  if (!result.ok) {
    res.status(400).json({ errors: result.errors });
    return;
  }
  const inquiry = inquiryService.create(result.value);
  logger.info(`New inquiry ${inquiry.id} for ${inquiry.date}`);
  res.status(201).json({ id: inquiry.id });
}

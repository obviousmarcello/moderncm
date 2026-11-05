import { Router } from 'express';
import { createInquiry } from '../controllers/inquiry.controller.js';

export const inquiryRouter = Router();
inquiryRouter.post('/', createInquiry);

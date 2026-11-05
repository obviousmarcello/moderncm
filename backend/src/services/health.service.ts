import type { HealthStatus } from '../models/health.model.js';

export const healthService = {
  status(): HealthStatus {
    return { status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() };
  },
};

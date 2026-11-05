import { createApp } from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

createApp().listen(config.port, () => {
  logger.info(`API listening on http://localhost:${config.port}`);
});

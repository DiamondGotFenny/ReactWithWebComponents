//mock a api service for development

import { setupWorker } from 'msw';
import { handlers } from '../mockAPI/handlers';

// This configures a Service Worker with the given request handlers.

export const worker = setupWorker(...handlers);

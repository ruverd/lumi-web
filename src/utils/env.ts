import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.string().min(1),
  API_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);

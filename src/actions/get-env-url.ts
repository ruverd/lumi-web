import { env } from '@/utils/env';

export async function getEnvUrl() {
  return env.API_URL;
}

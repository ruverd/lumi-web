'use server';

import { env } from '@/utils/env';

interface FetcherOptions extends RequestInit {
  variables?: any;
}

export async function fetcher<T = any>(
  query: string,
  options: FetcherOptions
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const { variables = {}, method = 'POST', ...moreOptions } = options;

  return fetch(`${env.API_URL}/graphql`, {
    method,
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    ...moreOptions,
  })
    .then(async (r) => {
      const content = await r.json();

      return content;
    })
    .catch((err) => {
      console.error(`SERVER ACTION - fetcher`, err);

      throw new Error(err);
    });
}

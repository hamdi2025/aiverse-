import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const activeLocale = requested && ['en', 'fr', 'es', 'ar'].includes(requested) ? requested : 'en';

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});

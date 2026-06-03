import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr', 'ar', 'es'],
  defaultLocale: 'en'
});

export const config = {
  // Match every path except Next.js internals and static files
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};

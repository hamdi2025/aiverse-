import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'fr', 'ar', 'es'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  // Deterministic redirects for SEO: always send the root + unprefixed URLs
  // to /en instead of varying by the visitor's Accept-Language header.
  localeDetection: false,
  localePrefix: 'always',
});

const isProtectedRoute = createRouteMatcher([
  '/:locale/admin(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
  return intlMiddleware(req);
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

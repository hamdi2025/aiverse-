import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'fr', 'ar', 'es'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

const isPublicRoute = createRouteMatcher([
  '/:locale',
  '/:locale/tools/:id',
  '/:locale/compare/:slug',
  '/:locale/submit',
  '/:locale/sign-in',
  '/:locale/sign-up',
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
  return intlMiddleware(req);
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};

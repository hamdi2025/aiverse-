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
  '/:locale/compare',
  '/:locale/submit',
  '/:locale/newsletter',
  '/:locale/stack',
  '/:locale/sign-in(.*)',
  '/:locale/sign-up(.*)',
  '/:locale/about',
  '/:locale/privacy',
  '/:locale/terms',
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
  return intlMiddleware(req);
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};

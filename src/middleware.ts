import { authMiddleware } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'ar', 'es'];
const defaultLocale = 'en';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

export default authMiddleware({
  beforeAuth: (req: NextRequest) => {
    return intlMiddleware(req);
  },
  publicRoutes: ['/:locale', '/:locale/tools/:id', '/:locale/compare/:slug', '/:locale/submit', '/:locale/sign-in', '/:locale/sign-up'],
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const locales = ['en', 'fr', 'ar', 'es'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

// Only protect truly private routes
const isProtectedRoute = createRouteMatcher([
  '/:locale/admin(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // Redirect apex domain to www to ensure OAuth cookies work properly
  const host = req.headers.get('host') || '';
  if (host === 'getaiverse.online') {
    const url = req.nextUrl.clone();
    url.host = 'www.getaiverse.online';
    return NextResponse.redirect(url, 301);
  }

  if (isProtectedRoute(req)) {
    await auth.protect();
  }
  return intlMiddleware(req);
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};

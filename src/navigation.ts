import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'ar', 'es'] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales
});

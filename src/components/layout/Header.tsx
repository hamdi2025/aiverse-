'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { useRouter, usePathname, Link } from '@/navigation';
import GradientText from '../ui/GradientText';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  const t = useTranslations('Common');
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' },
    { code: 'es', name: 'ES' },
    { code: 'ar', name: 'AR' },
  ];

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as 'en' | 'fr' | 'ar' | 'es' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0A0A0F]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-[#7C3AED]/25">
            <span className="text-white font-black text-lg select-none">A</span>
          </div>
          <span className="text-xl font-black tracking-wider">
            <span className="text-white">AI</span>
            <GradientText gradient="from-[#7C3AED] to-[#06B6D4]">verse</GradientText>
          </span>
        </Link>

        {/* Animated badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
          <span className="text-[10px] md:text-[11px] text-gray-400 tracking-wider uppercase whitespace-nowrap">
            580+ AI Tools · 60+ Agents · 28 Categories
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Language picker */}
          <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 rounded-xl px-3 py-2 transition-all">
            <Globe className="w-4 h-4 text-gray-400" />
            <select
              value={activeLocale}
              onChange={(e) => handleLocaleChange(e.target.value)}
              className="bg-transparent text-xs text-gray-300 font-semibold focus:outline-none cursor-pointer"
            >
              {locales.map((loc) => (
                <option key={loc.code} value={loc.code} className="bg-[#0A0A0F] text-white">
                  {loc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Stack link */}
          <Link
            href="/stack"
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white border border-white/[0.08] hover:border-white/20 rounded-xl px-3 py-2 transition-all"
          >
            🧰 Stack
          </Link>

          {/* Compare link */}
          <Link
            href="/compare"
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white border border-white/[0.08] hover:border-white/20 rounded-xl px-3 py-2 transition-all"
          >
            ⚡ Compare
          </Link>

          {/* Alternatives link */}
          <Link
            href="/alternatives"
            className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white border border-white/[0.08] hover:border-white/20 rounded-xl px-3 py-2 transition-all"
          >
            🔁 Alternatives
          </Link>

          {/* Submit link */}
          <Link
            href="/submit"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-xl px-4 py-2 hover:opacity-90 transition-all"
          >
            + {t('submit')}
          </Link>

          {/* Auth */}
          <SignedOut>
            <Link
              href="/sign-up"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white border border-white/[0.08] hover:border-white/20 rounded-xl px-3 py-2 transition-all"
            >
              {t('signUp') || 'Sign Up'}
            </Link>
            <Link
              href="/sign-in"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl px-3 py-2 transition-all"
            >
              {t('signIn')}
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      {/* Mobile navigation (visible on phones/small screens) */}
      <div className="md:hidden border-t border-white/[0.06] overflow-x-auto no-scrollbar">
        <nav className="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-xs font-semibold">
          <Link href="/" className="text-gray-300 hover:text-white border border-white/[0.08] rounded-lg px-3 py-1.5">🏠 Tools</Link>
          <Link href="/compare" className="text-gray-300 hover:text-white border border-white/[0.08] rounded-lg px-3 py-1.5">⚡ Compare</Link>
          <Link href="/alternatives" className="text-gray-300 hover:text-white border border-white/[0.08] rounded-lg px-3 py-1.5">🔁 Alternatives</Link>
          <Link href="/stack" className="text-gray-300 hover:text-white border border-white/[0.08] rounded-lg px-3 py-1.5">🧰 Stack</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white border border-white/[0.08] rounded-lg px-3 py-1.5">📚 Blog</Link>
          <Link href="/submit" className="text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-lg px-3 py-1.5">+ Submit</Link>
        </nav>
      </div>
    </header>
  );
}

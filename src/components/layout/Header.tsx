'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Globe, Plus } from 'lucide-react';
import { useRouter, usePathname, Link } from '@/navigation';
import GradientText from '../ui/GradientText';

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

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-[#7C3AED]/25">
            <span className="text-white font-black text-lg select-none">A</span>
          </div>
          <span className="text-xl font-black tracking-wider">
            <span className="text-white">AI</span>
            <GradientText gradient="from-[#7C3AED] to-[#06B6D4]">verse</GradientText>
          </span>
        </Link>

        {/* ── Animated badge ── */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full color-cycle flex-shrink-0" />
          <span className="badge-text-cycle text-[10px] md:text-[11px] tracking-wider uppercase whitespace-nowrap" />
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Language picker */}
          <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 rounded-xl px-3 py-2 transition-all duration-200">
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

          {/* Submit CTA */}
          <button className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#22D3EE] text-white rounded-xl px-4 py-2 text-xs md:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 shadow-md shadow-[#7C3AED]/10 active:scale-95">
            <Plus className="w-4 h-4" />
            <span>{t('submitTool')}</span>
          </button>
        </div>

      </div>
    </header>
  );
}

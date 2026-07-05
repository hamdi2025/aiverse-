'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import SearchBar from '../ui/SearchBar';
import CategoryFilter from './CategoryFilter';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CHIP_STYLES = [
  { grad: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.75)' },
  { grad: 'from-cyan-500 to-blue-500', glow: 'rgba(6,182,212,0.75)' },
  { grad: 'from-orange-500 to-amber-500', glow: 'rgba(249,115,22,0.75)' },
  { grad: 'from-emerald-500 to-green-600', glow: 'rgba(16,185,129,0.75)' },
  { grad: 'from-pink-500 to-rose-500', glow: 'rgba(236,72,153,0.75)' },
];

// Languages the directory covers — the word rotates every 6s in the hero badge.
const HERO_LANGS = ['Français', 'العربية', 'English', 'Español'];

function coloredSubtitle(raw: string): React.ReactNode {
  const parts = raw.split(/(<agents>.*?<\/agents>|<tools>.*?<\/tools>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<agents>')) {
      return <span key={i} className="font-bold text-violet-600">{part.replace(/<\/?agents>/g, '')}</span>;
    }
    if (part.startsWith('<tools>')) {
      return <span key={i} className="font-bold text-cyan-600">{part.replace(/<\/?tools>/g, '')}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function HeroSection({ onSearch, selectedCategory, onCategoryChange }: HeroSectionProps) {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const badgeItems = t('badge2items').split('|');
  const subtitleRaw = t('subtitle');

  const [langIdx, setLangIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setLangIdx((i) => (i + 1) % HERO_LANGS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const badgePrefix =
    locale === 'ar' ? 'دليل الذكاء الاصطناعي بـ' :
    locale === 'es' ? 'El directorio de IA en' :
    locale === 'en' ? 'The AI directory in' :
    "L'annuaire IA en";

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#7C3AED]/10 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#06B6D4]/10 blur-[100px] -z-10 animate-pulse [animation-delay:2s]" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-violet-100 via-white to-cyan-100 border-2 border-violet-300 mb-6 shadow-lg shadow-violet-200/60"
      >
        <span className="text-base md:text-xl font-black text-gray-800">🌍 {badgePrefix}</span>
        <span className="relative inline-block min-w-[92px] md:min-w-[120px] text-center">
          <motion.span
            key={langIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-lg md:text-2xl font-black bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
          >
            {HERO_LANGS[langIdx]}
          </motion.span>
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-black text-gray-900 tracking-tight leading-[1.15] max-w-4xl mb-4"
      >
        <span className="block text-3xl sm:text-4xl md:text-5xl pb-1">
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            {t('titleAgents')}
          </span>
          {' & '}
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            {t('titleTools')}
          </span>
        </span>
        <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-800 mt-1">
          {t('titleSub')}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-600 text-sm md:text-base max-w-2xl mb-8 leading-relaxed"
      >
        {coloredSubtitle(subtitleRaw)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-2xl mb-6"
      >
        <SearchBar onSearch={onSearch} selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-4xl"
      >
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
      </motion.div>

      {badgeItems.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 w-full max-w-2xl"
        >
          <div className="rounded-2xl border-2 border-gray-200 bg-white shadow-md px-5 py-5">
            <div className="flex flex-wrap justify-center gap-3">
              {badgeItems.map((item: string, i: number) => {
                const s = CHIP_STYLES[i % CHIP_STYLES.length];
                return (
                  <motion.span
                    key={i}
                    animate={{
                      opacity: [1, 0.45, 1],
                      scale: [1, 1.07, 1],
                      boxShadow: [
                        `0 0 0px ${s.glow}`,
                        `0 0 16px ${s.glow}`,
                        `0 0 0px ${s.glow}`,
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    className={`text-xs sm:text-sm font-bold text-white bg-gradient-to-r ${s.grad} px-4 py-2 rounded-full`}
                  >
                    {item.trim()}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

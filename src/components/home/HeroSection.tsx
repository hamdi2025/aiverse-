'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import GradientText from '../ui/GradientText';
import SearchBar from '../ui/SearchBar';
import CategoryFilter from './CategoryFilter';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function HeroSection({
  onSearch,
  selectedCategory,
  onCategoryChange
}: HeroSectionProps) {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#7C3AED]/10 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#06B6D4]/10 blur-[100px] -z-10 animate-pulse [animation-delay:2s]" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mb-6"
      >
        <span className="gradient-blink">+2,400</span>{' '}
        AI Tools. We Help You Choose Smarter —{' '}
        <GradientText className="block sm:inline">{t('titleGradient')}</GradientText>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-6"
      >
        {t('subtitle')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-white/20 transition-all duration-300"
      >
        <span className="text-[11px] md:text-xs font-semibold text-gray-300 tracking-wide">
          {t('badge2')}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full mb-8 z-10"
      >
        <SearchBar
          onSearch={onSearch}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <p className="text-[11px] sm:text-xs text-gray-500 mt-4 font-medium tracking-wide">
          {t('popularSearch')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-5xl"
      >
        <CategoryFilter selected={selectedCategory} onSelect={onCategoryChange} />
      </motion.div>
    </section>
  );
}

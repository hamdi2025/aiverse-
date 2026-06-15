'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SearchBar from '../ui/SearchBar';
import CategoryFilter from './CategoryFilter';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

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
  const badgeItems = t('badge2items').split('|');
  const subtitleRaw = t('subtitle');

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#7C3AED]/10 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#06B6D4]/10 blur-[100px] -z-10 animate-pulse [animation-delay:2s]" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 border border-violet-300 mb-5 shadow-sm"
      >
        <span className="text-[11px] md:text-xs font-bold text-violet-700 tracking-widest uppercase">
          {t('badge')}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {badgeItems.map((item: string, i: number) => (
            <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full">
              {item.trim()}
            </span>
          ))}
        </motion.div>
      )}
    </section>
  );
}

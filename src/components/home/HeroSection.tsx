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

// Badge items — 4 couleurs distinctes
const BADGE_COLORS = [
  'text-violet-400',   // Agents IA
  'text-cyan-400',     // Outils IA
  'text-amber-400',    // 8 Categories
  'text-green-400',    // Avis impartiaux
];

// Transforme le subtitle: remplace <agents>...</agents> et <tools>...</tools> par des spans colorés
function coloredSubtitle(raw: string): React.ReactNode {
  const parts = raw.split(/(<agents>.*?<\/agents>|<tools>.*?<\/tools>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<agents>')) {
      return <span key={i} className="font-bold text-violet-400">{part.replace(/<\/?agents>/g, '')}</span>;
    }
    if (part.startsWith('<tools>')) {
      return <span key={i} className="font-bold text-cyan-400">{part.replace(/<\/?tools>/g, '')}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function HeroSection({
  onSearch,
  selectedCategory,
  onCategoryChange
}: HeroSectionProps) {
  const t = useTranslations('Hero');

  // Badge items séparés par |
  const badgeItems = t('badge2items').split('|');

  // Subtitle brut avec balises <agents> et <tools>
  const subtitleRaw = t('subtitle');

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#7C3AED]/10 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#06B6D4]/10 blur-[100px] -z-10 animate-pulse [animation-delay:2s]" />

      {/* Top badge — AI Agents Era */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-900/60 to-cyan-900/40 border border-violet-500/40 backdrop-blur-md mb-5 shadow-lg shadow-violet-900/30"
      >
        <span className="text-[11px] md:text-xs font-bold text-violet-300 tracking-widest uppercase">
          {t('badge')}
        </span>
      </motion.div>

      {/* ── H1 — taille réduite ── */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-black text-white tracking-tight leading-[1.15] max-w-4xl mb-4"
      >
        {/* Ligne 1 — +50 Agents (violet) & +2,400 Tools (orange) — taille réduite */}
        <span className="block text-3xl sm:text-4xl md:text-5xl pb-1">
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            {t('titleAgents')}
          </span>
          <span className="text-gray-500 font-light mx-2">&</span>
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            {t('titleTools')}
          </span>
        </span>

        {/* Ligne 2 */}
        <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mt-1">
          {t('titleMain')}
        </span>

        {/* Ligne 3 — gradient power/cost */}
        <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
          <span className="gradient-power">{t('titleGradient1')}</span>{' '}
          <span className="gradient-cost">{t('titleGradient2')}</span>
        </span>
      </motion.h1>

      {/* ── Subtitle avec mots colorés ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-5 mt-3"
      >
        {coloredSubtitle(subtitleRaw)}
      </motion.p>

      {/* ── Badge 4 couleurs ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-white/20 transition-all duration-300 flex-wrap justify-center"
      >
        <span className="text-gray-500 text-[11px]">✦</span>
        {badgeItems.map((item, i) => (
          <React.Fragment key={i}>
            <span className={`text-[11px] md:text-xs font-bold tracking-wide ${BADGE_COLORS[i] ?? 'text-gray-300'}`}>
              {item.trim()}
            </span>
            {i < badgeItems.length - 1 && (
              <span className="text-gray-600 text-[11px]">·</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Search */}
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

      {/* Category filter */}
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

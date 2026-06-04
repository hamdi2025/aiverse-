'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { AITool } from '@/lib/tools';
import ToolCard from './ToolCard';
import AdSenseSlot from '../ads/AdSenseSlot';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { Flame } from 'lucide-react';

interface BentoGridProps {
  tools: AITool[];
  onToolClick: (tool: AITool) => void;
}

export default function BentoGrid({ tools, onToolClick }: BentoGridProps) {
  const t = useTranslations('Common');
  const locale = useLocale() as 'en' | 'fr' | 'es' | 'ar';

  if (tools.length === 0) {
    return (
      <div className="text-center py-20 border border-white/5 rounded-2xl bg-white/[0.01]">
        <p className="text-gray-400 text-lg">{t('noResults')}</p>
      </div>
    );
  }

  const featuredTool = tools.find((t) => t.isWeeklyFeatured);
  const remainingTools = tools.filter((t) => !t.isWeeklyFeatured);

  // Mode bento seulement quand l'outil featured est présent (pas de filtre actif)
  const gridClass = featuredTool
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[240px]'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

  return (
    <div className={gridClass}>
      {featuredTool && (
        <div className="md:col-span-2 md:row-span-2 h-full">
          <GlassCard
            glowColor="from-[#7C3AED]/20 to-[#06B6D4]/20"
            className="p-8 h-full flex flex-col justify-between border-[#7C3AED]/40 relative overflow-hidden"
            onClick={() => onToolClick(featuredTool)}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#7C3AED]/10 to-transparent blur-3xl rounded-full" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full shadow-lg shadow-orange-950/45 animate-pulse">
                  <Flame className="w-3.5 h-3.5" />
                  {t('weeklyFeatured')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                <GradientText>{featuredTool.name}</GradientText>
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                {featuredTool.description[locale]}
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-400 bg-white/[0.04] px-3 py-1 rounded">
                {t('pricing')}: <span className="text-white font-bold">{featuredTool.pricingLocalized[locale]}</span>
              </span>
              <a
                href={featuredTool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#22D3EE] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#06B6D4]/25 transition-all duration-300 hover:scale-[1.02]"
              >
                {t('visit')}
              </a>
            </div>
          </GlassCard>
        </div>
      )}

      {remainingTools.map((tool, index) => {
        const showAd = index > 0 && index % 3 === 0;
        return (
          <React.Fragment key={tool.id}>
            {showAd && (
              <div className="md:col-span-1">
                <AdSenseSlot slot="inGrid" className="h-full flex items-center justify-center" />
              </div>
            )}
            <div className="md:col-span-1">
              <ToolCard tool={tool} onClick={onToolClick} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

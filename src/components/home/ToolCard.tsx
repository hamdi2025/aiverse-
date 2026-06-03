'use client';

import React from 'react';
import { Star, Eye, ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { AITool } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';
import { getSponsoredConfig } from '@/config/sponsored';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

interface ToolCardProps {
  tool: AITool;
  isLarge?: boolean;
  onClick?: (tool: AITool) => void;
}

export default function ToolCard({ tool, isLarge = false, onClick }: ToolCardProps) {
  const t = useTranslations('Common');
  const locale = useLocale() as 'en' | 'fr' | 'es' | 'ar';
  const sponsored = getSponsoredConfig(tool.id);

  const outboundUrl = buildAffiliateUrl(tool.id, tool.websiteUrl);
  const ratingFormatted = tool.rating.toFixed(1);
  const viewsFormatted = tool.views >= 1000 ? `${(tool.views / 1000).toFixed(1)}k` : tool.views;

  // Pricing badge style: Free = green, Freemium = amber, Paid = gray
  const isFree = tool.pricing === 'Free';
  const isFreemium = tool.pricing === 'Freemium';
  const pricingClass = isFree
    ? 'text-green-400 bg-green-900/40 border border-green-700/50 font-extrabold'
    : isFreemium
    ? 'text-amber-400 bg-amber-900/20 border border-amber-700/30 font-semibold'
    : 'text-gray-400 bg-white/[0.04] font-semibold';

  return (
    <GlassCard
      glowColor={sponsored ? sponsored.glowColor : 'from-purple-500/10 to-cyan-500/10'}
      className={`group flex flex-col justify-between p-6 h-full min-h-[220px] cursor-pointer ${
        sponsored ? 'border-purple-500/30 bg-purple-950/5' : ''
      }`}
      onClick={() => onClick?.(tool)}
    >
      {/* Header */}
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
          <span className="text-[11px] font-bold tracking-wider uppercase bg-white/[0.06] text-gray-300 px-2.5 py-1 rounded-full border border-white/5">
            {tool.category}
          </span>
          {sponsored && (
            <span className="text-[10px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2.5 py-1 rounded-full animate-pulse shadow-md shadow-purple-900/50">
              {sponsored.badgeText[locale] || t('sponsored')}
            </span>
          )}
        </div>

        <h3 className={`font-semibold text-white tracking-tight ${isLarge ? 'text-2xl mb-2' : 'text-lg mb-1'}`}>
          {sponsored
            ? <GradientText gradient="from-white via-white to-purple-200">{tool.name}</GradientText>
            : tool.name}
        </h3>

        <p className={`text-gray-400 font-normal leading-relaxed line-clamp-3 ${isLarge ? 'text-sm mb-4' : 'text-xs mb-3'}`}>
          {tool.description[locale]}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4 mt-auto">
        {/* Rating + Views */}
        <div className="flex items-center gap-3.5 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">{ratingFormatted}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-gray-500" />
            <span>{viewsFormatted}</span>
          </div>
        </div>

        {/* Pricing badge + arrow */}
        <div className="flex items-center gap-2">
          <span className={`text-[11px] px-2.5 py-0.5 rounded-full ${pricingClass}`}>
            {isFree ? '✦ FREE' : tool.pricingLocalized[locale]}
          </span>

          <a
            href={outboundUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={t('visit')}
            className="btn-arrow-orange flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/40 hover:from-orange-400 hover:to-yellow-400 hover:scale-110 transition-transform duration-200"
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
}

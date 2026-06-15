'use client';

import React from 'react';
import { Star, Eye, ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { AITool } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';
import { getSponsoredConfig } from '@/config/sponsored';
import { tlCategory } from '@/lib/dataI18n';
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
  const isTrending = tool.views >= 20000;
  const isFree = tool.pricing === 'Free';
  const isFreemium = tool.pricing === 'Freemium';
  const pricingClass = isFree
    ? 'text-green-700 bg-green-100 border border-green-300 font-extrabold'
    : isFreemium
    ? 'text-amber-700 bg-amber-100 border border-amber-300 font-semibold'
    : 'text-gray-700 bg-gray-100 border border-gray-200 font-semibold';

  return (
    <GlassCard
      glowColor={sponsored ? sponsored.glowColor : 'from-purple-500/10 to-cyan-500/10'}
      className={`group flex flex-col justify-between p-6 h-full min-h-[220px] cursor-pointer ${
        sponsored ? 'border-purple-300 bg-purple-50' : ''
      }`}
      onClick={() => onClick?.(tool)}
    >
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
          <span className="text-[11px] font-bold tracking-wider uppercase bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200 capitalize">
            {tlCategory(tool.category, locale)}
          </span>
          {sponsored && (
            <span className="text-[10px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2.5 py-1 rounded-full animate-pulse shadow-md shadow-purple-300">
              {sponsored.badgeText[locale] || t('sponsored')}
            </span>
          )}
          {!sponsored && isTrending && (
            <span className="text-[10px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-orange-500 to-red-500 text-white px-2.5 py-1 rounded-full shadow-md shadow-orange-200">
              🔥 Trending
            </span>
          )}
        </div>

        <h3 className={`font-bold text-gray-900 tracking-tight ${isLarge ? 'text-2xl mb-2' : 'text-lg mb-1'}`}>
          {sponsored
            ? <GradientText gradient="from-purple-700 to-pink-600">{tool.name}</GradientText>
            : tool.name}
        </h3>

        <p className={`text-gray-600 font-normal leading-relaxed line-clamp-3 ${isLarge ? 'text-sm mb-4' : 'text-xs mb-3'}`}>
          {tool.description[locale]}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-200 flex items-center justify-between gap-4 mt-auto">
        <div className="flex items-center gap-3.5 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-gray-900">{ratingFormatted}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-gray-400" />
            <span>{viewsFormatted}</span>
          </div>
        </div>

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
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-[#7C3AED] border border-gray-200 hover:border-[#7C3AED] text-gray-600 hover:text-white transition-all duration-200"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
}

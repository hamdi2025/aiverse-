'use client';

import React, { useEffect } from 'react';
import { X, Star, Eye, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { AITool } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';
import GradientText from '../ui/GradientText';

interface ToolModalProps {
  tool: AITool | null;
  onClose: () => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  writing:      'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
  image:        'from-pink-500/20 to-purple-500/20 border-pink-500/30',
  code:         'from-green-500/20 to-emerald-500/20 border-green-500/30',
  video:        'from-red-500/20 to-orange-500/20 border-red-500/30',
  productivity: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30',
  audio:        'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30',
  marketing:    'from-cyan-500/20 to-teal-500/20 border-cyan-500/30',
};

const CATEGORY_BADGE: Record<string, string> = {
  writing:      'bg-blue-500/20 text-blue-300 border-blue-500/30',
  image:        'bg-pink-500/20 text-pink-300 border-pink-500/30',
  code:         'bg-green-500/20 text-green-300 border-green-500/30',
  video:        'bg-red-500/20 text-red-300 border-red-500/30',
  productivity: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  audio:        'bg-violet-500/20 text-violet-300 border-violet-500/30',
  marketing:    'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

export default function ToolModal({ tool, onClose }: ToolModalProps) {
  const t = useTranslations('Common');
  const locale = useLocale() as 'en' | 'fr' | 'es' | 'ar';

  useEffect(() => {
    if (!tool) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [tool, onClose]);

  if (!tool) return null;

  const outboundUrl = buildAffiliateUrl(tool.id, tool.websiteUrl);
  const ratingFormatted = tool.rating.toFixed(1);
  const viewsFormatted = tool.views >= 1000 ? `${(tool.views / 1000).toFixed(1)}k` : tool.views;
  const colorClass = CATEGORY_COLORS[tool.category] || CATEGORY_COLORS.writing;
  const badgeClass = CATEGORY_BADGE[tool.category] || CATEGORY_BADGE.writing;

  const PRICING_COLOR: Record<string, string> = {
    Free:     'text-green-400 bg-green-400/10 border-green-400/30',
    Freemium: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    Paid:     'text-red-400 bg-red-400/10 border-red-400/30',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg rounded-2xl border bg-[#0E0E1A] bg-gradient-to-br ${colorClass} shadow-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7C3AED]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeClass}`}>
                {tool.category}
              </span>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${PRICING_COLOR[tool.pricing]}`}>
                {tool.pricing}
              </span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              <GradientText>{tool.name}</GradientText>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-gray-400 hover:text-white transition-all duration-200 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-4">
          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            {tool.description[locale]}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-white/[0.04] rounded-xl p-3 text-center border border-white/[0.06]">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-white font-black text-lg">{ratingFormatted}</span>
              </div>
              <span className="text-[11px] text-gray-500 uppercase tracking-wider">Rating</span>
            </div>
            <div className="bg-white/[0.04] rounded-xl p-3 text-center border border-white/[0.06]">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-black text-lg">{viewsFormatted}</span>
              </div>
              <span className="text-[11px] text-gray-500 uppercase tracking-wider">Views</span>
            </div>
            <div className="bg-white/[0.04] rounded-xl p-3 text-center border border-white/[0.06]">
              <div className="mb-1">
                <span className="text-white font-black text-sm leading-tight block">{tool.pricingLocalized[locale]}</span>
              </div>
              <span className="text-[11px] text-gray-500 uppercase tracking-wider">{t('pricing')}</span>
            </div>
          </div>

          {/* URL preview */}
          <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 mb-5">
            <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-gray-400 text-xs truncate">{tool.websiteUrl}</span>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 pb-6">
          <a
            href={outboundUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#22D3EE] text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#06B6D4]/25 hover:scale-[1.01] active:scale-[0.99]"
          >
            {t('visit')}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

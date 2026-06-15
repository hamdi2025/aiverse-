'use client';

import React from 'react';
import { TrendingUp, ArrowUpRight, Star, ArrowRight } from 'lucide-react';
import { TOOLS_DATA } from '@/lib/tools';
import { useLocale } from 'next-intl';
import { buildAffiliateUrl } from '@/lib/affiliate';
import Link from 'next/link';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const T: Record<Locale, { title: string; subtitle: string; viewAll: string; compare: string; trending: string }> = {
  en: { title: '🔥 Trending AI Agents', subtitle: 'The most popular autonomous AI agents this week', viewAll: 'View all agents →', compare: 'Compare', trending: 'Trending' },
  fr: { title: '🔥 Agents IA Tendance', subtitle: 'Les agents IA autonomes les plus populaires cette semaine', viewAll: 'Voir tous les agents →', compare: 'Comparer', trending: 'Tendance' },
  es: { title: '🔥 Agentes IA Tendencia', subtitle: 'Los agentes IA autónomos más populares esta semana', viewAll: 'Ver todos los agentes →', compare: 'Comparar', trending: 'Tendencia' },
  ar: { title: '🔥 وكلاء الذكاء الاصطناعي الرائجون', subtitle: 'أكثر وكلاء الذكاء الاصطناعي المستقلين شعبية هذا الأسبوع', viewAll: 'عرض جميع الوكلاء ←', compare: 'قارن', trending: 'رائج' },
};

const TRENDING_AGENTS = [...TOOLS_DATA]
  .filter(t => t.category === 'agents')
  .sort((a, b) => b.views - a.views)
  .slice(0, 6);

export default function TrendingAgents({ onCompare }: { onCompare?: () => void }) {
  const locale = useLocale() as Locale;
  const t = T[locale] || T.en;

  return (
    <div className="w-full mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            {t.title}
          </h2>
          <p className="text-gray-600 text-xs mt-0.5">{t.subtitle}</p>
        </div>
        <Link href={`/${locale}/compare`}
          className="text-xs text-violet-600 hover:text-violet-800 font-semibold flex items-center gap-1 transition">
          {t.viewAll} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {TRENDING_AGENTS.map((agent, i) => {
          const url = buildAffiliateUrl(agent.id, agent.websiteUrl);
          return (
            <div key={agent.id}
              className="group relative bg-white hover:bg-violet-50 border border-gray-200 hover:border-violet-400 shadow-sm hover:shadow-md rounded-2xl p-4 flex flex-col gap-3 transition-all duration-200">

              {/* Rank badge */}
              {i < 3 && (
                <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                  i === 0 ? 'bg-amber-500 text-black' :
                  i === 1 ? 'bg-gray-300 text-black' :
                  'bg-orange-700 text-white'
                }`}>
                  #{i + 1}
                </span>
              )}

              {/* Trending badge */}
              <span className="text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full self-start">
                🔥 {t.trending}
              </span>

              {/* Name */}
              <div className="flex-1">
                <p className="text-gray-900 font-bold text-sm leading-tight">{agent.name}</p>
                <p className="text-gray-600 text-[11px] mt-1 line-clamp-2">{agent.description[locale]}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-gray-900 text-xs font-bold">{agent.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-[10px] ml-auto">{agent.views >= 1000 ? `${(agent.views/1000).toFixed(0)}k` : agent.views} views</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-1.5">
                <a href={url} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-[11px] font-bold rounded-lg transition">
                  Try <ArrowUpRight className="w-3 h-3" />
                </a>
                <Link href={`/${locale}/compare`}
                  className="flex items-center justify-center px-2 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-900 text-[11px] rounded-lg transition">
                  ⚡
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

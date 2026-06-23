'use client';

import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { TOOLS_DATA } from '@/lib/tools';
import { useLocale } from 'next-intl';
import Link from 'next/link';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const T: Record<Locale, { title: string; subtitle: string; cta: string; neu: string; types: Record<string, string> }> = {
  en: {
    title: "🚀 What's trending in AI right now",
    subtitle: 'The newest AI agents, coding agents and open models of 2026 — updated weekly.',
    cta: 'Compare them all',
    neu: 'NEW',
    types: { code: 'Coding agent', writing: 'Open LLM', agents: 'AI agent' },
  },
  fr: {
    title: "🚀 Les tendances IA du moment",
    subtitle: 'Les tout nouveaux agents IA, agents de code et modèles ouverts de 2026 — mis à jour chaque semaine.',
    cta: 'Comparer tout',
    neu: 'NOUVEAU',
    types: { code: 'Agent de code', writing: 'LLM ouvert', agents: 'Agent IA' },
  },
  es: {
    title: '🚀 Lo más tendencia en IA ahora',
    subtitle: 'Los nuevos agentes de IA, agentes de código y modelos abiertos de 2026 — actualizado cada semana.',
    cta: 'Comparar todo',
    neu: 'NUEVO',
    types: { code: 'Agente de código', writing: 'LLM abierto', agents: 'Agente IA' },
  },
  ar: {
    title: '🚀 الأكثر رواجاً في الذكاء الاصطناعي الآن',
    subtitle: 'أحدث وكلاء الذكاء الاصطناعي ووكلاء البرمجة والنماذج المفتوحة لعام 2026 — تُحدّث أسبوعياً.',
    cta: 'قارن الكل',
    neu: 'جديد',
    types: { code: 'وكيل برمجة', writing: 'نموذج مفتوح', agents: 'وكيل ذكاء' },
  },
};

// Curated hottest 2026 launches, across categories (ids must exist in TOOLS_DATA).
const HOT_IDS = ['codex', 'claude-cowork', 'kimi', 'glm', 'minimax', 'manus', 'devin', 'openclaw'];

export default function Trends2026() {
  const locale = useLocale() as Locale;
  const t = T[locale] || T.en;

  const items = HOT_IDS
    .map((id) => TOOLS_DATA.find((x) => x.id === id))
    .filter((x): x is NonNullable<typeof x> => !!x);

  if (items.length === 0) return null;

  return (
    <div className="relative w-full rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-5 md:p-6 shadow-sm">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-600" />
            {t.title}
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mt-1">{t.subtitle}</p>
        </div>
        <Link
          href={`/${locale}/ai-agents`}
          className="flex items-center gap-1.5 text-xs md:text-sm font-extrabold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-xl px-4 py-2.5 hover:opacity-90 hover:scale-105 transition-all shadow-md whitespace-nowrap"
        >
          {t.cta} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Horizontal scroll cards */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
        {items.map((tool) => (
          <Link
            key={tool.id}
            href={`/${locale}/tools/${tool.id}`}
            className="group flex-shrink-0 w-44 bg-white hover:bg-violet-50 border border-gray-200 hover:border-violet-400 rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="badge-blink text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                {t.neu}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-gray-700 font-bold">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                {tool.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-900 font-bold text-sm leading-tight group-hover:text-violet-700 transition">{tool.name}</p>
            <p className="text-[10px] font-semibold text-violet-600 mt-0.5">{t.types[tool.category] || t.types.agents}</p>
            <p className="text-gray-500 text-[11px] mt-1.5 line-clamp-2">{tool.description[locale]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

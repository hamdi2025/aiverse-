'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/navigation';
import { TOOLS_DATA } from '@/lib/tools';
import { ArrowLeftRight, Zap } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const LABELS: Record<Locale, { title: string; sub: string; tool1: string; tool2: string; btn: string; popular: string }> = {
  en: { title: 'Compare AI Tools', sub: 'Pick any two tools and get an instant side-by-side comparison.', tool1: 'Select first tool...', tool2: 'Select second tool...', btn: 'Compare Now', popular: 'Popular:' },
  fr: { title: 'Comparer des Outils IA', sub: 'Choisissez deux outils et obtenez une comparaison instantanée côte à côte.', tool1: 'Sélectionnez le premier outil...', tool2: 'Sélectionnez le second outil...', btn: 'Comparer maintenant', popular: 'Populaire :' },
  es: { title: 'Comparar Herramientas IA', sub: 'Elige dos herramientas y obtén una comparación instantánea lado a lado.', tool1: 'Selecciona la primera herramienta...', tool2: 'Selecciona la segunda herramienta...', btn: 'Comparar ahora', popular: 'Popular:' },
  ar: { title: 'قارن أدوات الذكاء الاصطناعي', sub: 'اختر أداتين واحصل على مقارنة فورية جنباً إلى جنب.', tool1: 'اختر الأداة الأولى...', tool2: 'اختر الأداة الثانية...', btn: 'قارن الآن', popular: 'شائع:' },
};

const QUICK_COMPARES = [
  { label: 'ChatGPT vs Claude', slug: 'chatgpt-vs-claude' },
  { label: 'Midjourney vs DALL-E', slug: 'midjourney-vs-dalle3' },
  { label: 'Jasper vs Writesonic', slug: 'jasper-vs-writesonic' },
  { label: 'Bolt.new vs v0', slug: 'bolt-new-vs-v0-dev' },
  { label: 'Gemini vs Claude', slug: 'claude-vs-gemini' },
];

export default function CompareWidget() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const L = LABELS[locale];

  const [tool1, setTool1] = useState('');
  const [tool2, setTool2] = useState('');
  const [shake, setShake] = useState(false);

  const sortedTools = [...TOOLS_DATA].sort((a, b) => a.name.localeCompare(b.name));

  const handleCompare = () => {
    if (!tool1 || !tool2) { setShake(true); setTimeout(() => setShake(false), 600); return; }
    if (tool1 === tool2) return;
    router.push(`/compare/${tool1}-vs-${tool2}` as never);
  };

  const handleQuick = (slug: string) => {
    router.push(`/compare/${slug}` as never);
  };

  return (
    <section className="w-full my-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/5 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <ArrowLeftRight className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white">{L.title}</h2>
          <p className="text-gray-400 text-xs md:text-sm">{L.sub}</p>
        </div>
      </div>

      {/* Comparator */}
      <div className={`flex flex-col sm:flex-row items-center gap-3 mt-6 ${shake ? 'animate-bounce' : ''}`}>
        {/* Select 1 */}
        <select
          value={tool1}
          onChange={e => setTool1(e.target.value)}
          className="flex-1 w-full bg-white/[0.05] border border-white/[0.10] hover:border-violet-500/50 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/70 transition-colors cursor-pointer"
        >
          <option value="" className="bg-[#0A0A0F]">{L.tool1}</option>
          {sortedTools.map(t => (
            <option key={t.id} value={t.id} className="bg-[#0A0A0F]">{t.name}</option>
          ))}
        </select>

        {/* VS badge */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-violet-600/30 to-orange-500/30 border border-white/10 flex items-center justify-center">
          <span className="text-xs font-black text-gray-300">VS</span>
        </div>

        {/* Select 2 */}
        <select
          value={tool2}
          onChange={e => setTool2(e.target.value)}
          className="flex-1 w-full bg-white/[0.05] border border-white/[0.10] hover:border-orange-500/50 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/70 transition-colors cursor-pointer"
        >
          <option value="" className="bg-[#0A0A0F]">{L.tool2}</option>
          {sortedTools.filter(t => t.id !== tool1).map(t => (
            <option key={t.id} value={t.id} className="bg-[#0A0A0F]">{t.name}</option>
          ))}
        </select>

        {/* Button */}
        <button
          onClick={handleCompare}
          disabled={!tool1 || !tool2 || tool1 === tool2}
          className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap shadow-lg shadow-violet-900/30"
        >
          <Zap className="w-4 h-4" />
          {L.btn}
        </button>
      </div>

      {/* Quick compare links */}
      <div className="flex flex-wrap items-center gap-2 mt-5">
        <span className="text-xs text-gray-500 font-medium">{L.popular}</span>
        {QUICK_COMPARES.map(({ label, slug }) => (
          <button
            key={slug}
            onClick={() => handleQuick(slug)}
            className="text-xs text-gray-400 hover:text-white border border-white/[0.06] hover:border-violet-500/40 hover:bg-violet-500/10 rounded-full px-3 py-1 transition-all duration-200"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

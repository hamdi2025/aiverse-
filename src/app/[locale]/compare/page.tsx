'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Zap, Shuffle } from 'lucide-react';
import { useLocale } from 'next-intl';
import { TOOLS_DATA } from '@/lib/tools';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const POPULAR = [
  { slug: 'chatgpt-vs-claude', emoji: '🤖' },
  { slug: 'chatgpt-vs-gemini', emoji: '🧠' },
  { slug: 'claude-vs-gemini', emoji: '⚡' },
  { slug: 'midjourney-vs-dalle3', emoji: '🎨' },
  { slug: 'midjourney-vs-stable-diffusion', emoji: '🖼️' },
  { slug: 'jasper-vs-writesonic', emoji: '✍️' },
  { slug: 'cursor-vs-github-copilot', emoji: '💻' },
  { slug: 'elevenlabs-vs-murf-ai', emoji: '🎙️' },
  { slug: 'runway-ml-vs-pika-labs', emoji: '🎬' },
  { slug: 'bolt-new-vs-v0-dev', emoji: '🔧' },
  { slug: 'jasper-vs-copy-ai', emoji: '📝' },
  { slug: 'grammarly-ai-vs-quillbot', emoji: '📖' },
];

const T: Record<Locale, { badge: string; title: string; subtitle: string; tool1: string; tool2: string; compare: string; popular: string; pick: string; agents: string }> = {
  en: { badge: 'AI Tool Comparisons', title: 'Compare Any Two AI Tools', subtitle: 'Pick any two tools and get an instant side-by-side comparison — pricing, ratings, features and a verdict.', tool1: 'Select first tool...', tool2: 'Select second tool...', compare: 'Compare Now →', popular: 'Popular Comparisons', pick: 'Or pick from popular', agents: '🤖 AI Agents' },
  fr: { badge: 'Comparaisons d\'outils IA', title: 'Comparez n\'importe quels 2 outils IA', subtitle: 'Choisissez deux outils et obtenez une comparaison instantanée — prix, notes, fonctionnalités et verdict.', tool1: 'Sélectionnez le premier outil...', tool2: 'Sélectionnez le deuxième outil...', compare: 'Comparer →', popular: 'Comparaisons populaires', pick: 'Ou choisissez parmi les populaires', agents: '🤖 Agents IA' },
  es: { badge: 'Comparaciones de herramientas IA', title: 'Compara cualquier herramienta IA', subtitle: 'Elige dos herramientas y obtén una comparación instantánea — precios, valoraciones, funciones y veredicto.', tool1: 'Selecciona la primera...', tool2: 'Selecciona la segunda...', compare: 'Comparar →', popular: 'Comparaciones populares', pick: 'O elige entre las populares', agents: '🤖 Agentes IA' },
  ar: { badge: 'مقارنات أدوات الذكاء الاصطناعي', title: 'قارن أي أداتَي ذكاء اصطناعي', subtitle: 'اختر أي أداتين واحصل على مقارنة فورية — الأسعار والتقييمات والميزات وحكم نهائي.', tool1: 'اختر الأداة الأولى...', tool2: 'اختر الأداة الثانية...', compare: 'قارن الآن ←', popular: 'المقارنات الشائعة', pick: 'أو اختر من الشائعة', agents: '🤖 وكلاء الذكاء الاصطناعي' },
};

// All tools sorted by views for the dropdown
const ALL_TOOLS = [...TOOLS_DATA].sort((a, b) => b.views - a.views);
const AGENTS = ALL_TOOLS.filter(t => t.category === 'agents');
const OTHER_TOOLS = ALL_TOOLS.filter(t => t.category !== 'agents');

export default function ComparePage() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const t = T[locale] || T.en;

  const [tool1, setTool1] = useState('');
  const [tool2, setTool2] = useState('');

  const canCompare = tool1 && tool2 && tool1 !== tool2;

  const handleCompare = () => {
    if (canCompare) router.push(`/${locale}/compare/${tool1}-vs-${tool2}`);
  };

  const handleRandom = () => {
    const pool = ALL_TOOLS.slice(0, 50);
    const a = pool[Math.floor(Math.random() * pool.length)];
    let b = pool[Math.floor(Math.random() * pool.length)];
    while (b.id === a.id) b = pool[Math.floor(Math.random() * pool.length)];
    router.push(`/${locale}/compare/${a.id}-vs-${b.id}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 bg-violet-600/20 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          <Zap className="w-3 h-3" /> {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{t.title}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Interactive comparator */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
          <div className="md:col-span-2">
            <select value={tool1} onChange={e => setTool1(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500 appearance-none">
              <option value="">{t.tool1}</option>
              <optgroup label="🤖 AI Agents">
                {AGENTS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </optgroup>
              <optgroup label="🛠️ AI Tools">
                {OTHER_TOOLS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </optgroup>
            </select>
          </div>

          <div className="flex items-center justify-center">
            <span className="text-gray-500 font-black text-lg">VS</span>
          </div>

          <div className="md:col-span-2">
            <select value={tool2} onChange={e => setTool2(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500 appearance-none">
              <option value="">{t.tool2}</option>
              <optgroup label="🤖 AI Agents">
                {AGENTS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </optgroup>
              <optgroup label="🛠️ AI Tools">
                {OTHER_TOOLS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button onClick={handleCompare} disabled={!canCompare}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition ${
              canCompare
                ? 'bg-violet-600 hover:bg-violet-500 text-white'
                : 'bg-white/5 text-gray-600 cursor-not-allowed'
            }`}>
            <ArrowRight className="w-4 h-4" /> {t.compare}
          </button>
          <button onClick={handleRandom}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-sm font-semibold transition">
            <Shuffle className="w-4 h-4" /> Random
          </button>
        </div>
      </div>

      {/* Popular comparisons */}
      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">{t.pick}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {POPULAR.map(({ slug, emoji }) => {
          const [a, b] = slug.split('-vs-').map(s =>
            s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
          );
          return (
            <Link key={slug} href={`/${locale}/compare/${slug}`}
              className="group flex items-center justify-between gap-3 bg-white/5 hover:bg-violet-600/10 border border-white/10 hover:border-violet-500/40 rounded-2xl px-5 py-4 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{a}</p>
                  <p className="text-gray-500 text-xs">vs {b}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

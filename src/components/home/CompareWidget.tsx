'use client';

import React, { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/navigation';
import { TOOLS_DATA } from '@/lib/tools';
import { ArrowLeftRight, Zap, ChevronDown } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const CATEGORIES = [
  { id: 'agents',       en: '🤖 AI Agents',          fr: '🤖 Agents IA',            es: '🤖 Agentes IA',           ar: '🤖 وكلاء ذكاء اصطناعي' },
  { id: 'writing',      en: '✍️ Writing & LLMs',     fr: '✍️ Écriture & LLMs',      es: '✍️ Escritura & LLMs',     ar: '✍️ الكتابة' },
  { id: 'image',        en: '🎨 Image & Art',         fr: '🎨 Image & Art',           es: '🎨 Imagen & Arte',         ar: '🎨 الصور' },
  { id: 'code',         en: '💻 Code & Dev',          fr: '💻 Code & Dev',            es: '💻 Código & Dev',          ar: '💻 البرمجة' },
  { id: 'video',        en: '🎬 Video & Motion',      fr: '🎬 Vidéo & Motion',        es: '🎬 Video & Motion',        ar: '🎬 الفيديو' },
  { id: 'audio',        en: '🎙️ Audio & Music',      fr: '🎙️ Audio & Musique',      es: '🎙️ Audio & Música',       ar: '🎙️ الصوت' },
  { id: 'marketing',    en: '📈 Marketing & Growth',  fr: '📈 Marketing',             es: '📈 Marketing',             ar: '📈 التسويق' },
  { id: 'productivity', en: '⚡ Productivity',        fr: '⚡ Productivité',           es: '⚡ Productividad',          ar: '⚡ الإنتاجية' },
  { id: 'seo',          en: '🔍 SEO & Search',        fr: '🔍 SEO & Recherche',       es: '🔍 SEO',                   ar: '🔍 السيو' },
  { id: 'design3d',     en: '🎯 3D & Design',         fr: '🎯 3D & Design',           es: '🎯 3D & Diseño',           ar: '🎯 التصميم' },
  { id: 'socialmedia',  en: '📱 Social Media',        fr: '📱 Réseaux Sociaux',       es: '📱 Redes Sociales',        ar: '📱 التواصل' },
  { id: 'chatbots',     en: '💬 Chatbots',            fr: '💬 Chatbots',              es: '💬 Chatbots',              ar: '💬 الدردشة' },
  { id: 'data',         en: '📊 Data & Analytics',    fr: '📊 Données',               es: '📊 Datos',                 ar: '📊 البيانات' },
  { id: 'translation',  en: '🌐 Translation',         fr: '🌐 Traduction',            es: '🌐 Traducción',            ar: '🌐 الترجمة' },
  { id: 'finance',      en: '💰 Finance',             fr: '💰 Finance',               es: '💰 Finanzas',              ar: '💰 المالية' },
  { id: 'legal',        en: '⚖️ Legal',              fr: '⚖️ Juridique',            es: '⚖️ Legal',                ar: '⚖️ القانوني' },
  { id: 'hr',           en: '👥 HR',                  fr: '👥 RH',                    es: '👥 RRHH',                  ar: '👥 الموارد' },
  { id: 'cybersecurity',en: '🔐 Cybersecurity',       fr: '🔐 Cybersécurité',         es: '🔐 Ciberseguridad',        ar: '🔐 الأمن' },
  { id: 'slides',       en: '📊 Slides',              fr: '📊 Présentations',         es: '📊 Presentaciones',        ar: '📊 العروض' },
  { id: 'excel',        en: '📋 Excel',               fr: '📋 Excel',                 es: '📋 Excel',                 ar: '📋 الجداول' },
  { id: 'pdf',          en: '📄 PDF & Docs',          fr: '📄 PDF & Docs',            es: '📄 PDF & Docs',            ar: '📄 PDF' },
  { id: 'elearning',    en: '🎓 E-Learning',          fr: '🎓 E-Learning',            es: '🎓 E-Learning',            ar: '🎓 التعلم' },
  { id: 'projectmgmt',  en: '📌 Project Mgmt',        fr: '📌 Gestion Projet',        es: '📌 Gestión',               ar: '📌 المشاريع' },
  { id: 'mindmap',      en: '🧠 MindMap',             fr: '🧠 MindMap',               es: '🧠 MindMap',               ar: '🧠 الخرائط' },
  { id: 'travel',       en: '✈️ Travel',             fr: '✈️ Voyage',               es: '✈️ Viajes',                ar: '✈️ السفر' },
  { id: 'contract',     en: '📝 Contracts',           fr: '📝 Contrats',              es: '📝 Contratos',             ar: '📝 العقود' },
  { id: 'compression',  en: '🗜️ Compression',        fr: '🗜️ Compression',          es: '🗜️ Compresión',           ar: '🗜️ الضغط' },
  { id: 'conversion',   en: '🔄 Conversion',          fr: '🔄 Conversion',            es: '🔄 Conversión',            ar: '🔄 التحويل' },
];

const LABELS: Record<Locale, { title: string; sub: string; selectCat: string; tool1: string; tool2: string; btn: string; popular: string; pickCat: string }> = {
  en: { title: 'Compare AI Tools', sub: 'Select a category, then compare two tools side by side.', selectCat: '1. Category...', tool1: '2. First tool...', tool2: '3. Second tool...', btn: 'Compare', popular: 'Popular:', pickCat: '← Pick a category first' },
  fr: { title: 'Comparer des Outils IA', sub: 'Choisissez une catégorie, puis comparez deux outils côte à côte.', selectCat: '1. Catégorie...', tool1: '2. Premier outil...', tool2: '3. Deuxième outil...', btn: 'Comparer', popular: 'Populaire :', pickCat: '← Choisir une catégorie' },
  es: { title: 'Comparar Herramientas IA', sub: 'Selecciona una categoría, luego compara dos herramientas lado a lado.', selectCat: '1. Categoría...', tool1: '2. Primera herramienta...', tool2: '3. Segunda herramienta...', btn: 'Comparar', popular: 'Popular:', pickCat: '← Elige una categoría' },
  ar: { title: 'قارن أدوات الذكاء الاصطناعي', sub: 'اختر فئة، ثم قارن بين أداتين جنباً إلى جنب.', selectCat: '١. فئة...', tool1: '٢. الأداة الأولى...', tool2: '٣. الأداة الثانية...', btn: 'قارن', popular: 'شائع:', pickCat: '← اختر فئة أولاً' },
};

const QUICK_COMPARES = [
  { label: 'ChatGPT vs Claude', slug: 'chatgpt-vs-claude' },
  { label: 'Midjourney vs DALL-E', slug: 'midjourney-vs-dalle3' },
  { label: 'Jasper vs Writesonic', slug: 'jasper-vs-writesonic' },
  { label: 'Cursor vs Copilot', slug: 'cursor-vs-github-copilot' },
  { label: 'ElevenLabs vs Murf', slug: 'elevenlabs-vs-murf-ai' },
];

export default function CompareWidget() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const L = LABELS[locale];

  const [category, setCategory] = useState('');
  const [tool1, setTool1] = useState('');
  const [tool2, setTool2] = useState('');

  const categoryTools = useMemo(() => {
    if (!category) return [];
    return [...TOOLS_DATA]
      .filter(t => t.category === category)
      .sort((a, b) => b.views - a.views);
  }, [category]);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setTool1('');
    setTool2('');
  };

  const canCompare = tool1 && tool2 && tool1 !== tool2;

  const handleCompare = () => {
    if (canCompare) router.push(`/compare/${tool1}-vs-${tool2}` as never);
  };

  const handleQuick = (slug: string) => {
    router.push(`/compare/${slug}` as never);
  };

  return (
    <section className="w-full my-10 rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-600/25 via-fuchsia-600/10 to-cyan-500/20 p-6 md:p-8 relative overflow-hidden shadow-2xl shadow-violet-900/30">
      <div className="absolute -top-20 -right-12 w-72 h-72 bg-fuchsia-600/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-12 w-72 h-72 bg-cyan-500/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-violet-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <ArrowLeftRight className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white">{L.title}</h2>
          <p className="text-gray-400 text-xs md:text-sm">{L.sub}</p>
        </div>
      </div>

      {/* Comparator — single row: [Category] [Tool1] VS [Tool2] [Button] */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center mb-2">

        {/* Category */}
        <div className="md:col-span-2 relative">
          <select
            value={category}
            onChange={e => handleCategoryChange(e.target.value)}
            className="w-full bg-violet-500/[0.14] hover:bg-violet-500/25 border-2 border-violet-400/40 hover:border-violet-400/80 rounded-2xl pl-4 pr-10 py-3.5 text-white text-sm font-semibold focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-all cursor-pointer appearance-none"
          >
            <option value="" className="bg-[#0A0A0F]">{L.selectCat}</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id} className="bg-[#0A0A0F]">
                {cat[locale] || cat.en}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-violet-300 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Tool 1 */}
        <div className="md:col-span-2 relative">
          <select
            value={tool1}
            onChange={e => setTool1(e.target.value)}
            disabled={!category}
            className="w-full bg-indigo-500/[0.14] hover:bg-indigo-500/25 border-2 border-indigo-400/40 hover:border-indigo-400/80 rounded-2xl pl-4 pr-10 py-3.5 text-white text-sm font-semibold focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-white/[0.04] disabled:border-white/15"
          >
            <option value="" className="bg-[#0A0A0F]">{category ? L.tool1 : L.pickCat}</option>
            {categoryTools.map(t => (
              <option key={t.id} value={t.id} disabled={t.id === tool2} className="bg-[#0A0A0F]">{t.name}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Compare button (center, replaces VS) */}
        <div className="flex items-stretch justify-center">
          <button
            onClick={handleCompare}
            disabled={!canCompare}
            aria-label={L.btn}
            className={`w-full min-h-[48px] flex flex-col items-center justify-center gap-1 rounded-2xl font-black text-xs transition-all px-2 ${
              canCompare
                ? 'bg-gradient-to-tr from-violet-600 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-violet-900/40 hover:scale-105'
                : 'bg-violet-500/15 text-violet-200/60 border border-violet-500/25 cursor-not-allowed'
            }`}
          >
            <Zap className="w-4 h-4" /> {L.btn}
          </button>
        </div>

        {/* Tool 2 */}
        <div className="md:col-span-2 relative">
          <select
            value={tool2}
            onChange={e => setTool2(e.target.value)}
            disabled={!category}
            className="w-full bg-amber-500/[0.14] hover:bg-amber-500/25 border-2 border-amber-400/40 hover:border-amber-400/80 rounded-2xl pl-4 pr-10 py-3.5 text-white text-sm font-semibold focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-white/[0.04] disabled:border-white/15"
          >
            <option value="" className="bg-[#0A0A0F]">{category ? L.tool2 : L.pickCat}</option>
            {categoryTools.map(t => (
              <option key={t.id} value={t.id} disabled={t.id === tool1} className="bg-[#0A0A0F]">{t.name}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-orange-300 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Info */}
      {category && (
        <p className="text-xs text-violet-400 font-semibold mt-3">
          {categoryTools.length} {locale === 'fr' ? 'outils disponibles' : locale === 'es' ? 'herramientas disponibles' : locale === 'ar' ? 'أداة متاحة' : 'tools available'}
        </p>
      )}

      {/* Quick compare links */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="text-xs text-gray-500 font-medium">{L.popular}</span>
        {QUICK_COMPARES.map(({ label, slug }) => (
          <button key={slug} onClick={() => handleQuick(slug)}
            className="text-xs text-gray-400 hover:text-white border border-white/[0.06] hover:border-violet-500/40 hover:bg-violet-500/10 rounded-full px-3 py-1 transition-all">
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

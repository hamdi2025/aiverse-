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
    <section className="w-full my-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 via-white to-orange-50 p-6 md:p-8 relative overflow-hidden shadow-lg shadow-gray-200/70">
      <div className="absolute -top-20 -right-12 w-72 h-72 bg-sky-200/50 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-12 w-72 h-72 bg-orange-200/50 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-fuchsia-200/40 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <ArrowLeftRight className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black text-gray-900">{L.title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">{L.sub}</p>
        </div>
      </div>

      {/* Comparator — single row: [Category] [Tool1] VS [Tool2] [Button] */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center mb-2">

        {/* Category */}
        <div className="md:col-span-2 relative">
          <select
            value={category}
            onChange={e => handleCategoryChange(e.target.value)}
            className="w-full bg-sky-100 hover:bg-sky-200 border-2 border-sky-400 hover:border-sky-500 rounded-2xl pl-4 pr-10 py-3.5 text-gray-900 text-sm font-bold focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-400/60 transition-all cursor-pointer appearance-none"
          >
            <option value="" className="bg-white text-gray-900">{L.selectCat}</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id} className="bg-white text-gray-900">
                {cat[locale] || cat.en}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-sky-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Tool 1 */}
        <div className="md:col-span-2 relative">
          <select
            value={tool1}
            onChange={e => setTool1(e.target.value)}
            disabled={!category}
            className="w-full bg-orange-100 hover:bg-orange-200 border-2 border-orange-400 hover:border-orange-500 rounded-2xl pl-4 pr-10 py-3.5 text-gray-900 text-sm font-bold focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-400/60 transition-all cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-200"
          >
            <option value="" className="bg-white text-gray-900">{category ? L.tool1 : L.pickCat}</option>
            {categoryTools.map(t => (
              <option key={t.id} value={t.id} disabled={t.id === tool2} className="bg-white text-gray-900">{t.name}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-orange-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Compare button (center, replaces VS) */}
        <div className="flex items-stretch justify-center">
          <button
            onClick={handleCompare}
            disabled={!canCompare}
            aria-label={L.btn}
            className={`w-full min-h-[48px] flex flex-col items-center justify-center gap-1 rounded-2xl font-black text-xs px-2 ${
              canCompare
                ? 'compare-attract shadow-lg hover:opacity-90'
                : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed transition-all'
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
            className="w-full bg-yellow-100 hover:bg-yellow-200 border-2 border-yellow-400 hover:border-yellow-500 rounded-2xl pl-4 pr-10 py-3.5 text-gray-900 text-sm font-bold focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/60 transition-all cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-200"
          >
            <option value="" className="bg-white text-gray-900">{category ? L.tool2 : L.pickCat}</option>
            {categoryTools.map(t => (
              <option key={t.id} value={t.id} disabled={t.id === tool1} className="bg-white text-gray-900">{t.name}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-yellow-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Info */}
      {category && (
        <p className="text-xs text-violet-600 font-semibold mt-3">
          {categoryTools.length} {locale === 'fr' ? 'outils disponibles' : locale === 'es' ? 'herramientas disponibles' : locale === 'ar' ? 'أداة متاحة' : 'tools available'}
        </p>
      )}

      {/* Quick compare links */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="text-xs text-gray-600 font-medium">{L.popular}</span>
        {QUICK_COMPARES.map(({ label, slug }) => (
          <button key={slug} onClick={() => handleQuick(slug)}
            className="text-xs font-semibold text-gray-700 hover:text-white border border-gray-200 hover:border-violet-500 hover:bg-violet-500 rounded-full px-3 py-1 transition-all">
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

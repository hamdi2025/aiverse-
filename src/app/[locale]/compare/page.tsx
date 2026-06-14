'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Zap, Shuffle, ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { TOOLS_DATA } from '@/lib/tools';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const CATEGORIES = [
  { id: 'agents',       en: '🤖 AI Agents',         fr: '🤖 Agents IA',           es: '🤖 Agentes IA',          ar: '🤖 وكلاء الذكاء الاصطناعي' },
  { id: 'writing',      en: '✍️ Writing & LLMs',    fr: '✍️ Écriture & LLMs',     es: '✍️ Escritura & LLMs',    ar: '✍️ الكتابة' },
  { id: 'image',        en: '🎨 Image & Art',        fr: '🎨 Image & Art',          es: '🎨 Imagen & Arte',        ar: '🎨 الصور' },
  { id: 'code',         en: '💻 Code & Dev',         fr: '💻 Code & Dev',           es: '💻 Código & Dev',         ar: '💻 البرمجة' },
  { id: 'video',        en: '🎬 Video & Motion',     fr: '🎬 Vidéo & Motion',       es: '🎬 Video & Motion',       ar: '🎬 الفيديو' },
  { id: 'audio',        en: '🎙️ Audio & Music',     fr: '🎙️ Audio & Musique',     es: '🎙️ Audio & Música',      ar: '🎙️ الصوت' },
  { id: 'marketing',    en: '📈 Marketing & Growth', fr: '📈 Marketing & Croissance',es: '📈 Marketing & Crecimiento', ar: '📈 التسويق' },
  { id: 'productivity', en: '⚡ Productivity',       fr: '⚡ Productivité',          es: '⚡ Productividad',         ar: '⚡ الإنتاجية' },
  { id: 'seo',          en: '🔍 SEO & Search',       fr: '🔍 SEO & Recherche',      es: '🔍 SEO & Búsqueda',       ar: '🔍 السيو' },
  { id: 'socialmedia',  en: '📱 Social Media',       fr: '📱 Réseaux Sociaux',      es: '📱 Redes Sociales',       ar: '📱 التواصل الاجتماعي' },
  { id: 'chatbots',     en: '💬 Chatbots & Support', fr: '💬 Chatbots & Support',   es: '💬 Chatbots & Soporte',   ar: '💬 الدردشة' },
  { id: 'data',         en: '📊 Data & Analytics',   fr: '📊 Données & Analytics',  es: '📊 Datos & Analytics',    ar: '📊 البيانات' },
  { id: 'design3d',     en: '🎯 3D & Design',        fr: '🎯 3D & Design',          es: '🎯 3D & Diseño',          ar: '🎯 التصميم' },
  { id: 'slides',       en: '📊 Slides & Presentations', fr: '📊 Présentations',   es: '📊 Presentaciones',       ar: '📊 العروض' },
  { id: 'excel',        en: '📋 Excel & Spreadsheets', fr: '📋 Excel & Tableurs',   es: '📋 Excel & Hojas',        ar: '📋 الجداول' },
  { id: 'translation',  en: '🌐 Translation',        fr: '🌐 Traduction',           es: '🌐 Traducción',           ar: '🌐 الترجمة' },
  { id: 'finance',      en: '💰 Finance & Business', fr: '💰 Finance & Business',   es: '💰 Finanzas & Negocio',   ar: '💰 المالية' },
  { id: 'legal',        en: '⚖️ Legal & Compliance', fr: '⚖️ Juridique',           es: '⚖️ Legal',                ar: '⚖️ القانوني' },
  { id: 'hr',           en: '👥 HR & Recruitment',   fr: '👥 RH & Recrutement',     es: '👥 RRHH & Reclutamiento', ar: '👥 الموارد البشرية' },
  { id: 'cybersecurity',en: '🔐 Cybersecurity',      fr: '🔐 Cybersécurité',        es: '🔐 Ciberseguridad',       ar: '🔐 الأمن السيبراني' },
  { id: 'pdf',          en: '📄 PDF & Documents',    fr: '📄 PDF & Documents',      es: '📄 PDF & Documentos',     ar: '📄 PDF والمستندات' },
  { id: 'elearning',    en: '🎓 E-Learning',         fr: '🎓 E-Learning',           es: '🎓 E-Learning',           ar: '🎓 التعلم الإلكتروني' },
  { id: 'projectmgmt',  en: '📌 Project Management', fr: '📌 Gestion de Projet',    es: '📌 Gestión de Proyectos', ar: '📌 إدارة المشاريع' },
  { id: 'mindmap',      en: '🧠 MindMap & Brainstorm', fr: '🧠 MindMap',            es: '🧠 MindMap',              ar: '🧠 الخرائط الذهنية' },
  { id: 'travel',       en: '✈️ Travel & Flights',  fr: '✈️ Voyage & Vols',        es: '✈️ Viajes & Vuelos',      ar: '✈️ السفر' },
  { id: 'contract',     en: '📝 Contract Management', fr: '📝 Gestion Contrats',    es: '📝 Gestión Contratos',    ar: '📝 إدارة العقود' },
  { id: 'compression',  en: '🗜️ File Compression',  fr: '🗜️ Compression',         es: '🗜️ Compresión',          ar: '🗜️ الضغط' },
  { id: 'conversion',   en: '🔄 File Conversion',    fr: '🔄 Conversion',           es: '🔄 Conversión',           ar: '🔄 التحويل' },
];

const POPULAR = [
  { slug: 'chatgpt-vs-claude', emoji: '🤖', cat: 'agents' },
  { slug: 'chatgpt-vs-gemini', emoji: '🧠', cat: 'agents' },
  { slug: 'midjourney-vs-dalle3', emoji: '🎨', cat: 'image' },
  { slug: 'jasper-vs-writesonic', emoji: '✍️', cat: 'writing' },
  { slug: 'cursor-vs-github-copilot', emoji: '💻', cat: 'code' },
  { slug: 'elevenlabs-vs-murf-ai', emoji: '🎙️', cat: 'audio' },
];

// Featured AI Agent comparisons (agent-vs-agent)
const POPULAR_AGENTS = [
  { slug: 'autogpt-vs-agentgpt', emoji: '🤖', cat: 'agents' },
  { slug: 'langchain-vs-crewai', emoji: '🔗', cat: 'agents' },
  { slug: 'crewai-vs-autogen', emoji: '👥', cat: 'agents' },
  { slug: 'n8n-ai-vs-flowise', emoji: '⚙️', cat: 'agents' },
  { slug: 'dify-vs-flowise', emoji: '🛠️', cat: 'agents' },
  { slug: 'langchain-vs-autogen', emoji: '🧩', cat: 'agents' },
];

const T: Record<Locale, { badge: string; title: string; subtitle: string; step1: string; step2: string; step3: string; selectCat: string; tool1: string; tool2: string; compare: string; popular: string; random: string; samecat: string }> = {
  en: { badge: 'AI Tool Comparisons', title: 'Compare AI Tools', subtitle: 'Select a category, then pick two tools to compare side by side.', step1: '1. Choose a category', step2: '2. First tool', step3: '3. Second tool', selectCat: 'Select a category...', tool1: 'Select first tool...', tool2: 'Select second tool...', compare: 'Compare Now →', popular: 'Popular Comparisons', random: 'Random', samecat: 'Only tools from the same category are compared.' },
  fr: { badge: 'Comparaisons d\'outils IA', title: 'Comparer les Outils IA', subtitle: 'Sélectionnez une catégorie, puis choisissez deux outils à comparer côte à côte.', step1: '1. Choisir une catégorie', step2: '2. Premier outil', step3: '3. Deuxième outil', selectCat: 'Sélectionnez une catégorie...', tool1: 'Premier outil...', tool2: 'Deuxième outil...', compare: 'Comparer →', popular: 'Comparaisons populaires', random: 'Aléatoire', samecat: 'Seuls les outils de la même catégorie sont comparés.' },
  es: { badge: 'Comparaciones IA', title: 'Comparar Herramientas IA', subtitle: 'Selecciona una categoría, luego elige dos herramientas para comparar.', step1: '1. Elegir categoría', step2: '2. Primera herramienta', step3: '3. Segunda herramienta', selectCat: 'Selecciona una categoría...', tool1: 'Primera herramienta...', tool2: 'Segunda herramienta...', compare: 'Comparar →', popular: 'Comparaciones populares', random: 'Aleatorio', samecat: 'Solo se comparan herramientas de la misma categoría.' },
  ar: { badge: 'مقارنات الذكاء الاصطناعي', title: 'قارن أدوات الذكاء الاصطناعي', subtitle: 'اختر فئة، ثم حدد أداتين للمقارنة جنباً إلى جنب.', step1: '١. اختر فئة', step2: '٢. الأداة الأولى', step3: '٣. الأداة الثانية', selectCat: 'اختر فئة...', tool1: 'الأداة الأولى...', tool2: 'الأداة الثانية...', compare: 'قارن الآن ←', popular: 'المقارنات الشائعة', random: 'عشوائي', samecat: 'تتم المقارنة فقط بين أدوات من نفس الفئة.' },
};

export default function ComparePage() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const t = T[locale] || T.en;

  const [category, setCategory] = useState('');
  const [tool1, setTool1] = useState('');
  const [tool2, setTool2] = useState('');

  // Tools filtered by selected category
  const categoryTools = useMemo(() => {
    if (!category) return [];
    return [...TOOLS_DATA]
      .filter(t => t.category === category)
      .sort((a, b) => b.views - a.views);
  }, [category]);

  const canCompare = tool1 && tool2 && tool1 !== tool2;

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setTool1('');
    setTool2('');
  };

  const handleCompare = () => {
    if (canCompare) router.push(`/${locale}/compare/${tool1}-vs-${tool2}`);
  };

  const handleRandom = () => {
    // Pick a random category with enough tools
    const richCats = CATEGORIES.filter(c =>
      TOOLS_DATA.filter(t => t.category === c.id).length >= 2
    );
    const cat = richCats[Math.floor(Math.random() * richCats.length)];
    const pool = TOOLS_DATA.filter(t => t.category === cat.id).sort((a, b) => b.views - a.views).slice(0, 20);
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
        <p className="text-gray-400 max-w-xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Comparator — single row: [Category] [Tool1] VS [Tool2] [Button] */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">

        {/* Labels row */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-1">
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.step1}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.step2}</p>
          </div>
          <div className="hidden md:flex items-center justify-center" />
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.step3}</p>
          </div>
        </div>

        {/* Selects row */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center mb-4">

          {/* Category */}
          <div className="md:col-span-2 relative">
            <select
              value={category}
              onChange={e => handleCategoryChange(e.target.value)}
              className="w-full bg-white/[0.05] hover:bg-white/[0.08] border-2 border-white/15 hover:border-violet-500/40 rounded-2xl pl-4 pr-10 py-3.5 text-white text-sm font-semibold focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 appearance-none cursor-pointer transition-all"
            >
              <option value="">{t.selectCat}</option>
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
              className="w-full bg-white/[0.05] hover:bg-white/[0.08] border-2 border-white/15 hover:border-violet-500/40 rounded-2xl pl-4 pr-10 py-3.5 text-white text-sm font-semibold focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 appearance-none cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/[0.05]"
            >
              <option value="">{category ? t.tool1 : '← ' + t.step1}</option>
              {categoryTools.map(tool => (
                <option key={tool.id} value={tool.id} disabled={tool.id === tool2} className="bg-[#0A0A0F]">
                  {tool.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Compare button (center) */}
          <div className="flex items-stretch justify-center">
            <button
              onClick={handleCompare}
              disabled={!canCompare}
              aria-label={t.compare}
              className={`w-full min-h-[52px] flex flex-col items-center justify-center gap-1 rounded-2xl font-black text-xs transition-all px-2 ${
                canCompare
                  ? 'bg-gradient-to-tr from-violet-600 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-violet-900/40 hover:scale-105'
                  : 'bg-white/5 text-gray-600 cursor-not-allowed'
              }`}
            >
              <Zap className="w-4 h-4" />
              {locale === 'fr' ? 'Comparer' : locale === 'es' ? 'Comparar' : locale === 'ar' ? 'قارن' : 'Compare'}
            </button>
          </div>

          {/* Tool 2 */}
          <div className="md:col-span-2 relative">
            <select
              value={tool2}
              onChange={e => setTool2(e.target.value)}
              disabled={!category}
              className="w-full bg-white/[0.05] hover:bg-white/[0.08] border-2 border-white/15 hover:border-orange-500/40 rounded-2xl pl-4 pr-10 py-3.5 text-white text-sm font-semibold focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 appearance-none cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/[0.05]"
            >
              <option value="">{category ? t.tool2 : '← ' + t.step1}</option>
              {categoryTools.map(tool => (
                <option key={tool.id} value={tool.id} disabled={tool.id === tool1} className="bg-[#0A0A0F]">
                  {tool.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-orange-300 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Info */}
        {category && (
          <p className="text-xs text-violet-400 font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
            {categoryTools.length} {locale === 'fr' ? 'outils' : locale === 'es' ? 'herramientas' : locale === 'ar' ? 'أداة' : 'tools'} · {t.samecat}
          </p>
        )}

        {/* Secondary action */}
        <div className="flex">
          <button
            onClick={handleRandom}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-sm font-semibold transition"
          >
            <Shuffle className="w-4 h-4" /> {t.random}
          </button>
        </div>
      </div>

      {/* Popular comparisons */}
      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">{t.popular}</p>
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

      {/* Featured AI Agent comparisons */}
      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-12 mb-5">
        🤖 {locale === 'fr' ? "Comparaisons d'agents IA" : locale === 'es' ? 'Comparativas de agentes IA' : locale === 'ar' ? 'مقارنات وكلاء الذكاء الاصطناعي' : 'AI Agent Comparisons'}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {POPULAR_AGENTS.map(({ slug, emoji }) => {
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

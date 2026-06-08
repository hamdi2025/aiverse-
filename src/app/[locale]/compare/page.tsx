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
          <div className="md:col-span-2">
            <select
              value={category}
              onChange={e => handleCategoryChange(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-violet-500 appearance-none"
            >
              <option value="">{t.selectCat}</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id} className="bg-[#0A0A0F]">
                  {cat[locale] || cat.en}
                </option>
              ))}
            </select>
          </div>

          {/* Tool 1 */}
          <div className="md:col-span-2">
            <select
              value={tool1}
              onChange={e => setTool1(e.target.value)}
              disabled={!category}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-violet-500 appearance-none disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <option value="">{category ? t.tool1 : '← ' + t.step1}</option>
              {categoryTools.map(tool => (
                <option key={tool.id} value={tool.id} disabled={tool.id === tool2} className="bg-[#0A0A0F]">
                  {tool.name}
                </option>
              ))}
            </select>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center">
            <span className="text-gray-500 font-black text-base">VS</span>
          </div>

          {/* Tool 2 */}
          <div className="md:col-span-2">
            <select
              value={tool2}
              onChange={e => setTool2(e.target.value)}
              disabled={!category}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-violet-500 appearance-none disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <option value="">{category ? t.tool2 : '← ' + t.step1}</option>
              {categoryTools.map(tool => (
                <option key={tool.id} value={tool.id} disabled={tool.id === tool1} className="bg-[#0A0A0F]">
                  {tool.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Info */}
        {category && (
          <p className="text-xs text-violet-400 font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
            {categoryTools.length} tools · {t.samecat}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleCompare}
            disabled={!canCompare}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition ${
              canCompare
                ? 'bg-violet-600 hover:bg-violet-500 text-white'
                : 'bg-white/5 text-gray-600 cursor-not-allowed'
            }`}
          >
            <ArrowRight className="w-4 h-4" /> {t.compare}
          </button>
          <button
            onClick={handleRandom}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-sm font-semibold transition"
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
    </div>
  );
}

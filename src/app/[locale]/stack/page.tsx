'use client';

import React, { useState, useMemo } from 'react';
import { Plus, Trash2, Share2, Download, Zap, Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { TOOLS_DATA, AITool } from '@/lib/tools';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const CATEGORIES = [
  { id: 'all', en: 'All', fr: 'Tout', es: 'Todo', ar: 'الكل', emoji: '🔥' },
  { id: 'writing', en: 'Writing', fr: 'Écriture', es: 'Escritura', ar: 'كتابة', emoji: '✍️' },
  { id: 'image', en: 'Image', fr: 'Image', es: 'Imagen', ar: 'صورة', emoji: '🎨' },
  { id: 'code', en: 'Code', fr: 'Code', es: 'Código', ar: 'برمجة', emoji: '💻' },
  { id: 'video', en: 'Video', fr: 'Vidéo', es: 'Video', ar: 'فيديو', emoji: '🎬' },
  { id: 'agents', en: 'Agents', fr: 'Agents', es: 'Agentes', ar: 'وكلاء', emoji: '🤖' },
  { id: 'productivity', en: 'Productivity', fr: 'Productivité', es: 'Productividad', ar: 'إنتاجية', emoji: '⚡' },
  { id: 'marketing', en: 'Marketing', fr: 'Marketing', es: 'Marketing', ar: 'تسويق', emoji: '📈' },
  { id: 'audio', en: 'Audio', fr: 'Audio', es: 'Audio', ar: 'صوت', emoji: '🎙️' },
  { id: 'seo', en: 'SEO', fr: 'SEO', es: 'SEO', ar: 'سيو', emoji: '🔍' },
];

const T = {
  en: {
    badge: 'AI Stack Builder',
    title: 'Build Your',
    titleHighlight: 'AI Stack',
    subtitle: 'Pick the best AI tools for your workflow. Build, save and share your personal AI toolkit.',
    searchPlaceholder: 'Search tools...',
    yourStack: 'Your Stack',
    emptyStack: 'Add tools to build your stack',
    emptyStackSub: 'Click + on any tool to add it',
    share: 'Share Stack',
    clear: 'Clear all',
    copied: 'Link copied!',
    toolsCount: (n: number) => `${n} tools selected`,
    addTool: 'Add',
    remove: 'Remove',
    free: 'FREE',
    totalCost: 'Est. monthly cost',
    free_total: 'Free',
  },
  fr: {
    badge: 'Constructeur de Stack IA',
    title: 'Construisez Votre',
    titleHighlight: 'Stack IA',
    subtitle: 'Choisissez les meilleurs outils IA pour votre workflow. Construisez et partagez votre boîte à outils IA.',
    searchPlaceholder: 'Rechercher des outils...',
    yourStack: 'Votre Stack',
    emptyStack: 'Ajoutez des outils pour construire votre stack',
    emptyStackSub: 'Cliquez + sur n\'importe quel outil pour l\'ajouter',
    share: 'Partager',
    clear: 'Tout effacer',
    copied: 'Lien copié !',
    toolsCount: (n: number) => `${n} outils sélectionnés`,
    addTool: 'Ajouter',
    remove: 'Retirer',
    free: 'GRATUIT',
    totalCost: 'Coût mensuel est.',
    free_total: 'Gratuit',
  },
  es: {
    badge: 'Constructor de Stack IA',
    title: 'Construye Tu',
    titleHighlight: 'Stack IA',
    subtitle: 'Elige las mejores herramientas IA para tu flujo de trabajo. Construye y comparte tu kit de herramientas IA.',
    searchPlaceholder: 'Buscar herramientas...',
    yourStack: 'Tu Stack',
    emptyStack: 'Añade herramientas para construir tu stack',
    emptyStackSub: 'Haz clic en + en cualquier herramienta para añadirla',
    share: 'Compartir',
    clear: 'Borrar todo',
    copied: '¡Enlace copiado!',
    toolsCount: (n: number) => `${n} herramientas seleccionadas`,
    addTool: 'Añadir',
    remove: 'Quitar',
    free: 'GRATIS',
    totalCost: 'Costo mensual est.',
    free_total: 'Gratis',
  },
  ar: {
    badge: 'بناء مجموعة أدوات الذكاء الاصطناعي',
    title: 'ابنِ',
    titleHighlight: 'مجموعتك الذكية',
    subtitle: 'اختر أفضل أدوات الذكاء الاصطناعي لسير عملك. ابنِ وشارك مجموعة أدواتك الشخصية.',
    searchPlaceholder: 'ابحث عن أدوات...',
    yourStack: 'مجموعتك',
    emptyStack: 'أضف أدوات لبناء مجموعتك',
    emptyStackSub: 'انقر + على أي أداة لإضافتها',
    share: 'مشاركة',
    clear: 'مسح الكل',
    copied: 'تم نسخ الرابط!',
    toolsCount: (n: number) => `${n} أدوات مختارة`,
    addTool: 'أضف',
    remove: 'أزل',
    free: 'مجاني',
    totalCost: 'التكلفة الشهرية التقديرية',
    free_total: 'مجاني',
  },
};

function parsePriceToNumber(pricing: string, pricingLocalized: { en: string }): number {
  if (pricing === 'Free') return 0;
  const match = pricingLocalized.en.match(/\$(\d+(?:\.\d+)?)/g);
  if (!match) return 0;
  const nums = match.map(m => parseFloat(m.replace('$', '')));
  return Math.min(...nums);
}

export default function StackPage() {
  const locale = useLocale() as Locale;
  const t = T[locale] || T.en;

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(() => {
    let tools = TOOLS_DATA;
    if (category !== 'all') tools = tools.filter(t => t.category === category);
    if (search) tools = tools.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
    return tools.slice(0, 40);
  }, [category, search]);

  const stackTools = useMemo(() =>
    selectedIds.map(id => TOOLS_DATA.find(t => t.id === id)).filter(Boolean) as AITool[],
    [selectedIds]
  );

  const totalCost = useMemo(() =>
    stackTools.reduce((sum, t) => sum + parsePriceToNumber(t.pricing, t.pricingLocalized), 0),
    [stackTools]
  );

  const toggle = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleShare = () => {
    const url = `${window.location.origin}/${locale}/stack?tools=${selectedIds.join(',')}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 bg-violet-600/20 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          <Zap className="w-3 h-3" /> {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
          {t.title}{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.titleHighlight}
          </span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left — Tool picker */}
        <div className="lg:col-span-2">
          {/* Search */}
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 mb-4"
          />

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap mb-6">
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => setCategory(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                  category === cat.id
                    ? 'bg-violet-600 border-violet-500 text-white'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:text-gray-900'
                }`}>
                {cat.emoji} {cat[locale] || cat.en}
              </button>
            ))}
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.map(tool => {
              const isSelected = selectedIds.includes(tool.id);
              return (
                <div key={tool.id}
                  className={`flex items-center justify-between gap-3 p-3 rounded-xl border transition ${
                    isSelected
                      ? 'bg-violet-600/10 border-violet-500/40'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-200'
                  }`}>
                  <div className="min-w-0">
                    <p className="text-gray-900 text-sm font-semibold truncate">{tool.name}</p>
                    <p className="text-gray-500 text-xs truncate">{tool.pricingLocalized[locale]}</p>
                  </div>
                  <button onClick={() => toggle(tool.id)}
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition ${
                      isSelected
                        ? 'bg-violet-600 text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-violet-600/30 hover:text-white'
                    }`}>
                    {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — Stack panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900 font-bold text-lg">{t.yourStack}</h2>
              {selectedIds.length > 0 && (
                <button onClick={() => setSelectedIds([])}
                  className="text-xs text-gray-500 hover:text-red-700 transition">
                  {t.clear}
                </button>
              )}
            </div>

            {stackTools.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-4xl mb-3">🧰</p>
                <p className="text-gray-600 text-sm">{t.emptyStack}</p>
                <p className="text-gray-600 text-xs mt-1">{t.emptyStackSub}</p>
              </div>
            ) : (
              <>
                <div className="space-y-2 mb-6 max-h-80 overflow-y-auto pr-1">
                  {stackTools.map(tool => (
                    <div key={tool.id} className="flex items-center justify-between gap-2 bg-gray-50 rounded-xl px-3 py-2.5">
                      <div className="min-w-0">
                        <p className="text-gray-900 text-sm font-semibold truncate">{tool.name}</p>
                        <p className="text-gray-500 text-xs">{tool.pricing === 'Free' ? t.free : tool.pricingLocalized[locale]}</p>
                      </div>
                      <button onClick={() => toggle(tool.id)}
                        className="shrink-0 w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/30 text-red-700 flex items-center justify-center transition">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Cost summary */}
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">{t.totalCost}</span>
                    <span className="text-gray-900 font-black">
                      {totalCost === 0 ? t.free_total : `$${totalCost}/mo`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-600 text-sm">{t.toolsCount(stackTools.length)}</span>
                  </div>
                </div>

                {/* Share button */}
                <button onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm rounded-xl transition">
                  {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  {copied ? t.copied : t.share}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

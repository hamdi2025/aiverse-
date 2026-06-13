import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import { TOOLS_DATA } from '@/lib/tools';
import { TOP_ALTERNATIVES } from '@/lib/alternatives';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const CATEGORY_EMOJI: Record<string, string> = {
  agents: '🤖', writing: '✍️', image: '🎨', code: '💻', video: '🎬', audio: '🎙️',
  marketing: '📈', productivity: '⚡', seo: '🔍', socialmedia: '📱', chatbots: '💬',
  data: '📊', design3d: '🎯', slides: '📊', excel: '📋', translation: '🌐',
  finance: '💰', legal: '⚖️', hr: '👥', cybersecurity: '🔐', pdf: '📄',
  elearning: '🎓', projectmgmt: '📌', mindmap: '🧠', travel: '✈️',
  contract: '📝', compression: '🗜️', conversion: '🔄',
};

const T: Record<Locale, { badge: string; title: string; subtitle: string; popular: string }> = {
  en: { badge: 'AI Tool Alternatives', title: 'Find the Best AI Tool Alternatives', subtitle: 'Not happy with a popular AI tool? Discover ranked, free and paid alternatives for the most-searched AI tools in 2026.', popular: 'Popular Alternative Guides' },
  fr: { badge: 'Alternatives Outils IA', title: 'Trouvez les Meilleures Alternatives IA', subtitle: 'Pas satisfait d\'un outil IA populaire ? Découvrez des alternatives classées, gratuites et payantes, pour les outils IA les plus recherchés en 2026.', popular: 'Guides d\'alternatives populaires' },
  es: { badge: 'Alternativas de Herramientas IA', title: 'Encuentra las Mejores Alternativas IA', subtitle: '¿No estás satisfecho con una herramienta IA popular? Descubre alternativas clasificadas, gratuitas y de pago, para las herramientas IA más buscadas en 2026.', popular: 'Guías de alternativas populares' },
  ar: { badge: 'بدائل أدوات الذكاء الاصطناعي', title: 'اعثر على أفضل بدائل أدوات الذكاء الاصطناعي', subtitle: 'غير راضٍ عن أداة ذكاء اصطناعي شائعة؟ اكتشف بدائل مصنفة، مجانية ومدفوعة، لأكثر أدوات الذكاء الاصطناعي بحثًا في 2026.', popular: 'دلائل البدائل الشائعة' },
};

export default function AlternativesHubPage({ params }: Props) {
  const locale = params.locale;
  const t = T[locale] || T.en;

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-violet-600/20 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          <Layers className="w-3 h-3" /> {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{t.title}</h1>
        <p className="text-gray-400 max-w-xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Popular alternative guides */}
      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">{t.popular}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {TOP_ALTERNATIVES.map((slug) => {
          const toolId = slug.replace(/-alternatives$/, '');
          const tool = TOOLS_DATA.find((t) => t.id === toolId);
          if (!tool) return null;
          return (
            <Link key={slug} href={`/${locale}/alternatives/${slug}`}
              className="group flex items-center justify-between gap-3 bg-white/5 hover:bg-violet-600/10 border border-white/10 hover:border-violet-500/40 rounded-2xl px-5 py-4 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{CATEGORY_EMOJI[tool.category] || '🛠️'}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{tool.name}</p>
                  <p className="text-gray-500 text-xs capitalize">{tool.category}</p>
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

'use client';

import React, { useState } from 'react';
import { Check, Zap, Star, Crown, ArrowRight, Mail, Bot } from 'lucide-react';
import GradientText from '@/components/ui/GradientText';
import { useLocale } from 'next-intl';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const T = {
  en: {
    badge: 'Submit Your AI Tool or Agent',
    title: 'Reach',
    titleHighlight: '70,000+ Builders',
    titleEnd: 'Monthly',
    subtitle: 'List your AI tool or AI Agent on AIverse and get discovered by developers, creators, and companies actively searching for AI solutions.',
    mostPopular: 'Most Popular',
    bestRoi: '🔥 Best ROI',
    freeName: 'Basic Listing', freePriceLabel: 'Free',
    freeFeatures: ['Listed in the directory', 'Standard card display', 'Clickable outbound link', 'Visible in search results'],
    freeCta: 'Submit for Free',
    stdName: 'Standard', stdPriceLabel: '$49',
    stdFeatures: ['Everything in Basic', '"Featured" badge on card', 'Priority in search results', 'Listed in weekly newsletter', '3-month visibility boost'],
    stdCta: 'Get Standard →',
    featName: 'Featured Sponsor', featPriceLabel: '$99/mo',
    featFeatures: ['Everything in Standard', '"Sponsor" gold badge', 'Homepage hero placement', 'Dedicated weekly spotlight', 'Permanent do-follow backlink', 'Monthly analytics report', 'Social media mention'],
    featCta: 'Become a Sponsor →',
    contactSubject: 'AIverse Standard Listing',
    contactSubjectFeat: 'AIverse Featured Sponsor',
    freeFormTitle: 'Free Basic Submission',
    agentFormTitle: '🤖 Submit an AI Agent',
    agentBadge: 'New — AI Agents',
    agentSubtitle: 'Have you built an autonomous AI Agent? List it in our dedicated Agents section.',
    agentCta: 'Submit My AI Agent',
    toolLabel: 'Tool / Agent Name *', urlLabel: 'Website URL *', catLabel: 'Type *', emailLabel: 'Your Email *', descLabel: 'Short Description *',
    toolPlaceholder: 'e.g. SuperAgent', urlPlaceholder: 'https://youragent.com', descPlaceholder: 'What does it do in 1-2 sentences?',
    catOptions: { tool: 'AI Tool', agent: 'AI Agent', both: 'AI Tool + Agent' },
    submitBtn: 'Submit for Review',
    successTitle: 'Submitted! 🎉', successDesc: "We'll review and publish within 24–48h.",
    fine: 'Free submissions are reviewed within 48h. We reserve the right to decline off-topic tools.',
  },
  fr: {
    badge: 'Soumettre un Outil ou Agent IA',
    title: 'Atteignez',
    titleHighlight: '70 000+ Créateurs',
    titleEnd: 'par Mois',
    subtitle: 'Listez votre outil IA ou Agent IA sur AIverse et soyez découvert par des développeurs, créateurs et entreprises à la recherche de solutions IA.',
    mostPopular: 'Le plus populaire',
    bestRoi: '🔥 Meilleur ROI',
    freeName: 'Listing Basique', freePriceLabel: 'Gratuit',
    freeFeatures: ['Listé dans le répertoire', 'Carte standard', 'Lien cliquable', 'Visible dans les recherches'],
    freeCta: 'Soumettre gratuitement',
    stdName: 'Standard', stdPriceLabel: '49$',
    stdFeatures: ["Tout ce qu'il y a dans Basique", 'Badge "Featured" sur la carte', 'Priorité dans les résultats', 'Inclus dans la newsletter hebdo', 'Visibilité boostée 3 mois'],
    stdCta: 'Obtenir Standard →',
    featName: 'Sponsor Vedette', featPriceLabel: '99$/mois',
    featFeatures: ["Tout ce qu'il y a dans Standard", 'Badge or "Sponsor"', 'Placement hero en page d\'accueil', 'Spotlight hebdomadaire dédié', 'Lien do-follow permanent', 'Rapport analytics mensuel', 'Mention sur les réseaux sociaux'],
    featCta: 'Devenir Sponsor →',
    contactSubject: 'AIverse Listing Standard',
    contactSubjectFeat: 'AIverse Sponsor Vedette',
    freeFormTitle: 'Soumission Gratuite',
    agentFormTitle: '🤖 Soumettre un Agent IA',
    agentBadge: 'Nouveau — Agents IA',
    agentSubtitle: 'Vous avez créé un Agent IA autonome ? Listez-le dans notre section dédiée aux Agents.',
    agentCta: 'Soumettre mon Agent IA',
    toolLabel: 'Nom de l\'outil / Agent *', urlLabel: 'URL du site *', catLabel: 'Type *', emailLabel: 'Votre Email *', descLabel: 'Description courte *',
    toolPlaceholder: 'ex. SuperAgent', urlPlaceholder: 'https://votreagent.com', descPlaceholder: 'Que fait-il en 1-2 phrases?',
    catOptions: { tool: 'Outil IA', agent: 'Agent IA', both: 'Outil IA + Agent' },
    submitBtn: 'Soumettre pour révision',
    successTitle: 'Soumis ! 🎉', successDesc: 'Nous examinerons et publierons sous 24-48h.',
    fine: 'Les soumissions gratuites sont examinées sous 48h. Nous nous réservons le droit de refuser les outils hors-sujet.',
  },
  es: {
    badge: 'Enviar una Herramienta o Agente IA',
    title: 'Llega a',
    titleHighlight: '70.000+ Creadores',
    titleEnd: 'al Mes',
    subtitle: 'Lista tu herramienta IA o Agente IA en AIverse y sé descubierto por desarrolladores, creadores y empresas que buscan soluciones IA.',
    mostPopular: 'Más popular',
    bestRoi: '🔥 Mejor ROI',
    freeName: 'Listado Básico', freePriceLabel: 'Gratis',
    freeFeatures: ['Listado en el directorio', 'Tarjeta estándar', 'Enlace clicable', 'Visible en búsquedas'],
    freeCta: 'Enviar gratis',
    stdName: 'Estándar', stdPriceLabel: '$49',
    stdFeatures: ['Todo lo de Básico', 'Badge "Featured" en tarjeta', 'Prioridad en resultados', 'En el boletín semanal', 'Visibilidad 3 meses'],
    stdCta: 'Obtener Estándar →',
    featName: 'Sponsor Destacado', featPriceLabel: '$99/mes',
    featFeatures: ['Todo lo de Estándar', 'Badge dorado "Sponsor"', 'Colocación en hero', 'Spotlight semanal dedicado', 'Enlace do-follow permanente', 'Informe mensual de analíticas', 'Mención en redes sociales'],
    featCta: 'Convertirse en Sponsor →',
    contactSubject: 'AIverse Listado Estándar',
    contactSubjectFeat: 'AIverse Sponsor Destacado',
    freeFormTitle: 'Envío Gratuito',
    agentFormTitle: '🤖 Enviar un Agente IA',
    agentBadge: 'Nuevo — Agentes IA',
    agentSubtitle: '¿Has creado un Agente IA autónomo? Listalo en nuestra sección dedicada a Agentes.',
    agentCta: 'Enviar mi Agente IA',
    toolLabel: 'Nombre del Agente *', urlLabel: 'URL del sitio *', catLabel: 'Tipo *', emailLabel: 'Tu Email *', descLabel: 'Descripción breve *',
    toolPlaceholder: 'ej. SuperAgente', urlPlaceholder: 'https://tuagente.com', descPlaceholder: '¿Qué hace en 1-2 frases?',
    catOptions: { tool: 'Herramienta IA', agent: 'Agente IA', both: 'Herramienta + Agente' },
    submitBtn: 'Enviar para revisión',
    successTitle: '¡Enviado! 🎉', successDesc: 'Revisaremos y publicaremos en 24-48h.',
    fine: 'Los envíos gratuitos se revisan en 48h. Nos reservamos el derecho de rechazar herramientas fuera de tema.',
  },
  ar: {
    badge: 'أضف أداة أو وكيل ذكاء اصطناعي',
    title: 'اوصل إلى',
    titleHighlight: '+70,000 صانع',
    titleEnd: 'شهرياً',
    subtitle: 'أدرج أداتك أو وكيلك الذكي على AIverse وليتم اكتشافه من قِبل المطورين والمبدعين والشركات الباحثة عن حلول الذكاء الاصطناعي.',
    mostPopular: 'الأكثر شعبية',
    bestRoi: '🔥 أفضل عائد',
    freeName: 'إدراج أساسي', freePriceLabel: 'مجاني',
    freeFeatures: ['مدرج في الدليل', 'بطاقة عرض عادية', 'رابط قابل للنقر', 'ظاهر في نتائج البحث'],
    freeCta: 'أضف مجاناً',
    stdName: 'قياسي', stdPriceLabel: '49$',
    stdFeatures: ['كل ما في الأساسي', 'شارة "Featured"', 'أولوية في النتائج', 'في النشرة الأسبوعية', 'تعزيز الظهور 3 أشهر'],
    stdCta: 'احصل على القياسي →',
    featName: 'راعي مميز', featPriceLabel: '99$/شهر',
    featFeatures: ['كل ما في القياسي', 'شارة ذهبية "Sponsor"', 'وضع في صفحة الرئيسية', 'تسليط الضوء أسبوعياً', 'رابط do-follow دائم', 'تقرير تحليلي شهري', 'ذِكر على وسائل التواصل'],
    featCta: 'كن راعياً →',
    contactSubject: 'AIverse إدراج قياسي',
    contactSubjectFeat: 'AIverse راعي مميز',
    freeFormTitle: 'إضافة مجانية',
    agentFormTitle: '🤖 أضف وكيل ذكاء اصطناعي',
    agentBadge: 'جديد — وكلاء الذكاء الاصطناعي',
    agentSubtitle: 'هل طورت وكيل ذكاء اصطناعي مستقلاً؟ أدرجه في قسمنا المخصص للوكلاء.',
    agentCta: 'أضف وكيلي الذكي',
    toolLabel: 'اسم الأداة / الوكيل *', urlLabel: 'رابط الموقع *', catLabel: 'النوع *', emailLabel: 'بريدك الإلكتروني *', descLabel: 'وصف مختصر *',
    toolPlaceholder: 'مثال: سوبر وكيل', urlPlaceholder: 'https://yoursite.com', descPlaceholder: 'ماذا يفعل في جملة أو جملتين؟',
    catOptions: { tool: 'أداة ذكاء اصطناعي', agent: 'وكيل ذكاء اصطناعي', both: 'أداة + وكيل' },
    submitBtn: 'إرسال للمراجعة',
    successTitle: '!تم الإرسال 🎉', successDesc: 'سنراجع وننشر خلال 24-48 ساعة.',
    fine: 'تُراجع الطلبات المجانية خلال 48 ساعة. نحتفظ بالحق في رفض الأدوات غير ذات الصلة.',
  },
};

export default function SubmitPage() {
  const locale = useLocale() as Locale;
  const t = T[locale];

  const [form, setForm] = useState({ name: '', url: '', category: '', email: '', description: '', type: 'tool' });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'tool' | 'agent'>('tool');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xyzabc';
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, submissionType: activeTab }),
      });
    } catch { /* silent */ }
    setSubmitted(true);
  };

  const PLANS = [
    {
      id: 'free', name: t.freeName, priceLabel: t.freePriceLabel,
      icon: <Zap className="w-6 h-6" />, color: 'border-white/10', badge: null,
      features: t.freeFeatures,
      cta: t.freeCta, ctaStyle: 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10',
      payUrl: null,
    },
    {
      id: 'standard', name: t.stdName, priceLabel: t.stdPriceLabel,
      icon: <Star className="w-6 h-6" />, color: 'border-[#7C3AED]/40', badge: t.mostPopular,
      features: t.stdFeatures,
      cta: t.stdCta, ctaStyle: 'bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:from-[#8B5CF6] hover:to-[#60A5FA] text-white',
      payUrl: `mailto:hamdi.abdwd@gmail.com?subject=${encodeURIComponent(t.contactSubject)}&body=${encodeURIComponent('Hello, I would like to get the Standard listing on AIverse ($49). My tool: ')}`,
    },
    {
      id: 'featured', name: t.featName, priceLabel: t.featPriceLabel,
      icon: <Crown className="w-6 h-6 text-amber-400" />, color: 'border-amber-500/40', badge: t.bestRoi,
      features: t.featFeatures,
      cta: t.featCta, ctaStyle: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white',
      payUrl: `mailto:hamdi.abdwd@gmail.com?subject=${encodeURIComponent(t.contactSubjectFeat)}&body=${encodeURIComponent('Hello, I would like to become a Featured Sponsor on AIverse ($99/mo). My tool: ')}`,
    },
  ];

  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-4">
          {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          {t.title} <GradientText>{t.titleHighlight}</GradientText> {t.titleEnd}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {PLANS.map((plan) => (
          <div key={plan.id} className={`relative rounded-2xl border bg-[#0E0E16]/60 backdrop-blur p-6 flex flex-col gap-5 ${plan.color} ${plan.id === 'featured' ? 'ring-1 ring-amber-500/30' : ''}`}>
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow">
                {plan.badge}
              </span>
            )}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/[0.06]">{plan.icon}</div>
              <div>
                <p className="text-white font-bold">{plan.name}</p>
                <p className="text-2xl font-black text-white">{plan.priceLabel}</p>
              </div>
            </div>
            <ul className="space-y-2.5 flex-1">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            {plan.payUrl ? (
              <a href={plan.payUrl}
                className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-200 active:scale-95 ${plan.ctaStyle}`}>
                {plan.cta}
              </a>
            ) : (
              <button onClick={() => document.getElementById('submit-form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-200 active:scale-95 ${plan.ctaStyle}`}>
                {plan.cta}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Tab switcher Tool / Agent */}
      <div id="submit-form" className="max-w-2xl mx-auto">
        <div className="flex rounded-2xl border border-white/[0.08] bg-white/[0.02] p-1 mb-8">
          <button onClick={() => setActiveTab('tool')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'tool' ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
            <Zap className="w-4 h-4" /> {t.freeFormTitle}
          </button>
          <button onClick={() => setActiveTab('agent')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'agent' ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-900/40' : 'text-gray-400 hover:text-white'}`}>
            <Bot className="w-4 h-4" />
            <span>{t.agentFormTitle}</span>
            <span className="text-[10px] bg-violet-500/30 text-violet-300 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">NEW</span>
          </button>
        </div>

        {/* Agent banner */}
        {activeTab === 'agent' && (
          <div className="rounded-2xl border border-violet-500/30 bg-violet-950/20 p-4 mb-6 flex items-center gap-3">
            <Bot className="w-8 h-8 text-violet-400 flex-shrink-0" />
            <p className="text-sm text-gray-300">{t.agentSubtitle}</p>
          </div>
        )}

        {/* Form */}
        {submitted ? (
          <div className="text-center py-12 rounded-2xl border border-green-500/30 bg-green-500/5">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-white mb-2">{t.successTitle}</h3>
            <p className="text-gray-400">{t.successDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/[0.08] bg-[#0E0E16]/60 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{t.toolLabel}</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50" placeholder={t.toolPlaceholder} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{t.urlLabel}</label>
                <input required type="url" value={form.url} onChange={e => setForm({...form, url: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50" placeholder={t.urlPlaceholder} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{t.catLabel}</label>
                <select required value={form.category} onChange={e => setForm({...form, category: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50">
                  <option value="" className="bg-[#0A0A0F]">—</option>
                  {activeTab === 'tool'
                    ? ['writing','image','code','video','productivity','audio','marketing'].map(c => (
                        <option key={c} value={c} className="bg-[#0A0A0F]">{c.charAt(0).toUpperCase()+c.slice(1)}</option>
                      ))
                    : Object.entries(t.catOptions).map(([k, v]) => (
                        <option key={k} value={k} className="bg-[#0A0A0F]">{v}</option>
                      ))
                  }
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{t.emailLabel}</label>
                <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{t.descLabel}</label>
              <textarea required rows={3} value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50 resize-none" placeholder={t.descPlaceholder} />
            </div>
            <button type="submit"
              className={`w-full flex items-center justify-center gap-2 text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.99] ${activeTab === 'agent' ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-900/30' : 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#22D3EE]'}`}>
              {activeTab === 'agent' ? <Bot className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
              {activeTab === 'agent' ? t.agentCta : t.submitBtn}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-gray-500 text-center">{t.fine}</p>
          </form>
        )}
      </div>
    </div>
  );
}

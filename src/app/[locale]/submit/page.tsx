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
    titleHighlight: '+70 000 Builders',
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
    titleHighlight: '+70 000 Créateurs',
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
    titleHighlight: '+70 000 Creadores',
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
    fine: 'تُراجع الطلبات المجانية خلال 48 ساعة. نحتفظ بحق رفض أي أداة لا تستوفي معاييرنا.',
  },
};

export default function SubmitPage() {
  const locale = useLocale() as Locale;
  const t = T[locale] || T.en;

  const [formData, setFormData] = useState({ name: '', url: '', category: 'tool', email: '', description: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const errorMsg: Record<Locale, string> = {
    en: 'Something went wrong. Please try again or email us directly.',
    fr: "Une erreur s'est produite. Réessayez ou contactez-nous par email.",
    es: 'Algo salió mal. Inténtalo de nuevo o contáctanos por email.',
    ar: 'حدث خطأ ما. حاول مرة أخرى أو راسلنا عبر البريد الإلكتروني.',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/mvznzpwd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block bg-violet-600/20 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          {t.title} <GradientText>{t.titleHighlight}</GradientText> {t.titleEnd}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Free */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
          <div className="mb-4">
            <p className="text-gray-400 text-sm font-medium mb-1">{t.freeName}</p>
            <p className="text-3xl font-black text-white">{t.freePriceLabel}</p>
          </div>
          <ul className="space-y-2 mb-6 flex-1">
            {t.freeFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-green-400 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => document.getElementById('free-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-2 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition"
          >
            {t.freeCta}
          </button>
        </div>

        {/* Standard */}
        <div className="bg-violet-600/20 border-2 border-violet-500 rounded-2xl p-6 flex flex-col relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {t.mostPopular}
          </span>
          <div className="mb-4">
            <p className="text-violet-300 text-sm font-medium mb-1">{t.stdName}</p>
            <p className="text-3xl font-black text-white">{t.stdPriceLabel}</p>
          </div>
          <ul className="space-y-2 mb-6 flex-1">
            {t.stdFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                <Zap className="w-4 h-4 text-violet-400 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <a
            href="https://getaiverse.lemonsqueezy.com/checkout/buy/ce8a1d0a-c7d4-48b2-aefe-fb3d4391190e"
            target="_blank" rel="noopener noreferrer"
            className="w-full py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold text-center transition"
          >
            {t.stdCta}
          </a>
        </div>

        {/* Featured */}
        <div className="bg-amber-500/10 border border-amber-500/40 rounded-2xl p-6 flex flex-col relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            {t.bestRoi}
          </span>
          <div className="mb-4">
            <p className="text-amber-400 text-sm font-medium mb-1">{t.featName}</p>
            <p className="text-3xl font-black text-white">{t.featPriceLabel}</p>
          </div>
          <ul className="space-y-2 mb-6 flex-1">
            {t.featFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                <Crown className="w-4 h-4 text-amber-400 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <a
            href="https://getaiverse.lemonsqueezy.com/checkout/buy/404170b0-173c-4b0e-abb6-b2fa44d79274"
            target="_blank" rel="noopener noreferrer"
            className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold text-center transition"
          >
            {t.featCta}
          </a>
        </div>
      </div>

      {/* Free Submission Form */}
      <div id="free-form" className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Star className="w-5 h-5 text-violet-400" /> {t.freeFormTitle}
        </h2>
        {submitted ? (
          <div className="text-center py-8">
            <p className="text-3xl mb-2">🎉</p>
            <p className="text-white font-bold text-xl">{t.successTitle}</p>
            <p className="text-gray-400 mt-1">{t.successDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">{t.toolLabel}</label>
              <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.toolPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">{t.urlLabel}</label>
              <input required type="url" value={formData.url} onChange={e => setFormData({ ...formData, url: e.target.value })}
                placeholder={t.urlPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">{t.catLabel}</label>
              <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500">
                <option value="tool">{t.catOptions.tool}</option>
                <option value="agent">{t.catOptions.agent}</option>
                <option value="both">{t.catOptions.both}</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">{t.emailLabel}</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-400 mb-1 block">{t.descLabel}</label>
              <textarea required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
                placeholder={t.descPlaceholder} rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 resize-none" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" disabled={submitting}
                className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition flex items-center justify-center gap-2 disabled:opacity-60">
                <ArrowRight className="w-4 h-4" /> {submitting ? '...' : t.submitBtn}
              </button>
              {error && <p className="text-xs text-red-400 mt-2 text-center">{errorMsg[locale]}</p>}
              <p className="text-xs text-gray-500 mt-3 text-center">{t.fine}</p>
            </div>
          </form>
        )}
      </div>

      {/* AI Agent Section */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <span className="inline-block bg-violet-600/20 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          {t.agentBadge}
        </span>
        <Bot className="w-10 h-10 text-violet-400 mx-auto mb-3" />
        <h2 className="text-2xl font-bold text-white mb-2">{t.agentFormTitle}</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">{t.agentSubtitle}</p>
        <a href={`mailto:contact@aiverse.com?subject=AIverse AI Agent Submission`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition">
          <Bot className="w-4 h-4" /> {t.agentCta}
        </a>
      </div>
    </div>
  );
}

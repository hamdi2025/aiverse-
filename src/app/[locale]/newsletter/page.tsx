'use client';

import React, { useState } from 'react';
import { Mail, Zap, Crown, Check, ArrowRight, Users, BarChart2 } from 'lucide-react';
import GradientText from '@/components/ui/GradientText';
import { useLocale } from 'next-intl';

type Locale = 'en' | 'fr' | 'es' | 'ar';

const T = {
  en: {
    badge: 'Weekly AI Newsletter',
    title: 'Stay Ahead of the',
    titleHighlight: 'AI Curve',
    subtitle: 'Every week: the 5 best new AI tools, agent launches, and insider tips — curated for builders, founders and creators.',
    stats: [
      { value: '12K+', label: 'Subscribers' },
      { value: '48%', label: 'Open Rate' },
      { value: 'Every', label: 'Monday' },
    ],
    freeName: 'Free Subscriber',
    freeFeatures: [
      'Top 5 AI tools of the week',
      'New AI agent launches',
      'Exclusive deals & discounts',
      'Weekly AI news digest',
    ],
    freeCtaLabel: 'Your email address',
    freeCta: 'Subscribe Free →',
    successTitle: 'You\'re in! 🎉',
    successDesc: 'Check your inbox to confirm your subscription.',
    sponsorTitle: '📢 Sponsor the Newsletter',
    sponsorSubtitle: 'Reach 12,000+ AI enthusiasts, developers and founders every Monday.',
    sponsorBadge: 'Advertise',
    sponsorFeatures: [
      'Dedicated slot in the weekly email',
      'Your tool featured to 12K+ subscribers',
      'Banner + description + CTA link',
      'Reported open & click rates',
      'Social media mention (Twitter/X)',
    ],
    sponsorPrice: '$99',
    sponsorPer: 'per edition',
    sponsorCta: 'Book a Sponsorship →',
    sponsorNote: 'Limited to 1 sponsor per edition. Contact us to check availability.',
  },
  fr: {
    badge: 'Newsletter IA Hebdomadaire',
    title: 'Restez en avance sur la',
    titleHighlight: 'Vague IA',
    subtitle: 'Chaque semaine : les 5 meilleurs nouveaux outils IA, lancements d\'agents et conseils d\'initiés — pour les créateurs et fondateurs.',
    stats: [
      { value: '12K+', label: 'Abonnés' },
      { value: '48%', label: 'Taux d\'ouverture' },
      { value: 'Chaque', label: 'Lundi' },
    ],
    freeName: 'Abonnement Gratuit',
    freeFeatures: [
      'Top 5 outils IA de la semaine',
      'Nouveaux agents IA lancés',
      'Offres et réductions exclusives',
      'Digest hebdo de l\'actualité IA',
    ],
    freeCtaLabel: 'Votre adresse email',
    freeCta: 'S\'abonner gratuitement →',
    successTitle: 'Inscrit ! 🎉',
    successDesc: 'Vérifiez votre boîte mail pour confirmer votre abonnement.',
    sponsorTitle: '📢 Sponsoriser la Newsletter',
    sponsorSubtitle: 'Atteignez 12 000+ passionnés d\'IA, développeurs et fondateurs chaque lundi.',
    sponsorBadge: 'Publicité',
    sponsorFeatures: [
      'Emplacement dédié dans l\'email hebdo',
      'Votre outil présenté à 12K+ abonnés',
      'Bannière + description + lien CTA',
      'Rapport taux d\'ouverture et clics',
      'Mention sur les réseaux sociaux (Twitter/X)',
    ],
    sponsorPrice: '99$',
    sponsorPer: 'par édition',
    sponsorCta: 'Réserver un Sponsoring →',
    sponsorNote: 'Limité à 1 sponsor par édition. Contactez-nous pour vérifier la disponibilité.',
  },
  es: {
    badge: 'Newsletter IA Semanal',
    title: 'Mantente adelante de la',
    titleHighlight: 'Ola IA',
    subtitle: 'Cada semana: las 5 mejores herramientas IA nuevas, lanzamientos de agentes y consejos exclusivos — para creadores y fundadores.',
    stats: [
      { value: '12K+', label: 'Suscriptores' },
      { value: '48%', label: 'Tasa apertura' },
      { value: 'Cada', label: 'Lunes' },
    ],
    freeName: 'Suscripción Gratuita',
    freeFeatures: [
      'Top 5 herramientas IA de la semana',
      'Nuevos agentes IA lanzados',
      'Ofertas y descuentos exclusivos',
      'Resumen semanal de noticias IA',
    ],
    freeCtaLabel: 'Tu dirección de email',
    freeCta: 'Suscribirse gratis →',
    successTitle: '¡Inscrito! 🎉',
    successDesc: 'Revisa tu bandeja de entrada para confirmar tu suscripción.',
    sponsorTitle: '📢 Patrocinar la Newsletter',
    sponsorSubtitle: 'Llega a 12,000+ entusiastas de IA, desarrolladores y fundadores cada lunes.',
    sponsorBadge: 'Publicidad',
    sponsorFeatures: [
      'Espacio dedicado en el email semanal',
      'Tu herramienta presentada a 12K+ suscriptores',
      'Banner + descripción + enlace CTA',
      'Informe de tasas de apertura y clics',
      'Mención en redes sociales (Twitter/X)',
    ],
    sponsorPrice: '$99',
    sponsorPer: 'por edición',
    sponsorCta: 'Reservar un Patrocinio →',
    sponsorNote: 'Limitado a 1 patrocinador por edición. Contáctanos para verificar disponibilidad.',
  },
  ar: {
    badge: 'نشرة الذكاء الاصطناعي الأسبوعية',
    title: 'ابقَ في طليعة',
    titleHighlight: 'موجة الذكاء الاصطناعي',
    subtitle: 'كل أسبوع: أفضل 5 أدوات ذكاء اصطناعي جديدة وإطلاق وكلاء ونصائح حصرية — للمبدعين والمؤسسين.',
    stats: [
      { value: '+12K', label: 'مشترك' },
      { value: '48%', label: 'معدل الفتح' },
      { value: 'كل', label: 'إثنين' },
    ],
    freeName: 'اشتراك مجاني',
    freeFeatures: [
      'أفضل 5 أدوات ذكاء اصطناعي أسبوعياً',
      'إطلاقات وكلاء الذكاء الاصطناعي الجديدة',
      'صفقات وخصومات حصرية',
      'ملخص أسبوعي لأخبار الذكاء الاصطناعي',
    ],
    freeCtaLabel: 'عنوان بريدك الإلكتروني',
    freeCta: 'اشترك مجاناً ←',
    successTitle: 'تم الاشتراك! 🎉',
    successDesc: 'تحقق من بريدك الإلكتروني لتأكيد اشتراكك.',
    sponsorTitle: '📢 رعاية النشرة',
    sponsorSubtitle: 'اوصل إلى أكثر من 12,000 متحمس للذكاء الاصطناعي ومطور ومؤسس كل إثنين.',
    sponsorBadge: 'إعلان',
    sponsorFeatures: [
      'مساحة مخصصة في البريد الأسبوعي',
      'أداتك مميزة لـ 12K+ مشترك',
      'بانر + وصف + رابط CTA',
      'تقرير معدلات الفتح والنقر',
      'ذِكر على وسائل التواصل الاجتماعي',
    ],
    sponsorPrice: '99$',
    sponsorPer: 'لكل إصدار',
    sponsorCta: 'احجز رعاية ←',
    sponsorNote: 'مقتصر على راعٍ واحد لكل إصدار. تواصل معنا للتحقق من التوفر.',
  },
};

export default function NewsletterPage() {
  const locale = useLocale() as Locale;
  const t = T[locale] || T.en;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 bg-violet-600/20 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          <Mail className="w-3 h-3" /> {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          {t.title} <GradientText>{t.titleHighlight}</GradientText>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-14">
        {t.stats.map((s, i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center">
            <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
            <p className="text-gray-600 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Subscribe form */}
      <div className="bg-gradient-to-br from-violet-600/10 to-purple-900/10 border border-violet-500/20 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-violet-700" />
          <h2 className="text-2xl font-bold text-gray-900">{t.freeName}</h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {t.freeFeatures.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-green-700 shrink-0" /> {f}
            </li>
          ))}
        </ul>
        {submitted ? (
          <div className="text-center py-4">
            <p className="text-2xl mb-1">🎉</p>
            <p className="text-gray-900 font-bold text-lg">{t.successTitle}</p>
            <p className="text-gray-600 text-sm mt-1">{t.successDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
            <input
              type="email" required value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.freeCtaLabel}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500"
            />
            <button type="submit"
              className="flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition whitespace-nowrap">
              <ArrowRight className="w-4 h-4" />
              {t.freeCta}
            </button>
          </form>
        )}
      </div>

      {/* Sponsor section */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-gray-900">{t.sponsorTitle}</h2>
          <span className="bg-amber-500/20 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {t.sponsorBadge}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{t.sponsorSubtitle}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ul className="space-y-2">
            {t.sponsorFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <Crown className="w-4 h-4 text-amber-700 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-center">
            <p className="text-5xl font-black text-gray-900 mb-1">{t.sponsorPrice}</p>
            <p className="text-amber-700 text-sm font-semibold mb-4">{t.sponsorPer}</p>
            <a
              href="mailto:contact@aiverse.com?subject=Newsletter Sponsorship"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold rounded-xl transition"
            >
              <BarChart2 className="w-4 h-4" />
              {t.sponsorCta}
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center">{t.sponsorNote}</p>
      </div>

    </div>
  );
}

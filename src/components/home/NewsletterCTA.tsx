'use client';

import React, { useState } from 'react';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NewsletterCTA() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Beehiiv — ajoute NEXT_PUBLIC_BEEHIIV_PUB_ID dans Vercel > Settings > Env Variables
    const PUB_ID = process.env.NEXT_PUBLIC_BEEHIIV_PUB_ID || '';
    if (PUB_ID) {
      try {
        await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, reactivate_existing: true, send_welcome_email: true }),
        });
      } catch (_) { /* silent */ }
    }
    setSubscribed(true);
  };

  return (
    <section className="relative w-full my-16 rounded-2xl overflow-hidden border border-white/[0.08]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-[#3B82F6]/5 to-[#06B6D4]/10 -z-10" />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-[#7C3AED]/10 blur-[80px] rounded-full -z-10" />
      <div className="px-6 py-12 md:py-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          {t('badge')}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{t('title')}</h2>
        <p
          className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto"
          dangerouslySetInnerHTML={{ __html: t('desc') }}
        />
        {subscribed ? (
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-xl font-semibold">
            {t('success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                className="w-full pl-10 pr-4 py-3 bg-white/[0.05] border border-white/[0.10] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#7C3AED]/50"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#22D3EE] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-[11px] text-gray-600 mt-4">{t('fine')}</p>
      </div>
    </section>
  );
}

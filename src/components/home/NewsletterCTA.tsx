'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NewsletterCTA() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="rounded-2xl bg-gradient-to-br from-[#7C3AED] via-violet-600 to-[#06B6D4] p-8 text-center shadow-xl shadow-violet-300/50">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-4">
          <Mail className="w-3 h-3" /> {t('badge')}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{t('title')}</h2>
        <p className="text-white/90 text-sm mb-6 max-w-xl mx-auto">{t('desc')}</p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-white font-bold">
            <CheckCircle className="w-5 h-5" />
            <span>{t('success')}</span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholder')}
                  disabled={status === 'loading'}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-white/50 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/40 disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-white text-violet-700 font-extrabold rounded-xl hover:bg-violet-50 transition-all text-sm whitespace-nowrap disabled:opacity-60 flex items-center justify-center gap-2 shadow-md"
              >
                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : t('cta')}
              </button>
            </form>
            <p className="text-white/80 text-xs mt-3">{t('fine')}</p>
            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 text-white text-xs mt-2 bg-red-500/30 rounded-lg py-1.5 px-3 inline-flex">
                <AlertCircle className="w-4 h-4" />
                <span>{t('error')}</span>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

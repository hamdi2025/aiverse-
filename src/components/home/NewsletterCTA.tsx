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
      <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-violet-950/30 to-cyan-950/20 p-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Mail className="w-3 h-3" /> {t('badge')}
        </div>
        <h2 className="text-2xl font-black text-white mb-2">{t('title')}</h2>
        <p className="text-gray-400 text-sm mb-6">{t('desc')}</p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-green-400 font-bold">
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
                  className="w-full pl-10 pr-4 py-3 bg-white/[0.05] border border-white/[0.10] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#7C3AED]/50 disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-bold rounded-xl hover:opacity-90 transit
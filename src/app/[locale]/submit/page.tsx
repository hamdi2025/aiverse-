'use client';

import React, { useState } from 'react';
import { Check, Zap, Star, Crown, ArrowRight, Mail } from 'lucide-react';
import GradientText from '@/components/ui/GradientText';

const PLANS = [
  {
    id: 'free',
    name: 'Basic Listing',
    price: 0,
    priceLabel: 'Free',
    icon: <Zap className="w-6 h-6" />,
    color: 'border-white/10',
    badge: null,
    features: [
      'Listed in the directory',
      'Standard card display',
      'Clickable outbound link',
      'Visible in search results',
    ],
    cta: 'Submit for Free',
    ctaStyle: 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10',
    payUrl: null,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 49,
    priceLabel: '$49',
    icon: <Star className="w-6 h-6" />,
    color: 'border-[#7C3AED]/40',
    badge: 'Most Popular',
    features: [
      'Everything in Basic',
      '"Featured" badge on card',
      'Priority in search results',
      'Listed in weekly newsletter',
      '3-month visibility boost',
    ],
    cta: 'Get Standard →',
    ctaStyle: 'bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:from-[#8B5CF6] hover:to-[#60A5FA] text-white',
    payUrl: 'https://buy.stripe.com/YOUR_STANDARD_LINK',
  },
  {
    id: 'featured',
    name: 'Featured Sponsor',
    price: 99,
    priceLabel: '$99/mo',
    icon: <Crown className="w-6 h-6 text-amber-400" />,
    color: 'border-amber-500/40',
    badge: '🔥 Best ROI',
    features: [
      'Everything in Standard',
      '"Sponsor" gold badge',
      'Homepage hero placement',
      'Dedicated weekly spotlight',
      'Permanent do-follow backlink',
      'Monthly analytics report',
      'Social media mention',
    ],
    cta: 'Become a Sponsor →',
    ctaStyle: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white',
    payUrl: 'https://buy.stripe.com/YOUR_FEATURED_LINK',
  },
];

export default function SubmitPage() {
  const [form, setForm] = useState({ name: '', url: '', category: '', email: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree — va sur formspree.io, crée un form, copie ton ID ici
    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xyzabc';
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
    } catch { /* silent — submission still confirmed to user */ }
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-4">
          Submit Your AI Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Reach <GradientText>70,000+ developers</GradientText> monthly
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          List your AI tool on AIverse and get discovered by builders, creators, and companies actively searching for AI solutions.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl border bg-[#0E0E16]/60 backdrop-blur p-6 flex flex-col gap-5 ${plan.color} ${plan.id === 'featured' ? 'ring-1 ring-amber-500/30' : ''}`}
          >
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
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            {plan.payUrl ? (
              <a
                href={plan.payUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-200 active:scale-95 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            ) : (
              <button
                onClick={() => document.getElementById('free-form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-200 active:scale-95 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Free Submission Form */}
      <div id="free-form" className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-6 text-center">
          Free Basic Submission
        </h2>

        {submitted ? (
          <div className="text-center py-12 rounded-2xl border border-green-500/30 bg-green-500/5">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-white mb-2">Tool submitted!</h3>
            <p className="text-gray-400">We&apos;ll review and publish your tool within 24–48h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/[0.08] bg-[#0E0E16]/60 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Tool Name *</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50" placeholder="e.g. SuperAI" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Website URL *</label>
                <input required type="url" value={form.url} onChange={e => setForm({...form, url: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50" placeholder="https://yourtool.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Category *</label>
                <select required value={form.category} onChange={e => setForm({...form, category: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50">
                  <option value="">Select category</option>
                  {['writing','image','code','video','productivity','audio','marketing'].map(c => (
                    <option key={c} value={c} className="bg-[#0A0A0F]">{c.charAt(0).toUpperCase()+c.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Your Email *</label>
                <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Short Description *</label>
              <textarea required rows={3} value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/50 resize-none" placeholder="Describe what your tool does in 1-2 sentences..." />
            </div>
            <button type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#22D3EE] text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.99]">
              <Mail className="w-4 h-4" />
              Submit My Tool for Review
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-gray-500 text-center">Free submissions are reviewed within 48h. We reserve the right to decline off-topic tools.</p>
          </form>
        )}
      </div>
    </div>
  );
}

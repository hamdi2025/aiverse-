'use client';

import React from 'react';
import { Link } from '@/navigation';
import GradientText from '../ui/GradientText';
import { Mail } from 'lucide-react';

const LINKS = {
  directory: [
    { label: 'All Tools', href: '/' },
    { label: 'Writing & AI', href: '/?cat=writing' },
    { label: 'Image Generation', href: '/?cat=image' },
    { label: 'Code & Dev', href: '/?cat=code' },
    { label: 'Video AI', href: '/?cat=video' },
    { label: 'Audio & Voice', href: '/?cat=audio' },
  ],
  monetize: [
    { label: 'Submit Your Tool', href: '/submit' },
    { label: 'Advertise / Sponsor', href: '/submit#featured' },
    { label: 'Partner With Us', href: '/contact' },
    { label: 'Newsletter Sponsorship', href: '/newsletter' },
  ],
  company: [
    { label: 'About AIverse', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Affiliate Disclosure', href: '/disclosure' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#07070B] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-black text-base">A</span>
              </div>
              <span className="text-lg font-black text-white">
                AI<GradientText gradient="from-[#7C3AED] to-[#06B6D4]">verse</GradientText>
              </span>
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">
              The #1 multilingual AI tools directory. Discover, compare, and monetize the best AI tools — free & paid.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="https://twitter.com/aiverse" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/20 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.741-8.861L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="/en/newsletter"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/20 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Directory</h4>
            <ul className="space-y-2.5">
              {LINKS.directory.map(l => (
                <li key={l.label}>
                  <Link href={l.href as '/'}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Monetize */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">For Tool Makers</h4>
            <ul className="space-y-2.5">
              {LINKS.monetize.map(l => (
                <li key={l.label}>
                  <Link href={l.href as '/'}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {LINKS.company.map(l => (
                <li key={l.label}>
                  <Link href={l.href as '/'}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Advertise CTA */}
            <Link href="/submit"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] hover:text-[#8B5CF6] border border-[#7C3AED]/30 hover:border-[#7C3AED]/60 px-3 py-1.5 rounded-lg transition-all">
              💼 Advertise with us →
            </Link>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div className="border-t border-white/[0.04] pt-6 mb-6">
          <p className="text-[11px] text-gray-600 leading-relaxed max-w-3xl">
            <span className="text-gray-500 font-semibold">Affiliate Disclosure:</span> AIverse may earn a commission when you click on some links on this page and make a purchase. This does not affect our editorial independence — all tool rankings and reviews are based on genuine analysis. Sponsored listings are clearly marked.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© 2026 AIverse. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

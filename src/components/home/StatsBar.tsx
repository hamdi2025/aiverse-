'use client';

import React from 'react';
import { Users, Zap, TrendingUp, Globe } from 'lucide-react';

const STATS = [
  { icon: <Zap className="w-5 h-5 text-[#7C3AED]" />, value: '70+', label: 'AI Tools Listed' },
  { icon: <Users className="w-5 h-5 text-[#06B6D4]" />, value: '12K+', label: 'Monthly Readers' },
  { icon: <TrendingUp className="w-5 h-5 text-amber-400" />, value: '7', label: 'Categories' },
  { icon: <Globe className="w-5 h-5 text-green-400" />, value: '4', label: 'Languages' },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur"
        >
          {s.icon}
          <span className="text-2xl font-black text-white">{s.value}</span>
          <span className="text-xs text-gray-500 font-medium tracking-wide">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

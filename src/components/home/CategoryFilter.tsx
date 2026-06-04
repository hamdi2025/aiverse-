'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { clsx } from 'clsx';
import { Bot } from 'lucide-react';

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const t = useTranslations('Categories');

  const categories = [
    { id: 'all', label: t('all') },
    { id: 'writing', label: t('writing') },
    { id: 'image', label: t('image') },
    { id: 'code', label: t('code') },
    { id: 'video', label: t('video') },
    { id: 'productivity', label: t('productivity') },
    { id: 'audio', label: t('audio') },
    { id: 'marketing', label: t('marketing') },
    { id: 'agents', label: t('agents') }
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div className="flex flex-wrap gap-2 px-4 md:px-0 justify-center">
        {categories.map((cat) => {
          const isActive = selected === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={clsx(
                'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 active:scale-95 flex items-center gap-1.5',
                cat.id === 'agents' && !isActive
                  ? 'bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400 hover:text-violet-200'
                  : '',
                cat.id === 'agents' && isActive
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-transparent shadow-lg shadow-violet-500/30'
                  : '',
                cat.id !== 'agents' && isActive
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white border-transparent shadow-lg shadow-[#7C3AED]/25'
                  : '',
                cat.id !== 'agents' && !isActive
                  ? 'bg-white/[0.03] text-gray-400 hover:text-white border-white/[0.08] hover:border-white/20'
                  : ''
              )}
            >
              {cat.id === 'agents' && <Bot className="w-3 h-3" />}
              {cat.label}
              {cat.id === 'agents' && <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded-full border border-amber-400/20">NEW</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

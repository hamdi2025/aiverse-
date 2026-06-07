'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { clsx } from 'clsx';
import { Bot, Presentation, Table2, Box, Search, FileText, Archive, RefreshCw } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const t = useTranslations('Categories');

  const categories = [
    { id: 'all',         label: t('all'),         icon: null },
    { id: 'writing',     label: t('writing'),     icon: null },
    { id: 'image',       label: t('image'),       icon: null },
    { id: 'code',        label: t('code'),        icon: null },
    { id: 'video',       label: t('video'),       icon: null },
    { id: 'audio',       label: t('audio'),       icon: null },
    { id: 'marketing',   label: t('marketing'),   icon: null },
    { id: 'productivity',label: t('productivity'),icon: null },
    { id: 'agents',      label: t('agents'),      icon: <Bot className="w-3 h-3" />, badge: 'NEW' },
    { id: 'slides',      label: t('slides'),      icon: <Presentation className="w-3 h-3" /> },
    { id: 'excel',       label: t('excel'),       icon: <Table2 className="w-3 h-3" /> },
    { id: 'design3d',    label: t('design3d'),    icon: <Box className="w-3 h-3" /> },
    { id: 'seo',         label: t('seo'),         icon: <Search className="w-3 h-3" /> },
    { id: 'pdf',         label: t('pdf'),         icon: <FileText className="w-3 h-3" /> },
    { id: 'compression', label: t('compression'), icon: <Archive className="w-3 h-3" /> },
    { id: 'conversion',  label: t('conversion'),  icon: <RefreshCw className="w-3 h-3" /> },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div className="flex flex-wrap gap-2 px-4 md:px-0 justify-center">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const isAgents = cat.id === 'agents';
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={clsx(
                'px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 active:scale-95 flex items-center gap-1.5',
                isAgents && !isActive && 'bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400',
                isAgents && isActive && 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-transparent shadow-lg shadow-violet-500/30',
                !isAgents && isActive && 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white border-transparent shadow-lg shadow-[#7C3AED]/25',
                !isAgents && !isActive && 'bg-white/[0.03] text-gray-400 hover:text-white border-white/[0.08] hover:border-white/20'
              )}
            >
              {cat.icon}
              {cat.label}
              {cat.badge && (
                <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded-full border border-amber-400/20">
                  {cat.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

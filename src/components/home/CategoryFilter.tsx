'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { clsx } from 'clsx';
import { Bot, Presentation, Table2, Box, Search, FileText, Archive, RefreshCw, Languages, MessageSquare, BarChart2, Users, DollarSign, FileSignature, FolderKanban, Brain, GraduationCap, Scale, Shield, Share2, Plane } from 'lucide-react';

interface CategoryFilterProps { selectedCategory: string; onCategoryChange: (category: string) => void; }

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const t = useTranslations('Categories');

  const categories = [
    { id: 'all',          label: t('all'),          icon: null },
    { id: 'writing',      label: t('writing'),      icon: null },
    { id: 'image',        label: t('image'),        icon: null },
    { id: 'code',         label: t('code'),         icon: null },
    { id: 'video',        label: t('video'),        icon: null },
    { id: 'audio',        label: t('audio'),        icon: null },
    { id: 'marketing',    label: t('marketing'),    icon: null },
    { id: 'productivity', label: t('productivity'), icon: null },
    { id: 'agents',       label: t('agents'),       icon: <Bot className="w-3 h-3" />, badge: 'HOT' },
    { id: 'translation',  label: t('translation'),  icon: <Languages className="w-3 h-3" />, badge: 'NEW' },
    { id: 'chatbots',     label: t('chatbots'),     icon: <MessageSquare className="w-3 h-3" /> },
    { id: 'data',         label: t('data'),         icon: <BarChart2 className="w-3 h-3" /> },
    { id: 'hr',           label: t('hr'),           icon: <Users className="w-3 h-3" /> },
    { id: 'finance',      label: t('finance'),      icon: <DollarSign className="w-3 h-3" /> },
    { id: 'contract',     label: t('contract'),     icon: <FileSignature className="w-3 h-3" />, badge: 'NEW' },
    { id: 'projectmgmt',  label: t('projectmgmt'),  icon: <FolderKanban className="w-3 h-3" /> },
    { id: 'mindmap',      label: t('mindmap'),      icon: <Brain className="w-3 h-3" /> },
    { id: 'elearning',    label: t('elearning'),    icon: <GraduationCap className="w-3 h-3" /> },
    { id: 'legal',        label: t('legal'),        icon: <Scale className="w-3 h-3" /> },
    { id: 'cybersecurity',label: t('cybersecurity'),icon: <Shield className="w-3 h-3" /> },
    { id: 'socialmedia',  label: t('socialmedia'),  icon: <Share2 className="w-3 h-3" /> },
    { id: 'travel',       label: t('travel'),       icon: <Plane className="w-3 h-3" />, badge: 'NEW' },
    { id: 'slides',       label: t('slides'),       icon: <Presentation className="w-3 h-3" /> },
    { id: 'excel',        label: t('excel'),        icon: <Table2 className="w-3 h-3" /> },
    { id: 'design3d',     label: t('design3d'),     icon: <Box className="w-3 h-3" /> },
    { id: 'seo',          label: t('seo'),          icon: <Search className="w-3 h-3" /> },
    { id: 'pdf',          label: t('pdf'),          icon: <FileText className="w-3 h-3" /> },
    { id: 'compression',  label: t('compression'),  icon: <Archive className="w-3 h-3" /> },
    { id: 'conversion',   label: t('conversion'),   icon: <RefreshCw className="w-3 h-3" /> },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div className="flex flex-wrap gap-2 px-4 md:px-0 justify-center">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const isSpecial = ['agents','translation','contract','travel'].includes(cat.id);
          return (
            <button key={cat.id} onClick={() => onCategoryChange(cat.id)}
              className={clsx(
                'px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 active:scale-95 flex items-center gap-1.5 whitespace-nowrap',
                isSpecial && !isActive && 'bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400',
                isSpecial && isActive && 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-transparent shadow-lg shadow-violet-500/30',
                !isSpecial && isActive && 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white border-transparent shadow-lg shadow-[#7C3AED]/25',
                !isSpecial && !isActive && 'bg-white/[0.03] text-gray-400 hover:text-white border-white/[0.08] hover:border-white/20'
              )}>
              {cat.icon}{cat.label}
              {cat.badge && (
                <span className={clsx('text-[9px] font-bold px-1.5 py-0.5 rounded-full border',
                  cat.badge === 'HOT' ? 'text-amber-400 bg-amber-400/10 border-amber-400/20' : 'text-green-400 bg-green-400/10 border-green-400/20'
                )}>{cat.badge}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

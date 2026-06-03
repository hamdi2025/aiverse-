'use client';

import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface SearchBarProps {
  onSearch: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function SearchBar({
  onSearch,
  selectedCategory,
  onCategoryChange
}: SearchBarProps) {
  const t = useTranslations('Common');
  const tCat = useTranslations('Categories');
  const [query, setQuery] = useState('');

  const categories = [
    { id: 'all', label: tCat('all') },
    { id: 'writing', label: tCat('writing') },
    { id: 'image', label: tCat('image') },
    { id: 'code', label: tCat('code') },
    { id: 'video', label: tCat('video') },
    { id: 'productivity', label: tCat('productivity') },
    { id: 'audio', label: tCat('audio') },
    { id: 'marketing', label: tCat('marketing') },
  ];

  const handleSubmit = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto group">
      {/* Ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] rounded-2xl blur-xl opacity-30 group-focus-within:opacity-60 transition duration-500" />

      {/* Search container */}
      <div className="relative flex items-center bg-[#0E0E16]/80 backdrop-blur-2xl border border-white/[0.08] group-focus-within:border-[#7C3AED]/50 rounded-2xl p-1.5 transition-all duration-300">

        {/* Search icon */}
        <div className="pl-3.5 pr-2 text-gray-400 group-focus-within:text-white transition-colors duration-200">
          <Search className="w-5 h-5" />
        </div>

        {/* Input — fires only on Enter */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('search')}
          className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none py-3 px-1 text-base w-full"
        />

        {/* Category dropdown */}
        <div className="hidden md:flex items-center border-l border-white/10 px-2 mr-1">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="bg-transparent text-sm text-gray-300 focus:outline-none focus:text-white cursor-pointer py-1 px-3"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id} className="bg-[#0A0A0F] text-white">
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search button — fires on click */}
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#22D3EE] text-white rounded-xl px-5 py-2.5 text-sm font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg shadow-[#7C3AED]/20 active:scale-95"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  );
}

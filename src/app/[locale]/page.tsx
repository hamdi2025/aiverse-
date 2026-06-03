'use client';

import React, { useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { TOOLS_DATA, AITool } from '@/lib/tools';
import HeroSection from '@/components/home/HeroSection';
import BentoGrid from '@/components/home/BentoGrid';
import StatsBar from '@/components/home/StatsBar';
import NewsletterCTA from '@/components/home/NewsletterCTA';
import AdSenseSlot from '@/components/ads/AdSenseSlot';

const ToolModal = dynamic(() => import('@/components/home/ToolModal'), { ssr: false });

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollToGrid = useCallback(() => {
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
    scrollToGrid();
  }, [scrollToGrid]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    if (hasSearched) scrollToGrid();
  }, [hasSearched, scrollToGrid]);

  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.ar.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Hero */}
        <HeroSection
          onSearch={handleSearch}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Stats bar — always visible */}
        <StatsBar />

        {/* Newsletter CTA — always visible */}
        <NewsletterCTA />

        {/* Tools grid — only after search */}
        {hasSearched && (
          <>
            <div className="w-full flex justify-center">
              <AdSenseSlot slot="leaderboard" className="max-w-4xl" />
            </div>
            <div ref={gridRef} className="scroll-mt-24">
              <BentoGrid tools={filteredTools} onToolClick={setSelectedTool} />
            </div>
          </>
        )}
      </div>

      <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
    </>
  );
}

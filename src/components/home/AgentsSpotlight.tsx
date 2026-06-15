'use client';

import React from 'react';
import { Bot, Zap, ArrowRight, Brain, Network, Cpu } from 'lucide-react';

interface AgentsSpotlightProps {
  onExplore: () => void;
}

export default function AgentsSpotlight({ onExplore }: AgentsSpotlightProps) {
  const features = [
    { icon: <Brain className="w-5 h-5 text-violet-400" />, label: 'Memory & RAG' },
    { icon: <Network className="w-5 h-5 text-cyan-400" />, label: 'Multi-Agent' },
    { icon: <Cpu className="w-5 h-5 text-emerald-400" />, label: 'Tool Calling' },
    { icon: <Zap className="w-5 h-5 text-amber-400" />, label: 'Autonomous' },
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#7C3AED] via-violet-700 to-[#06B6D4] p-6 md:p-8 shadow-xl shadow-violet-300/50">
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left: Icon + badge */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 border border-white/30 px-3 py-1 rounded-full animate-pulse">
            🔥 Trending
          </span>
        </div>

        {/* Center: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            AI Agents — <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">The New SaaS</span>
          </h2>
          <p className="text-sm text-white/90 max-w-lg mb-4">
            Forget tools that wait for your input. AI Agents act autonomously — they plan, execute, and deliver results on your behalf. The future of software is here.
          </p>
          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {features.map((f) => (
              <button key={f.label} onClick={onExplore} className="flex items-center gap-1.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 px-3 py-1.5 rounded-full transition-all cursor-pointer">
                {f.icon} {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex-shrink-0">
          <button
            onClick={onExplore}
            className="flex items-center gap-2 bg-white text-violet-700 hover:bg-violet-50 font-extrabold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-md text-sm whitespace-nowrap"
          >
            Explore Agents <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

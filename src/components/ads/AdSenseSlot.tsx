'use client';

import React, { useEffect } from 'react';
import { ADSENSE_CONFIG } from '@/config/adsense';

interface AdSenseSlotProps {
  slot: keyof typeof ADSENSE_CONFIG.slots;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  responsive?: 'true' | 'false';
}

export default function AdSenseSlot({
  slot,
  format = 'auto',
  className = '',
  responsive = 'true'
}: AdSenseSlotProps) {
  const slotId = ADSENSE_CONFIG.slots[slot];
  const isPlaceholder = ADSENSE_CONFIG.publisherId.includes('ca-pub-1234567890123456');

  useEffect(() => {
    if (!ADSENSE_CONFIG.enabled || isPlaceholder) return;

    try {
      // @ts-expect-error window.adsbygoogle is defined externally
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.warn('AdSense push failed', err);
    }
  }, [isPlaceholder]);

  // If in placeholder/dev mode, show a beautifully styled glass ad slot visualizer
  if (isPlaceholder || !ADSENSE_CONFIG.enabled) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-2xl bg-gray-50 overflow-hidden p-6 min-h-[90px] w-full text-center ${className}`}
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 -z-10" />
        
        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
          Advertisement Slot
        </span>
        <span className="text-xs text-gray-600 font-mono">
          Slot ID: {slotId} ({slot})
        </span>
        <span className="text-[10px] text-gray-500 mt-2">
          Configure real AdSense Publisher ID in config/adsense.ts to go live.
        </span>
      </div>
    );
  }

  return (
    <div className={`adsense-wrapper overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}

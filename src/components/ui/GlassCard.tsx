'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // Optional hover accent glow (e.g. from-purple-500/10 to-cyan-500/10)
  onClick?: () => void;
  hoverGlow?: boolean;
}

export default function GlassCard({
  children,
  className,
  glowColor = 'from-purple-500/10 to-cyan-500/10',
  onClick,
  hoverGlow = true
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={twMerge(
        clsx(
          'relative overflow-hidden rounded-2xl border border-gray-200',
          'bg-white shadow-sm',
          'transition-shadow duration-300',
          hoverGlow && 'hover:shadow-lg hover:shadow-violet-200/60 hover:border-violet-300',
          onClick && 'cursor-pointer',
          className
        )
      )}
    >
      {/* Background Glow Overlay */}
      {hoverGlow && (
        <div
          className={clsx(
            'absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
            glowColor
          )}
        />
      )}

      {/* Decorative reflection element */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />

      {children}
    </motion.div>
  );
}

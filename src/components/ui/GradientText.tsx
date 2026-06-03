import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export default function GradientText({
  children,
  className,
  gradient = 'from-[#7C3AED] via-[#3B82F6] to-[#06B6D4]'
}: GradientTextProps) {
  return (
    <span
      className={twMerge(
        clsx(
          'bg-gradient-to-r bg-clip-text text-transparent inline-block font-bold',
          gradient,
          className
        )
      )}
    >
      {children}
    </span>
  );
}

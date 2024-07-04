'use client'
import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function Background({ children, className = '' }: BackgroundProps) {
  return (
    <div className={`min-h-screen w-full bg-white relative ${className}`}>
      <div className="absolute inset-0 bg-[length:40px_40px] bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] opacity-30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}></div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
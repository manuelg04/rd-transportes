// components/Background.tsx
import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function Background({ children, className = '', variant = 'primary' }: BackgroundProps) {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-300';
      case 'secondary':
        return 'bg-gradient-to-tr from-yellow-300 via-yellow-200 to-blue-300';
      case 'tertiary':
        return 'bg-gradient-to-bl from-gray-200 via-blue-100 to-yellow-100';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`relative overflow-hidden ${getBackgroundStyle()} ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
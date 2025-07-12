import React from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin`}>
          <div className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-600 dark:border-t-primary-400 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className={`${iconSizes[size]} text-primary-600 dark:text-primary-400 animate-pulse`} />
        </div>
      </div>
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse font-medium">{text}</p>
      )}
    </div>
  );
}
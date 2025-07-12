import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Users, Shield, TrendingUp } from 'lucide-react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export default function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Auto-navigate after showing the landing page
    const navTimer = setTimeout(() => {
      navigate('/onboarding');
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Initializing DSFS..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 flex items-center justify-center p-4">
      <div className="text-center animate-fade-in max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-subtle">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary-800" />
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          DSFS
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Decentralized Student Funding System
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mb-3" />
            <span className="text-blue-100 text-sm sm:text-base font-medium">Community Driven</span>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 text-center">Powered by student collaboration</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mb-3" />
            <span className="text-blue-100 text-sm sm:text-base font-medium">Blockchain Secure</span>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 text-center">Transparent & trustworthy</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mb-3" />
            <span className="text-blue-100 text-sm sm:text-base font-medium">Transparent Growth</span>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 text-center">Track every contribution</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        <p className="text-blue-200 text-sm sm:text-base">Loading your experience...</p>
      </div>
    </div>
  );
}
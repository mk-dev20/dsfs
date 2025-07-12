import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Users, Shield, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 flex items-center justify-center p-4">
      <div className="text-center animate-fade-in">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-subtle">
              <Sparkles className="w-10 h-10 text-primary-800" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          DSFS
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Decentralized Student Funding System
        </p>
        
        <div className="flex items-center justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-blue-200 mb-2" />
            <span className="text-blue-100 text-sm">Community Driven</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-blue-200 mb-2" />
            <span className="text-blue-100 text-sm">Blockchain Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-8 h-8 text-blue-200 mb-2" />
            <span className="text-blue-100 text-sm">Transparent Growth</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        <p className="text-blue-200 mt-4 text-sm">Loading your experience...</p>
      </div>
    </div>
  );
}
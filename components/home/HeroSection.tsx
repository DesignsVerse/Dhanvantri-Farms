'use client';

import { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const scrollingTexts = [
    "Transforming Indian Agriculture with Innovation",
    "Smart Farming Solutions for Tomorrow",
    "Growing Sustainably with Advanced Technology",
    "Empowering Farmers with Premium Infrastructure"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % scrollingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F7D32' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Smart Farming
                <span className="text-gradient block">
                  Solutions
                </span>
              </h1>
              
              <div className="h-16 flex items-center">
                <p className="text-xl md:text-2xl text-gray-600 font-medium transition-all duration-1000">
                  {scrollingTexts[currentText]}
                </p>
              </div>

              <p className="text-lg text-gray-600 max-w-xl">
                Global leader in premium infrastructure and technology for Polyhouse, Net House, 
                Hydroponics, and Automation. Transforming agriculture into a profitable, 
                sustainable, and future-ready practice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="btn-secondary inline-flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">50+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">100+</div>
                <div className="text-sm text-gray-600">Cities Presence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">15K+</div>
                <div className="text-sm text-gray-600">Happy Farmers</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg" 
                alt="Modern Greenhouse Technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Smart Monitoring</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-green-700">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-700 rounded-full mt-2 animate-ping" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
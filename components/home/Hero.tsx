'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Slide = {
  src: string;
  title: string;
  subtitle: string;
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = useMemo(() => [
    {
      src: '/service/poly/1.jpg',
      title: 'Polyhouse Farming',
      subtitle: 'Maximize productivity with our climate-controlled polyhouses designed for year-round farming success.',
    },
    {
      src: '/service/organic/1.jpg',
      title: 'Sustainable Organic Farming',
      subtitle: 'Embrace chemical-free farming with Dhanvantri Farms for healthier crops and eco-friendly growth.',
    },
    {
      src: '/service/8.jpg',
      title: 'Modern Mushroom Farming',
      subtitle: 'Explore new revenue streams with Dhanvantri Farms innovative mushroom farming setups.',
    },
    {
      src: '/service/warehouse/1.jpg',
      title: 'Smart Agri Warehousing',
      subtitle: 'Secure your harvest with Dhanvantri Farms cutting-edge agricultural warehousing solutions.',
    },
    {
      src: '/service/cold/cold.jpg',
      title: 'Cold Storage Facilities',
      subtitle: 'Preserve freshness and extend shelf life with Dhanvantri Farms state-of-the-art cold storage systems.',
    },
  ], []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNextSlide();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleNextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 700);
  }, [slides.length]);

  const handlePrevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 700);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Slides with Enhanced Transition */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 0}
              quality={95}
              sizes="100vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            {/* Cool Gradient Overlay - Text upar laane ke liye */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content - Ab text upar hai */}
      <div className="relative z-20 w-full max-w-6xl px-6 lg:px-8 text-white mt-[-100px]">
        {/* Text Content - Upar shifted */}
        <div className="relative h-72 lg:h-64 mb-12">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-out ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-lime-400/20 backdrop-blur-sm rounded-full border border-lime-400/30 mb-6 lg:mb-8">
                <div className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-lime-400 text-sm font-semibold uppercase tracking-wide">
                  Premium Agri Solutions
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed max-w-2xl lg:max-w-3xl">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Upar shifted */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
          <Link href="/services" className="block">
            <button className="group w-full sm:w-auto px-8 lg:px-10 py-4 bg-lime-400 hover:bg-lime-300 text-green-900 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-2xl border-2 border-lime-400">
              <span className="flex items-center justify-center text-base lg:text-lg">
                View More Services
                <ArrowRight className="ml-2 lg:ml-3 transform group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
          </Link>
          
          <Link href="/contact" className="block">
            <button className="group w-full sm:w-auto px-8 lg:px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm">
              <span className="flex items-center justify-center text-base lg:text-lg">
                Contact Us Now
                <ArrowRight className="ml-2 lg:ml-3 transform group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-28 lg:bottom-24 left-1/2 -translate-x-1/2 z-30">
        <div className="flex space-x-3 lg:space-x-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`group relative w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-500 ${
                idx === currentIndex 
                  ? 'bg-lime-400 scale-125 shadow-lg shadow-lime-400/50' 
                  : 'bg-white/40 hover:bg-white/60 backdrop-blur-sm'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-lime-400/20 animate-pulse' : ''
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
        <button 
          onClick={handlePrevSlide}
          disabled={isTransitioning}
          className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 lg:p-4 rounded-xl transition-all duration-300 disabled:opacity-30 transform hover:scale-110 active:scale-95 border border-white/20 hover:border-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="lg:w-6 lg:h-6 transform group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={handleNextSlide}
          disabled={isTransitioning}
          className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 lg:p-4 rounded-xl transition-all duration-300 disabled:opacity-30 transform hover:scale-110 active:scale-95 border border-white/20 hover:border-white/30"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Mobile Touch Swipe Area */}
      <div 
        className="absolute inset-0 z-20 lg:hidden"
        onTouchStart={(e) => {
          const touchDown = e.touches[0].clientX;
          const handleTouchMove = (moveEvent: TouchEvent) => {
            const touchUp = moveEvent.touches[0].clientX;
            const diff = touchDown - touchUp;
            if (Math.abs(diff) > 50 && !isTransitioning) {
              if (diff > 0) {
                handleNextSlide();
              } else {
                handlePrevSlide();
              }
            }
          };
          
          const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
          };

          document.addEventListener('touchmove', handleTouchMove);
          document.addEventListener('touchend', handleTouchEnd);
        }}
      />
    </section>
  );
};

export default HeroSection;
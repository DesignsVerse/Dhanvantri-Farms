'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Content for each slide
  const slides = [
    {
      title: "Advanced Mushroom Farming",
      description: "Specialized climate-controlled environments for optimal mushroom cultivation with higher yields and superior quality.",
      image: '/hero/1.jpg',
      cta: "Explore Mushroom Solutions",
      features: ["Climate Control", "Higher Yields", "Quality Assurance"]
    },
    {
      title: "Hydroponic Innovations",
      description: "Soilless farming technology that uses 90% less water while increasing production by up to 3x compared to traditional methods.",
      image: '/hero/2.jpg',
      cta: "Discover Hydroponics",
      features: ["90% Less Water", "3x Production", "Year-Round Growth"]
    },
    {
      title: "Smart Greenhouses",
      description: "AI-powered greenhouse systems with automated climate control, irrigation, and monitoring for precision agriculture.",
      image: '/hero/3.jpg',
      cta: "View Greenhouse Options",
      features: ["AI Powered", "Automated Systems", "Precision Agriculture"]
    }
  ];

  // Handle next/previous navigation with transition effect
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Consistent animation variant for all elements including buttons
  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className="relative h-[80vh] min-h-[650px] flex items-center overflow-hidden shadow-2xl mx- lg:mx-0">
      {/* Background Images with sliding animation */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>
      
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-" />
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-2/3">
          {/* Animated text content */}
          <div className="mb-8 overflow-hidden">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={variant}
              initial="hidden"
              animate="visible"
              key={`title-${currentIndex}`}
            >
              {slides[currentIndex].title}
            </motion.h1>
            
            {/* Decorative line */}
            <motion.div 
              className="w-24 h-1 bg-green-400 mb-6 rounded-full"
              variants={variant}
              initial="hidden"
              animate="visible"
              key={`line-${currentIndex}`}
            ></motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl"
              variants={variant}
              initial="hidden"
              animate="visible"
              key={`desc-${currentIndex}`}
            >
              {slides[currentIndex].description}
            </motion.p>
          </div>
          
          {/* Feature tags with consistent animation */}
          <div className="flex flex-wrap gap-3 mb-10">
            {slides[currentIndex].features.map((feature, index) => (
              <motion.span 
                key={`${feature}-${currentIndex}`}
                className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm border border-white/20"
                variants={variant}
                initial="hidden"
                animate="visible"
              >
                {feature}
              </motion.span>
            ))}
          </div>
          
          {/* Animated CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={variant}
            initial="hidden"
            animate="visible"
            key={`buttons-${currentIndex}`}
          >
            <Link href="/contact" className="inline-block group">
              <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform group-hover:scale-105 shadow-lg">
                {slides[currentIndex].cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
            
            <a
              href="https://wa.me/919999999999"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              target="_blank" rel="noopener noreferrer"
            >
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01a1.099 1.099 0 0 0-.796.373c-.273.298-1.045 1.02-1.045 2.479 0 1.458 1.068 2.874 1.217 3.074.149.198 2.105 3.223 5.103 4.392.714.308 1.27.491 1.705.63.717.228 1.368.196 1.884.119.575-.085 1.758-.719 2.006-1.415.248-.695.248-1.29.173-1.415-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.742.982.999-3.648-.235-.374A9.86 9.86 0 0 1 0 11.513C0 5.16 5.159 0 11.5 0 17.841 0 23 5.16 23 11.513c0 6.352-5.159 11.513-11.529 11.513m8.282-19.794C18.127 1.983 14.894 0 11.5 0 5.159 0 0 5.16 0 11.513c0 2.046.534 4.05 1.553 5.809L.059 23.093a1.005 1.005 0 0 0 .245 1.016c.196.199.463.26.709.161l4.249-1.115A11.38 11.38 0 0 0 11.5 23.025c6.341 0 11.5-5.16 11.5-11.512 0-2.8-1.047-5.426-2.96-7.308"/>
              </svg>
              WhatsApp Consultation
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Navigation arrows - Hidden on mobile */}
      <button 
        onClick={prevSlide}
        className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ArrowLeftCircle size={36} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ArrowRightCircle size={36} />
      </button>
      
      {/* Pagination indicators with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsTransitioning(false), 1000);
              }
            }}
            className={`w-12 h-1 rounded-full transition-all duration-500 relative overflow-hidden ${
              idx === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx === currentIndex && (
              <div className="absolute top-0 left-0 h-full bg-white animate-progress"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

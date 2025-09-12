'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Slide type definition
type Slide = {
  title: string;
  description: string;
  image: string;
  cta: string;
  features: string[];
  color: string;
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const slides: Slide[] = [
    {
      title: 'Smart Mushroom Cultivation',
      description: 'Revolutionary climate control for maximum yields.',
      image: '/hero/1.jpg',
      cta: 'Explore Mushroom Tech',
      features: ['Smart Climate', 'High Yields', 'Sustainable'],
      color: 'from-green-800/80 via-green-600/50 to-transparent',
    },
    {
      title: 'Hydroponic Farming Future',
      description: 'Grow more with 90% less water.',
      image: '/hero/2.jpg',
      cta: 'Discover Hydroponics',
      features: ['Water-Efficient', '3x Growth', 'Year-Round'],
      color: 'from-teal-800/80 via-teal-600/50 to-transparent',
    },
    {
      title: 'AI-Powered Greenhouses',
      description: 'Precision agriculture with automated systems.',
      image: '/hero/3.jpg',
      cta: 'View Smart Greenhouses',
      features: ['AI-Driven', 'Automated', 'Eco-Friendly'],
      color: 'from-lime-800/80 via-lime-600/50 to-transparent',
    },
  ];

  // Auto-slide
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500); // 3.5s for dynamic pacing
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  // Animation variants
  const textVariant: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const featureVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="relative h-[90vh] min-h-[550px] flex items-center overflow-hidden mx-0 bg-green-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
            style={{ willChange: 'opacity, transform' }}
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              sizes="100vw"
              className="object-cover brightness-90"
              priority={currentIndex === 0}
              quality={85}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay with Leaf Pattern */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slides[currentIndex].color} z-10 opacity-90`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight font-sans"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            key={`title-${currentIndex}`}
          >
            {slides[currentIndex].title}
          </motion.h1>

          <motion.div
            className="w-16 h-1 bg-lime-400 mb-6 rounded-full"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          />

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 max-w-md leading-relaxed font-medium"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            key={`desc-${currentIndex}`}
          >
            {slides[currentIndex].description}
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            {slides[currentIndex].features.map((feature, index) => (
              <motion.span
                key={`${feature}-${currentIndex}`}
                className="px-3 py-1.5 bg-lime-500/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm border border-lime-400/30 shadow-sm"
                variants={featureVariant}
                custom={index}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.15 }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            key={`buttons-${currentIndex}`}
          >
            <Link href="/contact" className="inline-block group">
              <button className="px-6 py-3 bg-lime-400/90 text-green-900 rounded-full font-semibold text-sm sm:text-base hover:bg-lime-300 transition-all duration-300 flex items-center justify-center transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                {slides[currentIndex].cta}
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
            </Link>

            <a
              href="https://wa.me/919999999999"
              className="px-6 py-3 bg-green-700/90 hover:bg-green-600 text-white rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Leaf size={18} />
              Connect Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-lime-500/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:bg-lime-500/30 hover:scale-110 shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-lime-500/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:bg-lime-500/30 hover:scale-110 shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="sm:w-8 sm:h-8" />
      </button>

      {/* Progress Indicators (Leaf-Shaped) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
              currentIndex === index
                ? 'bg-lime-400 scale-125 rotate-45'
                : 'bg-white/40 rotate-45'
            } rounded-sm transform`}
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <button
          onClick={toggleAutoplay}
          className="bg-lime-500/20 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-lime-500/30 transition-all duration-300"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Leaf size={16} className="sm:w-5 sm:h-5" /> : <Leaf size={16} className="sm:w-5 sm:h-5" />}
        </button>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 3.5s linear;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
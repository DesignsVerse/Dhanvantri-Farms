'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Slide = {
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title: string;
  subtitle: string;
};

const AUTOPLAY_MS = 6000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const slides: Slide[] = useMemo(() => [
    {
      type: 'video',
      src: '/video/polyhouse-farming.mp4',
      poster: '/hero/1.jpg',
      title: 'Revolutionizing Agriculture',
      subtitle: 'Dhanvantri Farms’ climate-controlled polyhouse solutions boost crop yields with smart technology.',
    },
    {
      type: 'image',
      src: '/hero/2.jpg',
      title: 'Sustainable Organic Farming',
      subtitle: 'Embrace chemical-free farming with Dhanvantri Farms for healthier crops and eco-friendly growth.',
    },
    {
      type: 'image',
      src: '/hero/3.jpg',
      title: 'Advanced Nethouse Solutions',
      subtitle: 'Protect crops with durable nethouse structures designed by Dhanvantri Farms for optimal yield.',
    },
    {
      type: 'video',
      src: '/video/mushroom-farming.mp4',
      poster: '/hero/4.jpg',
      title: 'Modern Mushroom Farming',
      subtitle: 'Explore new revenue streams with Dhanvantri Farms’ innovative mushroom farming setups.',
    },
    {
      type: 'image',
      src: '/hero/5.jpg',
      title: 'Smart Agri Warehousing',
      subtitle: 'Secure your harvest with Dhanvantri Farms’ cutting-edge agricultural warehousing solutions.',
    },
  ], []);

  // Auto-slide
  useEffect(() => {
    if (!isPlaying || isHovering) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPlaying, isHovering, slides.length]);

  const nextSlide = useCallback(() => setCurrentIndex((p) => (p + 1) % slides.length), [slides.length]);
  const prevSlide = useCallback(() => setCurrentIndex((p) => (p - 1 + slides.length) % slides.length), [slides.length]);
  const goToSlide = useCallback((index: number) => { if (index !== currentIndex) setCurrentIndex(index); }, [currentIndex]);
  const toggleAutoplay = useCallback(() => setIsPlaying((v) => !v), []);

  return (
    <section
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {slides[currentIndex].type === 'image' ? (
              <Image
                src={slides[currentIndex].src}
                alt={slides[currentIndex].title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? 'eager' : 'lazy'}
                quality={60}
              />
            ) : (
              <video
                key={`vid-${currentIndex}`}
                autoPlay
                loop
                muted
                playsInline
                poster={slides[currentIndex].poster}
                className="w-full h-full object-cover"
              >
                <source src={slides[currentIndex].src} type="video/mp4" />
              </video>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-white">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentIndex].title}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {slides[currentIndex].subtitle}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <button className="px-8 py-4 bg-lime-400 text-green-900 rounded-full font-bold hover:bg-lime-300 transition">
              Start a Project <ArrowRight className="inline ml-2" size={20} />
            </button>
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=919090343490&text=Hello Agriplast Team, I'm interested in Hi-Tech Farming."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-800 hover:bg-green-700 rounded-full font-bold flex items-center gap-2 transition"
          >
            <Leaf size={20} /> Connect on WhatsApp
          </a>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 z-30">
        <button onClick={prevSlide} className="bg-lime-500/20 backdrop-blur-lg p-3 rounded-full">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="bg-lime-500/20 backdrop-blur-lg p-3 rounded-full">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Play/Pause */}
      <button
        onClick={toggleAutoplay}
        className="absolute right-4 bottom-4 bg-lime-500/20 backdrop-blur-lg p-3 rounded-full z-30"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Progress */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, idx) => (
          <div key={idx} className={`w-10 h-2 rounded-full ${idx === currentIndex ? 'bg-lime-400' : 'bg-white/30'}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

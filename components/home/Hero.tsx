'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Slide = {
  type: 'video' | 'image';
  src: string;
  title: string;
  subtitle: string;
};

const AUTOPLAY_MS = 6000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [direction, setDirection] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const slides: Slide[] = useMemo(
    () => [
      {
        type: 'video',
        src: '',
        title: 'Polyhouse Farming',
        subtitle: 'Revolutionize your crop production with climate-controlled polyhouse structures.',
      },
      {
        type: 'image',
        src: '',
        title: 'Organic Farming',
        subtitle: 'Adopt chemical-free farming methods for healthier crops and sustainable growth.',
      },
      {
        type: 'image',
        src: '/hero/nethouse.jpg',
        title: 'Nethouse Solutions',
        subtitle: 'Protect your crops with advanced nethouse structures designed for durability and yield.',
      },
      {
        type: 'video',
        src: '/video/mushroom-farming.mp4',
        title: 'Mushroom Farming',
        subtitle: 'Unlock new income streams with modern mushroom farming techniques and setups.',
      },
      {
        type: 'image',
        src: '/hero/warehouse.jpg',
        title: 'Agri Warehousing',
        subtitle: 'Secure and preserve your harvest with world-class agricultural warehousing solutions.',
      },
      {
        type: 'image',
        src: '/hero/hydroponics.jpg',
        title: 'Hydroponics',
        subtitle: 'Grow more with less—experience soil-less farming powered by hydroponic systems.',
      },
    ],
    []
  );
  
  // Auto-slide with hover/pause
  useEffect(() => {
    if (!isPlaying || isHovering) return;
    const t = setInterval(() => {
      setDirection(1);
      setCurrentIndex((p) => (p + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [isPlaying, isHovering, slides.length]);

  // Variants
  const textVariant: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  const imageVariant: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 200 : -200,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      x: dir < 0 ? 200 : -200,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const toggleAutoplay = useCallback(() => setIsPlaying((v) => !v), []);

  return (
    <section
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            custom={direction}
            variants={imageVariant}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {slides[currentIndex].type === 'image' ? (
              <Image
                src={slides[currentIndex].src}
                alt={slides[currentIndex].title}
                fill
                sizes="100vw"
                className="object-cover brightness- scale-105 transition-all duration-700 ease-out"
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? 'eager' : 'lazy'}
                quality={80}
              />
            ) : (
              <video
                key={`vid-${currentIndex}`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover "
              >
                <source src={slides[currentIndex].src} type="video/mp4" />
              </video>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          {/* Title (word-by-word) */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight font-sans"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            key={`title-${currentIndex}`}
          >
            {slides[currentIndex].title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="w-24 h-1.5 bg-lime-400 mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 max-w-lg leading-relaxed font-medium"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            key={`desc-${currentIndex}`}
          >
            {slides[currentIndex].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            key={`buttons-${currentIndex}`}
          >
            <Link href="/contact" className="inline-block group">
              <motion.button
                className="px-8 py-4 bg-lime-400 text-green-900 rounded-full font-bold text-base sm:text-lg hover:bg-lime-300 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start a Project
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </motion.button>
            </Link>

            <motion.a
              href="https://api.whatsapp.com/send?phone=919090343490&text=Hello Agriplast Team, I'm interested in Hi-Tech Farming. Please connect to me as soon as possible."
              className="px-8 py-4 bg-green-800 hover:bg-green-700 text-white rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Leaf size={20} className="group-hover:rotate-12 transition-transform duration-200" />
              Connect on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Prev/Next */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-lime-500/20 backdrop-blur-lg text-white p-3 sm:p-4 rounded-full transition-all duration-200 shadow-xl hover:bg-lime-500/40"
        aria-label="Previous slide"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <ChevronLeft size={28} />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-lime-500/20 backdrop-blur-lg text-white p-3 sm:p-4 rounded-full transition-all duration-200 shadow-xl hover:bg-lime-500/40"
        aria-label="Next slide"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <ChevronRight size={28} />
      </motion.button>

      {/* Play/Pause */}
      <motion.button
        onClick={toggleAutoplay}
        className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 z-30 bg-lime-500/20 backdrop-blur-lg text-white p-3 rounded-full transition-all duration-200 shadow-xl hover:bg-lime-500/40"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </motion.button>

      {/* Progress (segmented bars) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative w-12 h-2 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentIndex === index && isPlaying && !isHovering && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-lime-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                key={`progress-${currentIndex}`}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

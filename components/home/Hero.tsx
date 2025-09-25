'use client';

import { useState, useCallback, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Slide = {
  src: string;
  title: string;
  subtitle: string;
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = useMemo(() => [
    {
      src: '/hero/1.jpg',
      title: 'Revolutionizing Agriculture',
      subtitle: 'Dhanvantri Farms climate-controlled polyhouse solutions boost crop yields with smart technology.',
    },
    {
      src: '/hero/2.jpg',
      title: 'Sustainable Organic Farming',
      subtitle: 'Embrace chemical-free farming with Dhanvantri Farms for healthier crops and eco-friendly growth.',
    },
    {
      src: '/hero/3.jpg',
      title: 'Advanced Nethouse Solutions',
      subtitle: 'Protect crops with durable nethouse structures designed by Dhanvantri Farms for optimal yield.',
    },
    {
      src: '/hero/4.jpg',
      title: 'Modern Mushroom Farming',
      subtitle: 'Explore new revenue streams with Dhanvantri Farms innovative mushroom farming setups.',
    },
    {
      src: '/hero/5.jpg',
      title: 'Smart Agri Warehousing',
      subtitle: 'Secure your harvest with Dhanvantri Farms cutting-edge agricultural warehousing solutions.',
    },
  ], []);

  const nextSlide = useCallback(() => setCurrentIndex((p) => (p + 1) % slides.length), [slides.length]);
  const prevSlide = useCallback(() => setCurrentIndex((p) => (p - 1 + slides.length) % slides.length), [slides.length]);

  return (
    <section className="relative h-[90%] min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentIndex].src}
          alt={slides[currentIndex].title}
          fill
          priority={currentIndex === 0}
          quality={85}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-1 md:px-0 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mb-6">
          {slides[currentIndex].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <button className="px-8 py-4 bg-lime-400 text-green-900 rounded-full font-bold">
              Start a Project <ArrowRight className="inline ml-2" size={20} />
            </button>
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=919090343490&text=Hello Agriplast Team, I'm interested in Hi-Tech Farming."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-800 rounded-full font-bold flex items-center gap-2"
          >
            <Leaf size={20} /> Connect on WhatsApp
          </a>
        </div>
      </div>

      {/* Controls and Progress */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30">
        {/* Progress Dots */}
        {/* <div className="flex space-x-2">
          {slides.map((_, idx) => (
            <div key={idx} className={`w-10 h-2 rounded-full ${idx === currentIndex ? 'bg-lime-400' : 'bg-white/30'}`} />
          ))}
        </div> */}
        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button onClick={prevSlide} className="bg-lime-500/20 backdrop-blur-lg p-3 rounded-full">
            <ChevronLeft size={28} />
          </button>
          <button onClick={nextSlide} className="bg-lime-500/20 backdrop-blur-lg p-3 rounded-full">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
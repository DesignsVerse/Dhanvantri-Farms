'use client';

import { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3 scrolling texts
  const scrollingTexts = [
    "Innovative Greenhouse Designs Tailored for You",
    "Sustainable Farming with Advanced Technology",
    "Empowering Farmers, Transforming Agriculture"
  ];

  // 3 different background images (agriculture-related from Pexels)
  const backgroundImages = [
    'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Greenhouse
    'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Hydroponics/Farming tech
    'https://images.pexels.com/photos/4397812/pexels-photo-4397812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Farmers/empowerment
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scrollingTexts.length);
    }, 4000); // Change every 4 seconds (infinite loop)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with fade transition */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000"
        style={{
          backgroundImage: `url('${backgroundImages[currentIndex]}')`,
          filter: 'brightness(0.65)'
        }}
      />
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="lg:w-2/3">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Advanced <br /> Farming Solutions
          </h1>

          {/* Infinite Scrolling Text */}
          <div className="h-12 flex items-center mb-6">
            <span className="text-2xl md:text-3xl font-semibold text-white transition-all duration-700" key={currentIndex}>
              {scrollingTexts[currentIndex]}
            </span>
          </div>

          <p className="text-lg text-gray-100 max-w-2xl mb-10">
            Discover innovative polyhouse, net house, hydroponics, and automation systems designed to maximize yields, reduce costs, and promote sustainable agriculture for modern farmers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block">
              <button className="px-8 py-4 border-2 border-white text-white rounded font-semibold text-lg hover:bg-white hover:text-black transition">
                START YOUR PROJECT
              </button>
            </Link>
            <a
              href="https://wa.me/919999999999"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded font-semibold text-lg inline-flex items-center gap-2 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01a1.099 1.099 0 0 0-.796.373c-.273.298-1.045 1.02-1.045 2.479 0 1.458 1.068 2.874 1.217 3.074.149.198 2.105 3.223 5.103 4.392.714.308 1.27.491 1.705.63.717.228 1.368.196 1.884.119.575-.085 1.758-.719 2.006-1.415.248-.695.248-1.29.173-1.415-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.742.982.999-3.648-.235-.374A9.86 9.86 0 0 1 0 11.513C0 5.16 5.159 0 11.5 0 17.841 0 23 5.16 23 11.513c0 6.352-5.159 11.513-11.529 11.513m8.282-19.794C18.127 1.983 14.894 0 11.5 0 5.159 0 0 5.16 0 11.513c0 2.046.534 4.05 1.553 5.809L.059 23.093a1.005 1.005 0 0 0 .245 1.016c.196.199.463.26.709.161l4.249-1.115A11.38 11.38 0 0 0 11.5 23.025c6.341 0 11.5-5.16 11.5-11.512 0-2.8-1.047-5.426-2.96-7.308"/>
              </svg>
              CONNECT ON WHATSAPP
            </a>
          </div>

          {/* Pagination dots for scrolling text */}
          <div className="flex space-x-2 mt-8">
            {scrollingTexts.map((_, idx) => (
              <span
                key={idx}
                className={`w-8 h-1 rounded-full transition-all ${idx === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                style={{ display: 'inline-block' }}
              />
            ))}
          </div>

          {/* Stats - Added good stats at bottom */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/30 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm">Years of Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-sm">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">15K+</div>
              <div className="text-sm">Satisfied Farmers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

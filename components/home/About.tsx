'use client';

import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 items-center">
        
        {/* Image Section */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/farm.jpg"
            alt="Greenhouse farming solutions for sustainable agriculture"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover h-[280px] sm:h-[360px] lg:h-[420px] brightness-90"
            quality={50} // Reduced quality for faster loading
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/30 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 z-20 text-white">
            <h3 className="text-lg sm:text-xl font-semibold drop-shadow-md">
              Empowering Farmers
            </h3>
            <p className="text-xs sm:text-sm drop-shadow-sm opacity-90">
              Smart Agriculture Solutions
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:px-6">
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-green-950 mb-3 tracking-tight font-sans">
            Farmer Success Stories
          </h2>

          {/* Underline */}
          <div className="h-1 w-24 bg-lime-400 mb-5 rounded-full shadow-sm" />

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed font-medium">
            Explore how hi-tech farming solutions are transforming agriculture. From polyhouses to hydroponics, our innovations empower farmers to achieve sustainable yields and a prosperous future.
          </p>

          {/* Tagline */}
          <div className="mb-6">
            <span className="text-lg sm:text-xl font-semibold text-lime-500">
              Innovating agriculture
            </span>
            <span className="text-lg sm:text-xl font-light text-green-950">
              {' '}for a sustainable future.
            </span>
          </div>

          {/* CTA Button */}
          <div>
            <Link href="/success-stories" className="inline-block">
              <button className="bg-gradient-to-r from-lime-400 to-green-700 text-white text-sm sm:text-base px-6 py-2.5 rounded-lg font-semibold shadow-md">
                Read Success Stories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
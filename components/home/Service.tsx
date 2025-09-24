'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sprout, Home, Droplets, Settings, Leaf, Warehouse, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurServices = () => {
  const categories = [
    { icon: Home, title: 'Polyhouse', description: 'Climate-controlled farming solutions', href: '/polyhouse', image: '/hero/1.jpg' },
    { icon: Sprout, title: 'Net House', description: 'Protected cultivation structures', href: '/net-house', image: '/hero/2.jpg' },
    { icon: Droplets, title: 'Hydroponics', description: 'Soilless farming systems', href: '/hydroponics', image: '/hero/3.jpg' },
    { icon: Settings, title: 'Automation', description: 'Smart IoT-integrated solutions', href: '/automation', image: '/hero/4.jpg' },
    { icon: Leaf, title: 'Organic Farming', description: 'Sustainable and chemical-free agriculture', href: '/organic-farming', image: '/hero/5.jpg' },
    { icon: Warehouse, title: 'Warehouse', description: 'Efficient storage solutions', href: '/warehouse', image: '/hero/6.jpg' },
    { icon: Snowflake, title: 'Cold Storage', description: 'Temperature-controlled storage', href: '/cold-storage', image: '/hero/7.jpg' },
  ];

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Services</span>
          </h2>
          <div className="h-1 w-28 sm:w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6" />
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Smart farming solutions for sustainable agriculture
          </p>
        </div>

        <div className="space-y-10">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {categories.slice(0, 4).map((category, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

              return (
                <div
                  ref={ref}
                  key={index}
                  
                  className="group bg-white shadow-md sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-[#8bc34a]/50 rounded-xl"
                >
                  <div className="relative h-36 sm:h-44 lg:h-56 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.title} Image`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index < 2}
                      quality={60}
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-base sm:text-lg lg:text-2xl font-bold drop-shadow-lg">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium mb-4 hidden sm:block">{category.description}</p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-xs sm:text-sm md:text-base hover:text-[#689f38] transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {categories.slice(4, 7).map((category, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

              return (
                <div
                  ref={ref}
                  key={index + 4}

                  className="group bg-white shadow-md sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-[#8bc34a]/50 rounded-xl"
                >
                  <div className="relative h-36 sm:h-44 lg:h-56 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.title} Image`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={60}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-base sm:text-lg lg:text-2xl font-bold drop-shadow-lg">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium mb-4 hidden sm:block">{category.description}</p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-xs sm:text-sm md:text-base hover:text-[#689f38] transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

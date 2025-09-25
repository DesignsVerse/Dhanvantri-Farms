'use client';

import Link from 'next/link';
import { Sprout, Home, Droplets, Settings, Leaf, Warehouse, Snowflake } from 'lucide-react';

const OurServices = () => {
  const categories = [
    { icon: Home, title: 'Polyhouse', description: 'Climate-controlled farming solutions', href: '/polyhouse' },
    { icon: Sprout, title: 'Net House', description: 'Protected cultivation structures', href: '/net-house' },
    { icon: Droplets, title: 'Hydroponics', description: 'Soilless farming systems', href: '/hydroponics' },
    // { icon: Settings, title: 'Automation', description: 'Smart IoT-integrated solutions', href: '/automation' },
    { icon: Leaf, title: 'Organic Farming', description: 'Sustainable and chemical-free agriculture', href: '/organic-farming' },
    { icon: Warehouse, title: 'Warehouse', description: 'Efficient storage solutions', href: '/warehouse' },
    { icon: Snowflake, title: 'Cold Storage', description: 'Temperature-controlled storage', href: '/cold-storage' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
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
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white shadow-md overflow-hidden border border-green-100 rounded-xl"
                >
                  <div className="relative h-36 sm:h-44 lg:h-56 flex items-center justify-center bg-green-50">
                    <Icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#8bc34a]" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium mb-4 hidden sm:block">{category.description}</p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-xs sm:text-sm md:text-base"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {categories.slice(4, 7).map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index + 4}
                  className="bg-white shadow-md overflow-hidden border border-green-100 rounded-xl"
                >
                  <div className="relative h-36 sm:h-44 lg:h-56 flex items-center justify-center bg-green-50">
                    <Icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#8bc34a]" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium mb-4 hidden sm:block">{category.description}</p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-xs sm:text-sm md:text-base"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
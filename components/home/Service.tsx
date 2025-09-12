'use client';

import Link from 'next/link';
import Image from 'next/image'; // Use Next.js Image for optimization
import { Sprout, Home, Droplets, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurServices = () => {
  const categories = [
    {
      icon: Home,
      title: 'Polyhouse',
      description: 'Climate-controlled ',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/polyhouse',
      image: '/hero/3.jpg',
    },
    {
      icon: Sprout,
      title: 'Net House',
      description: 'Protected cultivation',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/net-house',
      image: '/hero/4.jpg',
    },
    {
      icon: Droplets,
      title: 'Hydroponics',
      description: 'Soilless systems systems ',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/hydroponics',
      image: '/hero/5.jpg',
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Smart IoT-integrated',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/automation',
      image: '/hero/2.jpg',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }} // Adjusted for earlier trigger
          transition={{ duration: 0.6 }} // Reduced duration for faster render
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Services</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 " />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Smart farming solutions for agriculture
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2, // Increased threshold for smoother detection
            });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 40 }} // Reduced y for less jarring animation
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Faster and staggered
                whileHover={{ scale: 1.03, y: -5 }} // Reduced scale for performance
                className="group bg-white  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-[#8bc34a]/50"
                style={{ willChange: 'transform' }} // Optimize rendering
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.title} Image`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw" // Optimize image sizes
                    className="object-cover transition-transform duration-500 group-hover:scale-105" // Reduced scale
                    priority={index === 0} // Preload first image only
                    quality={75} // Balance quality and performance
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold drop-shadow-lg">{category.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium text-base mb-4">
                        {category.description}
                      </p>
                      <Link
                        href={category.href}
                        className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-base hover:text-[#689f38] transition-all duration-300 group-hover:translate-x-1"
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
'use client';

import Link from 'next/link';
import { Sprout, Home, Droplets, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurServices = () => {
  const categories = [
    {
      icon: Home,
      title: 'Polyhouse',
      description: 'Advanced climate-controlled farming structures',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/polyhouse',
      image: '/hero/3.jpg'
    },
    {
      icon: Sprout,
      title: 'Net House',
      description: 'Protected cultivation with premium netting',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/net-house',
      image: '/hero/4.jpg'
    },
    {
      icon: Droplets,
      title: 'Hydroponics',
      description: 'Soilless systems for maximum productivity',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/hydroponics',
      image: '/hero/5.jpg'
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Smart IoT-integrated farming systems',
      color: 'from-[#8bc34a] to-[#689f38]',
      href: '/automation',
      image: '/hero/2.jpg'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Services</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive smart farming solutions designed to maximize your agricultural potential
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <motion.div 
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-green-100 hover:border-[#8bc34a]/50"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={`${category.title} Image`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                        className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-base hover:text-[#689f38] transition-all duration-300 group-hover:translate-x-2"
                      >
                        <span>Learn More</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

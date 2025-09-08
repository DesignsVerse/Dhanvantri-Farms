'use client';

import Link from 'next/link';
import { Sprout, Home, Droplets, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CategoryBlocks = () => {
  const categories = [
    {
      icon: Home,
      title: 'Polyhouse',
      description: 'Naturally ventilated polyhouses with advanced climate control systems',
      features: ['Climate Control', 'Pest Management', 'Year-round Growing', 'Water Efficiency'],
      color: 'from-green-500 to-green-600',
      href: '/polyhouse',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Example image for Polyhouse
    },
    {
      icon: Sprout,
      title: 'Net House',
      description: 'Premium net house solutions for protected cultivation',
      features: ['UV Protection', 'Insect Control', 'Cost Effective', 'Easy Installation'],
      color: 'from-blue-500 to-blue-600',
      href: '/net-house',
      image: 'https://images.pexels.com/photos/918658/pexels-photo-918658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Example image for Net House
    },
    {
      icon: Droplets,
      title: 'Hydroponics',
      description: 'Soilless cultivation systems for maximum productivity',
      features: ['Water Saving', 'Higher Yields', 'Nutrient Control', 'Faster Growth'],
      color: 'from-cyan-500 to-cyan-600',
      href: '/hydroponics',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Example image for Hydroponics
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Smart automation systems with IoT integration',
      features: ['Remote Monitoring', 'Auto Irrigation', 'Climate Control', 'Data Analytics'],
      color: 'from-purple-500 to-purple-600',
      href: '/automation',
      image: 'https://images.pexels.com/photos/2886935/pexels-photo-2886935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Example image for Automation
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive smart farming solutions designed to maximize your agricultural potential
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <motion.div 
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                
                {/* Image Section - Added with overlay gradient */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={`${category.title} Image`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} text-white rounded-xl flex-shrink-0`}
                    >
                      <category.icon className="w-8 h-8" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <p className="text-gray-600 mb-6">
                        {category.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="w-2 h-2 bg-green-500 rounded-full"
                            />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        href={category.href}
                        className="inline-flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-all duration-300 group-hover:translate-x-1"
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default CategoryBlocks;

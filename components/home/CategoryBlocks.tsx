'use client';

import Link from 'next/link';
import { Sprout, Home, Droplets, Settings } from 'lucide-react';

const CategoryBlocks = () => {
  const categories = [
    {
      icon: Home,
      title: 'Polyhouse',
      description: 'Naturally ventilated polyhouses with advanced climate control systems',
      features: ['Climate Control', 'Pest Management', 'Year-round Growing', 'Water Efficiency'],
      color: 'from-green-500 to-green-600',
      href: '/polyhouse'
    },
    {
      icon: Sprout,
      title: 'Net House',
      description: 'Premium net house solutions for protected cultivation',
      features: ['UV Protection', 'Insect Control', 'Cost Effective', 'Easy Installation'],
      color: 'from-blue-500 to-blue-600',
      href: '/net-house'
    },
    {
      icon: Droplets,
      title: 'Hydroponics',
      description: 'Soilless cultivation systems for maximum productivity',
      features: ['Water Saving', 'Higher Yields', 'Nutrient Control', 'Faster Growth'],
      color: 'from-cyan-500 to-cyan-600',
      href: '/hydroponics'
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Smart automation systems with IoT integration',
      features: ['Remote Monitoring', 'Auto Irrigation', 'Climate Control', 'Data Analytics'],
      color: 'from-purple-500 to-purple-600',
      href: '/automation'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive smart farming solutions designed to maximize your agricultural potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} text-white rounded-xl`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={category.href}
                      className="inline-flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBlocks;
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuccessStories = () => {
  const stories = [
    {
      title: 'Maharashtra Tomato Farm',
      location: 'Pune, Maharashtra',
      yield: '400% Increase',
      crop: 'Cherry Tomatoes',
      system: 'Hydroponics + Automation',
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
      description: 'Advanced hydroponic system with climate automation increased yield by 400%'
    },
    {
      title: 'Gujarat Flower Farm',
      location: 'Ahmedabad, Gujarat',
      yield: '350% Increase',
      crop: 'Roses & Gerbera',
      system: 'Climate Controlled Polyhouse',
      image: 'https://images.pexels.com/photos/1068474/pexels-photo-1068474.jpeg',
      description: 'Year-round flower production with premium quality export standards'
    },
    {
      title: 'Karnataka Vegetable Farm',
      location: 'Bangalore, Karnataka',
      yield: '300% Increase',
      crop: 'Leafy Vegetables',
      system: 'Vertical Hydroponics',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
      description: 'Space-efficient vertical farming maximizing production in limited area'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Transforming Farms Across India
          </h2>
          <div className="h-1 w-28 sm:w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how Dhanvantri Farms' smart farming solutions have empowered farmers with sustainable, high-yield agriculture.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {stories.map((story, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <motion.div 
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl border border-green-100 hover:border-[#8bc34a]/50"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={`${story.title}, ${story.crop}, ${story.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                    {story.yield}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {story.title}
                  </h3>
                  <p className="text-[#8bc34a] font-medium mb-4 text-sm sm:text-base">
                    {story.location}
                  </p>
                  
                  <div className="space-y-2 mb-5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Crop:</span>
                      <span>{story.crop}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">System:</span>
                      <span>{story.system}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm sm:text-base mb-5">
                    {story.description}
                  </p>
                  
                  <Link 
                    href="/case-studies"
                    className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold hover:text-[#689f38] transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/projects" className="inline-block">
            <button className="bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
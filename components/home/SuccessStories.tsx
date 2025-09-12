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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Success</span> Stories
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Real results from farmers across India who transformed their agriculture with our solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {stories.map((story, index) => {
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
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    {story.yield}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-[#8bc34a] font-medium mb-4">
                    {story.location}
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Crop:</span>
                      <span>{story.crop}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">System:</span>
                      <span>{story.system}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {story.description}
                  </p>
                  
                  <Link 
                    href="/case-studies" // Update with actual link
                    className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold hover:text-[#689f38] transition-all duration-300 group-hover:translate-x-2"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/projects" className="inline-block">
            <button className="bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white text-lg px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

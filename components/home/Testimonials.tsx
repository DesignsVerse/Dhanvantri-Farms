'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Maharashtra',
      crop: 'Tomato Farmer',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      rating: 5,
      text: 'Dhanvantri Farms transformed my farming business completely. The hydroponic system increased my yield by 400% and reduced water usage by 60%. The automation system saves me hours of manual work every day.'
    },
    {
      name: 'Priya Sharma',
      location: 'Gujarat',
      crop: 'Rose Cultivation',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5,
      text: 'The climate-controlled polyhouse has revolutionized my flower farming. I can now grow premium roses year-round, and the quality has improved dramatically. My export orders have tripled!'
    },
    {
      name: 'Mohammed Ali',
      location: 'Karnataka',
      crop: 'Leafy Vegetables',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      rating: 5,
      text: 'The vertical hydroponic system was perfect for my limited land. I am growing 10 times more vegetables in the same space. The technical support team is exceptional and always available.'
    },
    {
      name: 'Sunita Devi',
      location: 'Punjab',
      crop: 'Organic Vegetables',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      rating: 5,
      text: 'The net house solution protected my crops from pests and weather damage. My organic certification process was smooth, and I am getting premium prices for pesticide-free produce.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Farmers Say</span>
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Success stories from farmers who trusted us with their agricultural transformation
          </p>
        </motion.div>
        <div className="relative max-w-5xl mx-auto">
          {/* AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative overflow-hidden border border-green-100"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-green-100 opacity-50" />
              
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start space-x-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1, ease: 'easeInOut' }}
                      >
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                    className="text-xl text-gray-700 mb-8 leading-relaxed italic"
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>
                  
                  <div>
                    <div className="font-bold text-2xl text-gray-900 mb-1">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#8bc34a] text-lg font-medium">
                      {testimonials[currentTestimonial].crop} - {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 space-x-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-7 h-7 text-[#8bc34a]" />
            </motion.button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-colors duration-300 cursor-pointer ${index === currentTestimonial ? 'bg-[#8bc34a]' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-7 h-7 text-[#8bc34a]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

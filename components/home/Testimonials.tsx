'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Farmers Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Success stories from farmers who trusted us with their agricultural transformation
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial - Enhanced with slide animation */}
          <motion.div 
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          >
            <Quote className="absolute top-6 left-6 w-8 h-8 text-green-200 opacity-50" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div>
                  <div className="font-bold text-xl text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-green-600 font-medium">
                    {testimonials[currentTestimonial].crop} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation - Enhanced with hover effects */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-green-700" />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-green-700' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 text-green-700" />
            </motion.button>
          </div>
        </div>

        {/* Stats - Enhanced with counter animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-green-200">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '1000+', label: 'Happy Customers' },
            { value: '98%', label: 'Success Rate' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, index) => {
            const [ref, inView] = useInView({ triggerOnce: true });
            return (
              <motion.div 
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

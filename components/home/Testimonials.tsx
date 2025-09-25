'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Maharashtra',
      crop: 'Tomato Farmer',
      rating: 5,
      text: 'Dhanvantri Farms transformed my farming business completely. The hydroponic system increased my yield by 400% and reduced water usage by 60%. The automation system saves me hours of manual work every day.'
    },
    {
      name: 'Priya Sharma',
      location: 'Gujarat',
      crop: 'Rose Cultivation',
      rating: 5,
      text: 'The climate-controlled polyhouse has revolutionized my flower farming. I can now grow premium roses year-round, and the quality has improved dramatically. My export orders have tripled!'
    },
    {
      name: 'Mohammed Ali',
      location: 'Karnataka',
      crop: 'Leafy Vegetables',
      rating: 5,
      text: 'The vertical hydroponic system was perfect for my limited land. I am growing 10 times more vegetables in the same space. The technical support team is exceptional and always available.'
    },
    {
      name: 'Sunita Devi',
      location: 'Punjab',
      crop: 'Organic Vegetables',
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
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Farmer Success Stories
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from farmers across India who have transformed their yields with Dhanvantri Farms' smart farming solutions.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative overflow-hidden border border-green-100">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-green-100 opacity-50" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-green-50 flex items-center justify-center shadow-md">
                <User className="w-16 h-16 sm:w-20 sm:h-20 text-[#8bc34a]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-[#8bc34a] text-sm sm:text-lg font-medium">
                    {testimonials[currentTestimonial].crop} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-4 bg-white rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-[#8bc34a]" />
            </button>

            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-[#8bc34a]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-4 bg-white rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-[#8bc34a]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
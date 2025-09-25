'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const SuccessStories = () => {
  const stories = [
    {
      title: 'Maharashtra Tomato Farm',
      location: 'Pune, Maharashtra',
      yield: '400% Increase',
      crop: 'Cherry Tomatoes',
      system: 'Hydroponics + Automation',
      image: '/story/1.jpg',
      description: 'Advanced hydroponic system with climate automation increased yield by 400%'
    },
    {
      title: 'Gujarat Flower Farm',
      location: 'Ahmedabad, Gujarat',
      yield: '350% Increase',
      crop: 'Roses & Gerbera',
      system: 'Climate Controlled Polyhouse',
      image: '/story/2.jpg',
      description: 'Year-round flower production with premium quality export standards'
    },
    {
      title: 'Karnataka Vegetable Farm',
      location: 'Bangalore, Karnataka',
      yield: '300% Increase',
      crop: 'Leafy Vegetables',
      system: 'Vertical Hydroponics',
      image: '/story/3.jpg',
      description: 'Space-efficient vertical farming maximizing production in limited area'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Transforming Farms Across India
          </h2>
          <div className="h-1 w-28 sm:w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how Dhanvantri Farms' smart farming solutions have empowered farmers with sustainable, high-yield agriculture.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-green-100"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={story.image}
                  alt={`${story.title}, ${story.crop}, ${story.location}`}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                  quality={50} // Reduced quality for faster loading
                  loading="lazy"
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
                  className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/projects" className="inline-block">
            <button className="bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold shadow-md">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
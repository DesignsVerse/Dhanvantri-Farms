'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from farmers across India who transformed their agriculture with our solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {story.yield}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {story.location}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Crop:</span>
                    <span className="font-medium">{story.crop}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">System:</span>
                    <span className="font-medium">{story.system}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {story.description}
                </p>
                
                <button className="text-green-700 font-semibold hover:text-green-800 flex items-center space-x-2 transition-colors duration-200">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
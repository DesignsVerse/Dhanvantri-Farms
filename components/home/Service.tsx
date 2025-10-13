'use client';

import Link from 'next/link';

const OurServices = () => {
  const categories = [
    {
      image: '/1.jpg', // Replace with your image path
      title: 'Polyhouse',
      description: 'Climate-controlled farming solutions',
      href: '/polyhouse',
    },
    {
      image: '/2.jpg', // Replace with your image path
      title: 'Net House',
      description: 'Protected cultivation structures',
      href: '/net-house',
    },
    {
      image: '/3.jpg', // Replace with your image path
      title: 'Hydroponics',
      description: 'Soilless farming systems',
      href: '/hydroponics',
    },
    {
      image: '/4.jpg', // Replace with your image path
      title: 'Organic Farming',
      description: 'Sustainable and chemical-free agriculture',
      href: '/organic-farming',
    },
    {
      image: '/5.jpg', // Replace with your image path
      title: 'Warehouse',
      description: 'Efficient storage solutions',
      href: '/warehouse',
    },
    {
      image: '/6.jpg', // Replace with your image path
      title: 'Cold Storage',
      description: 'Temperature-controlled storage',
      href: '/cold-storage',
    },
    {
      image: '/7.jpg', // Replace with your image path
      title: 'Indoor Saffron',
      description: 'Temperature-controlled storage',
      href: '/indoor-saffron',
    },
    {
      image: '/8.jpg', // Replace with your image path
      title: 'Mushroom Farming',
      description: 'Temperature-controlled storage',
      href: '/mushroom',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Services</span>
          </h2>
          <div className="h-1 w-28 sm:w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6" />
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Smart farming solutions for sustainable agriculture
          </p>
        </div>

        <div className="space-y-10">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {categories.slice(0, 4).map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden border border-green-100 rounded-xl"
              >
                <div className="relative h-36 sm:h-44 lg:h-56 flex items-center justify-center bg-green-50">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover" // Use object-cover to ensure the image fills the container
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium mb-4 hidden sm:block">{category.description}</p>
                  <Link
                    href={category.href}
                    className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-xs sm:text-sm md:text-base"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-8xl mx-auto">
            {categories.slice(4, 9).map((category, index) => (
              <div
                key={index + 4}
                className="bg-white shadow-md overflow-hidden border border-green-100 rounded-xl"
              >
                <div className="relative h-36 sm:h-44 lg:h-56 flex items-center justify-center bg-green-50">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium mb-4 hidden sm:block">{category.description}</p>
                  <Link
                    href={category.href}
                    className="inline-flex items-center space-x-2 text-[#8bc34a] font-semibold text-xs sm:text-sm md:text-base"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
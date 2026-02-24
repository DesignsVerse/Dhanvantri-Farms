'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AllServicesPage() {
  const services = [
    {
      id: '1',
      title: 'Polyhouse',
      description: 'Climate-controlled farming solutions for year-round cultivation',
      image: '/1.jpg',
      href: '/polyhouse',
      order: 1
    },
    {
      id: '2',
      title: 'Net House',
      description: 'Protected cultivation structures with shade net technology',
      image: '/2.jpg',
      href: '/net-house',
      order: 2
    },
    {
      id: '3',
      title: 'Hydroponics',
      description: 'Soilless farming systems for maximum efficiency',
      image: '/3.jpg',
      href: '/hydroponics',
      order: 3
    },
    {
      id: '4',
      title: 'Organic Farming',
      description: 'Sustainable and chemical-free agriculture solutions',
      image: '/4.jpg',
      href: '/organic-farming',
      order: 4
    },
    {
      id: '5',
      title: 'Warehouse',
      description: 'Efficient storage solutions for agricultural produce',
      image: '/5.jpg',
      href: '/warehouse',
      order: 5
    },
    {
      id: '6',
      title: 'Cold Storage',
      description: 'Temperature-controlled storage facilities',
      image: '/6.jpg',
      href: '/cold-storage',
      order: 6
    },
    {
      id: '7',
      title: 'Indoor Saffron',
      description: 'Premium saffron cultivation in controlled environments',
      image: '/8.jpg',
      href: '/indoor-saffron',
      order: 7
    },
    {
      id: '8',
      title: 'Mushroom Farming',
      description: 'Modern mushroom cultivation systems',
      image: '/7.jpg',
      href: '/mushroom',
      order: 8
    },
    {
      id: '9',
      title: 'Automation',
      description: 'Smart automation systems for modern farming',
      image: '/service/poly/1.jpg',
      href: '/automation',
      order: 9
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-r from-green-600 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            All Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto"
          >
            Comprehensive smart farming solutions for sustainable and profitable agriculture
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100"
              >
                <Link href={service.href} className="block">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-green-50">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                      <span className="text-sm sm:text-base">Learn More</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8">
            Our experts are here to guide you through the best farming solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/917415282414"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

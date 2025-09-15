'use client';

import { useState, useEffect, useRef } from 'react';
import { Droplets, TrendingUp, Leaf, Zap, Shield, Clock, ChevronRight, ChevronLeft,ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HydroponicsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRefs = {
    nft: useRef(null),
    dwc: useRef(null),
    drip: useRef(null),
    vertical: useRef(null),
  };

  const features = [
    {
      icon: Droplets,
      title: '90% Water Savings',
      description: 'Recirculating nutrient solutions minimize water waste.',
    },
    {
      icon: TrendingUp,
      title: 'Faster Growth',
      description: 'Plants grow 30-50% faster than traditional soil farming.',
    },
    {
      icon: Leaf,
      title: 'Higher Yields',
      description: '3-10x higher yields in the same space.',
    },
    {
      icon: Zap,
      title: 'Year-Round Production',
      description: 'Controlled environment enables continuous harvesting.',
    },
  ];

  const advantages = [
    'No soil required - ideal for urban farming',
    '90% less water usage than traditional methods',
    'Faster growth and higher yields',
    'Eliminates weeds, soil-borne diseases, and pests',
    'Precise nutrient control for optimal growth',
    'Space-efficient vertical growing systems',
    'Consistent quality and predictable harvests',
    'Reduced labor and maintenance needs',
  ];

  const systemTypes = [
    {
      id: 'nft',
      name: 'NFT (Nutrient Film Technique)',
      description: 'A thin film of nutrient solution flows over the roots, providing constant nourishment.',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
      suitableFor: 'Leafy greens, herbs, strawberries',
    },
    {
      id: 'dwc',
      name: 'DWC (Deep Water Culture)',
      description: 'Roots are suspended in oxygenated nutrient solution for rapid growth.',
      image: 'https://images.pexels.com/photos/1068474/pexels-photo-1068474.jpeg',
      suitableFor: 'Lettuce, spinach, kale, basil',
    },
    {
      id: 'drip',
      name: 'Drip System',
      description: 'Nutrient solution is dripped directly to the root zone for precise delivery.',
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
      suitableFor: 'Tomatoes, peppers, cucumbers',
    },
    {
      id: 'vertical',
      name: 'Vertical Systems',
      description: 'Multi-tier systems maximize space utilization for small-scale farming.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
      suitableFor: 'Microgreens, herbs, small vegetables',
    },
  ];

  const quickLinks = [
    {
      title: 'System Types',
      description: 'Explore NFT, DWC, Drip, and Vertical systems.',
      href: '/hydroponics/types',
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
    },
    {
      title: 'Advantages',
      description: 'Discover water savings, faster growth, and more.',
      href: '/hydroponics/advantages',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
    },
    {
      title: 'Why Choose Us?',
      description: 'Expertise, technology, and dedicated support.',
      href: '/hydroponics/why-choose-us',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    },
    {
      title: 'FAQs',
      description: 'Answers to common hydroponic farming questions.',
      href: '/hydroponics/faqs',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    },
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % systemTypes.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + systemTypes.length) % systemTypes.length);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white">
      {/* Hero Section with Image */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
          alt="Hydroponic Farming"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Hydroponics</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Soil-less farming for maximum productivity and sustainability.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-green-600 text-white py-3 px-8 rounded-full font-semibold flex items-center mx-auto"
              onClick={() => scrollToSection('nft')}
            >
              Explore Systems <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation for System Types */}
      <div className="sticky top-0 bg-white shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {systemTypes.map((system) => (
              <motion.button
                key={system.id}
                onClick={() => scrollToSection(system.id)}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
              >
                {system.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* What is Hydroponics */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Hydroponics?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Hydroponics is a soil-less farming method where plants grow in nutrient-rich water solutions, delivering essential minerals directly to the roots. This technique ensures precise control over growing conditions.
                </p>
                <p>
                  Using inert media like rockwool or clay pebbles, hydroponics supports plants while their roots access balanced nutrients, resulting in faster growth, higher yields, and premium-quality produce.
                </p>
                <p>
                  From urban rooftops to arid regions, hydroponics enables fresh food production in any environment, making it a sustainable solution for modern agriculture.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg"
                alt="Hydroponic System"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why hydroponics is the future of sustainable agriculture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* System Types */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Hydroponic Systems</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect system for your crops and space.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {systemTypes.map((system, index) => (
              <motion.div
                key={system.id}
                id={system.id}
                ref={sectionRefs[system.id as keyof typeof sectionRefs]}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={system.image}
                    alt={system.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{system.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{system.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">Suitable for:</span>
                    <span className="text-sm text-green-700 font-semibold">{system.suitableFor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                alt="Hydroponic Advantages"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Advantages</span> of Hydroponics
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/hydroponics/advantages"
                  className="inline-flex items-center bg-green-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  Learn More <ChevronRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick Links Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Hydroponic Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Hydroponics <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Gallery</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src={systemTypes[currentImageIndex].image}
              alt={systemTypes[currentImageIndex].name}
              width={1200}
              height={600}
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronLeft size={28} className="text-green-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronRight size={28} className="text-green-800" />
            </button>
          </motion.div>
          <div className="flex justify-center gap-3 mt-6">
            {systemTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full ${index === currentImageIndex ? 'bg-green-600' : 'bg-green-200'} transition-all`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Hydroponic Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join the future of farming with our cutting-edge hydroponic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/hydroponics/types"
              className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Explore Systems
            </Link>
          </div>
        </div>
      </motion.section>

      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">© {new Date().getFullYear()} Hydroponics Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
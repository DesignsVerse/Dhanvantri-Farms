'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Warehouse, Shield, Thermometer, Droplets, Sun, Sprout, Leaf, Globe, BarChart, Users, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function WarehousePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Warehouse,
      title: 'Spacious Storage Capacity',
      description: 'Large-scale facilities designed to store bulk agricultural products with optimal space utilization.'
    },
    {
      icon: Shield,
      title: 'Climate-Controlled Environment',
      description: 'Maintains ideal temperature and humidity to preserve crop quality and prevent spoilage.'
    },
    {
      icon: Thermometer,
      title: 'Temperature Monitoring',
      description: 'Advanced sensors ensure consistent conditions for perishable goods like fruits and vegetables.'
    },
    {
      icon: Droplets,
      title: 'Humidity Control',
      description: 'Prevents moisture-related issues, extending the shelf life of stored produce.'
    },
    {
      icon: Leaf,
      title: 'Pest Protection',
      description: 'Sealed structures with pest control systems to safeguard against infestations.'
    },
    {
      icon: Sprout,
      title: 'Customizable Racking',
      description: 'Flexible shelving and pallet systems tailored for different crop types and equipment.'
    }
  ];

  const advantages = [
    'Reduces post-harvest losses by up to 40%',
    'Enables off-season storage for better market prices',
    'Protects against weather damage and contamination',
    'Efficient inventory management with modern tracking',
    'Supports large-scale farming operations',
    'Eco-friendly designs with energy-efficient cooling',
    'Compliant with food safety standards',
    'Scalable from small holdings to commercial farms',
    'Integrated with transportation logistics',
    'Government subsidies available for construction'
  ];

  const types = [
    {
      title: 'General Purpose Warehouse',
      description: 'Versatile storage for non-perishable items like grains and equipment. Cost-effective for basic needs.',
      image: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg'
    },
    {
      title: 'Cold Storage Warehouse',
      description: 'Refrigerated facilities for perishable produce. Maintains low temperatures to preserve freshness.',
      image: 'https://images.pexels.com/photos/1267321/pexels-photo-1267321.jpeg'
    },
    {
      title: 'Controlled Atmosphere Warehouse',
      description: 'Advanced storage with modified oxygen and CO2 levels. Ideal for fruits and vegetables to extend shelf life.',
      image: 'https://images.pexels.com/photos/1267322/pexels-photo-1267322.jpeg'
    },
    {
      title: 'Bulk Grain Silo',
      description: 'Specialized for storing grains in large quantities. Protects against moisture and pests.',
      image: 'https://images.pexels.com/photos/2882235/pexels-photo-2882235.jpeg'
    }
  ];

  const components = [
    'Reinforced concrete or steel frame for durability',
    'Insulated panels for temperature regulation',
    'Automated ventilation and cooling systems',
    'Security features including CCTV and access control',
    'Loading docks and material handling equipment',
    'IoT sensors for real-time monitoring',
    'Fire suppression systems',
    'Solar-powered options for sustainability'
  ];

  const caseStudies = [
    {
      title: 'Grain Storage in Punjab',
      description: 'Reduced losses from 25% to 5% with our bulk silo warehouse. Handled 500 tons efficiently.',
      image: 'https://images.pexels.com/photos/2882236/pexels-photo-2882236.jpeg',
      metrics: ['80% loss reduction', 'Increased storage capacity', 'Better price realization']
    },
    {
      title: 'Fruit Warehouse in Maharashtra',
      description: 'Cold storage extended mango shelf life by 3 weeks, enabling export opportunities.',
      image: 'https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg',
      metrics: ['Extended freshness', 'Export enabled', '30% profit increase']
    }
  ];

  const testimonials = [
    {
      quote: 'This warehouse solution saved our harvest from spoilage. Highly recommended for farmers!',
      author: 'Amit Singh, Farmer in Uttar Pradesh',
      image: 'https://images.pexels.com/photos/1234568/pexels-photo-1234568.jpeg' // Placeholder
    },
    {
      quote: 'Excellent climate control features. Our produce stays fresh longer.',
      author: 'Sunita Devi, Agri-Business Owner in Bihar',
      image: 'https://images.pexels.com/photos/7654322/pexels-photo-7654322.jpeg' // Placeholder
    }
  ];

  const faqs = [
    { question: 'What is the typical size of a farming warehouse?', answer: 'Sizes vary from 1,000 sq ft for small farms to over 50,000 sq ft for commercial operations.' },
    { question: 'How much does it cost to build?', answer: 'Costs range from ₹500-1,500 per sq ft depending on features and location.' },
    { question: 'Are subsidies available?', answer: 'Yes, government schemes like NHB provide up to 50% subsidies for cold storage units.' },
    { question: 'What maintenance is required?', answer: 'Regular cleaning, sensor checks, and pest control every 3-6 months.' },
    { question: 'Can it be customized?', answer: 'Absolutely, we tailor designs based on crop types and storage needs.' }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg',
    'https://images.pexels.com/photos/1267321/pexels-photo-1267321.jpeg',
    'https://images.pexels.com/photos/1267322/pexels-photo-1267322.jpeg',
    'https://images.pexels.com/photos/2882235/pexels-photo-2882235.jpeg',
    'https://images.pexels.com/photos/2882236/pexels-photo-2882236.jpeg',
    'https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-lime-50">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://user-gen-media-assets.s3.amazonaws.com/gemini_images/d21300f1-82ee-49e0-aabf-50ef760eddc7.png"
            alt="Premium modern agricultural warehouse exterior with open doors"
            fill
            className="object-cover brightness-75"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center px-6 max-w-6xl"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-wide drop-shadow-2xl">
              Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-emerald-200">Warehouse</span> Solutions for Modern Farming
            </h1>
            <p className="text-3xl text-gray-100 max-w-4xl mx-auto mb-12 drop-shadow-lg">
              Secure, scalable, and sustainable storage to protect your harvest and boost profitability.
            </p>
            <Link href="/contact" className="inline-flex items-center px-12 py-5 bg-emerald-500 text-white rounded-full font-bold text-xl hover:bg-emerald-400 transition-all shadow-2xl hover:shadow-emerald-300/50">
              Start Building Now <ArrowRight className="ml-3" size={24} />
            </Link>
          </motion.div>
        </div>
[7]
      </section>

      {/* Introduction Section with New Layout */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
                Discover the Power of <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Farming Warehouses</span>
              </h2>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                Farming warehouses are essential structures for post-harvest storage, designed to maintain product quality, reduce losses, and optimize supply chain efficiency.
              </p>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                From grains to perishables, our warehouses offer tailored solutions that protect your investment and open new market opportunities.
              </p>
              <div className="flex items-center space-x-6">
                <Globe className="w-8 h-8 text-emerald-500" />
                <span className="text-xl text-gray-800 font-semibold">Revolutionizing storage across India</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative h-[600px]"
            >
              <Image
                src="https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg"
                alt="Warehouse Interior"
                fill
                className="object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section with Carousel-Style Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-tr from-emerald-100 to-lime-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Innovative <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Features</span> for Superior Storage
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Cutting-edge technology meets practical design for unbeatable warehouse performance.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-emerald-300/40 transition-all border border-emerald-100"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-emerald-500 text-white rounded-2xl mb-6 mx-auto shadow-lg">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-lg text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advantages Section with Expanded Content */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Transformative <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Advantages</span> of Our Warehouses
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
              Experience the difference in storage efficiency and crop preservation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-4 h-4 bg-emerald-400 rounded-full mb-4 mx-auto" />
                <p className="text-xl text-gray-800 text-center">{advantage}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/warehouse/advantages" className="inline-flex items-center px-10 py-5 bg-emerald-500 text-white rounded-full font-bold text-xl hover:bg-emerald-400 transition-all shadow-2xl hover:shadow-emerald-300/50">
              Learn More Advantages <ArrowRight className="ml-3" size={24} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Types Section with Image Gallery Layout */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-tr from-emerald-100 to-lime-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Diverse <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Warehouse Types</span> for Every Need
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Select from our range of specialized warehouses tailored to your farming requirements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-white">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Components Section with Detailed Breakdown */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative h-[600px]"
            >
              <Image
                src="https://images.pexels.com/photos/2882235/pexels-photo-2882235.jpeg"
                alt="Warehouse Components"
                fill
                className="object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
                Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Components</span> & Innovations
              </h2>
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
                Built with cutting-edge materials and smart tech for reliable, long-term performance.
              </p>
              <div className="space-y-6">
                {components.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-lime-50 to-emerald-50 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <BarChart className="w-6 h-6 text-emerald-500" />
                    <span className="text-xl text-gray-800">{component}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section with Cards */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-tr from-emerald-100 to-lime-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Real-World <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Success Stories</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              See how our warehouses are making a difference for farmers across India.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="relative h-80">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{study.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {study.metrics.map((metric, i) => (
                      <span key={i} className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-base font-medium shadow-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section with Slider Layout */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Voices from Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Satisfied Farmers</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Real feedback from those who trust our warehouse solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative p-8 bg-gradient-to-br from-lime-50 to-emerald-50 rounded-3xl shadow-2xl hover:shadow-emerald-300/40 transition-all"
              >
                <Users className="absolute top-4 right-4 w-12 h-12 text-emerald-300 opacity-50" />
                <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-2xl font-semibold text-gray-900">{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section (New, Expanded with More Images) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-tr from-emerald-100 to-lime-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Explore Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Warehouse Gallery</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Visual showcase of our state-of-the-art farming storage solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={img}
                  alt={`Warehouse Gallery Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section (New, with Accordion) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">Questions</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Get answers to common queries about our warehouse solutions.
            </p>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-lime-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full p-8 flex justify-between items-center text-left text-2xl font-bold text-gray-900 hover:bg-emerald-100 transition-all"
                >
                  {faq.question}
                  <ChevronDown className={`w-8 h-8 transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 text-lg text-gray-700 bg-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Full-Width Design */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-r from-green-800 to-emerald-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Mail className="w-16 h-16 mx-auto mb-8 text-lime-300" />
          <h2 className="text-6xl font-extrabold mb-8 drop-shadow-2xl">
            Ready to Revolutionize Your Storage?
          </h2>
          <p className="text-3xl mb-12 max-w-5xl mx-auto drop-shadow-lg">
            Partner with us for custom warehouse solutions that protect your harvest and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="inline-flex items-center px-12 py-5 bg-lime-400 text-green-900 rounded-full font-bold text-2xl hover:bg-lime-300 transition-all shadow-2xl hover:shadow-lime-300/50">
              Get Free Consultation <ArrowRight className="ml-3" size={28} />
            </Link>
            <Link href="/warehouse/demo" className="inline-flex items-center px-12 py-5 border-4 border-lime-300 text-lime-300 rounded-full font-bold text-2xl hover:bg-lime-300 hover:text-green-900 transition-all shadow-2xl hover:shadow-lime-300/50">
              Book a Site Visit <ArrowRight className="ml-3" size={28} />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

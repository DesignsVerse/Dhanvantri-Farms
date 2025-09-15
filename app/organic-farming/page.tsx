
'use client';

import { useState, useEffect, useRef } from 'react';
import { Leaf, Sprout, Droplets, Heart, ChevronRight, ChevronLeft, ChevronDown,ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function OrganicFarmingPage() {
  const [activeSection, setActiveSection] = useState('benefits');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const sectionRefs = {
    benefits: useRef(null),
    methods: useRef(null),
    gallery: useRef(null),
    testimonials: useRef(null),
    faqs: useRef(null),
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  const benefits = [
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduces chemical runoff and promotes soil health.',
    },
    {
      icon: Heart,
      title: 'Healthier Produce',
      description: 'Nutrient-rich crops free from synthetic pesticides.',
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Efficient practices minimize water usage.',
    },
    {
      icon: Sprout,
      title: 'Sustainable Yields',
      description: 'Long-term soil fertility ensures consistent production.',
    },
  ];

  const methods = [
    {
      id: 'compost',
      name: 'Composting',
      description: 'Converts organic waste into nutrient-rich compost for soil enrichment.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
      suitableFor: 'All crops',
    },
    {
      id: 'crop-rotation',
      name: 'Crop Rotation',
      description: 'Alternates crops to prevent soil depletion and pests.',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg',
      suitableFor: 'Vegetables, grains',
    },
    {
      id: 'cover-cropping',
      name: 'Cover Cropping',
      description: 'Grows cover crops to protect soil and enhance fertility.',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
      suitableFor: 'Field crops',
    },
    {
      id: 'natural-pest',
      name: 'Natural Pest Control',
      description: 'Uses beneficial insects and organic sprays to manage pests.',
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
      suitableFor: 'Fruits, vegetables',
    },
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
    'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg',
    'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
    'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
  ];

  const testimonials = [
    {
      name: 'Anita Sharma',
      quote: 'Organic farming transformed my farm’s productivity and soil health!',
      location: 'Himachal Pradesh',
    },
    {
      name: 'Vijay Rao',
      quote: 'The support and training we received were exceptional.',
      location: 'Karnataka',
    },
    {
      name: 'Rakesh Patel',
      quote: 'Higher yields and better prices with organic produce.',
      location: 'Gujarat',
    },
  ];

  const faqs = [
    {
      question: 'What is organic farming?',
      answer: 'Organic farming grows crops without synthetic pesticides or fertilizers, focusing on natural methods.',
    },
    {
      question: 'How to get organic certification?',
      answer: 'Apply through agencies like NPOP in India, following their guidelines.',
    },
    {
      question: 'Is organic farming profitable?',
      answer: 'Yes, it offers higher market prices and sustainable yields.',
    },
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/4397885/pexels-photo-4397885.jpeg"
          alt="Organic Farming"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Organic Farming</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sustainable, eco-friendly farming for healthier crops and planet.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-green-600 text-white py-3 px-8 rounded-full font-semibold flex items-center mx-auto"
              onClick={() => scrollToSection('benefits')}
            >
              Get Started <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 bg-white shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: 'benefits', name: 'Benefits' },
              { id: 'methods', name: 'Methods' },
              { id: 'gallery', name: 'Gallery' },
              { id: 'testimonials', name: 'Testimonials' },
              { id: 'faqs', name: 'FAQs' },
            ].map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                {section.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* What is Organic Farming */}
      <motion.section
        id="benefits"
        ref={sectionRefs.benefits}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Organic Farming?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Organic farming is a sustainable agricultural practice that avoids synthetic fertilizers, pesticides, and GMOs, relying on natural methods like composting and crop rotation.
                </p>
                <p>
                  It promotes soil health, biodiversity, and eco-friendly practices, producing healthier crops while reducing environmental impact.
                </p>
                <p>
                  Ideal for small farms or large-scale operations, organic farming supports long-term sustainability and consumer demand for natural produce.
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
                src="https://images.pexels.com/photos/4397885/pexels-photo-4397885.jpeg"
                alt="Organic Farming"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits */}
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
              Discover why organic farming is the future of agriculture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Organic Farming Methods */}
      <motion.section
        id="methods"
        ref={sectionRefs.methods}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Organic Farming <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Methods</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore sustainable techniques for organic farming.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {methods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={method.image}
                    alt={method.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{method.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{method.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">Suitable for:</span>
                    <span className="text-sm text-green-700 font-semibold">{method.suitableFor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        ref={sectionRefs.gallery}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Organic Farming <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Gallery</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src={galleryImages[currentImageIndex]}
              alt={`Organic Farming Image ${currentImageIndex + 1}`}
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
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full ${index === currentImageIndex ? 'bg-green-600' : 'bg-green-200'} transition-all`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        ref={sectionRefs.testimonials}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Farmers Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Leaf size={24} className="text-green-600 mr-2" />
                  <div>
                    <h4 className="font-semibold text-green-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        id="faqs"
        ref={sectionRefs.faqs}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Frequently Asked Questions</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left font-semibold text-green-800 hover:bg-green-50 transition-all rounded-2xl"
                >
                  {faq.question}
                  <ChevronDown size={24} className={`transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 pt-0 text-gray-600 bg-green-50 rounded-b-2xl"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
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
          <h2 className="text-4xl font-bold mb-6">Start Your Organic Farming Journey</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Connect with our experts to adopt sustainable farming practices today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/organic-farming/methods"
              className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Explore Methods
            </Link>
          </div>
        </div>
      </motion.section>

      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">© {new Date().getFullYear()} Organic Farming Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, X, Leaf, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PolyhousePage = () => {
  const [activeTab, setActiveTab] = useState('menu1');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const sectionRefs = {
    menu1: useRef(null),
    menu2: useRef(null),
    menu3: useRef(null),
    menu4: useRef(null),
    menu5: useRef(null),
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const advantages = [
    {
      title: "TEMPERATURE CONTROL",
      description: "Plants grow under controlled temperature for optimal growth."
    },
    {
      title: "DAMAGE FREE",
      description: "Reduced risk of crop loss or damage."
    },
    {
      title: "LESS PESTICIDES",
      description: "Fewer pests and insects in a controlled environment."
    },
    {
      title: "HIGHER PRODUCTION",
      description: "Superior quality and higher yield in polyhouses."
    }
  ];

  const features = [
    {
      title: "Robust Structure",
      description: "Engineered for durability, tailored to Indian and export markets."
    },
    {
      title: "Customer Education",
      description: "Empowering farmers with knowledge for successful cultivation."
    },
    {
      title: "Agronomy Support",
      description: "Lifetime support from experienced agronomists."
    }
  ];

  const comparisonData = [
    { feature: "Height of Structure", agriplast: "6.8M to 7.2M", others: "6.2M to 6.5M" },
    { feature: "Side Ventilation", agriplast: "4 meters", others: "2.5 meters" },
    { feature: "Top Vent", agriplast: "1.2 to 1.4 meters", others: "0.9 meters" },
    { feature: "Pipe Quality", agriplast: "375-400 GSM", others: "150-250 GSM" },
    { feature: "Nut Bolts", agriplast: "22 Micron Zinc Coated", others: "No Coating" },
    { feature: "Foundation", agriplast: "76mm, 2mm Thick", others: "63mm, 1.6mm Thick" },
    { feature: "Door", agriplast: "Aluminium Double Sliding", others: "Basic GI Door" },
    { feature: "Gutter", agriplast: "1.6mm, 275 GSM", others: "0.6-1mm, Non-Galvanized" },
    { feature: "End Gutters", agriplast: "Yes, both ends", others: "N/A" },
    { feature: "Shade Net Mechanism", agriplast: "Pulley System", others: "Hook Mechanism" },
    { feature: "Reinforcement", agriplast: "Multiple provided", others: "None" },
    { feature: "Hockey Pipe", agriplast: "Square Pipes", others: "Round Pipes" },
    { feature: "Tonnage", agriplast: "20-21 Tonnes Steel", others: "16 Tonnes Steel" },
    { feature: "Profile", agriplast: "Aluminium", others: "GI Profile" },
    { feature: "Spring", agriplast: "PVC-Coated", others: "GI Spring" },
    { feature: "Polyfilm", agriplast: "Ginegar Israel", others: "Local" },
    { feature: "Shade/Insect Net", agriplast: "Agriplast", others: "Local" },
    { feature: "Connectors", agriplast: "Israeli-designed", others: "Local" },
    { feature: "Other Features", agriplast: "Curtain Box, FLC", others: "None" },
    { feature: "Agronomist Support", agriplast: "1 Year Free", others: "None" },
  ];

  const polyhouseTypes = [
    { id: 'menu1', name: 'Naturally Ventilated Polyhouse' },
    { id: 'menu2', name: 'Butterfly Ventilated Polyhouse' },
    { id: 'menu3', name: 'Tropical Polyhouse' },
    { id: 'menu4', name: 'Gothic Polyhouse' },
    { id: 'menu5', name: 'Customized Polyhouse' },
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg',
    'https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg',
    'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
    'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', quote: 'Doubled my crop yield with Agriplast!', location: 'Pune' },
    { name: 'Priya Singh', quote: 'Exceptional support and quality.', location: 'Bangalore' },
    { name: 'Amit Patel', quote: 'Perfect for tropical crops.', location: 'Ahmedabad' },
  ];

  const faqs = [
    { question: 'What is the lifespan of a polyhouse?', answer: '10-15 years with proper maintenance.' },
    { question: 'How to apply for subsidies?', answer: 'Contact NHB or state agriculture department.' },
    { question: 'Which crops suit polyhouses?', answer: 'Vegetables, flowers, and exotic fruits.' },
  ];

  const detailedBenefits = [
    { title: 'Sustainable Farming', desc: 'Reduces water usage by 50% and chemical needs.' },
    { title: 'Year-Round Production', desc: 'Harvest continuously, regardless of seasons.' },
    { title: 'Higher ROI', desc: '300% yield increase with premium produce.' },
    { title: 'Eco-Friendly', desc: 'Promotes organic methods, reduces impact.' },
  ];

  const nextGallery = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevGallery = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white">
      {/* Hero Section with Image */}
      <header className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
          alt="Polyhouse Farming"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Agriplast Polyhouse Solutions</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Revolutionizing farming with advanced polyhouse technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full flex items-center mx-auto"
              onClick={() => scrollToSection('menu1')}
            >
              Explore Now <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white shadow-lg z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {polyhouseTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => scrollToSection(type.id)}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === type.id
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                {type.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-green-800 mb-6">What is a Polyhouse?</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              A polyhouse is a structure made of translucent materials like polyethylene, designed to create a controlled environment for plants, optimizing growth conditions and protecting crops from external factors.
            </p>
          </div>
        </motion.section>

        {/* Advantages Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">Key Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">Why Agriplast?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all"
              >
                <Leaf size={40} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold text-green-700 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 py-16 bg-green-50 rounded-3xl"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">Benefits of Polyhouse Farming</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {detailedBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all"
              >
                <Leaf size={40} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-700 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Structure Comparison Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-10 bg-green-700 text-white">
              <h2 className="text-4xl font-bold">Structure Comparison</h2>
              <p className="text-green-100 mt-2">Agriplast vs. Other Polyhouse Structures</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-green-100">
                    <th className="p-6 font-semibold text-green-800">Feature</th>
                    <th className="p-6 font-semibold text-green-800">Agriplast</th>
                    <th className="p-6 font-semibold text-green-800">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}
                    >
                      <td className="p-6 font-medium text-green-900">{row.feature}</td>
                      <td className="p-6">
                        <div className="flex items-center text-green-700">
                          <Check size={20} className="text-green-600 mr-2" />
                          {row.agriplast}
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center text-red-700">
                          <X size={20} className="text-red-600 mr-2" />
                          {row.others}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Polyhouse Types Sections */}
        {polyhouseTypes.map((type) => (
          <motion.section
            key={type.id}
            id={type.id}
            ref={sectionRefs[type.id as keyof typeof sectionRefs]}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 scroll-mt-24"
          >
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-4xl font-bold text-green-800 mb-6">{type.name}</h2>
              {type.id === 'menu1' && (
                <>
                  <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
                    Agriplast Naturally Ventilated Polyhouses are designed for optimal airflow, temperature regulation, and energy efficiency, making them ideal for a variety of crops and climates.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-green-50 p-8 rounded-xl shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Climate Control</h3>
                      <p className="text-gray-600">
                        Natural airflow regulates temperature and humidity for ideal crop growth.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-green-50 p-8 rounded-xl shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Energy Efficiency</h3>
                      <p className="text-gray-600">
                        Reduces reliance on mechanical systems, lowering operational costs.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-green-50 p-8 rounded-xl shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Cost-Effective</h3>
                      <p className="text-gray-600">
                        Durable materials maximize sunlight, boosting yield and profitability.
                      </p>
                    </motion.div>
                  </div>
                </>
              )}
              {type.id !== 'menu1' && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
                  <p className="text-lg text-yellow-700">
                    Details about {type.name} coming soon. Contact us for more information.
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">Polyhouse Gallery</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src={galleryImages[currentGalleryIndex]}
              alt={`Polyhouse Image ${currentGalleryIndex + 1}`}
              width={1200}
              height={600}
              className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
            />
            <button
              onClick={prevGallery}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronLeft size={28} className="text-green-800" />
            </button>
            <button
              onClick={nextGallery}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronRight size={28} className="text-green-800" />
            </button>
          </motion.div>
          <div className="flex justify-center gap-3 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGalleryIndex(index)}
                className={`w-4 h-4 rounded-full ${index === currentGalleryIndex ? 'bg-green-600' : 'bg-green-200'} transition-all`}
              />
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 py-16 bg-green-50 rounded-3xl"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">What Farmers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
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
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Polyhouse Costs in India</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Costs vary based on materials, irrigation systems, and structure type. Subsidies (50-75%) are available in various states.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-green-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Naturally Ventilated Polyhouse</h3>
                <p className="text-gray-600 mb-6">
                  Includes structure, shade net, trellising, FLC mechanism, and installation.
                </p>
                <ul className="space-y-3">
                  <li className="flex justify-between text-lg">
                    <span>Cost per acre:</span>
                    <span className="font-semibold">₹40,84,962*</span>
                  </li>
                  <li className="flex justify-between text-lg">
                    <span>With NHB Subsidy:</span>
                    <span className="font-semibold">₹20,42,431*</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Double Layer Nethouse</h3>
                <p className="text-gray-600 mb-6">
                  Includes structure, shade net, trellising, and installation.
                </p>
                <ul className="space-y-3">
                  <li className="flex justify-between text-lg">
                    <span>Cost per acre:</span>
                    <span className="font-semibold">₹32,30,306*</span>
                  </li>
                  <li className="flex justify-between text-lg">
                    <span>With NHB Subsidy:</span>
                    <span className="font-semibold">₹17,77,646*</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-yellow-50 rounded-xl">
              <p className="text-base text-yellow-700">
                *Prices include GST and are approximate. Subject to change based on market fluctuations.
              </p>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left font-semibold text-green-800 hover:bg-green-50 transition-all rounded-3xl"
                >
                  {faq.question}
                  <ChevronDown size={24} className={`transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 pt-0 text-gray-600 bg-green-50 rounded-b-3xl"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Connect with our experts for a tailored polyhouse solution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-green-700 font-semibold py-4 px-8 rounded-full inline-flex items-center hover:bg-green-100 transition-all shadow-md"
            >
              Get in Touch <ArrowRight size={24} className="ml-3" />
            </motion.button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© {new Date().getFullYear()} Agriplast Protected Cultivation. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PolyhousePage;
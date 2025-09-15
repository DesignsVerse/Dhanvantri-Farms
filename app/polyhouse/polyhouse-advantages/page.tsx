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
    // Handle hash-based scrolling on page load
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
      // Update URL hash without scrolling
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const advantages = [
    {
      title: "TEMPRATURE CONTROL",
      description: "Plants are grown under controlled temperature"
    },
    {
      title: "DAMAGE FREE",
      description: "Less chances of crop loss or damage"
    },
    {
      title: "LESS PESTICIDES",
      description: "Less pests and insects in a poly house"
    },
    {
      title: "HIGHER PRODUCTION",
      description: "Quality of produce is higher in poly house"
    }
  ];

  const features = [
    {
      title: "Reliable & Robust Designed Structure",
      description: "Team of experienced engineers have created designs according to Indian requirements and export markets."
    },
    {
      title: "Customer Education for plant growing",
      description: "For years, our strength has been rooted in a balanced approach of educating while fostering trust and expertise."
    },
    {
      title: "Life-time Agronomy Support",
      description: "Free agronomy support to all the customers from highly experienced agronomist has 20+ years of experience."
    }
  ];

  const comparisonData = [
    { feature: "Height of Structure", agriplast: "6.8M to 7.2M from Ground Level", others: "6.2M to 6.5M from Ground Level" },
    { feature: "Side Ventilation", agriplast: "4 meters", others: "2.5 meteres" },
    { feature: "Top Vent", agriplast: "1.2 to 1.4 meters", others: "0.9 meters" },
    { feature: "Pipe Quality and Galvanization", agriplast: "375 GSM to 400 GSM", others: "150 GSM to 250 GSM" },
    { feature: "Nut Bolts and Connectors", agriplast: "22 Micron Zinc Ferrous Coated", others: "No Coating / 2mm Coating" },
    { feature: "Foundation", agriplast: "76mm Diameter, 2mm Thickness, Crimped Foundation", others: "63mm Diameter, 1.6mm Thickness, Point Load Foundation" },
    { feature: "Door", agriplast: "Aluminium Double Sliding Door with Buffer Zone", others: "Basic Non-Sliding GI Door without buffer zone" },
    { feature: "Gutter", agriplast: "1.6mm Thickness, 275 GSM Zinc Coated", others: "0.6mm to 1mm Thickness, Non-Galvanized" },
    { feature: "End Gutters", agriplast: "Yes, at both ends of the structure", others: "N/A" },
    { feature: "Shade Net and Mechanism", agriplast: "Pulley System Hybrid Mechanism", others: "Hook Mechanism" },
    { feature: "Reinforcement and Anti-Wind Breakers", agriplast: "Multiple reinforcement provided", others: "No reinforcements" },
    { feature: "Hockey Pipe", agriplast: "Square Pipes for more stability", others: "Round pipes with less stability" },
    { feature: "Tonnage of Structure", agriplast: "20-21 Tonnes Steel, Total ~24 tonnes", others: "16 Tonnes Steel, Total ~19 tonnes" },
    { feature: "Profile", agriplast: "Aluminium Profile (heat doesn't transfer)", others: "GI Profile (heats plastic)" },
    { feature: "Spring", agriplast: "PVC-Coated Springs (don't heat plastic)", others: "GI spring (heats plastic)" },
    { feature: "Polyfilm", agriplast: "Ginegar Israel", others: "Ginegar / Local" },
    { feature: "Shade Net/Insect net", agriplast: "Agriplast", others: "Agriplast/Local" },
    { feature: "Multiple Designed Connectors", agriplast: "Israeli-designed connectors", others: "Local Connectors" },
    { feature: "Other Features", agriplast: "Curtain Box System, FLC Mechanism, Aluminet Shade Net", others: "No genuine Aluminet" },
    { feature: "Agronomist Support", agriplast: "One Year Free Agronomist Support", others: "No Support" },
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
    { name: 'Rajesh Kumar', quote: 'Agriplast polyhouse ne meri fasal ko double kar diya!', location: 'Pune' },
    { name: 'Priya Singh', quote: 'Best support and quality structure.', location: 'Bangalore' },
    { name: 'Amit Patel', quote: 'Cost-effective and reliable for tropical crops.', location: 'Ahmedabad' },
  ];

  const faqs = [
    { question: 'What is the lifespan of a polyhouse?', answer: 'Typically 10-15 years with proper maintenance.' },
    { question: 'How to apply for subsidies?', answer: 'Contact NHB or state agriculture department.' },
    { question: 'Which crops are best for polyhouse?', answer: 'Vegetables, flowers, and exotic fruits.' },
  ];

  const detailedBenefits = [
    { title: 'Sustainable Farming', desc: 'Reduces water usage by up to 50% and minimizes chemical needs.' },
    { title: 'Year-Round Production', desc: 'Enables continuous harvesting regardless of seasons.' },
    { title: 'Higher ROI', desc: 'Increases yield by 300% with premium quality produce.' },
    { title: 'Eco-Friendly', desc: 'Promotes organic methods and reduces environmental impact.' },
  ];

  const nextGallery = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevGallery = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-2"
          >
            Advantages of Agriplast Polyhouse
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100"
          >
            Revolutionizing protected cultivation with advanced polyhouse technology
          </motion.p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {polyhouseTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => scrollToSection(type.id)}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${
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

      <main className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">What is a Polyhouse?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Polyhouse or a Greenhouse is a house or a structure made of translucent material like polyethylene, 
              where the plants grow and develop under controlled climatic conditions. The size of structure can differ 
              from small shacks to big-size buildings as per the need.
            </p>
          </div>
        </motion.section>

        {/* Advantages Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Key Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
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
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Why Choose Agriplast?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <Leaf size={40} className="text-lime-500 mb-4" />
                <h3 className="text-2xl font-semibold text-green-700 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Benefits Section (New) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 py-16 bg-green-50 rounded-2xl"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Detailed Benefits of Polyhouse Farming</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {detailedBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
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
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 bg-green-700 text-white">
              <h2 className="text-3xl font-semibold">Structure Comparison</h2>
              <p className="text-green-100 mt-2">Agriplast Designed Polyhouse Structure vs other polyhouse structure</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-green-100">
                    <th className="p-4 font-semibold text-green-800">Features</th>
                    <th className="p-4 font-semibold text-green-800">Agriplast Designed Structure</th>
                    <th className="p-4 font-semibold text-green-800">Others Structure</th>
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
                      <td className="p-4 font-medium text-green-900">{row.feature}</td>
                      <td className="p-4">
                        <div className="flex items-center text-green-700">
                          <Check size={20} className="text-green-600 mr-2" />
                          {row.agriplast}
                        </div>
                      </td>
                      <td className="p-4">
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
            className="mb-20 scroll-mt-24"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-green-800 mb-6">{type.name}</h2>
              
              {type.id === 'menu1' && (
                <>
                  <p className="text-lg text-gray-700 mb-6">
                    Agriplast Protected Cultivation offers a range of Naturally Ventilated Polyhouses, 
                    each designed to suit various climatic conditions and crop types. Our polyhouses utilize 
                    advanced materials and design principles to allow natural air flow, which moderates 
                    temperatures and humidity levels effectively.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-green-50 p-6 rounded-lg shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Enhanced Climate Control</h3>
                      <p className="text-gray-600">
                        These polyhouses are expertly designed to allow for optimal natural airflow, which regulates 
                        temperature and humidity precisely, ensuring ideal growing conditions for a variety of crops.
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-green-50 p-6 rounded-lg shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Energy Efficiency</h3>
                      <p className="text-gray-600">
                        By leveraging natural ventilation, these structures reduce the reliance on mechanical systems 
                        for climate control, significantly cutting energy use and lowering operational costs.
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-green-50 p-6 rounded-lg shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Cost-Effectiveness</h3>
                      <p className="text-gray-600">
                        The use of durable, transparent materials maximizes sunlight penetration, enhancing plant growth 
                        and yield, which boosts profitability without the hefty investment in additional climate control technologies.
                      </p>
                    </motion.div>
                  </div>
                </>
              )}
              
              {/* Placeholder for other polyhouse types */}
              {type.id !== 'menu1' && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <p className="text-lg text-yellow-700">
                    Detailed information about {type.name} is coming soon. Please contact us for more details.
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Gallery Section (New) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Polyhouse Gallery</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={galleryImages[currentGalleryIndex]}
                alt={`Polyhouse Image ${currentGalleryIndex + 1}`}
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <button
              onClick={prevGallery}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-all"
            >
              <ChevronLeft size={24} className="text-green-800" />
            </button>
            <button
              onClick={nextGallery}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-all"
            >
              <ChevronRight size={24} className="text-green-800" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGalleryIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentGalleryIndex ? 'bg-green-600' : 'bg-green-200'}`}
              />
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section (New) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 py-16 bg-green-50 rounded-2xl"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">What Farmers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
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
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Cost of Polyhouse in India</h2>
            <p className="text-lg text-gray-700 mb-8">
              Polyhouse construction cost is calculated per sq. meter. The cost varies as per the quality of
              the materials used for the structure and shed. Also the quality and density of irrigation
              system define the polyhouse farming cost per acre. There are different types of polyhouse - 
              Low cost polyhouse or wooden/bamboo polyhouse, Metal structured polyhouse and Net house Structure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Naturally Ventilated Polyhouse Structure</h3>
                <p className="text-gray-600 mb-6">
                  Structure + Secondary Layer (White Shade Net 50%) + Trellising + FLC (Chain Pulley Mechanism) + Installation
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
              
              <div className="bg-green-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Double Layer Pipe Purlin Nethouse</h3>
                <p className="text-gray-600 mb-6">
                  Structure + Secondary Layer (White Shade Net 50%) + Trellising + Installation
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
            
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg shadow-sm">
              <p className="text-base text-yellow-700">
                *Above prices are inclusive of GST. Note: The above prices are approximate and subject to change. 
                Variations may occur based on fluctuations in the prices of metal and other market necessities.
              </p>
            </div>
            
            <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-sm">
              <p className="text-base text-blue-700">
                Polyhouse can be designed in various ways as per the selected crop, geography and preferred longevity. 
                Though the construction cost is relatively high one can apply for Govt. subsidy which ranges from 50% to 75% 
                in different states.
              </p>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section (New) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
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
                  className="w-full p-6 flex justify-between items-center text-left font-semibold text-green-800 hover:bg-green-50 transition-all"
                >
                  {faq.question}
                  <ChevronDown size={24} className={`transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 pt-0 text-gray-600 bg-green-50"
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
          className="mb-20"
        >
          <div className="bg-green-700 rounded-2xl shadow-lg p-12 text-center text-white">
            <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact our experts today to discuss your polyhouse requirements and get a customized solution for your farming needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-green-700 font-semibold py-4 px-8 rounded-full inline-flex items-center hover:bg-green-100 transition-all shadow-md"
            >
              Contact Us Now <ArrowRight size={24} className="ml-3" />
            </motion.button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-green-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© {new Date().getFullYear()} Agriplast Protected Cultivation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PolyhousePage;

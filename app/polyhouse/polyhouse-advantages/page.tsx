'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, X, Leaf, ArrowRight, ChevronRight, ChevronLeft, Phone, Mail, MapPin } from 'lucide-react';
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
      title: "TEMPERATURE CONTROL",
      description: "Plants are grown under controlled temperature",
      icon: "🌡️",
      image: "https://images.pexels.com/photos/6272328/pexels-photo-6272328.jpeg"
    },
    {
      title: "DAMAGE FREE",
      description: "Less chances of crop loss or damage",
      icon: "🛡️",
      image: "https://images.pexels.com/photos/6001997/pexels-photo-6001997.jpeg"
    },
    {
      title: "LESS PESTICIDES",
      description: "Less pests and insects in a poly house",
      icon: "🚫",
      image: "https://images.pexels.com/photos/4917238/pexels-photo-4917238.jpeg"
    },
    {
      title: "HIGHER PRODUCTION",
      description: "Quality of produce is higher in poly house",
      icon: "📈",
      image: "https://images.pexels.com/photos/6001991/pexels-photo-6001991.jpeg"
    }
  ];

  const features = [
    {
      title: "Reliable & Robust Designed Structure",
      description: "Team of experienced engineers have created designs according to Indian requirements and export markets.",
      image: "https://images.pexels.com/photos/6272328/pexels-photo-6272328.jpeg"
    },
    {
      title: "Customer Education for plant growing",
      description: "For years, our strength has been rooted in a balanced approach of educating while fostering trust and expertise.",
      image: "https://images.pexels.com/photos/6001997/pexels-photo-6001997.jpeg"
    },
    {
      title: "Life-time Agronomy Support",
      description: "Free agronomy support to all the customers from highly experienced agronomist has 20+ years of experience.",
      image: "https://images.pexels.com/photos/4917238/pexels-photo-4917238.jpeg"
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
    { id: 'menu1', name: 'Naturally Ventilated Polyhouse', image: "https://images.pexels.com/photos/6272328/pexels-photo-6272328.jpeg" },
    { id: 'menu2', name: 'Butterfly Ventilated Polyhouse', image: "https://images.pexels.com/photos/6001997/pexels-photo-6001997.jpeg" },
    { id: 'menu3', name: 'Tropical Polyhouse', image: "https://images.pexels.com/photos/4917238/pexels-photo-4917238.jpeg" },
    { id: 'menu4', name: 'Gothic Polyhouse', image: "https://images.pexels.com/photos/6001991/pexels-photo-6001991.jpeg" },
    { id: 'menu5', name: 'Customized Polyhouse', image: "https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg" },
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg',
    'https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg',
    'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
    'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', quote: 'Agriplast polyhouse ne meri fasal ko double kar diya!', location: 'Pune', image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" },
    { name: 'Priya Singh', quote: 'Best support and quality structure.', location: 'Bangalore', image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
    { name: 'Amit Patel', quote: 'Cost-effective and reliable for tropical crops.', location: 'Ahmedabad', image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
  ];

  const faqs = [
    { question: 'What is the lifespan of a polyhouse?', answer: 'Typically 10-15 years with proper maintenance.' },
    { question: 'How to apply for subsidies?', answer: 'Contact NHB or state agriculture department.' },
    { question: 'Which crops are best for polyhouse?', answer: 'Vegetables, flowers, and exotic fruits.' },
    { question: 'What maintenance is required?', answer: 'Regular cleaning, checking for damage, and ensuring proper ventilation.' },
    { question: 'Can I convert my existing greenhouse to a polyhouse?', answer: 'Yes, our experts can help retrofit existing structures.' },
  ];

  const detailedBenefits = [
    { title: 'Sustainable Farming', desc: 'Reduces water usage by up to 50% and minimizes chemical needs.', icon: "🌱" },
    { title: 'Year-Round Production', desc: 'Enables continuous harvesting regardless of seasons.', icon: "📅" },
    { title: 'Higher ROI', desc: 'Increases yield by 300% with premium quality produce.', icon: "💰" },
    { title: 'Eco-Friendly', desc: 'Promotes organic methods and reduces environmental impact.', icon: "🌍" },
  ];

  const nextGallery = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevGallery = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 text-white py-48 relative overflow-hidden">
      {/* Enhanced Background with Multiple Overlapping Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/1.jpg"
          alt="Polyhouse background"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Subtle Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        {/* Animated Floating Elements for Modern Touch */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-300/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Optional Background Video for Advanced Feel (if you have a video) */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/videos/polyhouse-bg.mp4" type="video/mp4" />
      </video> */}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Title with Gradient Text and Better Typography */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent leading-tight">
            Advantages of Agriplast Polyhouse
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Revolutionizing protected cultivation with advanced polyhouse technology for sustainable and high-yield farming
        </motion.p>

        {/* Added CTA Buttons for Better Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore Benefits
          </button>
          <button className="border-2 border-green-400 hover:bg-green-400/20 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
            Learn More
          </button>
        </motion.div>

       
      </div>
    </header>

      {/* Navigation Tabs */}
      {/* <div className="sticky top-0 bg-white shadow-md z-10">
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
      </div> */}

      <main className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-semibold text-green-800 mb-6">What is a Polyhouse?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Polyhouse or a Greenhouse is a house or a structure made of translucent material like polyethylene, 
                  where the plants grow and develop under controlled climatic conditions. The size of structure can differ 
                  from small shacks to big-size buildings as per the need.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our polyhouses are designed with cutting-edge technology to provide optimal growing conditions for various crops, 
                  ensuring higher yields and better quality produce throughout the year.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg"
                  alt="Polyhouse structure"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section> */}

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-20"
>
  <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Key Advantages of Polyhouse Farming</h2>
  
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="md:flex">
      {/* Left side - Points */}
      <div className="md:w-1/2 p-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-6">Why Choose Polyhouse Farming?</h3>
        
        <div className="space-y-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">{advantage.icon}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-1">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional benefits list */}
        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h4 className="text-lg font-semibold text-green-700 mb-3">Additional Benefits:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <Check size={18} className="text-green-600 mr-2" />
              <span>Water conservation up to 50% compared to open field farming</span>
            </li>
            <li className="flex items-center">
              <Check size={18} className="text-green-600 mr-2" />
              <span>Year-round production regardless of external weather conditions</span>
            </li>
            <li className="flex items-center">
              <Check size={18} className="text-green-600 mr-2" />
              <span>Protection from extreme weather events</span>
            </li>
            <li className="flex items-center">
              <Check size={18} className="text-green-600 mr-2" />
              <span>Higher quality produce with better market value</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Right side - Photo */}
      <div className="md:w-1/2">
        <div className="h-full relative">
          <Image
            src="https://images.pexels.com/photos/6272328/pexels-photo-6272328.jpeg"
            alt="Modern polyhouse farming"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Modern Agriculture Solution</h3>
              <p className="text-green-100">Increase yields by up to 300% with controlled environment agriculture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Benefits Section */}
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
                <div className="text-4xl mb-4">{benefit.icon}</div>
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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="md:flex md:flex-row-reverse">
        <div className="md:w-1/2">
          <Image
            src={type.image}
            alt={type.name}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">{type.name}</h2>
          
          {type.id === 'menu1' && (
            <>
              <p className="text-lg text-gray-700 mb-6">
                Agriplast Protected Cultivation offers a range of Naturally Ventilated Polyhouses, 
                each designed to suit various climatic conditions and crop types. Our polyhouses utilize 
                advanced materials and design principles to allow natural air flow, which moderates 
                temperatures and humidity levels effectively.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Enhanced Climate Control</h3>
                  <p className="text-gray-600">
                    These polyhouses are expertly designed to allow for optimal natural airflow, which regulates 
                    temperature and humidity precisely, ensuring ideal growing conditions for a variety of crops.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Energy Efficiency</h3>
                  <p className="text-gray-600">
                    By leveraging natural ventilation, these structures reduce the reliance on mechanical systems 
                    for climate control, significantly cutting energy use and lowering operational costs.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Cost-Effectiveness</h3>
                  <p className="text-gray-600">
                    The use of durable, transparent materials maximizes sunlight penetration, enhancing plant growth 
                    and yield, which boosts profitability without the hefty investment in additional climate control technologies.
                  </p>
                </div>
              </div>
            </>
          )}
          
          {type.id === 'menu2' && (
            <>
              <p className="text-lg text-gray-700 mb-6">
                Agriplast's Butterfly Ventilated Polyhouses feature a unique roof design that opens like butterfly wings, 
                providing exceptional ventilation and temperature control. This design is perfect for regions with high 
                humidity and temperature fluctuations.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Superior Ventilation</h3>
                  <p className="text-gray-600">
                    The butterfly roof design allows hot air to escape efficiently while drawing in cooler air from the sides, 
                    creating optimal growing conditions even in hot climates.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Rain Protection</h3>
                  <p className="text-gray-600">
                    The unique design provides excellent protection against heavy rainfall while maintaining ventilation, 
                    preventing waterlogging and related plant diseases.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Adaptable Design</h3>
                  <p className="text-gray-600">
                    Our butterfly ventilated polyhouses can be customized with additional features like insect nets, 
                    shade systems, and automated climate control based on specific crop requirements.
                  </p>
                </div>
              </div>
            </>
          )}
          
          {type.id === 'menu3' && (
            <>
              <p className="text-lg text-gray-700 mb-6">
                Specifically designed for tropical regions, Agriplast's Tropical Polyhouses incorporate advanced cooling 
                technologies and ventilation systems to maintain ideal growing conditions in hot and humid climates.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Advanced Cooling Systems</h3>
                  <p className="text-gray-600">
                    Equipped with evaporative cooling pads and exhaust fans, these polyhouses maintain temperatures 
                    5-8°C lower than outside conditions, perfect for heat-sensitive crops.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Humidity Management</h3>
                  <p className="text-gray-600">
                    Specialized ventilation systems control humidity levels, preventing fungal diseases and ensuring 
                    optimal transpiration rates for plant growth.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Durable Construction</h3>
                  <p className="text-gray-600">
                    Built with reinforced structures to withstand tropical storms and heavy rainfall, ensuring 
                    year-round protection for your crops.
                  </p>
                </div>
              </div>
            </>
          )}
          
          {type.id === 'menu4' && (
            <>
              <p className="text-lg text-gray-700 mb-6">
                Agriplast's Gothic Polyhouses feature a distinctive arched roof design that offers superior snow and rain 
                shedding capabilities, making them ideal for regions with heavy precipitation or extreme weather conditions.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Weather Resistance</h3>
                  <p className="text-gray-600">
                    The gothic arch design prevents snow and water accumulation on the roof, reducing structural stress 
                    and preventing damage during heavy precipitation.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Increased Headroom</h3>
                  <p className="text-gray-600">
                    The arched design provides more headroom compared to traditional structures, allowing for better 
                    air circulation and accommodating taller crops.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Energy Efficiency</h3>
                  <p className="text-gray-600">
                    The curved surface allows for better light diffusion and heat retention, reducing energy costs 
                    for heating in colder climates.
                  </p>
                </div>
              </div>
            </>
          )}
          
          {type.id === 'menu5' && (
            <>
              <p className="text-lg text-gray-700 mb-6">
                At Agriplast, we understand that every farming operation has unique requirements. Our Customized Polyhouse 
                solutions are tailored to meet specific needs, whether you're growing specialty crops, conducting research, 
                or implementing precision agriculture technologies.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Tailored Solutions</h3>
                  <p className="text-gray-600">
                    We work closely with you to design polyhouses that meet your specific crop requirements, 
                    budget constraints, and site conditions.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Advanced Technology Integration</h3>
                  <p className="text-gray-600">
                    Our customized solutions can incorporate the latest technologies including automated climate control, 
                    precision irrigation systems, and monitoring sensors.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Scalable Designs</h3>
                  <p className="text-gray-600">
                    Whether you need a small research facility or a large commercial operation, our customized designs 
                    can scale to meet your current and future needs.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </motion.section>
))}
        {/* Gallery Section */}
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

        {/* Testimonials Section */}
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
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center text-green-600">
                  <Leaf size={20} className="mr-2" />
                  <span className="text-sm">Agriplast Customer</span>
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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 bg-green-700 text-white">
              <h2 className="text-3xl font-semibold">Cost of Polyhouse in India</h2>
              <p className="text-green-100 mt-2">Get the best value with Agriplast polyhouse solutions</p>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8">
                Polyhouse construction cost is calculated per sq. meter. The cost varies as per the quality of
                the materials used for the structure and shed. Also the quality and density of irrigation
                system define the polyhouse farming cost per acre. There are different types of polyhouse - 
                Low cost polyhouse or wooden/bamboo polyhouse, Metal structured polyhouse and Net house Structure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-8 rounded-lg shadow-sm border border-green-200">
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
                
                <div className="bg-green-50 p-8 rounded-lg shadow-sm border border-green-200">
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
          </div>
        </motion.section>

        {/* FAQ Section */}
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

     
      </main>

   
    </div>
  );
};

export default PolyhousePage;
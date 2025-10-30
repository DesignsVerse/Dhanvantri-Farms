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
      image: "/service/poly/6.jpg"
    },
    {
      title: "DAMAGE FREE",
      description: "Less chances of crop loss or damage",
      icon: "🛡️",
      image: "/service/poly/7.jpg"
    },
    {
      title: "LESS PESTICIDES",
      description: "Less pests and insects in a polyhouse",
      icon: "🚫",
      image: "/service/poly/8.jpg"
    },
    {
      title: "HIGHER PRODUCTION",
      description: "Quality of produce is higher in a polyhouse",
      icon: "📈",
      image: "/service/poly/9.jpg"
    }
  ];

  const features = [
    {
      title: "Reliable & Robust Designed Structure",
      description: "Team of experienced engineers have created designs according to Indian requirements and export markets.",
      image: "https://images.pexels.com/photos/6272328/pexels-photo-6272328.jpeg"
    },
    {
      title: "Customer Education for Plant Growing",
      description: "For years, our strength has been rooted in a balanced approach of educating while fostering trust and expertise.",
      image: "https://images.pexels.com/photos/6001997/pexels-photo-6001997.jpeg"
    },
    {
      title: "Life-time Agronomy Support",
      description: "Free agronomy support to all the customers from highly experienced agronomist with 20+ years of experience.",
      image: "https://images.pexels.com/photos/4917238/pexels-photo-4917238.jpeg"
    }
  ];

  const comparisonData = [
    { feature: "Height of Structure", Dhanvantri Farms: "6.8M to 7.2M from Ground Level", others: "6.2M to 6.5M from Ground Level" },
    { feature: "Side Ventilation", Dhanvantri Farms: "4 meters", others: "2.5 meters" },
    { feature: "Top Vent", Dhanvantri Farms: "1.2 to 1.4 meters", others: "0.9 meters" },
    { feature: "Pipe Quality and Galvanization", Dhanvantri Farms: "375 GSM to 400 GSM", others: "150 GSM to 250 GSM" },
    { feature: "Nut Bolts and Connectors", Dhanvantri Farms: "22 Micron Zinc Ferrous Coated", others: "No Coating / 2mm Coating" },
    { feature: "Foundation", Dhanvantri Farms: "76mm Diameter, 2mm Thickness, Crimped Foundation", others: "63mm Diameter, 1.6mm Thickness, Point Load Foundation" },
    { feature: "Door", Dhanvantri Farms: "Aluminium Double Sliding Door with Buffer Zone", others: "Basic Non-Sliding GI Door without buffer zone" },
    { feature: "Gutter", Dhanvantri Farms: "1.6mm Thickness, 275 GSM Zinc Coated", others: "0.6mm to 1mm Thickness, Non-Galvanized" },
    { feature: "End Gutters", Dhanvantri Farms: "Yes, at both ends of the structure", others: "N/A" },
    { feature: "Shade Net and Mechanism", Dhanvantri Farms: "Pulley System Hybrid Mechanism", others: "Hook Mechanism" },
    { feature: "Reinforcement and Anti-Wind Breakers", Dhanvantri Farms: "Multiple reinforcement provided", others: "No reinforcements" },
    { feature: "Hockey Pipe", Dhanvantri Farms: "Square Pipes for more stability", others: "Round pipes with less stability" },
    { feature: "Tonnage of Structure", Dhanvantri Farms: "20-21 Tonnes Steel, Total ~24 tonnes", others: "16 Tonnes Steel, Total ~19 tonnes" },
    { feature: "Profile", Dhanvantri Farms: "Aluminium Profile (heat doesn't transfer)", others: "GI Profile (heats plastic)" },
    { feature: "Spring", Dhanvantri Farms: "PVC-Coated Springs (don't heat plastic)", others: "GI spring (heats plastic)" },
    { feature: "Polyfilm", Dhanvantri Farms: "Ginegar Israel", others: "Ginegar / Local" },
    { feature: "Shade Net/Insect net", Dhanvantri Farms: "Agriplast", others: "Agriplast/Local" },
    { feature: "Multiple Designed Connectors", Dhanvantri Farms: "Israeli-designed connectors", others: "Local Connectors" },
    { feature: "Other Features", Dhanvantri Farms: "Curtain Box System, FLC Mechanism, Aluminet Shade Net", others: "No genuine Aluminet" },
    { feature: "Agronomist Support", Dhanvantri Farms: "One Year Free Agronomist Support", others: "No Support" },
  ];

  const polyhouseTypes = [
    { id: 'menu1', name: 'Naturally Ventilated Polyhouse', image: "/service/poly/9.jpg" },
    { id: 'menu2', name: 'Butterfly Ventilated Polyhouse', image: "/service/poly/10.jpg" },
    { id: 'menu3', name: 'Tropical Polyhouse', image: "/service/poly/11.jpg" },
    { id: 'menu4', name: 'Gothic Polyhouse', image: "/service/poly/12.jpg" },
    { id: 'menu5', name: 'Customized Polyhouse', image: "/service/poly/4.jpg" },
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


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 text-white py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/1.jpg"
            alt="Polyhouse Farming Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent leading-tight">
              Advantages of Polyhouse Farming
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform agriculture with Dhanvantri Farms’ advanced polyhouse solutions, designed for sustainable, high-yield farming in India.
          </motion.p>
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

      <main className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-20 scroll-mt-24"
>
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6 md:p-8 order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6">What is a Polyhouse?</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          A polyhouse is a modern agricultural structure made of translucent polyethylene, designed to create a controlled environment for optimal crop growth. At Dhanvantri Farms, our polyhouses use advanced technology to regulate temperature, humidity, and light, ensuring higher yields and better-quality produce.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Perfect for protected cultivation, Dhanvantri Farms polyhouses shield crops from harsh weather, pests, and diseases while reducing water usage by up to 50%. Ideal for vegetables, flowers, and exotic fruits, they enable year-round farming with 3-5x higher productivity compared to traditional methods.
        </p>
      </div>
      <div className="md:w-1/2 aspect-[3/2] order-1 md:order-2">
        <Image
          src="/service/poly/7.jpg"
          alt="Dhanvantri Farms Polyhouse Structure"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</motion.section>

        {/* Key Advantages Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Key Advantages of Polyhouse Farming</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
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
              <div className="md:w-1/2">
                <div className="h-full relative">
                  <Image
      src= "/service/poly/8.jpg"
      alt="Modern Polyhouse Farming by Dhanvantri Farms"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">Modern Agriculture Solution</h3>
                      <p className="text-green-100">Increase yields by up to 300% with Dhanvantri Farms’ protected cultivation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <p className="text-green-100 mt-2">Dhanvantri Farms Designed Polyhouse Structure vs Other Polyhouse Structures</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-green-100">
                    <th className="p-4 font-semibold text-green-800">Features</th>
                    <th className="p-4 font-semibold text-green-800">Dhanvantri Farms Structure</th>
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
                          {row.Dhanvantri Farms}
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
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-8 order-2 md:order-1">
                  <h2 className="text-3xl font-semibold text-green-800 mb-6">{type.name}</h2>
                  {type.id === 'menu1' && (
                    <>
                      <p className="text-lg text-gray-700 mb-6">
                        Dhanvantri Farms offers Naturally Ventilated Polyhouses, designed for optimal airflow and cost-effective crop cultivation. These structures are ideal for moderate climates and a variety of crops.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Enhanced Climate Control</h3>
                          <p className="text-gray-600">
                            Designed for optimal natural airflow, Dhanvantri Farms polyhouses regulate temperature and humidity, ensuring ideal growing conditions.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Energy Efficiency</h3>
                          <p className="text-gray-600">
                            Natural ventilation reduces reliance on mechanical systems, cutting energy costs and enhancing sustainability.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Cost-Effectiveness</h3>
                          <p className="text-gray-600">
                            Durable materials maximize sunlight penetration, boosting plant growth and profitability without high investment.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  {type.id === 'menu2' && (
                    <>
                      <p className="text-lg text-gray-700 mb-6">
                        Dhanvantri Farms’ Butterfly Ventilated Polyhouses feature a unique roof design for superior ventilation, perfect for high-humidity regions.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Superior Ventilation</h3>
                          <p className="text-gray-600">
                            The butterfly roof allows hot air to escape efficiently, maintaining optimal growing conditions in hot climates.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Rain Protection</h3>
                          <p className="text-gray-600">
                            Excellent protection against heavy rainfall, preventing waterlogging and plant diseases.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Adaptable Design</h3>
                          <p className="text-gray-600">
                            Customizable with insect nets, shade systems, and automated controls for specific crop needs.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  {type.id === 'menu3' && (
                    <>
                      <p className="text-lg text-gray-700 mb-6">
                        Dhanvantri Farms’ Tropical Polyhouses are built for hot and humid climates, with advanced cooling and ventilation systems.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Advanced Cooling Systems</h3>
                          <p className="text-gray-600">
                            Equipped with evaporative cooling pads and fans, maintaining temperatures 5-8°C lower than outside.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Humidity Management</h3>
                          <p className="text-gray-600">
                            Specialized systems control humidity, preventing fungal diseases and ensuring optimal plant growth.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Durable Construction</h3>
                          <p className="text-gray-600">
                            Reinforced structures withstand tropical storms and heavy rainfall for year-round crop protection.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  {type.id === 'menu4' && (
                    <>
                      <p className="text-lg text-gray-700 mb-6">
                        Dhanvantri Farms’ Gothic Polyhouses feature arched roofs for superior snow and rain shedding, ideal for extreme weather regions.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Weather Resistance</h3>
                          <p className="text-gray-600">
                            The gothic arch prevents snow and water accumulation, reducing structural stress.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Increased Headroom</h3>
                          <p className="text-gray-600">
                            More headroom improves air circulation and accommodates taller crops.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Energy Efficiency</h3>
                          <p className="text-gray-600">
                            Curved surfaces enhance light diffusion and heat retention, reducing energy costs.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  {type.id === 'menu5' && (
                    <>
                      <p className="text-lg text-gray-700 mb-6">
                        Dhanvantri Farms’ Customized Polyhouses are tailored to meet unique farming needs, from specialty crops to precision agriculture.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Tailored Solutions</h3>
                          <p className="text-gray-600">
                            Designed to meet specific crop requirements, budgets, and site conditions.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Advanced Technology Integration</h3>
                          <p className="text-gray-600">
                            Incorporates automated climate control, precision irrigation, and monitoring sensors.
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-green-700 mb-3">Scalable Designs</h3>
                          <p className="text-gray-600">
                            Scalable solutions for small research facilities to large commercial operations.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="md:w-1/2 aspect-[3/2] order-1 md:order-2">
                  <Image
                    src={type.image}
                    alt={type.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        ))}

    

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
                  <span className="text-sm">Dhanvantri Farms Customer</span>
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
              <p className="text-green-100 mt-2">Get the best value with Dhanvantri Farms polyhouse solutions</p>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8">
                Polyhouse construction cost is calculated per sq. meter. The cost varies as per the quality of
                the materials used for the structure and shed. Also the quality and density of irrigation
                system define the polyhouse farming cost per acre. Dhanvantri Farms offers various types of polyhouses - 
                Low cost polyhouse, Metal structured polyhouse, and Net house structures.
              </p>
              
              <div className="mt-8 p-6 bg-yellow-50 rounded-lg shadow-sm">
                <p className="text-base text-yellow-700">
                  *Above prices are inclusive of GST. Note: The above prices are approximate and subject to change. 
                  Variations may occur based on fluctuations in the prices of metal and other market necessities.
                </p>
              </div>
              <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-sm">
                <p className="text-base text-blue-700">
                  Dhanvantri Farms polyhouses can be designed for various crops, geographies, and longevity preferences. 
                  Government subsidies ranging from 50% to 75% are available in different states.
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
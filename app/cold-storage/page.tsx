'use client';

import { useState, useEffect, useRef } from 'react';
import { Snowflake, Thermometer, Zap, Leaf, ArrowRight, Shield, BarChart, Warehouse, Clock, Users } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

export default function ColdStoragePage() {
  const [activeSection, setActiveSection] = useState('benefits');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [layoutView, setLayoutView] = useState('blast-freezer');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [tempRange, setTempRange] = useState(-20);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionRefs = {
    benefits: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    layouts: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    faqs: useRef<HTMLElement>(null),
  };

  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 0.3]);
  const headerBackground = useTransform(scrollYProgress, [0, 0.1], ['rgba(6, 95, 70, 0)', 'rgba(6, 95, 70, 0.95)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix: add type annotation to parameter id as string
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsNavOpen(false);
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
      icon: Snowflake,
      title: 'Precision Temperature Control',
      description: 'Advanced monitoring systems maintain exact temperatures for optimal preservation of perishable goods.',
    },
    {
      icon: Thermometer,
      title: 'Energy Efficiency',
      description: 'State-of-the-art insulation and cooling technology reduce energy consumption by up to 40%.',
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'AI-powered systems for real-time monitoring, inventory management, and predictive maintenance.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      description: 'Sustainable refrigerants and carbon-neutral operations minimize environmental impact.',
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Multi-layered security systems with 24/7 monitoring and access control.',
    },
    {
      icon: BarChart,
      title: 'Cloud Integration',
      description: 'Seamless connectivity with your supply chain management systems for complete visibility.',
    },
  ];

  const features = [
    {
      name: 'IoT Monitoring System',
      description: 'Real-time temperature, humidity, and equipment performance tracking with automated alerts.',
      icon: Zap,
    },
    {
      name: 'Premium Insulation',
      description: 'High-performance polyurethane panels with exceptional thermal efficiency and durability.',
      icon: Snowflake,
    },
    {
      name: 'Automated Storage & Retrieval',
      description: 'Robotic systems that optimize space utilization and reduce human intervention.',
      icon: Warehouse,
    },
    {
      name: 'Backup Power Systems',
      description: 'Redundant cooling and power systems ensure uninterrupted operation during outages.',
      icon: BarChart,
    },
  ];

  const layouts = [
    {
      id: 'blast-freezer',
      name: 'Blast Freezer',
      description: 'Rapid freezing technology that preserves food quality by quickly bringing temperatures down to -40°C, locking in freshness and nutritional value.',
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg',
      suitableFor: 'Meat, seafood, prepared meals',
      temperature: '-40°C to -10°C',
      capacity: 'Up to 50 pallets',
    },
    {
      id: 'chiller',
      name: 'Chiller Storage',
      description: 'Precision climate control maintains 0-5°C environments ideal for fresh produce, dairy, and floral products with optimal humidity management.',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
      suitableFor: 'Fruits, vegetables, dairy, flowers',
      temperature: '0°C to 5°C',
      capacity: 'Up to 100 pallets',
    },
    {
      id: 'frozen',
      name: 'Frozen Storage',
      description: 'Long-term preservation at sub-zero temperatures with advanced air circulation systems to prevent freezer burn and maintain product integrity.',
      image: 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg',
      suitableFor: 'Ice cream, frozen foods, pharmaceuticals',
      temperature: '-25°C to -18°C',
      capacity: 'Up to 200 pallets',
    },
  ];

  const faqs = [
    {
      question: 'What industries benefit from cold storage solutions?',
      answer:
        'Food and beverage, pharmaceuticals, biotechnology, floral, and chemical industries all utilize cold storage to preserve product integrity and extend shelf life.',
    },
    {
      question: 'How does automation improve cold storage operations?',
      answer:
        'Automation enhances accuracy in temperature control, reduces energy consumption, minimizes human error, optimizes inventory management, and provides real-time monitoring and alerts for any deviations.',
    },
    {
      question: 'Are your cold storage facilities environmentally friendly?',
      answer:
        'Yes, we use natural refrigerants like CO2 and ammonia, energy-efficient systems, solar power integration where possible, and sustainable building materials to minimize our environmental footprint.',
    },
    {
      question: 'What security measures are in place?',
      answer:
        'Our facilities feature 24/7 monitoring, biometric access controls, temperature breach alerts, backup power systems, and insurance-compliant security protocols.',
    },
    {
      question: 'Can you handle temperature-sensitive pharmaceuticals?',
      answer:
        'Absolutely. We offer GDP-compliant storage solutions with precise temperature control, documentation, and monitoring specifically designed for pharmaceuticals and healthcare products.',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { value: '500+', label: 'Satisfied Clients', icon: Users },
    { value: '40%', label: 'Energy Savings', icon: Leaf },
    { value: '24/7', label: 'Monitoring', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80 z-10" />
        <Image
          src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg"
          alt="Cold Storage"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-green-300">Premium</span> Cold Storage Solutions
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Advanced, energy-efficient storage systems for perishable goods with cutting-edge technology and unmatched reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-full font-semibold flex items-center shadow-lg hover:shadow-green-500/30 transition-all"
              onClick={() => scrollToSection('benefits')}
            >
              Explore Solutions <ArrowRight size={20} className="ml-2" />
            </motion.button>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 py-3 px-6 rounded-full font-semibold transition-all flex items-center"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute bottom-10 left-0 right-0 z-20"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon size={24} className="text-green-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-green-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* What is Cold Storage */}
      <motion.section
        id="benefits"
        ref={sectionRefs.benefits}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                alt="Cold Storage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">GMP-Compliant Facilities</h3>
                  <p className="text-green-100">Meeting the highest industry standards</p>
                </div>
              </div>
            </motion.div>
            <div className="lg:w-1/2">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-green-600 font-semibold mb-2 block"
              >
                ABOUT OUR SOLUTIONS
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Advanced <span className="text-green-600">Temperature-Controlled</span> Storage
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our state-of-the-art cold storage facilities maintain precise temperature environments to preserve perishable goods including food, pharmaceuticals, and chemicals.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Equipped with advanced insulation, automation, and IoT monitoring systems, we ensure product safety, operational efficiency, and environmental sustainability.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Shield size={20} className="text-green-600" />
                    </div>
                    <span className="font-medium">GDP & FDA Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Leaf size={20} className="text-green-600" />
                    </div>
                    <span className="font-medium">Eco-Friendly Refrigerants</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="py-20 lg:py-28 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold mb-2 block">WHY CHOOSE US</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Key <span className="text-green-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cold storage solutions deliver unmatched value through innovation and reliability
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-500/10 group"
                >
                  <div className="flex items-center mb-5">
                    <div className="bg-green-100 p-3 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                      <benefit.icon size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Cold Storage Features */}
      <motion.section
        id="features"
        ref={sectionRefs.features}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold mb-2 block">OUR TECHNOLOGY</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-green-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed for reliability, efficiency, and precision
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-500/20 group"
                >
                  <div className="flex items-center mb-5">
                    <div className="bg-green-600 p-3 rounded-xl mr-4 group-hover:bg-green-700 transition-colors">
                      <feature.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Cold Storage Layouts */}
      <motion.section
        id="layouts"
        ref={sectionRefs.layouts}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="py-20 lg:py-28 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold mb-2 block">OUR SOLUTIONS</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Storage <span className="text-green-600">Layouts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customizable configurations designed for specific temperature requirements
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {layouts.map((layout) => (
              <motion.button
                key={layout.id}
                onClick={() => setLayoutView(layout.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center ${
                  layoutView === layout.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-green-800 hover:bg-green-100 shadow-md'
                }`}
              >
                {layoutView === layout.id && <Snowflake size={16} className="mr-2" />}
                {layout.name}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={layoutView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-8 items-stretch"
            >
              <div className="lg:w-1/2 relative h-96 lg:h-auto rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={layouts.find((l) => l.id === layoutView)!.image}
                  alt={layouts.find((l) => l.id === layoutView)!.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-semibold">{layouts.find((l) => l.id === layoutView)!.name}</h3>
                    <p className="text-green-100">Optimized for {layouts.find((l) => l.id === layoutView)!.suitableFor}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 bg-white rounded-3xl shadow-lg flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{layouts.find((l) => l.id === layoutView)!.name} Details</h3>
                <p className="text-gray-600 mb-6">{layouts.find((l) => l.id === layoutView)!.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">TEMPERATURE RANGE</h4>
                    <p className="text-lg font-bold text-green-600">{layouts.find((l) => l.id === layoutView)!.temperature}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">CAPACITY</h4>
                    <p className="text-lg font-bold text-green-600">{layouts.find((l) => l.id === layoutView)!.capacity}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">SUITABLE FOR</h4>
                    <p className="text-lg font-bold text-green-600">{layouts.find((l) => l.id === layoutView)!.suitableFor}</p>
                  </div>
                </div>

                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-colors self-start flex items-center">
                  Request Custom Quote <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Temperature Control Visualizer</h3>
            <div className="max-w-2xl mx-auto">
              <input
                type="range"
                min="-40"
                max="5"
                value={tempRange}
                onChange={(e) => setTempRange(parseInt(e.target.value))}
                className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>-40°C (Blast Freezing)</span>
                <span>0°C (Chiller)</span>
                <span>5°C (Cool Storage)</span>
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg text-gray-600">
                  Selected Temperature: <span className="text-green-700 font-bold">{tempRange}°C</span>
                </p>
                <p className="text-gray-500 mt-2">
                  {tempRange < -25
                    ? 'Ideal for long-term frozen storage and sensitive pharmaceuticals'
                    : tempRange < 0
                    ? 'Perfect for frozen goods, ice cream, and certain pharmaceuticals'
                    : 'Optimal for fresh produce, dairy, and floral products'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

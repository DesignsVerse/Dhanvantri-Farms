'use client';

import { useState } from 'react';
import { Users, Award, Globe, TrendingUp, Shield, Target, ChevronRight, Play, Leaf, Sprout, CloudRain, Sun } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  const [playVideo, setPlayVideo] = useState(false);

  const stats = [
    { icon: Users, value: '15,000+', label: 'Happy Farmers' },
    { icon: Globe, value: '100+', label: 'Cities Presence' },
    { icon: Award, value: '11+', label: 'Years Experience' },
    { icon: TrendingUp, value: '400%', label: 'Avg Yield Increase' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality and use only premium materials and technology from global leaders.'
    },
    {
      icon: Target,
      title: 'Farmer-Centric',
      description: 'Every solution is designed with farmers\' success in mind, ensuring maximum ROI and sustainability.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'We bring world-class technology and practices to Indian agriculture for global competitiveness.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Driven',
      description: 'Continuous research and development to provide cutting-edge solutions for modern farming.'
    }
  ];

  const technologies = [
    { icon: Leaf, name: 'Polyhouse Systems', description: 'Climate-controlled environments for year-round cultivation' },
    { icon: Sprout, name: 'Hydroponics', description: 'Soil-less farming with 90% water savings' },
    { icon: CloudRain, name: 'Smart Irrigation', description: 'AI-powered water management systems' },
    { icon: Sun, name: 'Solar Integration', description: 'Sustainable energy solutions for farms' }
  ];

  // Parallax for hero
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden"> {/* Enhanced background for premium feel */}
      {/* Hero Section with Parallax Effect and Animations */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          whileInView={{ scale: 1.1 }}
          viewport={{ once: false }}
        >
          <img
            src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Farming Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8bc34a]/40 to-[#689f38]/20"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center text-base text-green-100 bg-green-800/30 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-green-600/30 shadow-lg"
          >
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            Pioneering Agricultural Innovation Since 2015
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight drop-shadow-xl"
          >
            Cultivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Tomorrow's</span> Harvest
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Dhanvantri Farms combines five decades of agricultural expertise with cutting-edge technology to transform farming practices across India and beyond.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              href="/solutions" 
              className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Explore Our Solutions <ChevronRight className="w-6 h-6" />
            </Link>
            <button 
              onClick={() => setPlayVideo(true)}
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-xl flex items-center justify-center gap-3 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-6 h-6 fill-white" /> Our Story
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        >
          <span className="text-white text-base mb-3 animate-pulse">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-1"
          >
            <div className="w-2 h-4 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Modal - Enhanced with fade-in */}
      <AnimatePresence>
        {playVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setPlayVideo(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setPlayVideo(false)}
                className="absolute top-4 right-4 text-white text-4xl font-light hover:text-green-300 transition-colors duration-300 z-20"
              >
                ×
              </button>
              <div className="aspect-video">
                <video className="w-full h-full" controls autoPlay>
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section - Enhanced with scroll animations */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden -mt-1">
          <svg className="relative block w-full h-24 lg:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V56.44Z" className="fill-white"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Growing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Together</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Our impact in numbers - empowering farmers and transforming agriculture across India
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div 
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-green-100 hover:border-[#8bc34a]/50 text-center p-8"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white rounded-full mb-6 shadow-md mx-auto"
                  >
                    <stat.icon className="w-10 h-10" />
                  </motion.div>
                  <div className="text-5xl font-extrabold text-gray-900 mb-2 group-hover:text-[#8bc34a] transition-colors duration-300">{stat.value}</div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section - Enhanced with image reveal and text animations */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                  alt="Our Journey"
                  className="w-full h-[560px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#8bc34a] rounded-3xl -z-10 opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#689f38] rounded-3xl -z-10 opacity-20"></div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-12 right-12 bg-gradient-to-r from-[#8bc34a] to-[#689f38] p-8 rounded-3xl shadow-xl text-white"
              >
                <div className="text-6xl font-extrabold mb-2">11+</div>
                <div className="text-lg font-medium">Years of Excellence</div>
              </motion.div>
            </motion.div>
            
            <div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block text-base text-[#8bc34a] bg-green-100 px-6 py-2 rounded-full mb-6 font-medium shadow-sm"
              >
                Our Heritage
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Story</span>
              </motion.h2>
              
              <div className="space-y-8 text-gray-700 text-lg lg:text-xl leading-relaxed">
                <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
                  Founded with a vision to revolutionize Indian agriculture, Dhanvantri Farms has been 
                  at the forefront of smart farming solutions for over five decades. What started as a 
                  small initiative to help local farmers has grown into a global leader in agricultural technology.
                </motion.p>
                <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                  We specialize in advanced Polyhouses, Net Houses, Hydroponics systems, and smart 
                  Automation technologies. Our solutions combine traditional farming wisdom with 
                  cutting-edge technology to create sustainable, profitable farming systems.
                </motion.p>
                <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
                  Today, we serve farmers across 100+ cities, helping them achieve 3-4x higher yields 
                  while reducing water consumption by 90% and eliminating dependency on weather conditions.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link 
                  href="/history" 
                  className="inline-block mt-12 px-10 py-5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white rounded-xl font-bold text-xl hover:from-[#689f38] hover:to-[#8bc34a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-3"
                >
                  Read Full History <ChevronRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Enhanced with card animations */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Technologies</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Cutting-edge solutions that are transforming agriculture and increasing yields sustainably
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {technologies.map((tech, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div 
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-green-100 hover:border-[#8bc34a]/50 p-8 text-center"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white rounded-full mb-6 shadow-md mx-auto"
                  >
                    <tech.icon className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8bc34a] transition-colors duration-300">{tech.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced with advanced hover effects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Values</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              The principles that guide our mission to transform agriculture and empower farmers
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div 
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl border border-green-100 hover:border-[#8bc34a]/50 bg-white p-8 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8bc34a]/0 to-[#689f38]/0 group-hover:from-[#8bc34a]/5 group-hover:to-[#689f38]/5 transition-all duration-500"></div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white rounded-full mb-6 shadow-md mx-auto relative z-10"
                  >
                    <value.icon className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8bc34a] transition-colors duration-300 relative z-10">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced with parallax background and animations */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8bc34a] to-[#689f38] z-0"></div>
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 text-white rounded-full mb-8 shadow-md">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Mission</h2>
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed">
                To empower farmers worldwide with innovative, sustainable, and profitable 
                smart farming solutions that increase productivity while preserving our 
                environment for future generations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 text-white rounded-full mb-8 shadow-md">
                <Globe className="w-10 h-10" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Vision</h2>
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed">
                To be the global leader in smart farming technology, making advanced 
                agricultural solutions accessible to every farmer and contributing to 
                food security worldwide.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Join Thousands of Successful Farmers</h3>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-5 bg-white text-[#8bc34a] rounded-xl font-bold text-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-3 mx-auto"
            >
              Start Your Transformation Today <ChevronRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

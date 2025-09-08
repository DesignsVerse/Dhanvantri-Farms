"use client";
import { Users, Award, Globe, TrendingUp, Shield, Target, ChevronRight, Play, Leaf, Sprout, CloudRain, Sun } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutPage() {
  const [playVideo, setPlayVideo] = useState(false);

  const stats = [
    { icon: Users, value: '15,000+', label: 'Happy Farmers' },
    { icon: Globe, value: '100+', label: 'Cities Presence' },
    { icon: Award, value: '50+', label: 'Years Experience' },
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

  return (
    <div className="min-h-screen bg-gray-50"> {/* Subtle background for premium feel */}
      {/* Enhanced Hero Section with Parallax Effect and Animations */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/70"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center text-sm text-green-100 bg-green-800/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-green-600/30"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Pioneering Agricultural Innovation Since 1972
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Cultivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Tomorrow's</span> Harvest
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Dhanvantri Farms combines five decades of agricultural expertise with cutting-edge technology to transform farming practices across India and beyond.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Explore Our Solutions <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setPlayVideo(true)}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Play className="w-5 h-5 fill-white" /> Our Story
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal - Enhanced with fade-in */}
      {playVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setPlayVideo(false)}
              className="absolute -top-12 right-0 text-white text-lg flex items-center gap-2 hover:text-green-300"
            >
              Close <span className="text-2xl">×</span>
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video className="w-full h-full" controls autoPlay>
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      )}

      {/* Stats Section - Enhanced with scroll animations */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-green-50"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Growing <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Together</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our impact in numbers - empowering farmers and transforming agriculture across India
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div 
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-green-100/50"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 text-green-800 rounded-3xl mb-6 transition-colors duration-300"
                  >
                    <stat.icon className="w-10 h-10" />
                  </motion.div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section - Enhanced with image reveal and text animations */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                  alt="Our Journey"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-green-800 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500 rounded-2xl -z-10"></div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-5xl font-bold text-green-700">50+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </motion.div>
            </motion.div>
            
            <div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block text-sm text-green-700 bg-green-100 px-4 py-1 rounded-full mb-4 font-medium"
              >
                Our Heritage
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Story</span>
              </motion.h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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
              
              <motion.button 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Read Full History <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Enhanced with card animations */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Technologies</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Cutting-edge solutions that are transforming agriculture and increasing yields sustainably
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div 
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-green-100/50"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 text-green-800 rounded-2xl mb-6 transition-colors duration-300"
                  >
                    <tech.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced with advanced hover effects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Values</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide our mission to transform agriculture and empower farmers
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const [ref, inView] = useInView({ triggerOnce: true });
              return (
                <motion.div 
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100/50">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 text-green-800 rounded-2xl mb-6 transition-colors duration-300"
                    >
                      <value.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced with parallax background and animations */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-800 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-2xl mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-green-100 leading-relaxed">
                To empower farmers worldwide with innovative, sustainable, and profitable 
                smart farming solutions that increase productivity while preserving our 
                environment for future generations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-2xl mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-xl text-green-100 leading-relaxed">
                To be the global leader in smart farming technology, making advanced 
                agricultural solutions accessible to every farmer and contributing to 
                food security worldwide.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Join Thousands of Successful Farmers</h3>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-700 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Transformation Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

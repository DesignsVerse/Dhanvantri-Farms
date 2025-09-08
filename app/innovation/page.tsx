"use client"
import { Lightbulb, Cpu, Leaf, Globe, Award, Droplets, Users } from 'lucide-react';
import { motion } from 'framer-motion'; // Added Framer Motion for premium animations
import { useInView } from 'react-intersection-observer'; // For scroll-triggered animations

// Enhanced with premium styling: better gradients, shadows, animations, and responsive design

export default function InnovationPage() {
  const innovations = [
    {
      icon: Cpu,
      title: 'IoT-Enabled Smart Farming',
      description: 'Advanced sensor networks and AI-driven analytics for precision agriculture',
      details: [
        'Real-time environmental monitoring',
        'Predictive analytics for crop health',
        'Automated decision-making systems',
        'Mobile app integration for remote control'
      ]
    },
    {
      icon: Droplets,
      title: 'Water-Smart Technologies',
      description: 'Revolutionary water conservation and management systems',
      details: [
        'Precision irrigation with soil moisture sensors',
        'Rainwater harvesting integration',
        'Nutrient solution recycling systems',
        'Weather-based irrigation scheduling'
      ]
    },
    {
      icon: Leaf,
      title: 'Sustainable Growing Systems',
      description: 'Eco-friendly solutions for carbon-neutral farming',
      details: [
        'Solar-powered automation systems',
        'Organic waste composting integration',
        'Biodegradable growing media',
        'Carbon footprint reduction technologies'
      ]
    },
    {
      icon: Globe,
      title: 'Climate-Adaptive Solutions',
      description: 'Resilient farming systems for changing climate conditions',
      details: [
        'Multi-climate polyhouse designs',
        'Extreme weather protection systems',
        'Adaptive ventilation technologies',
        'Energy-efficient climate control'
      ]
    }
  ];

  const researchAreas = [
    {
      title: 'Artificial Intelligence in Agriculture',
      description: 'Developing AI algorithms for crop prediction, disease detection, and yield optimization',
      progress: 85
    },
    {
      title: 'Vertical Farming Technologies',
      description: 'Advanced multi-tier growing systems for urban agriculture and space optimization',
      progress: 78
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Solar and wind energy solutions for sustainable farm operations',
      progress: 92
    },
    {
      title: 'Biotechnology Applications',
      description: 'Plant breeding, tissue culture, and genetic optimization for better yields',
      progress: 70
    }
  ];

  const partnerships = [
    {
      name: 'Agricultural Universities',
      description: 'Collaborative research with leading agricultural institutions',
      count: '15+'
    },
    {
      name: 'Technology Partners',
      description: 'Global partnerships with tech companies for innovation',
      count: '25+'
    },
    {
      name: 'Research Projects',
      description: 'Ongoing research and development initiatives',
      count: '50+'
    },
    {
      name: 'Patents Filed',
      description: 'Intellectual property in agricultural technology',
      count: '12+'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'AI-Powered Crop Monitoring',
      description: 'Launch of advanced AI systems for real-time crop health monitoring and predictive analytics'
    },
    {
      year: '2023',
      title: 'Solar Integration Systems',
      description: 'Development of fully solar-powered polyhouse automation systems'
    },
    {
      year: '2022',
      title: 'Vertical Farming Solutions',
      description: 'Introduction of space-efficient vertical hydroponic systems for urban farming'
    },
    {
      year: '2021',
      title: 'IoT Platform Launch',
      description: 'Comprehensive IoT platform for remote farm monitoring and control'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"> {/* Light background for premium feel */}
      {/* Hero Section - Enhanced with parallax-like animation */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/path/to/hero-bg.jpg')] bg-cover bg-center opacity-20" // Add a subtle background image for premium look (replace with actual path)
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">Innovation</span> & Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto"
          >
            Pioneering the future of agriculture through cutting-edge research, sustainable technologies, and innovative farming solutions.
          </motion.p>
        </div>
      </section>

      {/* Innovation Areas - Added hover animations and premium shadows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Innovation Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading breakthrough technologies that are shaping the future of farming
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {innovations.map((innovation, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-green-100 hover:border-green-300"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full flex-shrink-0"
                    >
                      <innovation.icon className="w-8 h-8" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{innovation.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{innovation.description}</p>
                      <ul className="space-y-3">
                        {innovation.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"
                            />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Progress - Added smooth progress bar animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Research Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ongoing research initiatives driving agricultural innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const [ref, inView] = useInView({ triggerOnce: true });
              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-green-700">{area.progress}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${area.progress}%` } : {}}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-green-500 to-green-700 h-3"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnerships - Added scale hover effects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading institutions and organizations worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-green-700 mb-2">{partnership.count}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partnership.name}</h3>
                <p className="text-gray-600 text-sm">{partnership.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline - Enhanced with smoother animations and alternating layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovation <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our journey of agricultural innovation
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-full md:w-1 h-full md:h-auto bg-green-300 md:bg-green-300" /> {/* Vertical line for desktop, horizontal for mobile */}
            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => {
                const [ref, inView] = useInView({ triggerOnce: true });
                return (
                  <motion.div
                    ref={ref}
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-8`}
                  >
                    <div className="flex-1 px-4 md:px-8 w-full md:w-auto">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-green-700 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision - Added subtle animations and premium icons */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Vision for the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-green-100 mb-8 max-w-4xl mx-auto"
            >
              We envision a world where technology and nature work in harmony to create sustainable, efficient, and profitable farming systems that can feed the growing global population while preserving our planet.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Lightbulb, title: 'Innovation', desc: 'Continuous research and development' },
                { icon: Globe, title: 'Sustainability', desc: 'Environmentally responsible solutions' },
                { icon: Users, title: 'Collaboration', desc: 'Global partnerships for impact' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <item.icon className="w-16 h-16 mx-auto mb-4 text-green-200" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-green-100">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

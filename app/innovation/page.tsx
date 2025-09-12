'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Droplets, Leaf, Globe, ChevronRight } from 'lucide-react';

export default function InnovationPage() {
  const [playVideo, setPlayVideo] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#8bc34a] to-[#689f38] text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Innovation & Research
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl max-w-4xl mx-auto"
        >
          Pioneering the future of agriculture through cutting-edge research and sustainable technologies.
        </motion.p>
      </section>

      {/* Innovation Areas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Innovation Areas</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {innovations.map((innovation, index) => {
              const [ref, inView] = useInView({ triggerOnce: true });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <innovation.icon className="w-12 h-12 text-[#8bc34a] mr-4" />
                    <h3 className="text-2xl font-bold">{innovation.title}</h3>
                  </div>
                  <p className="mb-6 text-gray-700">{innovation.description}</p>
                  <ul className="space-y-2">
                    {innovation.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <ChevronRight className="w-5 h-5 text-[#8bc34a] mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Progress */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Current Research Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {researchAreas.map((area, index) => {
              const [ref, inView] = useInView({ triggerOnce: true });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="mb-6 text-gray-700">{area.description}</p>
                  <div className="bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${area.progress}%` } : {}}
                      transition={{ duration: 1.5 }}
                      className="bg-[#8bc34a] h-3 rounded-full"
                    />
                  </div>
                  <p className="text-right mt-2 font-bold">{area.progress}% Complete</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Research Partnerships</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-green-50 p-6 rounded-3xl text-center shadow-lg"
              >
                <p className="text-4xl font-bold text-[#8bc34a] mb-2">{partnership.count}</p>
                <h3 className="text-xl font-bold mb-2">{partnership.name}</h3>
                <p className="text-gray-700">{partnership.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Innovation Timeline</h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-3xl shadow-lg"
              >
                <p className="text-2xl font-bold text-[#8bc34a] mb-2">{milestone.year}</p>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-700">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-gradient-to-br from-[#8bc34a] to-[#689f38] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
        <p className="text-xl max-w-4xl mx-auto mb-12">We envision a world where technology and nature work in harmony to create sustainable farming systems.</p>
        <button className="px-8 py-4 bg-white text-[#8bc34a] rounded-full font-bold">Join Us</button>
      </section>
    </div>
  );
}

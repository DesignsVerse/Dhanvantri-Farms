'use client';

import { Users, Award, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BusinessPartners = () => {
  const partners = [
    { name: 'Bluelab', logo: '/api/placeholder/120/60' },
    { name: 'Autogrow', logo: '/api/placeholder/120/60' },
    { name: 'Priva', logo: '/api/placeholder/120/60' },
    { name: 'Netafim', logo: '/api/placeholder/120/60' },
    { name: 'Rivulis', logo: '/api/placeholder/120/60' },
    { name: 'Irritec', logo: '/api/placeholder/120/60' },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ years of combined experience in agriculture technology'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'International standards with premium global partnerships'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '300% average increase in crop yield for our clients'
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: 'Comprehensive warranty and support for all installations'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Partners Section - Enhanced with animations */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Global Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We partner with world-class technology providers to deliver the best solutions
          </motion.p>
        </div>

        {/* Partner Logos - Added hover scale and staggered animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {partners.map((partner, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <motion.div 
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center text-sm text-gray-600 font-medium">
                  {partner.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits - Enhanced with icon animations and card hovers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <motion.div 
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200/50"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4"
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;

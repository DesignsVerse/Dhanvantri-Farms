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
    <section className="py-24 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Partners Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Associates</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We partner with world-class technology providers to deliver the best solutions
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee for Partners */}
        <div className="overflow-hidden mb-20">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, -partners.length * 220] }} // Adjusted for wider spacing
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 min-w-[220px] border border-green-100 hover:border-[#8bc34a]/50"
              >
                <div className="w-36 h-18 bg-gradient-to-r from-[#8bc34a]/10 to-[#689f38]/10 rounded-lg flex items-center justify-center text-base font-semibold text-gray-800">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => {
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
                  <benefit.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;

'use client';

import { Users, Award, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const BusinessPartners = () => {
  const partners = [
    { name: 'Bluelab', logo: '/partners/bluelab.png' },
    { name: 'Autogrow', logo: '/partners/autogrow.png' },
    { name: 'Priva', logo: '/partners/priva.png' },
    { name: 'Netafim', logo: '/partners/netafim.png' },
    { name: 'Rivulis', logo: '/partners/rivulis.png' },
    { name: 'Irritec', logo: '/partners/irritec.png' },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ years of combined experience in agriculture technology',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'International standards with premium global partnerships',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '300% average increase in crop yield for our clients',
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: 'Comprehensive warranty and support for all installations',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">
              Partners
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Trusted collaborations with world-class technology providers for advanced farming solutions
          </p>
        </motion.div>

        {/* Partners Marquee */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center min-w-[140px] sm:min-w-[160px] bg-white rounded-2xl shadow-md border border-green-100 hover:border-[#8bc34a]/50 hover:shadow-lg transition-all duration-300 px-4 py-2"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={120}
                  height={60}
                  className="object-contain h-12 sm:h-16"
                  priority={index === 0}
                  quality={85}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {benefits.map((benefit, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-3xl shadow-md border border-green-100 hover:shadow-lg hover:border-[#8bc34a]/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white rounded-full mb-4 shadow-md"
                >
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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

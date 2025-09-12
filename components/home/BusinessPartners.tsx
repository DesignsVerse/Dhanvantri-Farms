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
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-green-950 mb-3 tracking-tight font-sans">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              Associates
            </span>
          </h2>
          <div className="h-1 w-32 bg-lime-400 mx-auto mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            World-class technology providers for top farming solutions
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee for Partners */}
        <div className="overflow-hidden mb-12">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -partners.length * 160] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center min-w-[160px] bg-green-600/10 rounded-lg border border-lime-400/20 hover:bg-white/10 hover:backdrop-blur-md hover:border-lime-400/50 transition-all duration-300"
                style={{ willChange: 'transform' }}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={100}
                  height={50}
                  sizes="(max-width: 768px) 100vw, 160px"
                  className="object-contain h-12 sm:h-14"
                  priority={index === 0}
                  loading={index === 0 ? undefined : 'lazy'}
                  quality={75}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center"
                style={{ willChange: 'opacity, transform' }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-lime-400 to-green-700 text-white rounded-full mb-3"
                >
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-950 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="bg-gradient-to-br from-white to-green-50 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 md:px-12 items-center">
        {/* Enhanced Image with parallax and overlay */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl"
          style={{ y: parallax }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <img
            src="/hero/1.jpg"
            alt="Farmer in greenhouse"
            className="object-cover w-full h-[480px] lg:h-[560px] transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 z-20 text-white">
            <h3 className="text-3xl font-bold drop-shadow-lg">Transforming Farms</h3>
            <p className="text-lg drop-shadow-md">Innovative Solutions for Modern Agriculture</p>
          </div>
        </motion.div>
        
        {/* Enhanced Text Content with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:px-8"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            <span className="text-[#8bc34a] drop-shadow-md">Success</span> Stories
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-48 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mb-8 rounded-full shadow-md"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed font-medium"
          >
            Discover our success stories in protected cultivation, showcasing thriving farms, increased yields, and sustainable agriculture practices. Our innovative solutions empower farmers to create a brighter, more prosperous future. With a focus on sustainability and high productivity, we transform agricultural practices across India.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-10"
          >
            <span className="text-3xl lg:text-4xl font-bold text-[#8bc34a]">Cultivating success</span>
            <span className="text-3xl lg:text-4xl font-light text-gray-900"> for a better tomorrow.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link href="/success-stories" className="inline-block">
              <button className="bg-[#8bc34a] text-white text-xl px-10 py-5 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:bg-[#689f38] transition-all duration-300 transform hover:scale-105">
                READ SUCCESS STORIES
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

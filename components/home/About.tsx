'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative flex items-center justify-center overflow-hidden rounded-2xl shadow-md hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300"
          style={{ y: parallax, willChange: 'opacity, transform' }}
        >
          <Image
            src="/hero/1.jpg"
            alt="Farmer in greenhouse"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover h-[280px] sm:h-[360px] lg:h-[400px] transition-transform duration-400 hover:scale-105 brightness-90"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 z-20 text-white">
            <h3 className="text-lg sm:text-xl font-semibold drop-shadow-md">Transforming Farms</h3>
            <p className="text-xs sm:text-sm drop-shadow-sm">Innovative Agriculture Solutions</p>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-5xl font-extrabold text-green-950 mb-3 tracking-tight font-sans"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              Success
            </span>{' '}
            Stories
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-lime-400 mb-3 rounded-full shadow-sm"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed font-semibold"
          >
            Explore our success stories in protected cultivation, showcasing thriving farms, increased yields, and sustainable practices. Our solutions empower farmers for a prosperous future.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed font-semibold"
          >
            Explore our success stories in protected cultivation, showcasing thriving farms, increased yields, and sustainable practices. Our solutions empower farmers for a prosperous future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4"
          >
            <span className="text-lg sm:text-xl font-semibold text-lime-400">
              Cultivating success
            </span>
            <span className="text-lg sm:text-xl font-light text-green-950">
              {' '}
              for a better tomorrow.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/success-stories" className="inline-block">
              <button className="bg-gradient-to-r from-lime-400 to-green-700 text-white text-sm sm:text-base px-6 py-2.5 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                Read Success Stories
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
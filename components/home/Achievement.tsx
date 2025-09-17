'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const statsData: StatItem[] = [
  { label: 'Projects', value: 350, suffix: '+' },
  { label: 'Cities', value: 300, suffix: '+' },
  { label: 'Associates', value: 500, suffix: '+' },
  { label: 'Views', value: 110, suffix: 'K+' }
];

const countUpDuration = 2.5; // seconds

interface AchievementCardProps {
  label: string;
  target: number;
  suffix: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ label, target, suffix }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      let start = 0;
      const increment = target / (countUpDuration * 60); // Frames assuming 60fps
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);
      return () => clearInterval(interval);
    }
  }, [inView, target, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
      className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-transparent bg-clip-text">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-3 text-lg lg:text-xl font-semibold text-gray-800">
        {label}
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">
              Achievements
            </span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Proud milestones that showcase our dedication and growth in the farming industry
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map(({ label, value, suffix }, index) => (
            <AchievementCard key={index} label={label} target={value} suffix={suffix} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

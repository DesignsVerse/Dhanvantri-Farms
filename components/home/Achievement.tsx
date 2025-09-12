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
  { label: 'Views', value: 110, suffix: '+' }
];

const countUpDuration = 2.5; // seconds

interface AchievementCardProps {
  label: string;
  target: number;
  suffix: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ label, target, suffix }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: countUpDuration } }
      }}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg max-w-xs mx-auto"
    >
      <div className="text-5xl font-extrabold text-green-600">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-lg font-semibold text-gray-700">
        {label}
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-green-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Proud milestones that showcase our dedication and growth in the farming industry
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map(({ label, value, suffix }, index) => (
            <AchievementCard
              key={index}
              label={label}
              target={value}
              suffix={suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

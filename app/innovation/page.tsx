'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Cpu,
  Droplets,
  Leaf,
  Globe,
  ChevronRight,
  ArrowRight,
  Play,
  X,
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

type Innovation = {
  icon: any;
  title: string;
  description: string;
  details: string[];
  image: string;
};

type Research = {
  title: string;
  description: string;
  progress: number;
  image: string;
};

type Partnership = {
  name: string;
  description: string;
  count: string;
};

type Milestone = {
  year: string;
  title: string;
  description: string;
  image: string;
};

export default function InnovationPage() {
  const [playVideo, setPlayVideo] = useState(false);

  const innovations = useMemo<Innovation[]>(
    () => [
      {
        icon: Cpu,
        title: 'IoT-Enabled Smart Farming',
        description: 'Advanced sensor networks and AI-driven analytics for precision agriculture',
        details: [
          'Real-time environmental monitoring',
          'Predictive analytics for crop health',
          'Automated decision-making systems',
          'Mobile app integration for remote control',
        ],
        image: '/images/innovation/iot.jpg',
      },
      {
        icon: Droplets,
        title: 'Water-Smart Technologies',
        description: 'Revolutionary water conservation and management systems',
        details: [
          'Precision irrigation with soil moisture sensors',
          'Rainwater harvesting integration',
          'Nutrient solution recycling systems',
          'Weather-based irrigation scheduling',
        ],
        image: '/images/innovation/water.jpg',
      },
      {
        icon: Leaf,
        title: 'Sustainable Growing Systems',
        description: 'Eco-friendly solutions for carbon-neutral farming',
        details: [
          'Solar-powered automation systems',
          'Organic waste composting integration',
          'Biodegradable growing media',
          'Carbon footprint reduction technologies',
        ],
        image: '/images/innovation/sustain.jpg',
      },
      {
        icon: Globe,
        title: 'Climate-Adaptive Solutions',
        description: 'Resilient farming systems for changing climate conditions',
        details: [
          'Multi-climate polyhouse designs',
          'Extreme weather protection systems',
          'Adaptive ventilation technologies',
          'Energy-efficient climate control',
        ],
        image: '/images/innovation/climate.jpg',
      },
    ],
    []
  );

  const researchAreas = useMemo<Research[]>(
    () => [
      {
        title: 'Artificial Intelligence in Agriculture',
        description: 'Developing AI algorithms for crop prediction, disease detection, and yield optimization',
        progress: 85,
        image: '/images/innovation/ai.jpg',
      },
      {
        title: 'Vertical Farming Technologies',
        description: 'Advanced multi-tier growing systems for urban agriculture and space optimization',
        progress: 78,
        image: '/images/innovation/vertical.jpg',
      },
      {
        title: 'Renewable Energy Integration',
        description: 'Solar and wind energy solutions for sustainable farm operations',
        progress: 92,
        image: '/images/innovation/renewable.jpg',
      },
      {
        title: 'Biotechnology Applications',
        description: 'Plant breeding, tissue culture, and genetic optimization for better yields',
        progress: 70,
        image: '/images/innovation/biotech.jpg',
      },
    ],
    []
  );

  const partnerships = [
    { name: 'Agricultural Universities', description: 'Collaborative research with leading agricultural institutions', count: '15+' },
    { name: 'Technology Partners', description: 'Global partnerships with tech companies for innovation', count: '25+' },
    { name: 'Research Projects', description: 'Ongoing research and development initiatives', count: '50+' },
    { name: 'Patents Filed', description: 'Intellectual property in agricultural technology', count: '12+' },
  ];

  const milestones = useMemo<Milestone[]>(
    () => [
      {
        year: '2024',
        title: 'AI-Powered Crop Monitoring',
        description: 'Launch of advanced AI systems for real-time crop health monitoring and predictive analytics',
        image: '/images/innovation/timeline-2024.jpg',
      },
      {
        year: '2023',
        title: 'Solar Integration Systems',
        description: 'Development of fully solar-powered polyhouse automation systems',
        image: '/images/innovation/timeline-2023.jpg',
      },
      {
        year: '2022',
        title: 'Vertical Farming Solutions',
        description: 'Introduction of space-efficient vertical hydroponic systems for urban farming',
        image: '/images/innovation/timeline-2022.jpg',
      },
      {
        year: '2021',
        title: 'IoT Platform Launch',
        description: 'Comprehensive IoT platform for remote farm monitoring and control',
        image: '/images/innovation/timeline-2021.jpg',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/innovation/hero.jpg"
            alt="Innovation hero"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8bc34a] via-[#7fb84a] to-[#689f38] mix-blend-multiply" />
        </div>

        <div className="relative z-10 py-28 md:py-36 text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Innovation & Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto"
          >
            Pioneering the future of agriculture through cutting-edge research and sustainable technologies.
          </motion.p>

          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => setPlayVideo(true)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-green-900 bg-white shadow-lg hover:shadow-xl transition"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Decorative wave */}
        <svg className="absolute -bottom-px left-0 w-full text-green-50" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
          <path
            fill="currentColor"
            d="M0,64L48,64C96,64,192,64,288,64C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,26.7C1248,32,1344,32,1392,32L1440,32L1440,90L1392,90C1344,90,1248,90,1152,90C1056,90,960,90,864,90C768,90,672,90,576,90C480,90,384,90,288,90C192,90,96,90,48,90L0,90Z"
          />
        </svg>
      </section>

      {/* Video Modal */}
      {playVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl">
            <button
              onClick={() => setPlayVideo(false)}
              className="absolute top-3 right-3 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/31_1BOYBQpA?autoplay=1&mute=1"
                title="Innovation demo"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Innovation Areas */}
      <section id="areas" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Innovation Areas</h2>
            <p className="text-gray-600 mt-3">
              Image-led cards with concise details to showcase where engineering meets agronomy.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <InnovationCard key={innovation.title} innovation={innovation} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Progress */}
      <section id="research" className="py-20 md:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Current Research Projects</h2>
            <p className="text-gray-600 mt-3">
              Active initiatives across AI, controlled environments, and renewable integrations.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <ResearchCard key={area.title} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partners" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Research Partnerships</h2>
            <p className="text-gray-600 mt-3">
              Collaboration fuels breakthrough outcomes across labs and fields.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships.map((p, idx) => (
              <PartnershipCard key={p.name} p={p} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section id="timeline" className="py-20 md:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Innovation Timeline</h2>
            <p className="text-gray-600 mt-3">
              Milestones that shaped our platform — alternating layout with visual context.
            </p>
          </div>

          <div className="mt-10 space-y-10 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-200 via-green-300 to-green-200" />
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} m={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section id="vision" className="py-20 md:py-24 bg-gradient-to-br from-[#8bc34a] to-[#689f38] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Vision for the Future</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We envision a world where technology and nature work in harmony to create resilient, productive, and sustainable farming systems.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-green-900 bg-white shadow-lg hover:shadow-xl transition"
            >
              Join Us <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Child components to keep hooks out of loops and apply in-view animations */

function InnovationCard({ innovation, index }: { innovation: Innovation; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const Icon = innovation.icon;
  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay: index * 0.08 }}
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >
      <div className="relative h-56">
        <Image
          src={innovation.image}
          alt={innovation.title}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
      </div>
      <div className="absolute bottom-0 inset-x-0 p-6 text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm mb-2">
          <Icon className="h-4 w-4" />
          <span>Innovation</span>
        </div>
        <h3 className="text-xl font-bold">{innovation.title}</h3>
        <p className="text-white/90 text-sm mt-1">{innovation.description}</p>
        <ul className="mt-3 grid gap-1 text-sm text-white/90">
          {innovation.details.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-lime-300 mt-0.5" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ResearchCard({ area, index }: { area: Research; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm"
    >
      <div className="relative h-48">
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
        <p className="text-gray-700 mb-5">{area.description}</p>
        <div className="bg-gray-200 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${area.progress}%` } : {}}
            transition={{ duration: 1.2, delay: index * 0.05 }}
            className="bg-[#8bc34a] h-3 rounded-full"
          />
        </div>
        <p className="text-right mt-2 font-bold">{area.progress}% Complete</p>
      </div>
    </motion.article>
  );
}

function PartnershipCard({ p, idx }: { p: Partnership; idx: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      className="bg-green-50 p-6 rounded-3xl text-center shadow-lg border border-green-100"
    >
      <p className="text-4xl font-extrabold text-[#8bc34a] mb-2">{p.count}</p>
      <h3 className="text-lg font-bold mb-1">{p.name}</h3>
      <p className="text-gray-700 text-sm">{p.description}</p>
    </motion.div>
  );
}

function TimelineItem({ m, index }: { m: Milestone; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const left = index % 2 === 0;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: left ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={[
        'grid md:grid-cols-2 gap-6 items-center',
        left ? '' : 'md:[&>*:first-child]:order-2',
      ].join(' ')}
    >
      <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
        <Image src={m.image} alt={m.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 bg-white/15 border border-white/25 text-white backdrop-blur px-3 py-1 rounded-full text-sm">
          {m.year}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">{m.title}</h3>
        <p className="text-gray-700 mt-2">{m.description}</p>
      </div>
    </motion.div>
  );
}

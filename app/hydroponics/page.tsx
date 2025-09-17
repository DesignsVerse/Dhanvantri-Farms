'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Droplets,
  Leaf,
  Factory,
  Timer,
  Layers,
  Sprout,
  ThermometerSun,
  CloudRain,
  ShieldCheck,
  LineChart,
  ArrowRight,
  ChevronRight,
  Play,
  Pause,
  Plus,
  Minus,
  Users,
  Globe,
  BarChart3,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from 'lucide-react';

// Motion variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

type TypeItem = {
  key: string;
  title: string;
  image: string;
  paragraphs: { title?: string; text: string }[];
};

export default function HydroponicsPage() {
  const videoId = '31_1BOYBQpA';
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      const iframe = videoRef.current;
      const iframeSrc = iframe.src;
      if (isPlaying) {
        iframe.src = iframeSrc.replace('&autoplay=1', '');
      } else {
        iframe.src = iframeSrc.includes('autoplay=1') 
          ? iframeSrc 
          : iframeSrc + '&autoplay=1';
      }
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ email, message });
    setIsSubmitted(true);
    setEmail('');
    setMessage('');
    // Reset form status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const types = useMemo<TypeItem[]>(
    () => [
      {
        key: 'dwc',
        title: 'Deep Water Culture Systems',
        image: '/images/hydroponics/dwc.jpg',
        paragraphs: [
          {
            text:
              'Deep Water Culture (DWC) suspends plants above an aerated nutrient reservoir so roots stay submerged with constant access to water, nutrients, and oxygen.',
          },
          { title: 'Rapid Growth', text: 'Continuous availability of inputs often accelerates plant development and vigor.' },
          { title: 'Simplicity', text: 'Setup remains approachable and maintainable for beginners and pilots.' },
          { title: 'Cost-Effectiveness', text: 'Minimal equipment lowers both upfront and running costs in many cases.' },
        ],
      },
      {
        key: 'nft',
        title: 'Nutrient Film Technique (NFT)',
        image: '/images/hydroponics/nft.jpg',
        paragraphs: [
          {
            text:
              'NFT channels carry a thin, recirculating stream of nutrient solution over root tips, maximizing uptake while conserving inputs.',
          },
          { title: 'Efficient Nutrient Use', text: 'Continuous flow reduces waste and keeps availability consistent.' },
          { title: 'Scalability', text: 'Modular channels make expansion straightforward for commercial layouts.' },
          { title: 'Oxygenation', text: 'Shallow films and exposure encourage higher dissolved oxygen for healthier roots.' },
        ],
      },
      {
        key: 'dutch',
        title: 'Dutch Bucket Grow System',
        image: '/images/hydroponics/dutch-bucket.jpg',
        paragraphs: [
          {
            text:
              'Dutch (Bato) buckets connect to shared feed and drain lines, suiting vining or heavy-feeding crops like tomatoes and peppers.',
          },
          { title: 'Scalability', text: 'Add buckets to increase capacity without redesigning the entire system.' },
          { title: 'Efficiency', text: 'Recirculation optimizes water and nutrient use across multiple containers.' },
          { title: 'Versatility', text: 'Supports varied species with flexible media and spacing approaches.' },
        ],
      },
      {
        key: 'aero',
        title: 'Aeroponic Systems',
        image: '/images/hydroponics/aeroponics.jpg',
        paragraphs: [
          {
            text:
              'Aeroponics suspends roots in air and delivers a fine nutrient mist, enabling high oxygen availability and efficient resource use.',
          },
          { title: 'Water Efficiency', text: 'Mist delivery significantly cuts water consumption versus many alternatives.' },
          { title: 'Optimal Nutrient Absorption', text: 'Even droplet distribution enhances contact and uptake.' },
          { title: 'Space Saving', text: 'Vertical towers or modules maximize output per area footprint.' },
        ],
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState<string>(types[0].key);
  const active = types.find((t) => t.key === activeKey) ?? types[0];

  // Stats data
  const stats = [
    { value: '70%', label: 'Water Savings', icon: Droplets },
    { value: '3x', label: 'Faster Growth', icon: BarChart3 },
    { value: '90%', label: 'Success Rate', icon: CheckCircle },
    { value: '50+', label: 'Happy Clients', icon: Users },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Floating navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-3"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-green-700">Agriplast</span>
            <span className="text-gray-600 ml-1">Hydroponics</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#intro" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Home</a>
            <a href="#types" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Systems</a>
            <a href="#advantages" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Benefits</a>
            <a href="#stats" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Results</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">FAQ</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-green-700 transition">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-green-700 text-white rounded-full text-sm font-medium hover:bg-green-800 transition"
          >
            Get Started
          </a>
        </div>
      </motion.nav>

      {/* Intro */}
      <section id="intro" className="relative overflow-hidden bg-green-900 text-white pt-20">
        <div className="absolute inset-0">
          <Image
            src="/hero/2.jpg"
            alt="Hydroponics background"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-green-100 text-xs md:text-sm mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
                Agriplast Hydroponics
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                What is <span className="text-lime-300">Agriplast Hydroponics</span>?
              </h1>
              <div className="w-24 h-1.5 bg-lime-400 rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Hydroponics grows plants in nutrient solution or inert substrates like rockwool and vermiculite, precisely supplying what the crop needs when it needs it. 
              </p>
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl mt-3">
                Modern systems tailor recipes to species and stage, enabling consistent quality and faster cycles under controlled environments. 
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#types"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-lime-300 to-lime-400 shadow-[0_12px_24px_-8px_rgba(163,230,53,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(163,230,53,0.55)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Types <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#advantages"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
                >
                  See Advantages <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 md:order-2 relative">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl">
                <div className="aspect-video relative">
                  <iframe
                    ref={videoRef}
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Hydroponics overview"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button 
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center w-full h-full group"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {!isPlaying && (
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition">
                        <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-current" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center text-green-100 text-sm">
                Watch our introduction to hydroponic farming
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats section */}
      <section id="stats" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">
              Why <span className="text-green-700">Hydroponics</span> Works
            </motion.h2>
            <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
              Precise inputs, clean substrates, and controlled climates unlock consistency and efficiency across crop cycles. 
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Third-Gen NFT Channels</h3>
                <p className="text-gray-600">
                  Optimized film depth reduces water usage while maintaining uniform delivery to roots. 
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Customer Education</h3>
                <p className="text-gray-600">
                  Practical training builds trust and operational confidence for new adopters. 
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Lifetime Support</h3>
                <p className="text-gray-600">
                  Ongoing agronomy guidance sustains yields and safeguards system health. 
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types with tabs */}
      <section id="types" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">
            Types of <span className="text-green-700">Agriplast Hydroponics</span>
          </motion.h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {types.map((t) => {
              const active = t.key === activeKey;
              return (
                <motion.button
                  key={t.key}
                  onClick={() => setActiveKey(t.key)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={[
                    'px-4 py-2 rounded-full border text-sm md:text-base transition-all',
                    active
                      ? 'bg-green-700 text-white border-green-700 shadow-md'
                      : 'bg-white text-gray-800 border-gray-200 hover:border-green-300 hover:text-green-800',
                  ].join(' ')}
                  aria-pressed={active}
                >
                  {t.title}
                </motion.button>
              );
            })}
          </div>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
                className="grid lg:grid-cols-3 gap-8 items-start"
              >
                <div className="lg:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-800">{active.title}</h3>
                  <div className="mt-4 space-y-4">
                    {active.paragraphs.map((p, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                      >
                        {p.title ? <p className="font-semibold mb-0.5">{p.title}</p> : null}
                        <p className="text-gray-700">{p.text}</p>
                      </motion.div>
                    ))}
                  </div>
                  <button className="mt-6 px-5 py-2.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition">
                    Learn More About This System
                  </button>
                </div>
                <div className="lg:col-span-1">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
                    className="relative w-full overflow-hidden rounded-2xl shadow-md border border-gray-200"
                  >
                    <div className="relative h-60 sm:h-72 md:h-80">
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                        priority={active.key === 'dwc'}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-sm">System overview of {active.title}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Advantages grid */}
      <section id="advantages" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">
              Advantages of <span className="text-green-700">Hydroponics</span>
            </motion.h2>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Timer, title: 'Extended Season', text: 'Multiple crop cycles year-round under regulated light, temperature, and nutrition.' },
                { icon: LineChart, title: 'Improved Yield', text: 'Oxygenated solutions and tight control often accelerate growth and output.' },
                { icon: Layers, title: 'Higher Density', text: 'Proximity increases as root competition drops in solution-based culture.' },
                { icon: Droplets, title: 'Less Water Use', text: 'Recirculation can save 80–90% water compared to in-ground methods.' },
                { icon: Leaf, title: 'Grow Anywhere', text: 'Integrates into compact indoor or urban footprints with modular rigs.' },
                { icon: ShieldCheck, title: 'Fewer Pests', text: 'Controlled access environments reduce pest pressure and interventions.' },
                { icon: Sprout, title: 'Easier Harvest', text: 'Waist-height benches and channels enhance ergonomics and speed.' },
                { icon: CloudRain, title: 'Modular Design', text: 'Channelized layouts expand easily for commercial scaling.' },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition group"
                >
                  <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-3 group-hover:bg-green-700 group-hover:text-white transition">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-600">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why choose */}
      <section id="why-agriplast" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-md group">
                <Image
                  src="/images/hydroponics/why.jpg"
                  alt="Why choose Agriplast Hydroponics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">
                Why choose <span className="text-green-700">Agriplast Hydroponics</span>?
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-gray-600">
                With over a decade of experience in sustainable agriculture solutions, Agriplast brings expertise, innovation, and reliability to your hydroponic farming journey.
              </motion.p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'System & Consulting',
                    text:
                      'Turnkey, recirculating designs tailored to requirements with best-practice deployment and support.',
                  },
                  {
                    title: 'Slope Adjuster Table',
                    text:
                      'Uniform NFT slope enforces consistent flow distribution across channels and plants.',
                  },
                  {
                    title: 'Best Automation',
                    text:
                      'IoT monitoring and control for parameters with secure access via desktop and mobile.',
                  },
                  {
                    title: 'Ebb & Flow Nursery',
                    text:
                      'Uniform wetting per net pot improves early-stage rooting and stand establishment.',
                  },
                ].map((f, i) => (
                  <motion.div 
                    key={f.title} 
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="font-bold text-lg mb-1 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      {f.title}
                    </h3>
                    <p className="text-gray-600">{f.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
          >
            What Our <span className="text-green-700">Clients Say</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={scaleUp}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold">
                    {item}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">Client Name</div>
                    <div className="text-sm text-gray-500">Farm Owner</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Agriplast's hydroponic systems transformed our farming operation. We've doubled our yield while using 70% less water."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">
            Frequently Asked <span className="text-green-700">Questions</span>
          </motion.h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How much does a hydroponic system cost?',
                a: 'Costs vary based on system size, complexity, and automation level. Small home systems start around $200, while commercial setups can range from $10,000 to $50,000 or more. We offer customized quotes based on your specific needs.',
              },
              {
                q: 'What crops grow best in hydroponic systems?',
                a: 'Leafy greens like lettuce, kale, and herbs thrive in hydroponic systems. Fruiting plants like tomatoes, peppers, and cucumbers also perform well. We can help you select the best crops for your specific setup and market.',
              },
              {
                q: 'How much time does maintaining a hydroponic system require?',
                a: 'Basic maintenance takes 1-2 hours per week for small systems. Commercial systems with automation require less daily attention but benefit from weekly monitoring. We provide training and support to optimize your time investment.',
              },
              {
                q: 'Do I need special training to operate a hydroponic system?',
                a: 'While hydroponics has a learning curve, our systems are designed for ease of use. We provide comprehensive training and ongoing support to ensure your success. Many beginners become proficient within a few weeks.',
              },
              {
                q: 'How does hydroponics compare to traditional farming in terms of yield?',
                a: 'Hydroponic systems typically produce 3-10 times more yield per square foot compared to soil farming, with faster growth cycles and year-round production capabilities in controlled environments.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group border border-gray-200 rounded-xl bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg cursor-pointer"
                >
                  {item.q}
                  <span className={`transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 text-gray-600">
                    {item.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
  
      </main>
  )
}
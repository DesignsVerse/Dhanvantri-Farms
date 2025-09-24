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
        image: '/service/hydro/1.jpg',
        paragraphs: [
          {
            text:
              'Dhanvantri Farms’ Deep Water Culture (DWC) systems suspend plants above a nutrient-rich, oxygenated reservoir, ensuring roots have constant access to essential water, nutrients, and oxygen for optimal growth.',
          },
          { title: 'Accelerated Growth', text: 'Continuous nutrient availability promotes faster plant development and higher yields.' },
          { title: 'User-Friendly Design', text: 'Simple setup and maintenance make it ideal for beginners and commercial farmers alike.' },
          { title: 'Cost-Effective Solution', text: 'Minimal equipment reduces initial investment and operational costs.' },
        ],
      },
      {
        key: 'nft',
        title: 'Nutrient Film Technique (NFT)',
        image: '/service/hydro/2.jpg',
        paragraphs: [
          {
            text:
              'Dhanvantri Farms’ NFT systems deliver a thin, continuous stream of nutrient solution over plant roots, optimizing nutrient uptake while conserving resources.',
          },
          { title: 'Resource Efficiency', text: 'Recirculating flow minimizes water and nutrient waste.' },
          { title: 'Scalable Design', text: 'Modular channels allow easy expansion for large-scale farming.' },
          { title: 'Enhanced Root Health', text: 'Shallow nutrient films ensure high oxygen levels for healthier roots.' },
        ],
      },
      {
        key: 'dutch',
        title: 'Dutch Bucket Grow System',
        image: '/service/hydro/3.jpg',
        paragraphs: [
          {
            text:
              'Dhanvantri Farms’ Dutch Bucket systems are ideal for vining crops like tomatoes and cucumbers, with shared feed and drain lines for efficient nutrient delivery.',
          },
          { title: 'Flexible Scaling', text: 'Easily add buckets to expand capacity without system redesign.' },
          { title: 'Water Efficiency', text: 'Recirculation optimizes water and nutrient use across multiple plants.' },
          { title: 'Crop Versatility', text: 'Supports various crops with customizable media and spacing.' },
        ],
      },
      {
        key: 'aero',
        title: 'Aeroponic Systems',
        image: '/service/hydro/4.jpg',
        paragraphs: [
          {
            text:
              'Dhanvantri Farms’ Aeroponic systems mist nutrient solutions onto suspended roots, maximizing oxygen exposure and nutrient absorption.',
          },
          { title: 'Ultra-Low Water Use', text: 'Fine mist delivery cuts water consumption significantly.' },
          { title: 'Optimal Nutrient Uptake', text: 'Even mist distribution ensures efficient nutrient absorption.' },
          { title: 'Space Optimization', text: 'Vertical setups maximize yield in compact spaces.' },
        ],
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState<string>(types[0].key);
  const active = types.find((t) => t.key === activeKey) ?? types[0];

  // Stats data
  const stats = [
    { value: '80%', label: 'Water Savings', icon: Droplets },
    { value: '4x', label: 'Faster Growth', icon: BarChart3 },
    { value: '95%', label: 'Success Rate', icon: CheckCircle },
    { value: '100+', label: 'Happy Farmers', icon: Users },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Intro */}
      <section id="intro" className="relative overflow-hidden bg-green-900 text-white pt-20">
        <div className="absolute inset-0">
          <Image
            src="/service/hydro/herobg.jpg"
            alt="Dhanvantri Farms Hydroponics background"
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
                Dhanvantri Farms Hydroponics
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Discover <span className="text-lime-300">Dhanvantri Farms Hydroponics</span>
              </h1>
              <div className="w-24 h-1.5 bg-lime-400 rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Dhanvantri Farms brings cutting-edge hydroponic farming, growing plants in nutrient-rich solutions or substrates like rockwool, delivering precise nutrients for optimal growth.
              </p>
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl mt-3">
                Our advanced systems ensure year-round production, higher yields, and sustainable farming tailored to your needs.
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
      {/* Replace iframe with Next.js Image */}
      <Image
        src="/service/hydro/hero-2.jpg" // <-- Your image path
        alt="Dhanvantri Farms Hydroponics overview"
        fill
        className="object-cover"
      />

     
    </div>
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
              Why <span className="text-green-700">Dhanvantri Farms Hydroponics</span> Works
            </motion.h2>
            <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
              Dhanvantri Farms’ hydroponic systems deliver precise nutrients, controlled environments, and expert support for consistent, high-yield farming.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Advanced NFT Channels</h3>
                <p className="text-gray-600">
                  Dhanvantri Farms’ optimized channels reduce water usage while ensuring uniform nutrient delivery to roots.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Farmer Education</h3>
                <p className="text-gray-600">
                  Dhanvantri Farms provides hands-on training to empower farmers with confidence and expertise.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Lifetime Agronomy Support</h3>
                <p className="text-gray-600">
                  Expert guidance from Dhanvantri Farms ensures sustained yields and system reliability.
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
            Types of <span className="text-green-700">Dhanvantri Farms Hydroponics</span>
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
                    Learn More About Dhanvantri Farms Systems
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
                      <span className="text-white text-sm">Dhanvantri Farms’ {active.title} overview</span>
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
              Advantages of <span className="text-green-700">Dhanvantri Farms Hydroponics</span>
            </motion.h2>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Timer, title: 'Year-Round Farming', text: 'Dhanvantri Farms enables multiple crop cycles with controlled light, temperature, and nutrients.' },
                { icon: LineChart, title: 'Higher Yields', text: 'Oxygen-rich solutions and precise controls boost growth and productivity.' },
                { icon: Layers, title: 'Dense Planting', text: 'Eliminate root competition for closer plant spacing and higher output.' },
                { icon: Droplets, title: 'Water Efficiency', text: 'Save 80–90% water compared to traditional farming with recirculation.' },
                { icon: Leaf, title: 'Flexible Locations', text: 'Grow in urban or compact spaces with Dhanvantri Farms’ modular systems.' },
                { icon: ShieldCheck, title: 'Reduced Pests', text: 'Controlled environments minimize pest issues and pesticide use.' },
                { icon: Sprout, title: 'Ergonomic Harvest', text: 'Waist-height setups simplify and speed up harvesting.' },
                { icon: CloudRain, title: 'Scalable Systems', text: 'Easily expand with Dhanvantri Farms’ modular designs for commercial growth.' },
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
      <section id="why-dhanvantri" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-md group">
                <Image
                  src="/service/hydro/5.jpg"
                  alt="Why choose Dhanvantri Farms Hydroponics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">
                Why Choose <span className="text-green-700">Dhanvantri Farms Hydroponics</span>?
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-gray-600">
                Dhanvantri Farms pioneers sustainable hydroponic solutions, blending innovation, expertise, and farmer-focused support for unmatched results.
              </motion.p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Customized Solutions',
                    text:
                      'Dhanvantri Farms designs tailored, recirculating systems aligned with your specific crop and environmental needs.',
                  },
                  {
                    title: 'Precision Slope Channels',
                    text:
                      'Uniform NFT slopes ensure consistent nutrient flow for healthier plants and higher yields.',
                  },
                  {
                    title: 'Smart Automation',
                    text:
                      'IoT-enabled systems allow remote monitoring of water, nutrients, and climate via smartphone or computer.',
                  },
                  {
                    title: 'Advanced Nursery Systems',
                    text:
                      'Ebb and flow technology ensures uniform nutrient delivery for strong seedling development.',
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
            What Our <span className="text-green-700">Farmers Say</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ramesh Patel',
                title: 'Organic Farmer',
                text: 'Dhanvantri Farms’ hydroponic systems revolutionized our farm. We’ve tripled our yields and cut water usage by 80%!',
              },
              {
                name: 'Anita Sharma',
                title: 'Urban Farmer',
                text: 'The training and support from Dhanvantri Farms made hydroponics easy. Our urban farm now grows fresh greens year-round.',
              },
              {
                name: 'Vikram Singh',
                title: 'Commercial Grower',
                text: 'Dhanvantri Farms’ automation systems saved us time and boosted crop quality. Their agronomy support is unmatched.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={scaleUp}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold">
                    {i + 1}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                  </div>
                </div>
                <p className="text-gray-600">{item.text}</p>
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
                q: 'How much does a Dhanvantri Farms hydroponic system cost?',
                a: 'Costs depend on system size and automation. Small setups start at $250, while commercial systems range from $12,000 to $60,000. Dhanvantri Farms offers tailored quotes.',
              },
              {
                q: 'Which crops are best for Dhanvantri Farms hydroponics?',
                a: 'Leafy greens, herbs, tomatoes, and cucumbers thrive in our systems. Dhanvantri Farms helps you choose crops suited to your market and setup.',
              },
              {
                q: 'How much time is needed to maintain a hydroponic system?',
                a: 'Small systems require 1-2 hours weekly. Dhanvantri Farms’ automated commercial setups need minimal daily effort with weekly checks, supported by our training.',
              },
              {
                q: 'Do I need training to use Dhanvantri Farms’ systems?',
                a: 'Our user-friendly systems come with comprehensive training. Dhanvantri Farms’ ongoing support ensures beginners master hydroponics quickly.',
              },
              {
                q: 'How do Dhanvantri Farms’ hydroponics compare to soil farming?',
                a: 'Dhanvantri Farms’ systems yield 3-10 times more per square foot, with faster cycles and year-round production in controlled environments.',
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
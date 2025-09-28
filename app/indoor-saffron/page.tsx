'use client';

import { useEffect, useMemo, useState } from 'react';
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
  CheckCircle,
  CheckCircle2,
  XCircle,
  Search,
  Info,
} from 'lucide-react';

// Motion variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
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

type ComparisonRow = {
  feature: string;
  dhanvantri: string;
  others: string;
};

// Comparison helpers
const BADGE_HIGHLIGHTS = ['Controlled Environment', 'High Potency', 'Organic', 'Automated', 'Sterile', 'Climate Control', 'Humidity Regulated', 'CO2 Managed', 'Sustainable'];
const isNegative = (val: string) => {
  const v = val.toLowerCase();
  return v.includes('none') || v.includes('n/a') || v.includes('manual') || v.includes('basic');
};
const hasHighlight = (val: string) => BADGE_HIGHLIGHTS.some((k) => val.toLowerCase().includes(k.toLowerCase()));
const highlightChips = (val: string) => BADGE_HIGHLIGHTS.filter((k) => val.toLowerCase().includes(k.toLowerCase()));

export default function SaffronPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Types
  const types = useMemo<TypeItem[]>(
    () => [
      {
        key: 'hydroponic',
        title: 'Hydroponic Saffron',
        image: '/service/saffron/1.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ hydroponic saffron cultivation uses nutrient-rich water solutions for high-quality yield in controlled indoor setups.' },
          { title: 'Optimal Nutrient Delivery', text: 'Precise nutrient solutions ensure robust stigma growth and vibrant color.' },
          { title: 'Year-Round Production', text: 'Controlled environments enable continuous cropping, independent of seasons.' },
        ],
      },
      {
        key: 'aeroponic',
        title: 'Aeroponic Saffron',
        image: '/service/saffron/2.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ aeroponic saffron grows corms in air with misted nutrients, maximizing potency and yield.' },
          { title: 'High Oxygenation', text: 'Mist systems enhance root health, leading to stronger saffron threads.' },
          { title: 'Water Efficiency', text: 'Uses 90% less water than traditional methods, ideal for sustainable farming.' },
        ],
      },
      {
        key: 'vertical',
        title: 'Vertical Saffron Farming',
        image: '/service/saffron/3.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ vertical saffron systems stack trays to maximize space, ideal for urban indoor farming.' },
          { title: 'Space Optimization', text: 'Multi-tier setups produce 5-10x more saffron per square foot.' },
          { title: 'Scalable Design', text: 'Modular systems allow easy expansion for commercial production.' },
        ],
      },
      {
        key: 'organic',
        title: 'Organic Saffron',
        image: '/service/saffron/4.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ organic saffron uses natural substrates and pest control for premium, chemical-free threads.' },
          { title: 'Eco-Friendly Practices', text: 'Compost-based substrates ensure sustainable, high-potency saffron.' },
          { title: 'Certification Compliance', text: 'Meets global organic standards for premium market value.' },
        ],
      },
    ],
    []
  );
  const [activeKey, setActiveKey] = useState<string>(types[0].key);
  const active = types.find((t) => t.key === activeKey) ?? types[0];

  // Stats
  const stats = [
    { value: 'High Potency', label: 'Premium Quality', icon: LineChart },
    { value: 'Space Efficient', label: 'Vertical Systems', icon: Layers },
    { value: 'Year-Round', label: 'Continuous Harvest', icon: Timer },
    { value: 'Sustainable', label: 'Low Resource Use', icon: Leaf },
  ];

  // Comparison data
  const comparisonData: ComparisonRow[] = [
    { feature: 'Growing Environment', dhanvantri: 'Fully Controlled Indoor', others: 'Open Field' },
    { feature: 'Humidity Control', dhanvantri: 'Automated 50-70%', others: 'Natural' },
    { feature: 'Temperature Regulation', dhanvantri: 'Precise 15-20°C', others: 'Ambient' },
    { feature: 'CO2 Management', dhanvantri: 'Optimized Levels', others: 'None' },
    { feature: 'Lighting System', dhanvantri: 'LED Spectrum-Controlled', others: 'Natural Light' },
    { feature: 'Yield per Sq Ft', dhanvantri: '50-100 g', others: '10-20 g' },
    { feature: 'Harvest Cycles', dhanvantri: 'Multiple per Year', others: 'Once Annually' },
    { feature: 'Water Usage', dhanvantri: '90% Less (Aeroponic)', others: 'High Consumption' },
    { feature: 'Pest Control', dhanvantri: 'Organic Sterile Methods', others: 'Chemical-Based' },
    { feature: 'Substrate Type', dhanvantri: 'Organic/Soilless', others: 'Soil-Based' },
    { feature: 'Automation Level', dhanvantri: 'Semi-Automated', others: 'Manual' },
    { feature: 'Contamination Risk', dhanvantri: 'Minimal (Sterile)', others: 'High' },
    { feature: 'Thread Quality', dhanvantri: 'Grade I (ISO 3632)', others: 'Variable' },
    { feature: 'Setup Scalability', dhanvantri: 'Modular Vertical', others: 'Fixed Land' },
    { feature: 'Energy Efficiency', dhanvantri: 'LED & Low-Power', others: 'N/A' },
    { feature: 'Market Value', dhanvantri: 'Premium Pricing', others: 'Standard' },
    { feature: 'Support Services', dhanvantri: '1 Year Agronomist', others: 'None' },
    { feature: 'Training Provided', dhanvantri: 'Free Initial Training', others: 'N/A' },
    { feature: 'Sustainability', dhanvantri: 'Eco-Friendly Systems', others: 'Resource-Intensive' },
    { feature: 'Certification', dhanvantri: 'Organic Certified', others: 'None' },
  ];

  // Comparison filter
  const [query, setQuery] = useState('');
  const filteredRows = useMemo(() => {
    if (!query) return comparisonData;
    const q = query.toLowerCase();
    return comparisonData.filter(
      (r) => r.feature.toLowerCase().includes(q) || r.dhanvantri.toLowerCase().includes(q) || r.others.toLowerCase().includes(q)
    );
  }, [comparisonData, query]);

  return (
    <main className="bg-white text-gray-900">
      {/* Intro */}
      <section id="intro" className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image src="/service/saffron/hero.jpg" alt="Dhanvantri Farms Saffron Farming background" fill sizes="100vw" priority className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-green-100 text-xs md:text-sm mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
                Dhanvantri Farms Saffron Farming
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Premium <span className="text-lime-300">Saffron Farming</span> with Dhanvantri Farms
              </h1>
              <div className="w-24 h-1.5 bg-lime-400 rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Dhanvantri Farms’ indoor saffron farming delivers high-potency threads using advanced hydroponic and aeroponic systems.
              </p>
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl mt-3">
                Achieve consistent yields and premium quality with sustainable, space-efficient solutions tailored for profitability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#types" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-lime-300 to-lime-400 shadow-[0_12px_24px_-8px_rgba(163,230,53,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(163,230,53,0.55)] transition-all duration-300 hover:-translate-y-0.5">
                  Explore Types <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#advantages" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300">
                  See Advantages <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl">
                <div className="aspect-video relative">
                  <Image
                    src="/service/saffron/hero-1.jpg"
                    alt="Dhanvantri Farms Saffron Farming overview"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className="mt-4 text-center text-green-100 text-sm">
                Discover Dhanvantri Farms’ saffron farming solutions
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={fadeUp} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-800 mb-1">{stat.value}</div>
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
              Why <span className="text-green-700">Dhanvantri Farms Saffron Farming</span> Works
            </motion.h2>
            <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
              Dhanvantri Farms’ indoor saffron farming optimizes conditions for high-quality threads with sustainable, efficient systems.
            </motion.p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <ThermometerSun className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Climate Control</h3>
                <p className="text-gray-600">Precise temperature and humidity ensure optimal saffron growth year-round.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Water Efficiency</h3>
                <p className="text-gray-600">Aeroponic and hydroponic systems drastically reduce water usage.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Pest-Free</h3>
                <p className="text-gray-600">Sterile indoor setups eliminate pest risks, ensuring pure saffron.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types with tabs */}
      <section id="types" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">
            Types of <span className="text-green-700">Dhanvantri Farms Saffron Systems</span>
          </motion.h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {types.map((t) => {
              const isActive = t.key === activeKey;
              return (
                <motion.button
                  key={t.key}
                  onClick={() => setActiveKey(t.key)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={['px-4 py-2 rounded-full border text-sm md:text-base transition-all', isActive ? 'bg-green-700 text-white border-green-700 shadow-md' : 'bg-white text-gray-800 border-gray-200 hover:border-green-300 hover:text-green-800'].join(' ')}
                  aria-pressed={isActive}
                >
                  {t.title}
                </motion.button>
              );
            })}
          </div>
          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div key={active.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }} exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }} className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-800">{active.title}</h3>
                  <div className="mt-4 space-y-4">
                    {active.paragraphs.map((p, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}>
                        {p.title ? <p className="font-semibold mb-0.5">{p.title}</p> : null}
                        <p className="text-gray-700">{p.text}</p>
                      </motion.div>
                    ))}
                  </div>
                  <button className="mt-6 px-5 py-2.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition">Discover Dhanvantri Farms Saffron</button>
                </div>
                <div className="lg:col-span-1">
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }} className="relative w-full overflow-hidden rounded-2xl shadow-md border border-gray-200">
                    <div className="relative h-60 sm:h-72 md:h-80">
                      <Image src={active.image} alt={active.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" priority={active.key === 'hydroponic'} />
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

      {/* Advantages */}
      <section id="advantages" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">
              Advantages of <span className="text-green-700">Dhanvantri Farms Saffron Farming</span>
            </motion.h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: LineChart, title: 'High Value', text: 'Premium saffron fetches top market prices.' },
                { icon: Layers, title: 'Space Efficient', text: 'Vertical systems maximize yield in small areas.' },
                { icon: Timer, title: 'Year-Round', text: 'Indoor setups enable continuous production.' },
                { icon: Droplets, title: 'Low Water Use', text: 'Aeroponic systems save up to 90% water.' },
                { icon: ShieldCheck, title: 'Pest-Free', text: 'Sterile environments ensure pure threads.' },
                { icon: Leaf, title: 'Sustainable', text: 'Eco-friendly methods reduce resource use.' },
                { icon: Sprout, title: 'High Potency', text: 'Controlled conditions enhance thread quality.' },
                { icon: ThermometerSun, title: 'Climate Control', text: 'Stable conditions for consistent yields.' },
              ].map((card) => (
                <motion.div key={card.title} variants={fadeUp} whileHover={{ y: -5 }} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition group">
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

      {/* Comparison */}
      <section id="comparison" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Dhanvantri Farms vs Others</h2>
            <p className="text-gray-600 mt-3">Compare our advanced indoor saffron farming against traditional methods</p>
            <div className="w-40 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] rounded-full mx-auto mt-6" />
          </div>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-lime-300">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search features, specs or methods…"
                className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Desktop table */}
          <div className="mt-10 hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                <div className="grid grid-cols-12 px-6 py-4 text-sm font-semibold text-gray-700">
                  <div className="col-span-4">Feature</div>
                  <div className="col-span-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#689f38]" />
                    <span className="text-[#2e7d32]">Dhanvantri Farms</span>
                  </div>
                  <div className="col-span-4">Others</div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredRows.map((row, idx) => {
                  const neg = isNegative(row.others);
                  const chips = highlightChips(row.dhanvantri);
                  return (
                    <div key={row.feature + idx} className="grid grid-cols-12 px-6 py-4 items-start hover:bg-gray-50/70 transition">
                      <div className="col-span-4">
                        <div className="font-semibold text-gray-900">{row.feature}</div>
                      </div>
                      <div className="col-span-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-gray-800">{row.dhanvantri}</span>
                          {chips.map((c) => (
                            <span key={c} className="inline-flex items-center rounded-full bg-lime-500/15 text-green-800 border border-lime-400/40 px-2 py-0.5 text-xs font-medium">
                              {c}
                            </span>
                          ))}
                          {hasHighlight(row.dhanvantri) && !chips.length ? (
                            <span className="inline-flex items-center rounded-full bg-lime-500/15 text-green-800 border border-lime-400/40 px-2 py-0.5 text-xs font-medium">
                              Premium
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-gray-700">{row.others}</span>
                          {neg ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 text-red-700 border border-red-300 px-2 py-0.5 text-xs font-medium">
                              <XCircle className="h-4 w-4" />
                              Limited
                            </span>
                          ) : null}
                          {!neg && row.others.toLowerCase().includes('basic') ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-300 px-2 py-0.5 text-xs font-medium">
                              <Info className="h-4 w-4" />
                              Basic
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden mt-8 grid sm:grid-cols-2 gap-6">
            {filteredRows.map((row, idx) => {
              const neg = isNegative(row.others);
              const chips = highlightChips(row.dhanvantri);
              return (
                <div key={row.feature + idx} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="font-bold text-gray-900 mb-3">{row.feature}</div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#689f38] mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-800">{row.dhanvantri}</div>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {chips.map((c) => (
                            <span key={c} className="inline-flex items-center rounded-full bg-lime-500/15 text-green-800 border border-lime-400/40 px-2 py-0.5 text-[11px] font-medium">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      {neg ? <XCircle className="h-5 w-5 text-red-600 mt-0.5" /> : <Info className="h-5 w-5 text-gray-500 mt-0.5" />}
                      <div className="text-sm text-gray-700">{row.others}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-[#8bc34a] to-[#689f38] shadow-[0_12px_24px_-8px_rgba(139,195,74,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(104,159,56,0.55)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Custom Quote
              <ArrowRight className="h-5 w-5" />
            </a>
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
              { q: 'What is the best system for saffron at Dhanvantri Farms?', a: 'Aeroponic systems are ideal for high yields and water efficiency, suitable for beginners and commercial setups.' },
              { q: 'How much space is needed for saffron farming?', a: 'Start with 100 sq ft for small-scale, scalable with vertical systems for higher yields.' },
              { q: 'Is indoor saffron farming profitable?', a: 'Yes, premium saffron prices and year-round production ensure high ROI.' },
              { q: 'How does Dhanvantri Farms ensure saffron quality?', a: 'Controlled environments and organic methods produce Grade I saffron (ISO 3632).' },
              { q: 'What are the water requirements for saffron?', a: 'Aeroponic systems use up to 90% less water than traditional farming.' },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                <details className="group" open={false}>
                  <summary className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg cursor-pointer list-none">
                    {item.q}
                    <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                    </span>
                  </summary>
                  <div className="p-5 pt-0 text-gray-600">{item.a}</div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image src="/service/saffron/cta.jpg" alt="Dhanvantri Farms Saffron Farming call to action" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Start Your Dhanvantri Farms Saffron Project</h2>
            <p className="text-green-100 mt-3">Grow premium saffron with our advanced indoor systems for profitability and sustainability.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-[#8bc34a] to-[#689f38] shadow-[0_12px_24px_-8px_rgba(139,195,74,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(104,159,56,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#types"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
              >
                Compare Types
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
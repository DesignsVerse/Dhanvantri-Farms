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
const BADGE_HIGHLIGHTS = ['Controlled Environment', 'High Yield', 'Organic', 'Automated', 'Compost', 'Spawn', 'Humidity Control', 'Temperature Regulated', 'Sustainable'];
const isNegative = (val: string) => {
  const v = val.toLowerCase();
  return v.includes('none') || v.includes('n/a') || v.includes('manual') || v.includes('basic');
};
const hasHighlight = (val: string) => BADGE_HIGHLIGHTS.some((k) => val.toLowerCase().includes(k.toLowerCase()));
const highlightChips = (val: string) => BADGE_HIGHLIGHTS.filter((k) => val.toLowerCase().includes(k.toLowerCase()));

export default function MushroomPage() {
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
        key: 'button',
        title: 'Button Mushroom',
        image: '/service/mushroom/3.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ button mushroom cultivation uses composted substrates for high yields in controlled environments.' },
          { title: 'Nutrient-Rich Growth', text: 'Optimal compost mix ensures robust mycelium development and premium quality mushrooms.' },
          { title: 'Temperature Management', text: 'Maintained at 22-25°C for casing and 15-18°C for fruiting to maximize output.' },
        ],
      },
      {
        key: 'oyster',
        title: 'Oyster Mushroom',
        image: '/service/mushroom/4.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ oyster mushrooms grow on straw or sawdust, ideal for quick cycles and high nutritional value.' },
          { title: 'Fast Harvest', text: 'Ready in 3-4 weeks with multiple flushes, supporting efficient production.' },
          { title: 'Humidity Control', text: '85-95% humidity ensures healthy fruiting bodies and prevents contamination.' },
        ],
      },
      {
        key: 'shiitake',
        title: 'Shiitake Mushroom',
        image: '/service/mushroom/5.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ shiitake cultivation on hardwood logs or synthetic bags yields flavorful, medicinal mushrooms.' },
          { title: 'Long-Term Yields', text: 'Multiple harvests over 4-6 years with proper soaking and shocking techniques.' },
          { title: 'Health Benefits', text: 'Rich in antioxidants, supporting immune health and sustainable farming.' },
        ],
      },
      {
        key: 'milky',
        title: 'Milky Mushroom',
        image: '/service/mushroom/6.jpg',
        paragraphs: [
          { text: 'Dhanvantri Farms’ milky mushrooms thrive in tropical climates on paddy straw for crisp texture and mild flavor.' },
          { title: 'Heat Tolerance', text: 'Grows at 30-35°C, suitable for warmer regions with high humidity.' },
          { title: 'Market Demand', text: 'Increasing popularity due to long shelf life and versatile culinary uses.' },
        ],
      },
    ],
    []
  );
  const [activeKey, setActiveKey] = useState<string>(types[0].key);
  const active = types.find((t) => t.key === activeKey) ?? types[0];

  // Stats
  const stats = [
    { value: 'High Yields', label: 'Up to 25% More', icon: LineChart },
    { value: 'Quick Cycles', label: 'Harvest in Weeks', icon: Timer },
    { value: 'Low Space', label: 'Vertical Farming', icon: Layers },
    { value: 'Sustainable', label: 'Waste Recycling', icon: Leaf },
  ];

  // FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setActiveFaq((v) => (v === i ? null : i));

  // Comparison data
  const comparisonData: ComparisonRow[] = [
    { feature: 'Growing Environment', dhanvantri: 'Fully Controlled Rooms', others: 'Basic Sheds' },
    { feature: 'Humidity Control', dhanvantri: 'Automated 85-95%', others: 'Manual Spraying' },
    { feature: 'Temperature Regulation', dhanvantri: 'Precise 15-35°C', others: 'Ambient' },
    { feature: 'Substrate Quality', dhanvantri: 'Organic Compost', others: 'Local Mix' },
    { feature: 'Spawn Source', dhanvantri: 'High-Quality Lab Spawn', others: 'Basic Spawn' },
    { feature: 'Yield per Sq Ft', dhanvantri: '2-3 kg', others: '1-1.5 kg' },
    { feature: 'Harvest Cycles', dhanvantri: 'Multiple Flushes', others: 'Single Flush' },
    { feature: 'Contamination Prevention', dhanvantri: 'Sterilized Setup', others: 'Basic Hygiene' },
    { feature: 'Shelf Life', dhanvantri: '7-10 Days', others: '3-5 Days' },
    { feature: 'Water Usage', dhanvantri: 'Efficient Misting', others: 'High Consumption' },
    { feature: 'Energy Efficiency', dhanvantri: 'LED Lighting', others: 'Traditional Bulbs' },
    { feature: 'Support Services', dhanvantri: '1 Year Agronomist', others: 'None' },
    { feature: 'Automation Level', dhanvantri: 'Semi-Automated', others: 'Manual' },
    { feature: 'Pest Management', dhanvantri: 'Integrated Organic', others: 'Chemical-Based' },
    { feature: 'Market Readiness', dhanvantri: 'Packaged & Branded', others: 'Raw Bulk' },
    { feature: 'Training Provided', dhanvantri: 'Free Initial Training', others: 'N/A' },
    { feature: 'Sustainability Features', dhanvantri: 'Waste Recycling', others: 'None' },
    { feature: 'Cost per Setup', dhanvantri: 'Optimized ROI', others: 'Higher Long-Term' },
    { feature: 'Variety Options', dhanvantri: 'Multiple Types', others: 'Limited' },
    { feature: 'Quality Certification', dhanvantri: 'Organic Certified', others: 'None' },
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
      <section id="intro" className="relative overflow-hidden bg-green-900 text-white ">
        <div className="absolute inset-0">
          <Image src="/service/mushroom/1.jpg" alt="Dhanvantri Farms Mushroom Farming background" fill sizes="100vw" priority className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-green-100 text-xs md:text-sm mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
                Dhanvantri Farms Mushroom Farming
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Profitable <span className="text-lime-300">Mushroom Farming</span> with Dhanvantri Farms
              </h1>
              <div className="w-24 h-1.5 bg-lime-400 rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Dhanvantri Farms’ mushroom farming solutions provide controlled environments for high-yield, sustainable production.
              </p>
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl mt-3">
                Grow premium mushrooms with low space requirements and quick returns, tailored to your needs.
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
                    src="/service/mushroom/2.jpg"
                    alt="Dhanvantri Farms Mushroom Farming overview"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className="mt-4 text-center text-green-100 text-sm">
                Discover Dhanvantri Farms’ mushroom farming solutions
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
              Why <span className="text-green-700">Dhanvantri Farms Mushroom Farming</span> Works
            </motion.h2>
            <motion.p variants={fadeUp} className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
              Dhanvantri Farms’ mushroom farming optimizes conditions for rapid growth, high quality, and eco-friendly production.
            </motion.p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <ThermometerSun className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Climate Control</h3>
                <p className="text-gray-600">Dhanvantri Farms maintains ideal temperature and humidity for mushroom growth.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Water Efficiency</h3>
                <p className="text-gray-600">Efficient misting systems conserve water while ensuring optimal moisture levels.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group">
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Contamination Defense</h3>
                <p className="text-gray-600">Sterilized environments minimize risks, ensuring healthy yields.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types with tabs */}
      <section id="types" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">
            Types of <span className="text-green-700">Dhanvantri Farms Mushrooms</span>
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
                  <button className="mt-6 px-5 py-2.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition">Discover Dhanvantri Farms Mushrooms</button>
                </div>
                <div className="lg:col-span-1">
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }} className="relative w-full overflow-hidden rounded-2xl shadow-md border border-gray-200">
                    <div className="relative h-60 sm:h-72 md:h-80">
                      <Image src={active.image} alt={active.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" priority={active.key === 'button'} />
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
              Advantages of <span className="text-green-700">Dhanvantri Farms Mushroom Farming</span>
            </motion.h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Timer, title: 'Quick Returns', text: 'Harvest in weeks for fast ROI on investments.' },
                { icon: Layers, title: 'Space Efficient', text: 'Vertical stacking maximizes production in limited areas.' },
                { icon: Leaf, title: 'Sustainable', text: 'Uses agricultural waste as substrate, reducing environmental impact.' },
                { icon: Droplets, title: 'Low Water Use', text: 'Efficient systems minimize water consumption.' },
                { icon: ShieldCheck, title: 'Disease Resistance', text: 'Controlled setups reduce contamination risks.' },
                { icon: LineChart, title: 'High Profit', text: 'Premium prices for organic, fresh mushrooms.' },
                { icon: Sprout, title: 'Year-Round', text: 'Indoor farming allows continuous production.' },
                { icon: ThermometerSun, title: 'Climate Independent', text: 'Grows in controlled conditions regardless of weather.' },
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
            <p className="text-gray-600 mt-3">Compare our advanced mushroom farming setups against standard methods</p>
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
              { q: 'What is the best mushroom type for beginners at Dhanvantri Farms?', a: 'Oyster mushrooms are ideal due to quick growth and tolerance to varying conditions.' },
              { q: 'How much space is needed for Dhanvantri Farms mushroom farming?', a: 'Start with 100 sq ft for small-scale, scalable with vertical racks.' },
              { q: 'What substrates does Dhanvantri Farms use?', a: 'We use sterilized straw, sawdust, or compost tailored to mushroom type.' },
              { q: 'Is mushroom farming profitable with Dhanvantri Farms?', a: 'Yes, with high yields and market demand, ROI can be achieved in months.' },
              { q: 'How does Dhanvantri Farms prevent contamination?', a: 'Through sterilization, controlled environments, and hygiene protocols.' },
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
          <Image src="/service/mushroom/cta.jpg" alt="Dhanvantri Farms Mushroom Farming call to action" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Start Your Dhanvantri Farms Mushroom Project</h2>
            <p className="text-green-100 mt-3">Grow high-quality mushrooms with our expert solutions for profitability and sustainability.</p>
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
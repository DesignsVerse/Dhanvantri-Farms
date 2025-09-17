'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Snowflake,
  Thermometer,
  ThermometerSnowflake,
  Gauge,
  Wind,
  Droplets,
  ShieldCheck,
  Bolt,
  BatteryCharging,
  Factory,
  Boxes,
  Package,
  Clock,
  LineChart,
  Cpu,
  Satellite,
  BarChart3,
  ChartLine,
  Cog,
  Recycle,
  Leaf,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlarmClock,
  Flame,
  ThermometerSun,
} from 'lucide-react';

/**
 * Cold Storage — Advanced Page
 * Sections:
 * - Sticky nav
 * - Hero (image + gradient + KPIs)
 * - Temperature Zones (Frozen/Chilled/CA/Blast/Pre-cool)
 * - Infrastructure (Panels/Doors/Flooring/Racks)
 * - Process Timeline (Inbound→Dispatch)
 * - Monitoring & IoT (Sensors/Alarms/Reports)
 * - Energy Efficiency (VFD/Heat recovery/LED/Solar)
 * - Gallery (12+ images, overlays)
 * - Case Studies (3-6 items)
 * - Comparison (Advanced vs Basic)
 * - FAQ
 * - CTA
 */

/* Motion variants */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

type Zone = {
  key: string;
  title: string;
  temp: string;
  desc: string;
  image: string;
  icon: any;
  bullets: string[];
};

type Infra = {
  title: string;
  image: string;
  icon: any;
  points: string[];
};

type ProcessStep = {
  n: number;
  title: string;
  text: string;
  icon: any;
  image: string;
};

type CaseStudy = {
  title: string;
  vertical: string;
  uplift: string;
  image: string;
  bullets: string[];
};

type CompareRow = {
  feature: string;
  advanced: string;
  basic: string;
};

export default function ColdStoragePage() {
  /* Sticky nav */
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Temperature zones */
  const zones = useMemo<Zone[]>(
    () => [
      {
        key: 'frozen',
        title: 'Frozen Storage',
        temp: '-18°C to -25°C',
        desc:
          'Deep-freeze chambers for meat, seafood, and long-term storage where temperature stability and door discipline are critical.',
        image: '/hero/2.jpg',
        icon: Snowflake,
        bullets: [
          'High-density insulation and vapor barrier',
          'Rapid doors and anti-frost strategies',
          'Floor heating loops to prevent subfloor frost',
        ],
      },
      {
        key: 'chilled',
        title: 'Chilled Storage',
        temp: '0°C to +4°C',
        desc:
          'Fresh produce, dairy, and beverages benefit from tight temperature uniformity with gentle airflow and humidity control.',
          image: '/hero/3.jpg',
          icon: Thermometer,
        bullets: [
          'EC fans for uniform airflow',
          'Smart dehumidification balance',
          'Product-safe coil temperatures',
        ],
      },
      {
        key: 'ca',
        title: 'CA/MA Storage',
        temp: '0°C to +2°C',
        desc:
          'Controlled/Modified Atmosphere rooms modulate O2/CO2 for apples, pears, and exotics to extend shelf life significantly.',
          image: '/hero/4.jpg',
          icon: Gauge,
        bullets: [
          'Gas-tight envelope with scrubbers',
          'Door interlocks and slow ramping',
          'Continuous gas monitoring & logs',
        ],
      },
      {
        key: 'blast',
        title: 'Blast Freezer',
        temp: '-30°C to -40°C',
        desc:
          'High-capacity blast tunnels to rapidly remove field heat and pass through the danger zone for quality retention.',
          image: '/hero/5.jpg',
          icon: ThermometerSnowflake,
        bullets: [
          'High static evaporators and ducting',
          'Staged defrost strategies',
          'Throughput-optimized cart flow',
        ],
      },
      {
        key: 'precool',
        title: 'Pre-Cooling',
        temp: '+2°C to +8°C',
        desc:
          'Hydrovac/forced-air pre-cool before storage reduces respiration rates and post-harvest losses.',
          image: '/hero/6.jpg',
          icon: Wind,
        bullets: [
          'Forced-air plenums and shrouds',
          'Product-specific cooling curves',
          'Data-logged core temperature',
        ],
      },
    ],
    []
  );

  /* Infrastructure blocks */
  const infra = useMemo<Infra[]>(
    () => [
      {
        title: 'Insulated Panels',
        image: '/images/cold/infra-panels.jpg',
        icon: ShieldCheck,
        points: [
          'PUF/PIR panels with camlocks, 60–200 mm thickness',
          'Food-grade laminates, cleanable finishes',
          'Detailed vapor barrier and joint sealing',
        ],
      },
      {
        title: 'Doors & Docking',
        image: '/images/cold/infra-doors.jpg',
        icon: Boxes,
        points: [
          'Rapid roll-up and swing doors with heaters',
          'Dock levelers, shelters, and bumpers',
          'Air curtains for infiltration control',
        ],
      },
      {
        title: 'Flooring & Racking',
        image: '/images/cold/infra-floor.jpg',
        icon: Package,
        points: [
          'Heated slab or glycol loops for frozen areas',
          'Antiskid coatings with drainage slopes',
          'Mobile/drive-in racking for high density',
        ],
      },
      {
        title: 'Refrigeration Plant',
        image: '/images/cold/infra-plant.jpg',
        icon: Factory,
        points: [
          'Ammonia/Freon with VFD compressors',
          'Hot gas defrost, heat recovery',
          'PLC/SCADA with remote access',
        ],
      },
    ],
    []
  );

  /* Process timeline */
  const process = useMemo<ProcessStep[]>(
    () => [
      {
        n: 1,
        title: 'Inbound & Pre-Check',
        text: 'Dock intake, visual checks, probe sampling, and ASN reconciliation to validate conditions and paperwork.',
        icon: AlarmClock,
        image: '/images/cold/process-inbound.jpg',
      },
      {
        n: 2,
        title: 'Pre-Cool / Blast',
        text: 'Remove field heat or rapidly freeze to pass the danger zone quickly while tracking core temperatures.',
        icon: Flame,
        image: '/images/cold/process-blast.jpg',
      },
      {
        n: 3,
        title: 'Putaway',
        text: 'Location assignment by temperature zone, rotation rules (FEFO/FIFO), and SKU compatibility.',
        icon: Boxes,
        image: '/images/cold/process-putaway.jpg',
      },
      {
        n: 4,
        title: 'Monitoring',
        text: 'Continuous sensing of temp/humidity/door and real-time alerts with audit-friendly logs and graphs.',
        icon: Satellite,
        image: '/images/cold/process-monitor.jpg',
      },
      {
        n: 5,
        title: 'Picking & Dispatch',
        text: 'Order consolidation with minimal door time; validation, labeling, and cold-chain handoff.',
        icon: Clock,
        image: '/images/cold/process-dispatch.jpg',
      },
    ],
    []
  );

  /* Case studies */
  const cases = useMemo<CaseStudy[]>(
    () => [
      {
        title: 'Dairy DC — North Region',
        vertical: 'Chilled Dairy',
        uplift: 'Energy -18%',
        image: '/images/cold/case-dairy.jpg',
        bullets: [
          'VFD retrofit on screw compressors',
          'Defrost optimization, night set-back',
          'Door discipline analytics and SOPs',
        ],
      },
      {
        title: 'Meat Export Hub',
        vertical: 'Frozen Meat',
        uplift: 'Throughput +22%',
        image: '/images/cold/case-meat.jpg',
        bullets: [
          'Blast tunnel redesign and duct balancing',
          'Cart flow and staging optimization',
          'Core temp tracking automation',
        ],
      },
      {
        title: 'Apple CA Complex',
        vertical: 'F&V CA Rooms',
        uplift: 'Losses -30%',
        image: '/images/cold/case-apple.jpg',
        bullets: [
          'Gas-tight sealing and scrubber tuning',
          'O2/CO2 curve optimization by cultivar',
          'Integrated reporting for season closeout',
        ],
      },
    ],
    []
  );

  /* Comparison table */
  const compare: CompareRow[] = [
    { feature: 'Envelope', advanced: 'PIR 120–200mm, sealed vapor barrier', basic: 'PUF 60–80mm, basic sealant' },
    { feature: 'Refrigeration', advanced: 'VFD + PLC/SCADA, heat recovery', basic: 'Fixed-speed, basic controls' },
    { feature: 'Airflow', advanced: 'EC fans, CFD-tuned ducting', basic: 'Legacy fans, uneven distribution' },
    { feature: 'Doors', advanced: 'Rapid doors with heaters & interlocks', basic: 'Swing doors, manual curtains' },
    { feature: 'Flooring', advanced: 'Heated slab, anti-frost design', basic: 'Unheated slab, frost risk' },
    { feature: 'Monitoring', advanced: 'IoT sensors, alerts, reports', basic: 'Manual logs, spot checks' },
    { feature: 'Energy', advanced: 'VFD, defrost optimization, LEDs', basic: 'High kWh/t with frequent defrost' },
  ];

  /* Search filter for comparison (optional) */
  const [q, setQ] = useState('');

  const filteredCompare = useMemo(() => {
    if (!q) return compare;
    const s = q.toLowerCase();
    return compare.filter((r) => r.feature.toLowerCase().includes(s) || r.advanced.toLowerCase().includes(s) || r.basic.toLowerCase().includes(s));
  }, [q, compare]);

  return (
    <main className="bg-white text-gray-900">
  
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden bg-green-900 text-white pt-20">
        <div className="absolute inset-0">
          <Image
            src="/hero/8.jpg"
            alt="Cold storage warehouse"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-green-100 text-xs md:text-sm mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
                Advanced Cold Storage Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Precision Cooling, Reliable Cold Chain
              </h1>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Design, construction, and operation tuned for stability, efficiency, and audit-ready compliance across frozen, chilled, and CA rooms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#zones" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-lime-300 to-lime-400 shadow-[0_12px_24px_-8px_rgba(163,230,53,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(163,230,53,0.55)] transition-all duration-300 hover:-translate-y-0.5">
                  Explore Zones <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#iot" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300">
                  Monitoring & Alerts <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: LineChart, label: 'Energy/t Reduced', value: 'up to 20%' },
                  { icon: Snowflake, label: 'Setpoint Stability', value: '±0.5°C' },
                  { icon: Droplets, label: 'RH Control', value: '35–90% RH' },
                  { icon: ShieldCheck, label: 'Uptime SLA', value: '99.9%' },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-5 shadow">
                    <kpi.icon className="h-6 w-6 text-white" />
                    <div className="text-2xl font-extrabold mt-2">{kpi.value}</div>
                    <div className="text-green-100/90">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Zones */}
      <section id="zones" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Temperature Zones</h2>
            <p className="text-gray-600 mt-3">
              Calibrated environments for diverse SKUs — from blast-freezing tunnels to CA rooms for long-term fruit storage.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {zones.map((z) => (
              <article key={z.key} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-64">
                  <Image
                    src={z.image}
                    alt={z.title}
                    fill
                    sizes="(max-width:1280px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm mb-2">
                    <z.icon className="h-4 w-4" />
                    <span>{z.temp}</span>
                  </div>
                  <h3 className="text-xl font-bold">{z.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{z.desc}</p>
                  <ul className="mt-3 grid grid-cols-1 gap-1 text-sm text-white/90">
                    {z.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-lime-300 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infra" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Infrastructure & Build</h2>
            <p className="text-gray-600 mt-3">
              Food-grade envelope, engineered floors, rapid doors, and modern plant rooms — tuned for hygiene, durability, and safety.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {infra.map((i) => (
              <article key={i.title} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-44">
                  <Image
                    src={i.image}
                    alt={i.title}
                    fill
                    sizes="(max-width:1280px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-3">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{i.title}</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    {i.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Cold Chain Process</h2>
            <p className="text-gray-600 mt-3">
              From dock to dispatch — staged controls and visibility reduce losses and protect product integrity end-to-end.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-5 gap-6">
            {process.map((s) => (
              <article key={s.n} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-44">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:1280px) 100vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur text-white text-sm shadow">
                    <s.icon className="h-4 w-4" />
                    <span>Step {s.n}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring & IoT */}
      <section id="iot" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Monitoring & IoT</h2>
            <p className="text-gray-600 mt-3">
              Multi-point sensing for temperature, humidity, and doors; smart thresholds trigger alerts, and dashboards retain audit trails.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: 'Sensors & Gateways',
                text: 'Wireless sensors push data to gateways with failover; door interlocks and CTs add context.',
                icon: Satellite,
                image: '/images/cold/iot-sensors.jpg',
              },
              {
                title: 'Real-time Alerts',
                text: 'SMS/Email/WhatsApp escalation trees with acknowledgement and closure notes for CAPA.',
                icon: AlarmClock,
                image: '/images/cold/iot-alerts.jpg',
              },
              {
                title: 'Reports & Analytics',
                text: 'Daily summaries, deviation logs, and trend lines simplify audits and continuous improvement.',
                icon: BarChart3,
                image: '/images/cold/iot-reports.jpg',
              },
            ].map((card) => (
              <article key={card.title} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-44">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width:1280px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-3">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section id="energy" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Energy & Reliability</h2>
            <p className="text-gray-600 mt-3">
              VFD compressors, defrost optimization, heat recovery, and LED retrofits — integrated for lower kWh/t and higher uptime.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: 'VFD & Sequencing', text: 'Match capacity to load; reduce starts, extend life.', icon: Bolt, image: '/images/cold/energy-vfd.jpg' },
              { title: 'Defrost Strategy', text: 'Smart intervals minimize frost and fan downtime.', icon: Wind, image: '/images/cold/energy-defrost.jpg' },
              { title: 'Heat Recovery', text: 'Sanitary hot water via condenser reclaim.', icon: Flame, image: '/images/cold/energy-heat.jpg' },
              { title: 'LED & Controls', text: 'Sensors and zoning cut idle lighting loads.', icon: Sparkles, image: '/images/cold/energy-led.jpg' },
            ].map((card) => (
              <article key={card.title} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-44">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width:1280px) 100vw, 25vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-3">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Gallery</h2>
            <p className="text-gray-600 mt-3">A look across docks, chambers, plant rooms, and smart controls.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/cold/g1.jpg',
              '/images/cold/g2.jpg',
              '/images/cold/g3.jpg',
              '/images/cold/g4.jpg',
              '/images/cold/g5.jpg',
              '/images/cold/g6.jpg',
              '/images/cold/g7.jpg',
              '/images/cold/g8.jpg',
              '/images/cold/g9.jpg',
              '/images/cold/g10.jpg',
              '/images/cold/g11.jpg',
              '/images/cold/g12.jpg',
            ].map((src) => (
              <div key={src} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-56">
                  <Image src={src} alt="Cold storage image" fill sizes="(max-width:1280px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-90" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-xs">
                    <Snowflake className="h-4 w-4" />
                    <span>Cold Storage</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Case Studies</h2>
            <p className="text-gray-600 mt-3">Measured impact across energy, throughput, and quality metrics.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            {cases.map((cs) => (
              <article key={cs.title} className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-green-100 hover:border-[#8bc34a]/50">
                <div className="relative h-56">
                  <Image src={cs.image} alt={cs.title} fill sizes="(max-width:1280px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    {cs.uplift}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{cs.title}</h3>
                  <p className="text-[#689f38] font-medium mb-4">{cs.vertical}</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {cs.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Advanced vs Basic</h2>
            <p className="text-gray-600 mt-3">Feature comparison across envelope, refrigeration, airflow, and monitoring.</p>
            <div className="w-40 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] rounded-full mx-auto mt-6" />
          </div>

          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
              <LineChart className="h-5 w-5 text-gray-500" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search features, specs, or materials…"
                className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="mt-10 hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                <div className="grid grid-cols-12 px-6 py-4 text-sm font-semibold text-gray-700">
                  <div className="col-span-4">Feature</div>
                  <div className="col-span-4">Advanced</div>
                  <div className="col-span-4">Basic</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredCompare.map((r) => (
                  <div key={r.feature} className="grid grid-cols-12 px-6 py-4 items-start hover:bg-gray-50/70 transition">
                    <div className="col-span-4 font-semibold text-gray-900">{r.feature}</div>
                    <div className="col-span-4 text-gray-800">{r.advanced}</div>
                    <div className="col-span-4 text-gray-700">{r.basic}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-8 grid sm:grid-cols-2 gap-6">
            {filteredCompare.map((r) => (
              <div key={r.feature} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="font-bold text-gray-900 mb-3">{r.feature}</div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#689f38] mt-0.5" />
                    <div className="text-sm text-gray-800">{r.advanced}</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="text-sm text-gray-700">{r.basic}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What determines insulation thickness?',
                a: 'Ambient, setpoint, and usage (door cycles) drive conductance and infiltration loads; frozen rooms often need 120–200 mm.',
              },
              {
                q: 'How do you keep floors from freezing?',
                a: 'Heated slabs or glycol loops under frozen chambers prevent permafrost and slab heave from sub-soil freezing.',
              },
              {
                q: 'What improves energy per ton stored?',
                a: 'VFDs, optimized defrost, tight envelope sealing, LED controls, and disciplined door operations reduce kWh/t.',
              },
              {
                q: 'Can RH be controlled independently?',
                a: 'Yes, via coil temperatures, air changes, and dehumidification/humidification strategies per commodity.',
              },
              {
                q: 'How is monitoring audit-ready?',
                a: 'Time-stamped logs, threshold alarms, acknowledgements, and reports establish traceable compliance.',
              },
            ].map((f, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                <summary className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg cursor-pointer list-none">
                  {f.q}
                  <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <div className="p-5 pt-0 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/cold/cta.jpg"
            alt="Plan cold storage project"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Plan a Cold Storage Project</h2>
            <p className="text-green-100 mt-3">
              Get a tailored design — zones, airflow, plant sizing, monitoring, and energy plan — aligned to throughput and quality goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-[#8bc34a] to-[#689f38] shadow-[0_12px_24px_-8px_rgba(139,195,74,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(104,159,56,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#zones"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
              >
                Explore Zones
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

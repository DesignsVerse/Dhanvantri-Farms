'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  Boxes,
  Package,
  Warehouse,
  Truck,
  Container,
  ClipboardList,
  ScanBarcode,
  QrCode,
  AlarmClock,
  Navigation,
  BarChart3,
  LineChart,
  Gauge,
  Layers,
  BatteryCharging,
  Cpu,
  Users,
  ShieldCheck,
  Sparkles,
  Recycle,
  Lightbulb,
  Wind,
  Bolt,
  Thermometer,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };

type StorageBlock = { title: string; image: string; icon: any; points: string[] };
type FlowStep = { n: number; title: string; text: string; icon: any; image: string };
type Feature = { title: string; text: string; icon: any; image: string };
type CaseStudy = { title: string; client: string; impact: string; image: string; bullets: string[] };
type CompareRow = { feature: string; advanced: string; basic: string };

export default function WarehousePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Storage solutions
  const storage = useMemo<StorageBlock[]>(
    () => [
      {
        title: 'Selective Pallet Racking',
        image: '/images/warehouse/storage-selective.jpg',
        icon: Boxes,
        points: [
          '100% SKU accessibility for high mix warehouses',
          'Configurable beam levels for varied pallet heights',
          'Ideal for fast-moving FMCG and 3PL nodes',
        ],
      },
      {
        title: 'Drive-in / Drive-through',
        image: '/images/warehouse/storage-drivein.jpg',
        icon: Boxes,
        points: [
          'High-density lanes for low-SKU, high-volume products',
          'FIFO/LIFO modes based on access strategy',
          'Reduced travel distance and improved cube utilization',
        ],
      },
      {
        title: 'Push-back & Gravity Flow',
        image: '/images/warehouse/storage-flow.jpg',
        icon: Layers,
        points: [
          'Cart-based or roller lanes for dynamic storage',
          'Excellent for batch, waves, and promotion builds',
          'Lower picker travel and higher pick rates',
        ],
      },
      {
        title: 'Mezzanine & Shelving',
        image: '/images/warehouse/storage-mezz.jpg',
        icon: Package,
        points: [
          'Multi-tier for eComm bins and cartons',
          'Modular spans, fire-rated decking options',
          'Integrates with spiral chutes and conveyors',
        ],
      },
      {
        title: 'Automation Ready (AS/RS)',
        image: '/images/warehouse/storage-asrs.jpg',
        icon: Cpu,
        points: [
          'Shuttles/miniloads for totes and cartons',
          'Micro-fulfillment and dark-store configurations',
          'Integrated WMS and WCS orchestration',
        ],
      },
      {
        title: 'Yard & Container Staging',
        image: '/images/warehouse/storage-yard.jpg',
        icon: Container,
        points: [
          'Dock scheduling and yard visibility',
          'Staging plans with cross-dock support',
          'Dock-to-stock KPIs and dwell time reduction',
        ],
      },
    ],
    []
  );

  // Ops flow
  const flow = useMemo<FlowStep[]>(
    () => [
      {
        n: 1,
        title: 'Inbound & GRN',
        text: 'ASN matching, barcode/QR capture, and quality checks ensure accurate receipts and traceability.',
        icon: ClipboardList,
        image: '/images/warehouse/flow-inbound.jpg',
      },
      {
        n: 2,
        title: 'Putaway',
        text: 'Rules-based slotting by velocity, size, and compatibility drives lower travel and better cube use.',
        icon: Navigation,
        image: '/images/warehouse/flow-putaway.jpg',
      },
      {
        n: 3,
        title: 'Replenishment',
        text: 'Auto-replenish forward pick faces from reserve based on min/max and forecast signals.',
        icon: Gauge,
        image: '/images/warehouse/flow-repl.jpg',
      },
      {
        n: 4,
        title: 'Picking',
        text: 'Batch, wave, zone, or cluster picking with RF/voice for high accuracy and throughput.',
        icon: ScanBarcode,
        image: '/images/warehouse/flow-pick.jpg',
      },
      {
        n: 5,
        title: 'Packing & Dispatch',
        text: 'Weight checks, labeling, and dock scheduling streamline trailer loading and turnaround.',
        icon: Truck,
        image: '/images/warehouse/flow-dispatch.jpg',
      },
    ],
    []
  );

  // WMS & Ops features
  const features = useMemo<Feature[]>(
    () => [
      {
        title: 'WMS Integrations',
        text: 'ERP/eCom integrations, ASN/EDI flows, and API-driven sync for inventory and orders.',
        icon: Cpu,
        image: '/images/warehouse/feat-wms.jpg',
      },
      {
        title: 'Auto-ID & Traceability',
        text: 'Barcode/QR/RFID support; lot/serial tracking and audit trails by user and device.',
        icon: QrCode,
        image: '/images/warehouse/feat-autoid.jpg',
      },
      {
        title: 'Safety & Compliance',
        text: 'Aisle guards, rack inspections, load charts; SOPs with digital checklists.',
        icon: ShieldCheck,
        image: '/images/warehouse/feat-safety.jpg',
      },
      {
        title: 'Sustainability',
        text: 'LED lighting, HVLS fans, skylights, and waste segregation for greener ops.',
        icon: Recycle,
        image: '/images/warehouse/feat-sustain.jpg',
      },
    ],
    []
  );

  // Case studies
  const cases = useMemo<CaseStudy[]>(
    () => [
      {
        title: 'Apparel 3PL — Mega Fulfillment',
        client: 'National 3PL',
        impact: 'Order cycle time -28%',
        image: '/images/warehouse/case-apparel.jpg',
        bullets: [
          'Multi-tier mezzanine with carton flow',
          'Cluster picking and dynamic batching',
          'Dock-to-stock and pack-to-ship SLAs met',
        ],
      },
      {
        title: 'FMCG DC — Regional Hub',
        client: 'FMCG Major',
        impact: 'Pick productivity +35%',
        image: '/images/warehouse/case-fmcg.jpg',
        bullets: [
          'Selective + drive-in hybrid layout',
          'ABC slotting and rule-based replenishment',
          'Exception workflows via WMS mobile',
        ],
      },
      {
        title: 'Spare Parts — MRO Center',
        client: 'Engineering OEM',
        impact: 'Inventory accuracy 99.6%',
        image: '/images/warehouse/case-mro.jpg',
        bullets: [
          'Bin shelving with miniload AS/RS',
          'Serial tracking and reverse logistics',
          'Cycle counting with rolling audits',
        ],
      },
    ],
    []
  );

  // Comparison
  const compare: CompareRow[] = [
    { feature: 'Racking', advanced: 'Selective + density mix, seismic anchors', basic: 'Single-type legacy, ad-hoc anchors' },
    { feature: 'Slotting', advanced: 'ABC/XYZ with rules and forecasts', basic: 'Static map, manual edits' },
    { feature: 'Picking', advanced: 'Batch/zone/cluster with RF/voice', basic: 'Discrete, paper-based' },
    { feature: 'Replenishment', advanced: 'Auto forward pick min/max triggers', basic: 'Manual, reactive' },
    { feature: 'Traceability', advanced: 'Lot/serial, device/user trails', basic: 'Limited or absent' },
    { feature: 'Energy', advanced: 'LED + HVLS + skylights zoning', basic: 'Legacy HID, always-on' },
    { feature: 'Safety', advanced: 'Rack inspections, load charts, SOPs', basic: 'Occasional checks' },
  ];
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q) return compare;
    const s = q.toLowerCase();
    return compare.filter((r) => r.feature.toLowerCase().includes(s) || r.advanced.toLowerCase().includes(s) || r.basic.toLowerCase().includes(s));
  }, [q]);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden bg-green-900 text-white pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/warehouse/hero.jpg"
            alt="Dhanvantri Farms Warehouse Facility"
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
                Smart Warehousing Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Efficient Warehouse Operations
              </h1>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Dhanvantri Farms provides advanced warehouse solutions, optimizing storage, workflows, and WMS for higher throughput and scalability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#storage"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-lime-300 to-lime-400 shadow-[0_12px_24px_-8px_rgba(163,230,53,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(163,230,53,0.55)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Storage <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
                >
                  WMS & Mobile <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: LineChart, label: 'Pick Productivity', value: '+30%' },
                  { icon: BarChart3, label: 'Inventory Accuracy', value: '99.5%' },
                  { icon: BatteryCharging, label: 'Energy Savings', value: 'up to 20%' },
                  { icon: Users, label: 'Training Time', value: '-25%' },
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

      {/* Storage solutions — NEW: mosaic + mobile carousel */}
      <section id="storage" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Storage Solutions</h2>
            <p className="text-gray-600 mt-3">Curated mix of accessibility and density tailored to SKU velocity and growth plans.</p>
          </div>

          {/* Mobile: horizontal snap */}
          <div className="mt-8 md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory">
            <div className="flex gap-4">
              {storage.map((s) => (
                <article key={s.title} className="snap-start shrink-0 w-80 group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <div className="relative h-56">
                    <Image src={s.image} alt={s.title} fill sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm mb-2">
                      <s.icon className="h-4 w-4" />
                      <span>Storage</span>
                    </div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <ul className="mt-2 grid gap-1 text-xs text-white/90">
                      {s.points.slice(0, 2).map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime-300 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Desktop: mosaic grid */}
          <div className="mt-10 hidden md:grid grid-cols-12 gap-6 auto-rows-[14rem]">
            {storage.map((s, idx) => {
              const spanCols = idx === 0 ? 'md:col-span-7' : idx === 1 ? 'md:col-span-5' : 'md:col-span-4';
              const spanRows = idx === 0 ? 'row-span-2' : 'row-span-1';
              return (
                <article
                  key={s.title}
                  className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition ${spanCols} ${spanRows}`}
                >
                  <div className="absolute inset-0">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width:1280px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm mb-2">
                      <s.icon className="h-4 w-4" />
                      <span>Storage</span>
                    </div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <ul className="mt-3 grid gap-1 text-sm text-white/90">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime-300 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operations flow — NEW: alternating vertical timeline */}
      <section id="flow" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Operations Timeline</h2>
            <p className="text-gray-600 mt-3">Alternating steps with visual context from dock to dispatch for fewer touches and higher accuracy.</p>
          </div>

          <div className="mt-10 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-200 via-green-300 to-green-200" />
            <div className="space-y-10">
              {flow.map((f, i) => {
                const left = i % 2 === 0;
                return (
                  <div key={f.n} className={`grid md:grid-cols-2 gap-6 items-center ${left ? '' : 'md:[&>*:first-child]:order-2'}`}>
                    <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
                      <Image src={f.image} alt={f.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur text-white text-sm shadow">
                        <f.icon className="h-4 w-4" />
                        <span>Step {f.n}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{f.title}</h3>
                      <p className="text-gray-700 mt-2">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WMS & Ops features — NEW: alternating splits */}
      <section id="features" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">WMS & Mobile Workflows</h2>
            <p className="text-gray-600 mt-3">Editorial-style splits highlight integrations, auto-ID, safety, and sustainability.</p>
          </div>

          <div className="mt-10 space-y-12">
            {features.map((ft, i) => (
              <div key={ft.title} className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
                  <Image src={ft.image} alt={ft.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div>
                  <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-3">
                    <ft.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-2xl">{ft.title}</h3>
                  <p className="text-gray-700 mt-2">{ft.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI snapshot — NEW: ring stats */}
      <section id="kpi" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">KPI Snapshot</h2>
            <p className="text-gray-600 mt-3">Visual rings emphasize lift and savings across core metrics.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: LineChart, label: 'Lines Picked/Hour', value: 30, text: '↑ 30%' },
              { icon: BarChart3, label: 'Inventory Accuracy', value: 99.5, text: '99.5%' },
              { icon: Layers, label: 'Space Utilization', value: 18, text: '↑ 18%' },
              { icon: BatteryCharging, label: 'Energy/Order', value: 15, text: '↓ 15%' },
            ].map((k) => (
              <div key={k.label} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div
                  className="mx-auto mb-4 relative h-24 w-24 rounded-full grid place-items-center"
                  style={{
                    background: `conic-gradient(#8bc34a ${k.value * 3.6}deg, #e5e7eb 0)`,
                  }}
                >
                  <div className="h-20 w-20 rounded-full bg-white grid place-items-center">
                    <k.icon className="h-6 w-6 text-green-700" />
                  </div>
                </div>
                <div className="text-xl font-bold text-green-800 mb-1">{k.text}</div>
                <div className="text-gray-600">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies — refreshed card visuals */}
      <section id="cases" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Case Studies</h2>
            <p className="text-gray-600 mt-3">Proof points across cycle time, accuracy, and energy outcomes.</p>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <article
                key={c.title}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-green-100 hover:border-[#8bc34a]/50"
              >
                <div className="relative h-56">
                  <Image src={c.image} alt={c.title} fill sizes="(max-width:1280px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    {c.impact}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{c.title}</h3>
                  <p className="text-[#689f38] font-medium mb-4">{c.client}</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {c.bullets.map((b) => (
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

      {/* Comparison — keep logic, refine styling */}
      <section id="compare" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Advanced vs Basic</h2>
            <p className="text-gray-600 mt-3">Clear contrasts across storage, picking, replenishment, and energy.</p>
            <div className="w-40 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] rounded-full mx-auto mt-6" />
          </div>

          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
              <LineChart className="h-5 w-5 text-gray-500" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search features, specs, or workflows…"
                className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="mt-10 hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <div className="sticky top-16 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                <div className="grid grid-cols-12 px-6 py-4 text-sm font-semibold text-gray-700">
                  <div className="col-span-4">Feature</div>
                  <div className="col-span-4">Advanced</div>
                  <div className="col-span-4">Basic</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {filtered.map((r) => (
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
            {filtered.map((r) => (
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
      <section id="faq" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Kaun sa racking mix best hota hai?', a: 'SKU velocity, dimensions, and seasonality ke hisaab se selective + density lanes blend optimal hota hai.' },
              { q: 'Pick accuracy kaise badhega?', a: 'RF/voice guidance, check-digit scans, cluster/batch strategies, aur QC checks accuracy boost karte hain.' },
              { q: 'Energy savings kahan milte hain?', a: 'LED + zoning, HVLS fans, skylights, and charger management se kWh/order reduce hota hai.' },
              { q: 'WMS integration?', a: 'ERP/eCom/APIs ke saath ASN, orders, inventory sync; device trails aur audit logs traceability ensure karte hain.' },
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
          <Image src="/images/warehouse/cta.jpg" alt="Plan warehouse project" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Plan a Warehouse Upgrade</h2>
            <p className="text-green-100 mt-3">Layout, slotting, WMS, and energy plan tailored to profile and growth roadmap.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-[#8bc34a] to-[#689f38] shadow-[0_12px_24px_-8px_rgba(139,195,74,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(104,159,56,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#storage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
              >
                Explore Storage
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
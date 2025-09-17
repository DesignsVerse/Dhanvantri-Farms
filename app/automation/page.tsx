'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Cpu,
  Satellite,
  Gauge,
  RadioTower,
  Cable,
  Workflow,
  BellRing,
  LineChart,
  QrCode,
  ScanBarcode,
  Bot,
  Cog,
  CircuitBoard,
  BatteryCharging,
  ArrowRight,
  ChevronRight,
  Play,
  X,
  CheckCircle2,
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

type Module = {
  icon: any;
  title: string;
  text: string;
  image: string;
  bullets: string[];
};

type Flow = {
  n: number;
  title: string;
  text: string;
  image: string;
  icon: any;
};

type Metric = { icon: any; label: string; value: string };

type CaseItem = {
  title: string;
  impact: string;
  image: string;
  bullets: string[];
};

export default function AutomationPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  const modules = useMemo<Module[]>(
    () => [
      {
        icon: Satellite,
        title: 'Sensing & Telemetry',
        text: 'Wireless sensors and gateways stream real‑time data for environment and equipment status.',
        image: '/images/automation/telemetry.jpg',
        bullets: ['Temp/RH, pressure, and door states', 'Power meters and vibration sensing', 'Gateway failover and buffering'],
      },
      {
        icon: CircuitBoard,
        title: 'PLC/SCADA Control',
        text: 'PLC logic with SCADA dashboards orchestrates setpoints, sequences, and interlocks safely.',
        image: '/images/automation/plc.jpg',
        bullets: ['VFD drives and PID loops', 'Interlocks and permissives', 'Remote access and audit trails'],
      },
      {
        icon: Workflow,
        title: 'WMS & Workflow',
        text: 'Mobile tasks, barcode/QR, and rule engines align people and flows with live priorities.',
        image: '/images/automation/wms.jpg',
        bullets: ['ASN→Putaway→Pick→Pack', 'Cluster/batch/zone picks', 'Exceptions and escalations'],
      },
      {
        icon: BellRing,
        title: 'Alerts & Escalations',
        text: 'Thresholds trigger tiered notifications, acknowledgements, and CAPA workflows.',
        image: '/images/automation/alerts.jpg',
        bullets: ['SMS/Email/WhatsApp', 'Silence windows and repeats', 'Incident closure notes'],
      },
      {
        icon: Bot,
        title: 'Robotics & Conveyance',
        text: 'AGVs/AMRs, conveyors, and sorters integrate for safer, faster, lower‑touch operations.',
        image: '/images/automation/robotics.jpg',
        bullets: ['Zone handoffs and IO link', 'Pick‑to‑light/put‑to‑wall', 'Throughput balancing'],
      },
      {
        icon: LineChart,
        title: 'Analytics & Reporting',
        text: 'KPI dashboards and trend lines surface energy, uptime, and SLA adherence clearly.',
        image: '/images/automation/analytics.jpg',
        bullets: ['Deviation logs and drill‑downs', 'Exportable audit reports', 'Live tiles and wallboards'],
      },
    ],
    []
  );

  const flow = useMemo<Flow[]>(
    () => [
      {
        n: 1,
        title: 'Sense',
        text: 'Collect signals from sensors, meters, scanners, and robotic endpoints into gateways.',
        image: '/images/automation/flow-sense.jpg',
        icon: Satellite,
      },
      {
        n: 2,
        title: 'Decide',
        text: 'PLC rules, WMS priorities, and policy engines resolve next actions and interlocks.',
        image: '/images/automation/flow-decide.jpg',
        icon: Cpu,
      },
      {
        n: 3,
        title: 'Act',
        text: 'Drives, relays, robots, and tasks execute with feedback loops for stability.',
        image: '/images/automation/flow-act.jpg',
        icon: Cog,
      },
      {
        n: 4,
        title: 'Verify',
        text: 'Barcode/QR scans, sensors, and telemetries confirm outcomes and close loops.',
        image: '/images/automation/flow-verify.jpg',
        icon: QrCode,
      },
      {
        n: 5,
        title: 'Learn',
        text: 'Dashboards and trends feed optimization cycles for energy and throughput gains.',
        image: '/images/automation/flow-learn.jpg',
        icon: LineChart,
      },
    ],
    []
  );

  const metrics: Metric[] = [
    { icon: BatteryCharging, label: 'Energy/order', value: '↓ 15%' },
    { icon: ScanBarcode, label: 'Scan accuracy', value: '99.7%' },
    { icon: Gauge, label: 'Cycle time', value: '↓ 22%' },
    { icon: RadioTower, label: 'Uptime SLA', value: '99.9%' },
  ];

  const cases: CaseItem[] = [
    {
      title: 'High‑Velocity eCom Node',
      impact: 'Throughput +28%',
      image: '/images/automation/case-ecom.jpg',
      bullets: ['Zone picking + PTL', 'Sorter + WMS rules', 'Exception dashboards'],
    },
    {
      title: 'Cold‑Chain DC',
      impact: 'Energy/t −18%',
      image: '/images/automation/case-cold.jpg',
      bullets: ['VFD ramps + defrost tuning', 'Door discipline analytics', 'Alert escalations'],
    },
    {
      title: 'AGV‑Enabled Hub',
      impact: 'Touch reduction −25%',
      image: '/images/automation/case-agv.jpg',
      bullets: ['AMR orchestration', 'IO‑linked handoffs', 'Task heatmaps'],
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/automation/hero.jpg"
            alt="Automation hero"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/70 via-green-900/40 to-green-900" />
          <div className="absolute -skew-y-3 bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-green-900/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-green-100 text-xs md:text-sm mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
                Intelligent Automation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Orchestrate Sensors, People, and Machines
              </h1>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Modular building blocks integrate sensing, PLC/SCADA, WMS workflows, alerts, and robotics into a cohesive, auditable system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#modules"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-lime-300 to-lime-400 shadow-[0_12px_24px_-8px_rgba(163,230,53,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(163,230,53,0.55)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Modules <ArrowRight className="h-5 w-5" />
                </a>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
                >
                  Watch Demo <Play className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((k) => (
                  <div key={k.label} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-5 shadow">
                    <k.icon className="h-6 w-6 text-white" />
                    <div className="text-2xl font-extrabold mt-2">{k.value}</div>
                    <div className="text-green-100/90">{k.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            key="video"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl">
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src=""
                  title="Automation demo"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modules */}
      <section id="modules" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Automation Modules</h2>
            <p className="text-gray-600 mt-3">
              Image‑led cards with concise bullet points show how each layer connects from sensing to analytics.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <article key={m.title} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-64">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    sizes="(max-width:1280px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm mb-2">
                    <m.icon className="h-4 w-4" />
                    <span>Module</span>
                  </div>
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{m.text}</p>
                  <ul className="mt-3 grid gap-1 text-sm text-white/90">
                    {m.bullets.map((b) => (
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

      {/* Orchestration Flow */}
      <section id="flow" className="bg-green-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Orchestration Flow</h2>
            <p className="text-gray-600 mt-3">Alternating timeline with context images and crisp copy.</p>
          </div>

          <div className="mt-10 space-y-10 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-200 via-green-300 to-green-200" />
            {flow.map((f, i) => {
              const left = i % 2 === 0;
              return (
                <div key={f.n} className={['grid md:grid-cols-2 gap-6 items-center', left ? '' : 'md:[&>*:first-child]:order-2'].join(' ')}>
                  <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
                    <Image src={f.image} alt={f.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
      </section>

      {/* Dashboards */}
      <section id="dashboards" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Dashboards & KPIs</h2>
            <p className="text-gray-600 mt-3">Surface deviations and trends for faster root‑cause and continuous improvement.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { title: 'Energy & Load', text: 'kW, kWh/order, and heatmaps by time and zone.', image: '/images/automation/db-energy.jpg' },
              { title: 'Throughput & SLA', text: 'Wave completion, order aging, and dwell times.', image: '/images/automation/db-sla.jpg' },
              { title: 'Quality & Alerts', text: 'Deviation logs, acks, and CAPA closures.', image: '/images/automation/db-quality.jpg' },
            ].map((card) => (
              <article key={card.title} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-44">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width:1280px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="bg-green-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Case Studies</h2>
            <p className="text-gray-600 mt-3">Measured outcomes from integrated automation rollouts.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <article key={c.title} className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-green-100 hover:border-[#8bc34a]/50">
                <div className="relative h-56">
                  <Image src={c.image} alt={c.title} fill sizes="(max-width:1280px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    {c.impact}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{c.title}</h3>
                  <ul className="text-sm text-gray-700 space-y-2 mt-3">
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

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/automation/cta.jpg"
            alt="Automation CTA"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Plan an Automation Upgrade</h2>
            <p className="text-green-100 mt-3">
              Get a block‑by‑block plan across sensing, control, workflows, alerts, and analytics tailored to targets.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-[#8bc34a] to-[#689f38] shadow-[0_12px_24px_-8px_rgba(139,195,74,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(104,159,56,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
              >
                Explore Modules
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

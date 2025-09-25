'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { 
  Snowflake, Thermometer, ThermometerSnowflake, Gauge, Wind, Droplets, ShieldCheck, Bolt, BatteryCharging, Factory, 
  Boxes, Package, Clock, LineChart, Satellite, BarChart3, ChartLine, Cog, Recycle, Leaf, Sparkles, ArrowRight, ChevronRight, 
  CheckCircle2, XCircle, AlarmClock, Flame 
} from 'lucide-react';

type Zone = {
  key: string;
  title: string;
  temp: string;
  desc: string;
  icon: any;
  bullets: string[];
};

type Infra = {
  title: string;
  icon: any;
  points: string[];
};

type ProcessStep = {
  n: number;
  title: string;
  text: string;
  icon: any;
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

  /* Temperature zones */
  const zones = useMemo<Zone[]>(
    () => [
      {
        key: 'frozen',
        title: 'Frozen Storage',
        temp: '-18°C to -25°C',
        desc: 'Deep-freeze chambers for meat, seafood, and long-term storage where temperature stability and door discipline are critical.',
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
        desc: 'Fresh produce, dairy, and beverages benefit from tight temperature uniformity with gentle airflow and humidity control.',
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
        desc: 'Controlled/Modified Atmosphere rooms modulate O2/CO2 for apples, pears, and exotics to extend shelf life significantly.',
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
        desc: 'High-capacity blast tunnels to rapidly remove field heat and pass through the danger zone for quality retention.',
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
        desc: 'Hydrovac/forced-air pre-cool before storage reduces respiration rates and post-harvest losses.',
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
        icon: ShieldCheck,
        points: [
          'PUF/PIR panels with camlocks, 60–200 mm thickness',
          'Food-grade laminates, cleanable finishes',
          'Detailed vapor barrier and joint sealing',
        ],
      },
      {
        title: 'Doors & Docking',
        icon: Boxes,
        points: [
          'Rapid roll-up and swing doors with heaters',
          'Dock levelers, shelters, and bumpers',
          'Air curtains for infiltration control',
        ],
      },
      {
        title: 'Flooring & Racking',
        icon: Package,
        points: [
          'Heated slab or glycol loops for frozen areas',
          'Antiskid coatings with drainage slopes',
          'Mobile/drive-in racking for high density',
        ],
      },
      {
        title: 'Refrigeration Plant',
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
      },
      {
        n: 2,
        title: 'Pre-Cool / Blast',
        text: 'Remove field heat or rapidly freeze to pass the danger zone quickly while tracking core temperatures.',
        icon: Flame,
      },
      {
        n: 3,
        title: 'Putaway',
        text: 'Location assignment by temperature zone, rotation rules (FEFO/FIFO), and SKU compatibility.',
        icon: Boxes,
      },
      {
        n: 4,
        title: 'Monitoring',
        text: 'Continuous sensing of temp/humidity/door and real-time alerts with audit-friendly logs and graphs.',
        icon: Satellite,
      },
      {
        n: 5,
        title: 'Picking & Dispatch',
        text: 'Order consolidation with minimal door time; validation, labeling, and cold-chain handoff.',
        icon: Clock,
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

  /* Search filter for comparison */
  const [q, setQ] = useState('');

  const filteredCompare = useMemo(() => {
    if (!q) return compare;
    const s = q.toLowerCase();
    return compare.filter((r) => r.feature.toLowerCase().includes(s) || r.advanced.toLowerCase().includes(s) || r.basic.toLowerCase().includes(s));
  }, [q, compare]);

  return (
    <main className="bg-white text-gray-900">
       <section id="hero" className="relative overflow-hidden bg-green-900 text-white pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/service/cold/cold.jpg" 
            alt="Cold Storage Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-green-100 text-xs md:text-sm mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
                Sustainable Cold Chain Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Advanced Cold Storage Technology
              </h1>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#8bc34a] to-[#689f38] rounded-full my-6" />
              <p className="text-lg md:text-xl text-green-100/95 max-w-2xl">
                Dhanvantri Farms delivers state-of-the-art cold storage solutions, ensuring precision cooling,
                energy efficiency, and compliance for seamless cold chain logistics.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#zones"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-lime-300 to-lime-400 shadow-[0_12px_24px_-8px_rgba(163,230,53,0.45)]"
                >
                  Explore Zones <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#iot"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 border border-white/20 backdrop-blur"
                >
                  Monitoring & Alerts <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* KPIs */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: LineChart, label: 'Energy/t Reduced', value: 'up to 20%' },
                  { icon: Snowflake, label: 'Setpoint Stability', value: '±0.5°C' },
                  { icon: Droplets, label: 'RH Control', value: '35–90% RH' },
                  { icon: ShieldCheck, label: 'Uptime SLA', value: '99.9%' },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-5 shadow"
                  >
                    <kpi.icon className="h-6 w-6 text-white" />
                    <div className="text-2xl font-extrabold mt-2">{kpi.value}</div>
                    <div className="text-green-100/90">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              <article key={z.key} className="relative rounded-3xl overflow-hidden shadow-lg border border-green-100 bg-green-50">
                <div className="p-5 text-gray-900">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm mb-2">
                    <z.icon className="h-4 w-4" />
                    <span>{z.temp}</span>
                  </div>
                  <h3 className="text-xl font-bold">{z.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{z.desc}</p>
                  <ul className="mt-3 grid grid-cols-1 gap-1 text-sm text-gray-700">
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
              <article key={i.title} className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="p-5">
                  <div className="h-44 flex items-center justify-center bg-green-50">
                    <i.icon className="h-16 w-16 text-[#8bc34a]" />
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
              <article key={s.n} className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="p-5">
                  <div className="h-44 flex items-center justify-center bg-green-50">
                    <s.icon className="h-16 w-16 text-[#8bc34a]" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm mb-2">
                    <s.icon className="h-4 w-4" />
                    <span>Step {s.n}</span>
                  </div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{s.text}</p>
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
                  <div key={r.feature} className="grid grid-cols-12 px-6 py-4 items-start">
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

      {/* CTA */}
      {/* <section id="cta" className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0 bg-green-50 flex items-center justify-center">
          <Snowflake className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 text-[#8bc34a] opacity-50" />
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-[#8bc34a] to-[#689f38] shadow-[0_12px_24px_-8px_rgba(139,195,74,0.45)]"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#zones"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/10 border border-white/20 backdrop-blur"
              >
                Explore Zones
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
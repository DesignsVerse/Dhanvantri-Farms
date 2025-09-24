'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Leaf, Sprout, Droplets, ShieldCheck, Flower2, TreePine } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function OrganicVisualPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Section 1: Image-led Story (alternating rows, no borders) */}
      <section id="story" className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/service/organic/1.jpg"
            alt="Dhanvantri Farms Organic Fields"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-green-100 text-xs md:text-sm mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-lime-300" />
              Sustainable Organic Farming
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Guide to Organic Farming Excellence
            </h1>
            <p className="text-lg md:text-xl text-green-100/95 max-w-2xl mt-4">
              Discover Dhanvantri Farms’ organic solutions, fostering healthy soils, biodiversity, and premium-quality produce through sustainable practices.
            </p>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-5 py-3 mt-8 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-lime-300 to-lime-400 shadow-[0_12px_24px_-8px_rgba(163,230,53,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(163,230,53,0.55)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Visuals <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Alternating rows */}
        <div className="relative z-10 container mx-auto px-4 pb-14 space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image
            src="/service/organic/2.jpg"
            alt="Healthy Soil by Dhanvantri Farms"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Soil Health First</h3>
              <p className="text-green-100/95 mt-3 text-lg">
                At Dhanvantri Farms, we prioritize living soils with compost and cover crops to enhance nutrient cycling, ensuring resilient and sustainable yields.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden md:order-2">
              <Image
            src="/service/organic/4.jpg"
            alt="Crop Rotation by Dhanvantri Farms"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl md:text-3xl font-extrabold">Rotations & Diversity</h3>
              <p className="text-green-100/95 mt-3 text-lg">
                Dhanvantri Farms promotes crop rotation and diverse planting to disrupt pest cycles and boost soil fertility, ensuring consistent organic production.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image
            src="/service/organic/3.jpg"
            alt="Cover Crops by Dhanvantri Farms"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Cover Crops & Habitat</h3>
              <p className="text-green-100/95 mt-3 text-lg">
                With Dhanvantri Farms’ organic solutions, cover crops and habitat strips protect soil, fix nitrogen, and enhance natural pest control for sustainable farming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Showcase Gallery (cards feel without boxes; big imagery + overlays) */}
      <section id="gallery" className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Showcase Gallery</h2>
            <p className="text-gray-600 mt-3">
              A visual playlist of organic practices: composting, IPM habitat, on‑farm amendments, and climate‑smart water management.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Compost in Action',
                text: 'Stable organic matter feeds microbes, improves tilth, and boosts CEC for nutrient retention.',
                src: '/service/organic/5.jpg',
                icon: <Droplets className="h-5 w-5" />,
              },
              {
                title: 'Pollinator Strips',
                text: 'Flowering borders attract beneficials, increasing biological control and fruit set.',
                src: '/service/organic/6.jpg',
                icon: <Flower2 className="h-5 w-5" />,
              },
              {
                title: 'Agroforestry Lanes',
                text: 'Trees buffer wind, cycle nutrients, and add perennial value to annual rotations.',
                src: '/service/organic/7.jpg',
                icon: <TreePine className="h-5 w-5" />,
              },
              {
                title: 'Irrigation Efficiency',
                text: 'Scheduling and mulches reduce evaporation and improve water productivity.',
                src: '/service/organic/8.jpg',
                icon: <ShieldCheck className="h-5 w-5" />,
              },
              {
                title: 'Seedling Vigor',
                text: 'Transplants from biologically active media establish fast and uniform.',
                src: '/service/organic/9.jpg',
                icon: <Sprout className="h-5 w-5" />,
              },
              {
                title: 'Leafy Quality',
                text: 'Cooler canopies and balanced nutrition deliver color, texture, and shelf life.',
                src: '/service/organic/10.jpg',
                icon: <Leaf className="h-5 w-5" />,
              },
            ].map((card, idx) => (
              <a key={idx} href="#details" className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-64">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-90" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm mb-2">
                    {card.icon}
                    <span>Organic Practice</span>
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{card.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Longform with full-bleed images (minimal chrome, more content) */}
      {/* <section id="deep-dive" className="bg-gray-50">
        <div className="container mx-auto px-0 md:px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">Deep Dive: From Transition to Certification</h2>
            <p className="text-gray-700 mt-4 text-lg">
              Transition usually spans three seasons without prohibited substances while building soil organic matter, redesigning rotations, and documenting an Organic System Plan that covers inputs, water, habitats, and post‑harvest handling.
            </p>
          </div>

      
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] mt-10">
            <Image
              src="/images/organic/transition.jpg"
              alt="Organic transition landscape"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Three‑Year Transition</h3>
              <p className="mt-2 max-w-3xl text-white/95">
                Map fields, track histories, and shift to allowed inputs; prioritize compost, cover crops, and preventive IPM to set a durable baseline.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl px-4 mt-10 space-y-6">
            <p className="text-gray-700 text-lg">
              Prevention, monitoring, and habitat are the backbone of organic IPM; only after thresholds are crossed should allowed biopesticides be considered, applied precisely to conserve beneficials and resistance management.
            </p>
            <p className="text-gray-700 text-lg">
              Inspections review records, inputs, buffer zones, equipment sanitation, and handling; annual updates keep certification current and transparent for supply chains and markets.
            </p>
          </div>

         
          <div className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] mt-12">
            <Image
              src="/images/organic/cert.jpg"
              alt="Organic certification check"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Certification & Integrity</h3>
              <p className="mt-2 max-w-3xl text-white/95">
                Keep input logs, seed searches, invoices, and field activities organized; clear documentation smooths inspections and protects label integrity.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/organic/cta.jpg"
            alt="Get organic help"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/30 to-green-900" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Plan an Organic Upgrade</h2>
            <p className="text-green-100 mt-3">
              Get a field‑by‑field roadmap from transition tasks to IPM, rotations, and certification support with timelines and milestones.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-900 bg-gradient-to-b from-[#8bc34a] to-[#689f38] shadow-[0_12px_24px_-8px_rgba(139,195,74,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(104,159,56,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
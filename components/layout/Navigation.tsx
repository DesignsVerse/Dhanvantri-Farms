'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const menuItems = [
    {
      label: 'Net House',
      href: '/net-house',
      dropdown: [
        { label: 'Overview', href: '/net-house#intro' },
        { label: 'Net House Designs', href: '/net-house#types' },
        { label: 'Key Advantages', href: '/net-house#advantages' },
        { label: 'Performance Insights', href: '/net-house#stats' },
        { label: 'Net House vs Others', href: '/net-house#comparison' },
        { label: 'Common Questions', href: '/net-house#faq' },
        { label: 'Get in Touch', href: '/net-house#cta' },
      ],
    },
    {
      label: 'Hydroponics',
      href: '/hydroponics',
      dropdown: [
        { label: 'Introduction', href: '/hydroponics#intro' },
        { label: 'Farming Systems', href: '/hydroponics#types' },
        { label: 'Benefits & Yields', href: '/hydroponics#advantages' },
        { label: 'Growth Statistics', href: '/hydroponics#stats' },
        { label: 'FAQs', href: '/hydroponics#faq' },
        { label: 'Contact Experts', href: '/hydroponics#contact' },
      ],
    },
    // {
    //   label: 'Automation',
    //   href: '/automation',
    //   dropdown: [
    //     { label: 'Polyhouse Controls', href: '/automation/polyhouse' },
    //     { label: 'Hydroponics Controls', href: '/automation/hydroponics' },
    //     { label: 'Smart Priva Systems', href: '/automation/priva' },
    //   ],
    // },
    {
      label: 'Polyhouse',
      href: '/polyhouse',
      dropdown: [
        { label: 'Introduction', href: '/polyhouse' },
        { label: 'Overview & Types', href: '/polyhouse/polyhouse-advantages#menu1' },
        { label: 'Unique Features', href: '/polyhouse/polyhouse-advantages#menu2' },
        { label: 'Cost Planning', href: '/polyhouse/polyhouse-advantages#menu3' },
        { label: 'Advantages', href: '/polyhouse/polyhouse-advantages#menu4' },
        { label: 'Limitations', href: '/polyhouse/polyhouse-advantages#menu5' },
      ],
    },
    {
      label: 'Organic Farming',
      href: '/organic-farming',
      dropdown: [
        { label: 'What is Organic?', href: '/organic-farming/introduction' },
        { label: 'Farming Practices', href: '/organic-farming/techniques' },
        { label: 'Certification Guide', href: '/organic-farming/certification' },
      ],
    },
    {
      label: 'Warehouse',
      href: '/warehouse',
      dropdown: [
        { label: 'Introduction', href: '/warehouse#hero' },
        { label: 'Storage Solutions', href: '/warehouse#storage' },
        { label: 'Operational Flow', href: '/warehouse#flow' },
        { label: 'WMS Features', href: '/warehouse#features' },
        { label: 'Performance KPIs', href: '/warehouse#kpi' },
        { label: 'Photo Gallery', href: '/warehouse#gallery' },
        { label: 'Case Studies', href: '/warehouse#cases' },
        { label: 'Comparison', href: '/warehouse#compare' },
        { label: 'FAQs', href: '/warehouse#faq' },
        { label: 'Talk to Us', href: '/warehouse#cta' },
      ],
    },
    {
      label: 'Cold Storage',
      href: '/cold-storage',
      dropdown: [
        { label: 'Introduction', href: '/cold-storage#hero' },
        { label: 'Storage Zones', href: '/cold-storage#zones' },
        { label: 'Infrastructure Setup', href: '/cold-storage#infra' },
        { label: 'Operational Process', href: '/cold-storage#process' },
        { label: 'IoT Monitoring', href: '/cold-storage#iot' },
        { label: 'Energy Efficiency', href: '/cold-storage#energy' },
        { label: 'Photo Gallery', href: '/cold-storage#gallery' },
        { label: 'Case Studies', href: '/cold-storage#cases' },
        { label: 'Comparison', href: '/cold-storage#compare' },
        { label: 'FAQs', href: '/cold-storage#faq' },
        { label: 'Contact Us', href: '/cold-storage#cta' },
      ],
    },
    { label: 'About Us', href: '/about' },
    { label: 'Innovation Hub', href: '/innovation' },
    { label: 'Contact Us', href: '/contact' },
  ];
  

  return (
    <>
      {/* Marquee */}
      <div className="bg-gradient-to-r from-lime-400 to-green-700 text-white text-sm py-2 overflow-hidden whitespace-nowrap shadow-md">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="inline-block font-medium"
        >
          Transforming Agriculture with Smart Solutions • Increase Yields by 400% • Sustainable Farming for the Future • Contact Us for Free Consultation •
        </motion.div>
      </div>

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Leaf className="w-8 h-8 text-lime-400" />
              </motion.div>
              <span className="text-xl sm:text-2xl font-extrabold text-green-950">Dhanvantri Farms</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-sm space-x-1 text-green-950 hover:text-lime-400 font-semibold transition-colors duration-300"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-lime-400/20 py-3 z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-black hover:bg-green-600/20 hover:text-lime-800 transition-all duration-300"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-1.5 sm:p-2 rounded-full hover:bg-green-600/20 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-lime-400 sm:w-7 sm:h-7" />
              ) : (
                <Menu className="w-6 h-6 text-lime-400 sm:w-7 sm:h-7" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black z-40"
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Sliding menu */}
                <motion.nav
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="fixed top-0 left-0 h-full w-[80vw] max-w-xs bg-white shadow-xl z-50 overflow-y-auto pb-10 pt-16 px-4"
                >
                  {menuItems.map((item) => (
                    <div key={item.label} className="mb-4 last:mb-0">
                      <Link
                        href={item.href}
                        className="block py-3 px-2 rounded-md text-green-950 hover:text-lime-400 hover:bg-green-600/20 font-semibold text-base transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.25 }}
                          className="ml-4 mt-2 space-y-2 border-l border-lime-400/30 pl-3"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-2 text-sm text-gray-700 hover:text-lime-400 transition-colors duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

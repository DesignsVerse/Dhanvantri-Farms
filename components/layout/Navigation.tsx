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
      id: 'net-house',
      label: 'Net House',
      href: '/net-house',
      dropdown: [
        { id: 'net-house-solutions', label: 'Net House Solutions', href: '/net-house' },
        { id: 'net-house-types', label: 'Designs & Types', href: '/net-house#types' },
        { id: 'net-house-benefits', label: 'Key Benefits', href: '/net-house#advantages' },
        { id: 'net-house-stats', label: 'Performance Data', href: '/net-house#stats' },
        { id: 'net-house-comparison', label: 'Comparison Guide', href: '/net-house#comparison' },
        { id: 'net-house-faq', label: 'FAQ', href: '/net-house#faq' },
        { id: 'net-house-quote', label: 'Get Quote', href: '/net-house#cta' },
      ],
    },
    {
      id: 'hydroponics',
      label: 'Hydroponics',
      href: '/hydroponics',
      dropdown: [
        { id: 'hydroponics-overview', label: 'System Overview', href: '/hydroponics#intro' },
        { id: 'hydroponics-methods', label: 'Farming Methods', href: '/hydroponics#types' },
        { id: 'hydroponics-benefits', label: 'Benefits & ROI', href: '/hydroponics#advantages' },
        { id: 'hydroponics-stories', label: 'Success Stories', href: '/hydroponics#stats' },
        { id: 'hydroponics-support', label: 'Expert Support', href: '/hydroponics#why-dhanvantri' },
        { id: 'hydroponics-faq', label: 'FAQ', href: '/hydroponics#faq' },
      ],
    },
    {
      id: 'polyhouse',
      label: 'Polyhouse',
      href: '/polyhouse',
      dropdown: [
        { id: 'polyhouse-overview', label: 'Polyhouse Overview', href: '/polyhouse' },
        { id: 'polyhouse-types', label: 'Types & Designs', href: '/polyhouse/polyhouse-advantages#menu1' },
        { id: 'polyhouse-features', label: 'Advanced Features', href: '/polyhouse/polyhouse-advantages#menu2' },
        { id: 'polyhouse-investment', label: 'Investment Planning', href: '/polyhouse/polyhouse-advantages#menu3' },
        { id: 'polyhouse-benefits', label: 'Benefits & ROI', href: '/polyhouse/polyhouse-advantages#menu4' },
        { id: 'polyhouse-considerations', label: 'Considerations', href: '/polyhouse/polyhouse-advantages#menu5' },
      ],
    },
    {
      id: 'organic-farming',
      label: 'Organic Farming',
      href: '/organic-farming',
      dropdown: [
        { id: 'organic-guide', label: 'Organic Farming Guide', href: '/organic-farming' },
        { id: 'organic-story', label: 'Visual Story', href: '/organic-farming#story' },
        { id: 'organic-gallery', label: 'Practice Gallery', href: '/organic-farming#gallery' },
        { id: 'organic-start', label: 'Get Started', href: '/organic-farming#cta' },
      ],
    },
    {
      id: 'mushroom-farming',
      label: 'Mushroom',
      href: '/mushroom',
      dropdown: [
        { id: 'mushroom-overview', label: 'Mushroom Farming Overview', href: '/mushroom' },
        { id: 'mushroom-types', label: 'Mushroom Types', href: '/mushroom#types' },
        { id: 'mushroom-benefits', label: 'Key Benefits', href: '/mushroom#advantages' },
        { id: 'mushroom-stats', label: 'Performance Stats', href: '/mushroom#stats' },
        { id: 'mushroom-comparison', label: 'Comparison Guide', href: '/mushroom#comparison' },
        { id: 'mushroom-faq', label: 'FAQ', href: '/mushroom#faq' },
        { id: 'mushroom-quote', label: 'Get Quote', href: '/mushroom#cta' },
      ],
    },
    {
      id: 'saffron-farming',
      label: 'Indore Saffron',
      href: '/indoor-saffron',
      dropdown: [
        { id: 'saffron-overview', label: 'Saffron Farming Overview', href: '/indoor-saffron' },
        { id: 'saffron-types', label: 'Farming Systems', href: '/indoor-saffron#types' },
        { id: 'saffron-benefits', label: 'Key Benefits', href: '/indoor-saffron#advantages' },
        { id: 'saffron-stats', label: 'Performance Stats', href: '/indoor-saffron#stats' },
        { id: 'saffron-comparison', label: 'Comparison Guide', href: '/indoor-saffron#comparison' },
        { id: 'saffron-faq', label: 'FAQ', href: '/indoor-saffron#faq' },
        { id: 'saffron-quote', label: 'Get Quote', href: '/indoor-saffron#cta' },
      ],
    },
    {
      id: 'warehouse',
      label: 'Warehouse',
      href: '/warehouse',
      dropdown: [
        { id: 'warehouse-management', label: 'Warehouse Management', href: '/warehouse' },
        { id: 'warehouse-storage', label: 'Storage Systems', href: '/warehouse#storage' },
        { id: 'warehouse-flow', label: 'Operations Flow', href: '/warehouse#flow' },
        { id: 'warehouse-comparison', label: 'Comparison Guide', href: '/warehouse#compare' },
        { id: 'warehouse-faq', label: 'FAQ', href: '/warehouse#faq' },
        { id: 'warehouse-start', label: 'Get Started', href: '/warehouse#cta' },
      ],
    },
    {
      id: 'cold-storage',
      label: 'Cold Storage',
      href: '/cold-storage',
      dropdown: [
        { id: 'cold-storage-systems', label: 'Cold Storage Systems', href: '/cold-storage' },
        { id: 'cold-storage-zones', label: 'Temperature Zones', href: '/cold-storage#zones' },
        { id: 'cold-storage-infra', label: 'Infrastructure', href: '/cold-storage#infra' },
        { id: 'cold-storage-process', label: 'Operations', href: '/cold-storage#process' },
        { id: 'cold-storage-comparison', label: 'Comparison Guide', href: '/cold-storage#compare' },
      ],
    },
    {
      id: 'about-us',
      label: 'About Us',
      href: '/about',
    },
    // {
    //   id: 'innovation-hub',
    //   label: 'Innovation Hub',
    //   href: '/innovation',
    // },
    {
      id: 'contact-us',
      label: 'Contact Us',
      href: '/contact',
    },
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
🌱 Revolutionizing Agriculture with Smart Technology • Boost Crop Yields by 300-400% • Sustainable & Profitable Farming Solutions • Free Expert Consultation Available • Book Your Site Visit Today •
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

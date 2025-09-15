'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // ✅ Simplified menu (only main items)
  const menuItems = [
    {
      label: 'Polyhouse',
      href: '/polyhouse',
      dropdown: [
        { label: 'Polyhouse', href: '/polyhouse' },

        { label: 'Overview', href: '/polyhouse/polyhouse-advantages#menu1' },
        { label: 'Features', href: '/polyhouse/polyhouse-advantages#menu2' },
        { label: 'Cost', href: '/polyhouse/polyhouse-advantages#menu3' },
        { label: 'Advantages', href: '/polyhouse/polyhouse-advantages#menu4' },
        { label: 'Disadvantages', href: '/polyhouse/polyhouse-advantages#menu5' },
      ],
    },
    {
      label: 'Net House',
      href: '/net-house',
      dropdown: [
        { label: 'Introduction', href: '/net-house/introduction' },
        { label: 'Types', href: '/net-house/types' },
        { label: '1 Acre Cost Planning', href: '/net-house/cost-planning' },
      ],
    },
    {
      label: 'Hydroponics',
      href: '/hydroponics',
      dropdown: [
        { label: 'Introduction', href: '/hydroponics/introduction' },
        { label: 'Types (NFT, DWC, Vertical)', href: '/hydroponics/types' },
        { label: 'Why Choose Us?', href: '/hydroponics/why-choose-us' },
      ],
    },
    {
      label: 'Automation',
      href: '/automation',
      dropdown: [
        { label: 'Polyhouse Automation', href: '/automation/polyhouse' },
        { label: 'Hydroponics Automation', href: '/automation/hydroponics' },
        { label: 'Priva Systems', href: '/automation/priva' },
      ],
    },
    {
      label: 'Organic Farming',
      href: '/organic-farming',
      dropdown: [
        { label: 'Introduction', href: '/organic-farming/introduction' },
        { label: 'Techniques', href: '/organic-farming/techniques' },
        { label: 'Certification', href: '/organic-farming/certification' },
      ],
    },
    {
      label: 'Warehouse',
      href: '/warehouse',
      dropdown: [
        { label: 'Solutions', href: '/warehouse/solutions' },
        { label: 'Cost Planning', href: '/warehouse/cost-planning' },
      ],
    },
    {
      label: 'Cold Storage',
      href: '/cold-storage',
      dropdown: [
        { label: 'Introduction', href: '/cold-storage/introduction' },
        { label: 'Types', href: '/cold-storage/types' },
        { label: 'Setup Cost', href: '/cold-storage/cost' },
      ],
    },
    { label: 'About', href: '/about' },
    { label: 'Innovation', href: '/innovation' },
    { label: 'Contact', href: '/contact' },
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
              <span className="text-xl sm:text-2xl font-extrabold text-green-950">
                Dhanvantri Farms
              </span>
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
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden py-4 border-t border-lime-400/20 overflow-hidden"
              >
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-2 px-4 text-green-950 hover:text-lime-400 hover:bg-green-600/20 font-semibold text-base transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-6 space-y-1"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-1.5 text-sm text-gray-600 hover:text-lime-400 hover:pl-1 transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

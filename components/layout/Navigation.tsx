'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: 'Polyhouse',
      href: '/polyhouse',
      dropdown: [
        { label: 'Naturally Ventilated Polyhouse', href: '/polyhouse/naturally-ventilated' },
        { label: 'Types of Polyhouse', href: '/polyhouse/types' },
        { label: 'Advantages', href: '/polyhouse/advantages' },
        { label: 'Features', href: '/polyhouse/features' },
        { label: 'Setup Cost', href: '/polyhouse/cost' },
        { label: 'FAQs', href: '/polyhouse/faqs' },
      ],
    },
    {
      label: 'Net House',
      href: '/net-house',
      dropdown: [
        { label: 'What is Net House?', href: '/net-house/introduction' },
        { label: 'Types', href: '/net-house/types' },
        { label: 'Benefits', href: '/net-house/benefits' },
        { label: '1 Acre Cost Planning', href: '/net-house/cost-planning' },
      ],
    },
    {
      label: 'Hydroponics',
      href: '/hydroponics',
      dropdown: [
        { label: 'What is Hydroponics?', href: '/hydroponics/introduction' },
        { label: 'Types (NFT, DWC, Drip, Vertical)', href: '/hydroponics/types' },
        { label: 'Advantages', href: '/hydroponics/advantages' },
        { label: 'Why Choose Us?', href: '/hydroponics/why-choose-us' },
        { label: 'FAQs', href: '/hydroponics/faqs' },
      ],
    },
    {
      label: 'Automation',
      href: '/automation',
      dropdown: [
        { label: 'Polyhouse Automation', href: '/automation/polyhouse' },
        { label: 'Hydroponics Automation', href: '/automation/hydroponics' },
        { label: 'Priva Systems', href: '/automation/priva' },
        { label: 'Autogrow Solutions', href: '/automation/autogrow' },
        { label: 'Bluelab Tools', href: '/automation/bluelab' },
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
          Transforming Agriculture with Smart Solutions&nbsp;&nbsp;•&nbsp;&nbsp;Increase Yields by 400%&nbsp;&nbsp;•&nbsp;&nbsp;Sustainable Farming for the Future&nbsp;&nbsp;•&nbsp;&nbsp;Contact Us for Free Consultation&nbsp;&nbsp;•&nbsp;&nbsp;
          Transforming Agriculture with Smart Solutions&nbsp;&nbsp;•&nbsp;&nbsp;Increase Yields by 400%&nbsp;&nbsp;•&nbsp;&nbsp;Sustainable Farming for the Future&nbsp;&nbsp;•&nbsp;&nbsp;Contact Us for Free Consultation&nbsp;&nbsp;•&nbsp;&nbsp;
        </motion.div>
      </div>

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Leaf className="w-8 h-8 text-lime-400" />
              </motion.div>
              <span className="text-2xl sm:text-3xl font-extrabold text-green-950">
                Dhanvantri Farms
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-green-950 hover:text-lime-400 font-semibold text-base transition-colors duration-300"
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
                        className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-lime-400/20 py-3 z-50 overflow-hidden"
                        style={{ willChange: 'opacity, transform' }}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-green-600/20 hover:text-lime-400 transition-all duration-300"
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
                style={{ willChange: 'opacity, height' }}
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
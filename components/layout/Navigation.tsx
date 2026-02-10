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
      id: 'our-services',
      label: 'Our Services',
      href: '#',
      dropdown: [
        { id: 'net-house', label: 'Net House', href: '/net-house' },
        { id: 'hydroponics', label: 'Hydroponics', href: '/hydroponics' },
        { id: 'polyhouse', label: 'Polyhouse', href: '/polyhouse' },
        { id: 'organic-farming', label: 'Organic Farming', href: '/organic-farming' },
        { id: 'mushroom', label: 'Mushroom', href: '/mushroom' },
        { id: 'indoor-saffron', label: 'Indoor Saffron', href: '/indoor-saffron' },
        { id: 'warehouse', label: 'Warehouse', href: '/warehouse' },
        { id: 'cold-storage', label: 'Cold Storage', href: '/cold-storage' },
        { id: 'automation', label: 'Automation', href: '/automation' },
      ],
    },
    {
      id: 'about-us',
      label: 'About Us',
      href: '/about',
    },
    {
      id: 'blog',
      label: 'Blog',
      href: '/blog',
    },
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
                  {item.dropdown ? (
                    <div className="flex items-center text-sm space-x-1 text-green-950 hover:text-lime-400 font-semibold transition-colors duration-300 cursor-pointer">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-sm space-x-1 text-green-950 hover:text-lime-400 font-semibold transition-colors duration-300"
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}

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
                      {item.dropdown ? (
                        <div className="block py-3 px-2 rounded-md text-green-950 hover:text-lime-400 hover:bg-green-600/20 font-semibold text-base transition-colors duration-300">
                          {item.label}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-3 px-2 rounded-md text-green-950 hover:text-lime-400 hover:bg-green-600/20 font-semibold text-base transition-colors duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
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

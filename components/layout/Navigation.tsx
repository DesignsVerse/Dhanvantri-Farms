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
      ]
    },
    {
      label: 'Net House',
      href: '/net-house',
      dropdown: [
        { label: 'What is Net House?', href: '/net-house/introduction' },
        { label: 'Types', href: '/net-house/types' },
        { label: 'Benefits', href: '/net-house/benefits' },
        { label: '1 Acre Cost Planning', href: '/net-house/cost-planning' },
      ]
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
      ]
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
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Innovation', href: '/innovation' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Small Top Marquee - Enhanced with theme colors */}
      <div className="bg-[#8bc34a] text-white text-base py-3 overflow-hidden whitespace-nowrap shadow-md">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} // Increased duration for slower scroll
          className="inline-block font-medium"
        >
          Transforming Agriculture with Smart Solutions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Increase Yields by 400%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sustainable Farming for the Future&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us Today for Free Consultation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Transforming Agriculture with Smart Solutions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Increase Yields by 400%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sustainable Farming for the Future&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us Today for Free Consultation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </motion.div>
      </div>

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Leaf className="w-10 h-10 text-[#8bc34a]" />
              </motion.div>
              <span className="text-3xl font-extrabold text-gray-900">
                Dhanvantri Farms
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-[#8bc34a] font-medium text-lg transition-colors duration-300"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-green-100 py-4 z-50 overflow-hidden"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-6 py-3 text-base text-gray-700 hover:bg-green-50 hover:text-[#8bc34a] transition-all duration-300"
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
              className="lg:hidden p-2 rounded-full hover:bg-green-50 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8 text-[#8bc34a]" /> : <Menu className="w-8 h-8 text-[#8bc34a]" />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="lg:hidden py-6 border-t border-green-100 overflow-hidden"
              >
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-4 px-4 text-gray-700 hover:text-[#8bc34a] hover:bg-green-50 font-medium text-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="ml-8 space-y-2 pb-4"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-base text-gray-600 hover:text-[#8bc34a] hover:pl-2 transition-all duration-300"
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

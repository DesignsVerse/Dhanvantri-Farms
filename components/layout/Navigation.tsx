'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Leaf } from 'lucide-react';

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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-700" />
            <span className="text-2xl font-bold text-green-800 font-poppins">
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
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-700 font-medium transition-colors duration-200"
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-green-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-1 text-sm text-gray-600 hover:text-green-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
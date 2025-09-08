'use client';

import Link from 'next/link';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    overview: [
      { label: 'About the Company', href: '/about' },
      { label: 'Download Brochure', href: '/brochure' },
      { label: 'Innovations', href: '/innovation' },
      { label: 'Advisory Service', href: '/advisory' },
      { label: 'Our Projects', href: '/projects' },
      { label: 'Blogs & Articles', href: '/blogs' },
      { label: 'Contact Us', href: '/contact' },
    ],
    policies: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Shipping Policy', href: '/shipping-policy' },
    ],
    polyhouse: [
      { label: 'Naturally Ventilated Polyhouse', href: '/polyhouse/naturally-ventilated' },
      { label: 'Advantages', href: '/polyhouse/advantages' },
      { label: 'Types', href: '/polyhouse/types' },
      { label: 'Features', href: '/polyhouse/features' },
      { label: 'Setup Cost', href: '/polyhouse/cost' },
      { label: 'FAQs', href: '/polyhouse/faqs' },
    ],
    automation: [
      { label: 'Priva Automation System', href: '/automation/priva' },
      { label: 'Autogrow Hydroponics Automation', href: '/automation/autogrow' },
      { label: 'Bluelab Automation Products', href: '/automation/bluelab' },
      { label: 'Autogrow Automation Products', href: '/automation/autogrow-products' },
    ],
    hydroponics: [
      { label: 'What is Hydroponics?', href: '/hydroponics/introduction' },
      { label: 'Types', href: '/hydroponics/types' },
      { label: 'Advantages', href: '/hydroponics/advantages' },
      { label: 'Why Choose Dhanvantri Farms?', href: '/hydroponics/why-choose-us' },
      { label: 'FAQs', href: '/hydroponics/faqs' },
    ],
    netHouse: [
      { label: 'What is Net House?', href: '/net-house/introduction' },
      { label: 'Types', href: '/net-house/types' },
      { label: 'Advantages', href: '/net-house/advantages' },
      { label: 'Cost of 1 Acre Net House', href: '/net-house/cost' },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">Dhanvantri Farms</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Global leader in smart farming solutions, delivering premium infrastructure and 
              technology in Polyhouse, Net House, Hydroponics, and Automation to transform 
              agriculture into a profitable, sustainable, and future-ready practice.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span>info@dhanvantrifarms.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span>Agriculture Innovation Park, Sector 15, Gurugram, Haryana 122001</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Overview</h3>
            <ul className="space-y-2">
              {footerSections.overview.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Polyhouse / Greenhouse</h3>
            <ul className="space-y-2">
              {footerSections.polyhouse.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Automation</h3>
            <ul className="space-y-2 mb-6">
              {footerSections.automation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-green-400">Policies</h3>
            <ul className="space-y-2">
              {footerSections.policies.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Hydroponics</h3>
            <ul className="space-y-2 mb-6">
              {footerSections.hydroponics.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-green-400">Net House</h3>
            <ul className="space-y-2">
              {footerSections.netHouse.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dhanvantri Farms. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Trusted by 15,000+ farmers</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-400">Made with</span>
                <span className="text-green-400">♥</span>
                <span className="text-sm text-gray-400">in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
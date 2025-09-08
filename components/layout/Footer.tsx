'use client';

import Link from 'next/link';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info - Enhanced with animations */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Leaf className="w-8 h-8 text-green-400" />
              </motion.div>
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
                <motion.a 
                  key={index} 
                  href="#" 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links - Enhanced with staggered animations */}
          {[
            { title: 'Overview', items: footerSections.overview },
            { title: 'Polyhouse / Greenhouse', items: footerSections.polyhouse },
            { title: 'Automation', items: footerSections.automation, additional: { title: 'Policies', items: footerSections.policies } },
            { title: 'Hydroponics', items: footerSections.hydroponics, additional: { title: 'Net House', items: footerSections.netHouse } }
          ].map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="text-lg font-semibold mb-4 text-green-400"
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-2 mb-6">
                {section.items.map((link, index) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (index * 0.05) }}
                  >
                    <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {section.additional && (
                <>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + 0.3 }}
                    className="text-lg font-semibold mb-4 text-green-400"
                  >
                    {section.additional.title}
                  </motion.h3>
                  <ul className="space-y-2">
                    {section.additional.items.map((link, index) => (
                      <motion.li 
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + 0.3 + (index * 0.05) }}
                      >
                        <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar - Enhanced with subtle animation */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dhanvantri Farms. All rights reserved.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6 mt-4 md:mt-0"
            >
              <span className="text-sm text-gray-400">Trusted by 15,000+ farmers</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-400">Made with</span>
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="text-green-400"
                >♥</motion.span>
                <span className="text-sm text-gray-400">in India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="bg-gradient-to-br from-gray-900 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-8">
              <Leaf className="w-10 h-10 text-[#8bc34a]" />
              <span className="text-3xl font-extrabold">Dhanvantri Farms</span>
            </Link>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Global leader in smart farming solutions, delivering premium infrastructure and 
              technology in Polyhouse, Net House, Hydroponics, and Automation to transform 
              agriculture into a profitable, sustainable, and future-ready practice.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#8bc34a]" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#8bc34a]" />
                <span>info@dhanvantrifarms.com</span>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#8bc34a] mt-1" />
                <span>Agriculture Innovation Park, Sector 15, Gurugram, Haryana 122001</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="p-3 bg-gray-800 rounded-full"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {[
            { title: 'Overview', items: footerSections.overview },
            { title: 'Polyhouse / Greenhouse', items: footerSections.polyhouse },
            { title: 'Automation', items: footerSections.automation, additional: { title: 'Policies', items: footerSections.policies } },
            { title: 'Hydroponics', items: footerSections.hydroponics, additional: { title: 'Net House', items: footerSections.netHouse } }
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold mb-6 text-[#8bc34a]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-300 text-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {section.additional && (
                <>
                  <h3 className="text-xl font-bold mb-6 text-[#8bc34a] mt-8">
                    {section.additional.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.additional.items.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-gray-300 text-base">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base mb-4 md:mb-0">
              © 2024 Dhanvantri Farms. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-8">
              <span className="text-base text-gray-400">Trusted by 15,000+ farmers</span>
              <div className="flex items-center space-x-2">
                <span className="text-base text-gray-400">Made with</span>
                <span className="text-[#8bc34a] text-xl">♥</span>
                <span className="text-base text-gray-400">in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
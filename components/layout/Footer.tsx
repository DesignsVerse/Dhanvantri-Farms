'use client';

import Link from 'next/link';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  // Social Media Links - Update these with your actual social media URLs
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/dhanvantrifarms', // Update with your Facebook page URL
    twitter: 'https://twitter.com/dhanvantrifarms', // Update with your Twitter/X profile URL
    instagram: 'https://www.instagram.com/dhanvantrifarms', // Update with your Instagram profile URL
    youtube: 'https://www.youtube.com/@dhanvantrifarms', // Update with your YouTube channel URL
    linkedin: 'https://www.linkedin.com/company/dhanvantrifarms', // Update with your LinkedIn company page URL
  };

  const footerSections = {
    company: [
      { label: 'About the Company', href: '/about' },
      { label: 'Our Innovations', href: '/innovation' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Why Choose Us', href: '/about' },
      { label: 'Our Mission', href: '/about' },
      { label: 'Success Stories', href: '/about' },
    ],
    support: [
      { label: 'Technical Support', href: '/contact' },
      { label: 'Installation Guide', href: '/contact' },
      { label: 'Maintenance Services', href: '/contact' },
      { label: 'Training Programs', href: '/contact' },
      { label: 'Consultation Services', href: '/contact' },
      { label: 'Customer Care', href: '/contact' },
    ],
    services: [
      { label: 'Polyhouse Solutions', href: '/polyhouse' },
      { label: 'Polyhouse Advantages', href: '/polyhouse/polyhouse-advantages' },
      { label: 'Hydroponics Systems', href: '/hydroponics' },
      { label: 'Net House Technology', href: '/net-house' },
      { label: 'Automation Systems', href: '/automation' },
      { label: 'Cold Storage Solutions', href: '/cold-storage' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Leaf className="w-10 h-10 text-[#8bc34a]" />
              <span className="text-2xl sm:text-3xl font-extrabold">Dhanvantri Farms</span>
            </Link>
            
            <p className="text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
              Global leader in smart farming solutions, delivering premium infrastructure and technology in Polyhouse, Net House, Hydroponics, and Automation for sustainable, profitable agriculture.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8bc34a]" />
                <span className="text-sm sm:text-base">+91-7415282414</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8bc34a]" />
                <span className="text-sm sm:text-base">info@dhanvantrifarms.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#8bc34a] mt-1" />
                <span className="text-sm sm:text-base">Near Old SBI
Garhakota, District Sagar
Madhya Pradesh 470229, India</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, url: socialMediaLinks.facebook, label: 'Facebook' },
                { Icon: Twitter, url: socialMediaLinks.twitter, label: 'Twitter' },
                { Icon: Instagram, url: socialMediaLinks.instagram, label: 'Instagram' },
                { Icon: Youtube, url: socialMediaLinks.youtube, label: 'YouTube' },
                { Icon: Linkedin, url: socialMediaLinks.linkedin, label: 'LinkedIn' },
              ].map(({ Icon, url, label }) => (
                <a 
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-[#8bc34a] transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {[
            { title: 'Company', items: footerSections.company },
            { title: 'Support', items: footerSections.support },
            { title: 'Our Services', items: footerSections.services },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-[#8bc34a]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-300 text-sm hover:text-[#8bc34a] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Dhanvantri Farms. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Trusted by 15,000+ farmers</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Made with</span>
                <span className="text-[#8bc34a] text-lg">♥</span>
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

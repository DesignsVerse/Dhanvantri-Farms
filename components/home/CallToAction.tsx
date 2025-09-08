'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Download } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
            Join thousands of successful farmers who increased their productivity 
            and profitability with our smart farming solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">Free</div>
            <div className="text-green-100">Consultation</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-green-100">Support</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">2-3x</div>
            <div className="text-green-100">ROI Guarantee</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link 
            href="/contact" 
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-2 transition-all duration-300 hover:shadow-lg"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <a 
            href="tel:+91-9876543210" 
            className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-2 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          
          <button className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-2 transition-all duration-300">
            <Download className="w-5 h-5" />
            <span>Download Brochure</span>
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-green-100">
            🌱 Over 15,000 farmers trust us • 98% success rate • 50+ years experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
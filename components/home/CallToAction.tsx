'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2 
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#8bc34a]/90 to-[#689f38]/90 text-white relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center 30%'
          }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-1">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={childVariants}
            className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Start Your Farming Revolution
          </motion.h2>
          <motion.p 
            variants={childVariants}
            className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of farmers who have boosted productivity and profitability with Dhanvantri Farms’ smart farming solutions.
          </motion.p>
        </div>

        <motion.div 
          variants={childVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold mb-3">Free</div>
            <div className="text-green-100 text-xl">Consultation</div>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold mb-3">24/7</div>
            <div className="text-green-100 text-xl">Support</div>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold mb-3">2-3x</div>
            <div className="text-green-100 text-xl">ROI Guarantee</div>
          </div>
        </motion.div>

        <motion.div 
          variants={childVariants}
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
        >
          <Link 
            href="/contact" 
            className="group bg-white text-[#8bc34a] hover:bg-green-50 px-10 py-5 rounded-xl font-bold text-xl flex items-center space-x-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <a 
            href="tel:+91-7415282414" 
            className="group border-2 border-white hover:bg-white hover:text-[#8bc34a] px-10 py-5 rounded-xl font-bold text-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span>Call Now</span>
          </a>
          
          <button className="group border-2 border-white hover:bg-white hover:text-[#8bc34a] px-10 py-5 rounded-xl font-bold text-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105">
            <Download className="w-6 h-6" />
            <span>Download Brochure</span>
          </button>
        </motion.div>

        <motion.div 
          variants={childVariants}
          className="text-center mt-12"
        >
          <p className="text-green-100 text-lg">
            🌱 Over 15,000 farmers trust Dhanvantri Farms • 98% success rate • 11+ years of expertise
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
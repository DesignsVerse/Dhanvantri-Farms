'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, User, Building, Map, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Variants } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    landSize: '',
    location: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      landSize: '',
      location: '',
      budget: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="leaf-pattern" x="0" y="0" width="0.05" height="0.05">
            <path d="M20,50 C30,30 50,20 70,30 C90,40 90,70 70,80 C50,90 30,70 20,50 Z" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#leaf-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connect with Our Experts
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dhanvantri Farms is here to guide you with tailored smart farming solutions. Reach out to start your journey towards sustainable agriculture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-3 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Near Old SBI<br />
                Garhakota, District Sagar<br />
                Madhya Pradesh 470229, India
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-3 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+917415282414" className="hover:text-green-700 transition-colors">
                  +91-7415282414
                </a>
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-3 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:info@dhanvantrifarms.com" className="hover:text-green-700 transition-colors">
                  info@dhanvantrifarms.com
                </a>
                <br />
                <a href="mailto:support@dhanvantrifarms.com" className="hover:text-green-700 transition-colors">
                  support@dhanvantrifarms.com
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-500 mb-6">We'll respond within 2 hours during business hours</p>
              
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2"
                  >
                    <Leaf className="w-5 h-5 text-green-500" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Farm Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your farm or company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition-all duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="polyhouse">Polyhouse</option>
                      <option value="net-house">Net House</option>
                      <option value="hydroponics">Hydroponics</option>
                      <option value="automation">Automation</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="landSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Land Size (acres)
                    </label>
                    <input
                      type="text"
                      id="landSize"
                      name="landSize"
                      value={formData.landSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., 2 acres"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location (City, State)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., Pune, Maharashtra"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5">Under ₹5 Lakhs</option>
                      <option value="5-15">₹5-15 Lakhs</option>
                      <option value="15-50">₹15-50 Lakhs</option>
                      <option value="50-100">₹50-100 Lakhs</option>
                      <option value="above-100">Above ₹100 Lakhs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your farming requirements, land size, current challenges, or any specific questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm text-green-800 font-medium">
                      Quick Response Guarantee
                    </p>
                    <p className="text-sm text-green-700 mt-1">
                      Our experts will contact you within 2 hours during business hours. 
                      For urgent inquiries, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

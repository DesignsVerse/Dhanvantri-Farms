'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronRight, User, Building, Map, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactPage() {
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Sales: +91-9876543210',
        'Support: +91-9876543211',
        'WhatsApp: +91-9876543212'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@dhanvantrifarms.com',
        'support@dhanvantrifarms.com',
        'sales@dhanvantrifarms.com'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Agriculture Innovation Park',
        'Sector 15, Gurugram',
        'Haryana 122001, India'
      ],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"> {/* Subtle background for premium feel */}
      {/* Hero Section - Enhanced with animations and overlay */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/70"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Our Experts</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Get personalized guidance for your smart farming journey. Our agricultural experts are ready to help you transform your farming operations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Response within 2 hours guaranteed
          </motion.div>
        </div>
      </section>

      {/* Contact Information - Added scroll animations and hover effects */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-green-50"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Multiple Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Connect</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Reach out through your preferred channel - we're here to assist you with all your agricultural needs
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div 
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-green-100/50"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} text-white rounded-2xl mb-4 transition-transform duration-300`}
                  >
                    <info.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form - Enhanced form animations and validation styling */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Get Your Free Consultation
                  </h2>
                </div>
                
                {submitSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
                  >
                    <p className="font-medium">Thank you for your inquiry!</p>
                    <p className="text-sm">Our agricultural expert will contact you within 2 hours.</p>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Farm Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your farm or company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Area of Interest *
                      </label>
                      <div className="relative">
                        <Leaf className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                        <select
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition-all duration-300"
                        >
                          <option value="">Select an option</option>
                          <option value="polyhouse">Polyhouse/Greenhouse</option>
                          <option value="net-house">Net House</option>
                          <option value="hydroponics">Hydroponics</option>
                          <option value="automation">Automation Systems</option>
                          <option value="complete-solution">Complete Smart Farm Setup</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Land Size (acres)
                      </label>
                      <input
                        type="text"
                        name="landSize"
                        value={formData.landSize}
                        onChange={handleChange}
                        placeholder="e.g., 2 acres"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location (City, State)
                      </label>
                      <div className="relative">
                        <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g., Pune, Maharashtra"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5">Under ₹5 Lakhs</option>
                          <option value="5-15">₹5-15 Lakhs</option>
                          <option value="15-50">₹15-50 Lakhs</option>
                          <option value="50-100">₹50-100 Lakhs</option>
                          <option value="above-100">Above ₹100 Lakhs</option>
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Requirements & Questions
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current farming challenges, crops you want to grow, specific requirements, timeline, or any questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-75 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Get Free Consultation'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar - Enhanced with animations */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-green-100/50"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center transition-transform duration-300"
                    >
                      <Phone className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-medium">Call Our Experts</p>
                      <p className="text-green-600">+91-9876543210</p>
                    </div>
                  </a>
                  <a href="https://wa.me/919876543212" className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center transition-transform duration-300"
                    >
                      <MessageSquare className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-medium">WhatsApp Chat</p>
                      <p className="text-green-600">Instant Response</p>
                    </div>
                  </a>
                  <a href="mailto:info@dhanvantrifarms.com" className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg flex items-center justify-center transition-transform duration-300"
                    >
                      <Mail className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-green-600">info@dhanvantrifarms.com</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* What to Expect */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-green-100/50"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {[
                    "Expert consultation within 2 hours",
                    "Customized solution proposal",
                    "Detailed cost analysis",
                    "ROI projections",
                    "Site visit arrangement"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Success Stats */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Our Track Record</h3>
                <div className="space-y-4">
                  {[
                    { label: "Projects Completed", value: "15,000+" },
                    { label: "Average ROI", value: "300%" },
                    { label: "Success Rate", value: "98%" },
                    { label: "Customer Satisfaction", value: "4.9/5" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex justify-between items-center"
                    >
                      <span>{stat.label}</span>
                      <span className="font-bold text-lg bg-white/10 px-3 py-1 rounded-full">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced placeholder with animation (replace with real map if needed) */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Visit Our Innovation Center
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Experience our smart farming solutions firsthand at our demonstration farm and innovation center
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-200 h-96 rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map Integration</p>
                <p className="text-sm text-gray-500 mt-2">Agriculture Innovation Park, Sector 15, Gurugram, Haryana</p>
              </div>
            </div>
            
            {/* Map overlay with info */}
            <div className="absolute bottom-6 left-6 z-20">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-lg max-w-xs"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Dhanvantri Farms HQ</h4>
                <p className="text-sm text-gray-600 mb-2">Sector 15, Gurugram, Haryana 122001</p>
                <p className="text-sm text-gray-600">Open: Mon-Sat, 9AM-6PM</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

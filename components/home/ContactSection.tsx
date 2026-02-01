'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      alert('✅ Thank you for your message! We will contact you soon.');
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238bc34a' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Connect with Our Experts
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dhanvantri Farms is here to guide you with tailored smart farming solutions. Reach out to start your journey towards sustainable agriculture.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {[
              {
                icon: <MapPin className="w-7 h-7 text-[#8bc34a]" />,
                title: 'Visit Us',
                text: (
                  <>
                    Near Old SBI
                    <br />
                    Garhakota, District Sagar
                    <br />
                    Madhya Pradesh 470229, India
                  </>
                )
              },
              {
                icon: <Phone className="w-7 h-7 text-[#8bc34a]" />,
                title: 'Call Us',
                text: (
                  <>
                    +91-7415282414
                  </>
                )
              },
              {
                icon: <Mail className="w-7 h-7 text-[#8bc34a]" />,
                title: 'Email Us',
                text: (
                  <>
                    info@dhanvantrifarms.com
                    <br />
                    support@dhanvantrifarms.com
                    <br />
                    sales@dhanvantrifarms.com
                  </>
                )
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-green-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Send us a Message</h3>
            <p className="text-gray-600 mb-8">We'll respond within 2 hours during business hours</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
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
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
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
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              {/* Phone + Interest */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
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
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="polyhouse">Polyhouse</option>
                    <option value="net-house">Net House</option>
                    <option value="hydroponics">Hydroponics</option>
                    <option value="automation">Automation</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your farming requirements, land size, current challenges..."
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
                className="w-full bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white py-5 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-6 h-6" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Response Guarantee */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-[#8bc34a]" />
                </div>
                <div>
                  <p className="text-base font-bold text-green-800 mb-1">Quick Response Guarantee</p>
                  <p className="text-sm text-green-700 leading-relaxed">
                    Dhanvantri Farms’ experts will contact you within 2 hours during business hours. For urgent inquiries, please call us directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
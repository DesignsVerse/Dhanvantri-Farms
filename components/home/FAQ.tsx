'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the ROI timeline for smart farming investments?',
      answer: 'Most farmers see a return on investment within 2-3 years. With our advanced systems, crop yields increase by 300-400%, while operational costs decrease by 30-40%. The exact timeline depends on the crop type, market conditions, and system complexity.'
    },
    {
      question: 'Do you provide installation and maintenance services?',
      answer: 'Yes, we provide complete end-to-end services including site preparation, installation, commissioning, training, and ongoing maintenance. Our technical team ensures proper setup and provides 24/7 support for all automated systems.'
    },
    {
      question: 'Which crops are best suited for hydroponic cultivation?',
      answer: 'Leafy vegetables (lettuce, spinach, herbs), tomatoes, cucumbers, peppers, and strawberries perform exceptionally well in hydroponic systems. We help you choose the right crops based on your local market demand and climate conditions.'
    },
    {
      question: 'What financing options are available for large projects?',
      answer: 'We offer flexible financing solutions including equipment financing, lease options, and partnerships with agricultural banks. Government subsidies for modern farming technology can cover 40-60% of project costs in many states.'
    },
    {
      question: 'How much water do hydroponic systems save compared to traditional farming?',
      answer: 'Hydroponic systems use 90% less water than traditional soil-based farming. The closed-loop system recirculates nutrient solutions, and precise irrigation eliminates waste. This makes it ideal for water-scarce regions.'
    },
    {
      question: 'What ongoing support do you provide after installation?',
      answer: 'We provide comprehensive support including remote monitoring, regular maintenance, troubleshooting, crop guidance, market linkage support, and upgrades. Our agronomists are available for consultation throughout the growing season.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">Questions</span>
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Get answers to common questions about smart farming solutions and our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-green-100"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 text-lg pr-6">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-[#8bc34a] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#8bc34a] flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-4 border-t border-green-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

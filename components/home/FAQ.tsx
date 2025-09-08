'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about smart farming solutions and our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-green-50 to-cream rounded-lg border border-green-100 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-green-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-700 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4 border-t border-green-200 bg-white">
                  <p className="text-gray-600 pt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="btn-primary">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
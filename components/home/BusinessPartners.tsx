'use client';

import { Users, Award, TrendingUp, Shield } from 'lucide-react';

const BusinessPartners = () => {
  const partners = [
    { name: 'Bluelab', logo: '/api/placeholder/120/60' },
    { name: 'Autogrow', logo: '/api/placeholder/120/60' },
    { name: 'Priva', logo: '/api/placeholder/120/60' },
    { name: 'Netafim', logo: '/api/placeholder/120/60' },
    { name: 'Rivulis', logo: '/api/placeholder/120/60' },
    { name: 'Irritec', logo: '/api/placeholder/120/60' },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ years of combined experience in agriculture technology'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'International standards with premium global partnerships'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '300% average increase in crop yield for our clients'
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: 'Comprehensive warranty and support for all installations'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-gradient">Global Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with world-class technology providers to deliver the best solutions
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300">
              <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center text-sm text-gray-600 font-medium">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 card-hover bg-gradient-to-br from-green-50 to-cream rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
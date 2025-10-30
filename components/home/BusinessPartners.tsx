'use client';

import { Users, Award, TrendingUp, Shield } from 'lucide-react';

const BusinessPartners = () => {
  const partners = [
    { name: 'Vandana Krishi Enterprises', color: 'text-[#8bc34a]' },
    { name: 'Vaidehi Enterprises', color: 'text-[#689f38]' },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: '11+ years of combined experience in agriculture technology',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'International standards with premium global partnerships',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '300% average increase in crop yield for our clients',
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: 'Comprehensive warranty and support for all installations',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#689f38]">
              Partners
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-[#8bc34a] to-[#689f38] mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Trusted collaborations with world-class technology providers for advanced farming solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-2xl shadow-md border border-green-100 px-4 py-4"
            >
              <span className={`text-xl sm:text-2xl font-semibold ${partner.color}`}>{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-3xl shadow-md border border-green-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#8bc34a] to-[#689f38] text-white rounded-full mb-4 shadow-md">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
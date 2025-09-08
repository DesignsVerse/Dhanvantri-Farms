import Link from 'next/link';
import { Home, TrendingUp, Shield, Thermometer, Droplets, Sun } from 'lucide-react';

export default function PolyhousePage() {
  const features = [
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Advanced temperature and humidity management systems'
    },
    {
      icon: Shield,
      title: 'Weather Protection',
      description: 'Complete protection from harsh weather conditions'
    },
    {
      icon: Droplets,
      title: 'Water Efficiency',
      description: 'Optimized irrigation systems for maximum water conservation'
    },
    {
      icon: Sun,
      title: 'Light Management',
      description: 'Controlled light exposure for optimal plant growth'
    }
  ];

  const advantages = [
    'Higher yield (3-4x compared to open field)',
    'Year-round cultivation regardless of season',
    'Protection from pests, diseases, and weather',
    'Water conservation up to 90%',
    'Better quality produce with longer shelf life',
    'Reduced dependency on pesticides',
    'Controlled growing environment',
    'Higher market prices for premium quality'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Polyhouse</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Advanced naturally ventilated polyhouses designed for optimal crop production 
              with superior climate control and maximum yield potential.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our polyhouses are engineered with cutting-edge technology for maximum efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 card-hover bg-gradient-to-br from-green-50 to-cream rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">Advantages</span> of Polyhouse
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/polyhouse/advantages" className="btn-primary">
                  Learn More About Advantages
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg"
                alt="Modern Polyhouse"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-gradient">Polyhouse Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Naturally Ventilated Polyhouse',
                description: 'Designed for better airflow & temperature control',
                href: '/polyhouse/naturally-ventilated',
                image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg'
              },
              {
                title: 'Types of Polyhouse',
                description: 'Different structures as per crop & region',
                href: '/polyhouse/types',
                image: 'https://images.pexels.com/photos/1068474/pexels-photo-1068474.jpeg'
              },
              {
                title: 'Features & Specifications',
                description: 'Durable, UV-protected, cost-efficient',
                href: '/polyhouse/features',
                image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg'
              },
              {
                title: 'Setup Cost & Investment',
                description: 'Approx. investment with subsidy guidance',
                href: '/polyhouse/cost',
                image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg'
              },
              {
                title: 'Crop Economics',
                description: 'ROI, crop cycles, profit margins',
                href: '/polyhouse/crop-economics',
                image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
              },
              {
                title: 'FAQs',
                description: 'Frequently asked questions about polyhouses',
                href: '/polyhouse/faqs',
                image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
              }
            ].map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Polyhouse Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get expert consultation and customized polyhouse solutions for your farming needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/polyhouse/cost" className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
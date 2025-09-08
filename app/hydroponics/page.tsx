import Link from 'next/link';
import { Droplets, TrendingUp, Leaf, Zap, Shield, Clock } from 'lucide-react';

export default function HydroponicsPage() {
  const features = [
    {
      icon: Droplets,
      title: '90% Water Savings',
      description: 'Recirculating nutrient solutions minimize water waste'
    },
    {
      icon: TrendingUp,
      title: 'Faster Growth',
      description: 'Plants grow 30-50% faster than traditional soil farming'
    },
    {
      icon: Leaf,
      title: 'Higher Yields',
      description: '3-10x higher yields in the same space'
    },
    {
      icon: Zap,
      title: 'Year-Round Production',
      description: 'Controlled environment enables continuous harvesting'
    }
  ];

  const advantages = [
    'No soil required - perfect for urban farming',
    '90% less water usage compared to traditional farming',
    'Faster plant growth and higher yields',
    'No weeds, soil-borne diseases, or pests',
    'Precise nutrient control for optimal growth',
    'Space-efficient vertical growing systems',
    'Consistent quality and predictable harvests',
    'Reduced labor and maintenance requirements'
  ];

  const systemTypes = [
    {
      name: 'NFT (Nutrient Film Technique)',
      description: 'Thin film of nutrient solution flows over roots',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
      suitableFor: 'Leafy greens, herbs, strawberries'
    },
    {
      name: 'DWC (Deep Water Culture)',
      description: 'Roots suspended in oxygenated nutrient solution',
      image: 'https://images.pexels.com/photos/1068474/pexels-photo-1068474.jpeg',
      suitableFor: 'Lettuce, spinach, kale, basil'
    },
    {
      name: 'Drip System',
      description: 'Nutrient solution dripped directly to root zone',
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
      suitableFor: 'Tomatoes, peppers, cucumbers'
    },
    {
      name: 'Vertical Systems',
      description: 'Multi-tier growing systems for maximum space utilization',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
      suitableFor: 'Microgreens, herbs, small vegetables'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Hydroponics</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Revolutionary soil-less farming technology for maximum productivity, 
              water efficiency, and year-round cultivation.
            </p>
          </div>
        </div>
      </section>

      {/* What is Hydroponics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is <span className="text-gradient">Hydroponics?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Hydroponics is a method of growing plants without soil, using nutrient-rich 
                  water solutions to deliver essential minerals directly to plant roots. This 
                  revolutionary farming technique offers precise control over growing conditions.
                </p>
                <p>
                  Plants are supported by inert growing media like rockwool, perlite, or clay 
                  pebbles, while their roots receive a perfectly balanced nutrient solution. 
                  This results in faster growth, higher yields, and superior quality produce.
                </p>
                <p>
                  Hydroponic systems can be implemented anywhere - from urban rooftops to 
                  desert regions - making fresh food production possible in any environment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg"
                alt="Hydroponic System"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why hydroponics is the future of sustainable agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 card-hover bg-white rounded-xl shadow-lg">
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

      {/* System Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of <span className="text-gradient">Hydroponic Systems</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right system for your crops and space requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {systemTypes.map((system, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-cream rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="relative h-48">
                  <img 
                    src={system.image}
                    alt={system.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{system.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{system.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">Suitable for:</span>
                    <span className="text-sm text-green-700 font-semibold">{system.suitableFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                alt="Hydroponic Advantages"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">Advantages</span> of Hydroponics
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
                <Link href="/hydroponics/advantages" className="btn-primary">
                  Learn More About Advantages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-gradient">Hydroponic Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'System Types',
                description: 'NFT, DWC, Drip, Vertical systems explained',
                href: '/hydroponics/types',
                image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg'
              },
              {
                title: 'Advantages',
                description: '90% less water, faster growth, urban farming',
                href: '/hydroponics/advantages',
                image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg'
              },
              {
                title: 'Why Choose Us?',
                description: 'Expertise, technology & after-sales support',
                href: '/hydroponics/why-choose-us',
                image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
              },
              {
                title: 'FAQs',
                description: 'Common questions about hydroponic farming',
                href: '/hydroponics/faqs',
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
            Ready to Start Your Hydroponic Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join the future of farming with our advanced hydroponic solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/hydroponics/types" className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Explore Systems
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
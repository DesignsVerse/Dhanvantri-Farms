import Link from 'next/link';
import { Shield, Sun, Bug, DollarSign, Droplets, TrendingUp } from 'lucide-react';

export default function NetHousePage() {
  const features = [
    {
      icon: Shield,
      title: 'Crop Protection',
      description: 'Complete protection from birds, insects, and harsh weather'
    },
    {
      icon: Sun,
      title: 'Light Control',
      description: 'Optimal light filtration for healthy plant growth'
    },
    {
      icon: Bug,
      title: 'Pest Management',
      description: 'Physical barrier against insects and pests'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Lower investment compared to polyhouses with good returns'
    }
  ];

  const advantages = [
    'Protection from birds and flying insects',
    'Controlled sunlight exposure (30-90% shade)',
    'Reduced pesticide usage',
    'Better quality produce',
    'Extended shelf life of crops',
    'Protection from hail and strong winds',
    'Improved working conditions',
    'Year-round cultivation possibility'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Net House</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Advanced shade net and insect-proof structures for protected cultivation 
              with optimal light management and pest control.
            </p>
          </div>
        </div>
      </section>

      {/* What is Net House */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is a <span className="text-gradient">Net House?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  A Net House is a protected cultivation structure covered with specially designed 
                  nets instead of solid materials like plastic or glass. These nets provide 
                  protection while allowing air circulation and controlled light penetration.
                </p>
                <p>
                  Net houses are ideal for crops that require protection from insects, birds, 
                  and excessive sunlight while maintaining natural ventilation. They offer 
                  an economical solution for protected cultivation.
                </p>
                <p>
                  The structure uses galvanized steel framework covered with UV-stabilized 
                  nets of various mesh sizes and shade percentages depending on crop requirements.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg"
                alt="Net House Structure"
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
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why net houses are the smart choice for protected cultivation
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

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1068474/pexels-photo-1068474.jpeg"
                alt="Net House Advantages"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">Advantages</span> of Net House
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
                <Link href="/net-house/advantages" className="btn-primary">
                  Learn More About Advantages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-gradient">Net House Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Types of Net House',
                description: 'Shade net, insect-proof, multi-span structures',
                href: '/net-house/types',
                image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg'
              },
              {
                title: 'Benefits & Applications',
                description: 'Crop protection, pest resistance, controlled sunlight',
                href: '/net-house/benefits',
                image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg'
              },
              {
                title: '1 Acre Cost Planning',
                description: 'Budget estimation with subsidy information',
                href: '/net-house/cost-planning',
                image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
              },
              {
                title: 'Planning Steps',
                description: 'From design to execution - complete guide',
                href: '/net-house/planning-steps',
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
            Ready to Start Your Net House Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get expert consultation and customized net house solutions for your farming needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/net-house/cost-planning" className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';
import { Settings, Smartphone, TrendingUp, Clock, Droplets, Thermometer } from 'lucide-react';

export default function AutomationPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Remote Monitoring',
      description: 'Monitor and control your farm from anywhere using mobile apps'
    },
    {
      icon: Droplets,
      title: 'Smart Irrigation',
      description: 'Automated irrigation based on soil moisture and weather data'
    },
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Precise temperature and humidity management systems'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Real-time data collection and analysis for optimization'
    }
  ];

  const automationTypes = [
    {
      title: 'Polyhouse Automation',
      description: 'Smart sensors for climate control, irrigation, and environmental monitoring',
      features: ['Temperature Control', 'Humidity Management', 'Irrigation Automation', 'Ventilation Control'],
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
      href: '/automation/polyhouse'
    },
    {
      title: 'Hydroponics Automation',
      description: 'pH, EC, nutrient dosing automation for optimal plant nutrition',
      features: ['pH Control', 'EC Monitoring', 'Nutrient Dosing', 'Water Level Management'],
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg',
      href: '/automation/hydroponics'
    }
  ];

  const brands = [
    {
      name: 'Priva',
      description: 'World leader in greenhouse automation and climate control systems',
      specialties: ['Climate Control', 'Irrigation Management', 'Energy Optimization'],
      image: 'https://images.pexels.com/photos/1068474/pexels-photo-1068474.jpeg',
      href: '/automation/priva'
    },
    {
      name: 'Autogrow',
      description: 'Advanced automation solutions for modern agriculture',
      specialties: ['Environmental Control', 'Fertigation Systems', 'Data Analytics'],
      image: 'https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg',
      href: '/automation/autogrow'
    },
    {
      name: 'Bluelab',
      description: 'Precision instruments for nutrient and pH management',
      specialties: ['pH Monitoring', 'EC Measurement', 'Nutrient Control'],
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      href: '/automation/bluelab'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart <span className="text-gradient">Automation</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Advanced IoT-based automation systems for precision farming, 
              remote monitoring, and optimal resource management.
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
              Transform your farming operations with intelligent automation
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

      {/* Automation Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of <span className="text-gradient">Automation</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized automation solutions for different farming systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-64">
                  <img 
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={type.href}
                    className="btn-primary w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium <span className="text-gradient">Automation Brands</span>
            </h2>
            <p className="text-xl text-gray-600">
              We partner with world-leading automation technology providers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Link key={index} href={brand.href} className="group">
                <div className="bg-gradient-to-br from-green-50 to-cream rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img 
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{brand.description}</p>
                    <div className="space-y-2">
                      {brand.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm text-gray-600">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Benefits</span> of Automation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Clock className="w-16 h-16 text-green-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time Savings</h3>
              <p className="text-gray-600">Reduce manual labor by 70% with automated systems</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <TrendingUp className="w-16 h-16 text-green-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Higher Yields</h3>
              <p className="text-gray-600">Optimize growing conditions for 20-30% yield increase</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Settings className="w-16 h-16 text-green-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Control</h3>
              <p className="text-gray-600">Maintain optimal conditions 24/7 automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Transform your farming operations with intelligent automation systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/automation/polyhouse" className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
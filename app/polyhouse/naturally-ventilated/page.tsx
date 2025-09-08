import { Wind, Thermometer, Droplets, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function NaturallyVentilatedPage() {
  const benefits = [
    {
      icon: Wind,
      title: 'Natural Airflow',
      description: 'Optimized ventilation design ensures continuous air circulation without electricity'
    },
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Maintains optimal temperature through strategic vent placement and design'
    },
    {
      icon: Droplets,
      title: 'Humidity Management',
      description: 'Prevents excessive humidity buildup that can lead to plant diseases'
    },
    {
      icon: Shield,
      title: 'Cost Effective',
      description: 'Lower operational costs compared to fan-forced ventilation systems'
    }
  ];

  const specifications = [
    { feature: 'Structure Material', value: 'Galvanized Steel Frame' },
    { feature: 'Covering Material', value: 'UV Stabilized Polyethylene' },
    { feature: 'Ventilation', value: 'Natural Side & Top Vents' },
    { feature: 'Foundation', value: 'RCC Strip Foundation' },
    { feature: 'Door System', value: 'Sliding Door with Insect Screen' },
    { feature: 'Gutter System', value: 'Rainwater Collection System' },
    { feature: 'Lifespan', value: '15-20 Years' },
    { feature: 'Warranty', value: '5 Years Structure, 3 Years Covering' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Naturally Ventilated <span className="text-gradient">Polyhouse</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Designed for better airflow & temperature control with energy-efficient natural ventilation systems
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why naturally ventilated polyhouses are the smart choice for sustainable farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 card-hover bg-gradient-to-br from-green-50 to-cream rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Natural Ventilation <span className="text-gradient">Works</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Stack Effect Ventilation</h3>
                    <p className="text-gray-600">Hot air rises and exits through roof vents while cool air enters through side vents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Wind-Driven Ventilation</h3>
                    <p className="text-gray-600">External wind creates pressure differences that drive air circulation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Air Exchange</h3>
                    <p className="text-gray-600">Maintains optimal temperature and humidity levels throughout the day</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg"
                alt="Natural Ventilation System"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical <span className="text-gradient">Specifications</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-cream rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-900">{spec.feature}</span>
                  <span className="text-green-700 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Crops */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Suitable Crops</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ideal crops for naturally ventilated polyhouse cultivation
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Tomatoes', 'Cucumbers', 'Bell Peppers', 'Leafy Greens',
              'Herbs', 'Strawberries', 'Eggplant', 'Beans',
              'Flowers', 'Nursery Plants', 'Medicinal Plants', 'Microgreens'
            ].map((crop, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">{crop}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
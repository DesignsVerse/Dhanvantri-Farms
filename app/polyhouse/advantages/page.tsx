import { TrendingUp, Shield, Droplets, Calendar, DollarSign, Leaf, Sun, Users } from 'lucide-react';

export default function PolyhouseAdvantagesPage() {
  const advantages = [
    {
      icon: TrendingUp,
      title: 'Higher Yield',
      description: '3-4x higher yield compared to open field cultivation',
      details: [
        'Controlled environment optimizes plant growth',
        'Extended growing seasons increase harvest frequency',
        'Better plant health leads to higher productivity',
        'Reduced crop losses from weather and pests'
      ]
    },
    {
      icon: Calendar,
      title: 'Year-Round Cultivation',
      description: 'Grow crops in any season regardless of weather',
      details: [
        'Protection from extreme temperatures',
        'Cultivation during off-season for premium prices',
        'Multiple crop cycles per year',
        'Consistent production throughout the year'
      ]
    },
    {
      icon: Shield,
      title: 'Weather Protection',
      description: 'Complete protection from harsh weather conditions',
      details: [
        'Protection from hail, frost, and storms',
        'Reduced crop damage and losses',
        'Stable growing conditions',
        'Insurance against climate risks'
      ]
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Up to 90% water savings through efficient irrigation',
      details: [
        'Drip irrigation systems reduce water waste',
        'Controlled environment reduces evaporation',
        'Recycling of water and nutrients',
        'Precise water management'
      ]
    },
    {
      icon: Leaf,
      title: 'Reduced Pesticide Use',
      description: 'Minimal pesticide requirement due to controlled environment',
      details: [
        'Physical barriers prevent pest entry',
        'Biological pest control methods',
        'Healthier produce with less chemical residue',
        'Organic certification possibilities'
      ]
    },
    {
      icon: DollarSign,
      title: 'Higher Profitability',
      description: 'Better quality produce commands premium market prices',
      details: [
        'Superior quality and appearance',
        'Longer shelf life of produce',
        'Access to export markets',
        'Direct marketing opportunities'
      ]
    },
    {
      icon: Sun,
      title: 'Controlled Environment',
      description: 'Optimal growing conditions for maximum plant potential',
      details: [
        'Temperature and humidity control',
        'Light management systems',
        'CO2 enrichment possibilities',
        'Stress-free growing environment'
      ]
    },
    {
      icon: Users,
      title: 'Labor Efficiency',
      description: 'Reduced labor requirements and improved working conditions',
      details: [
        'Comfortable working environment',
        'Organized cultivation practices',
        'Reduced manual interventions',
        'Better ergonomics for workers'
      ]
    }
  ];

  const comparisonData = [
    { aspect: 'Yield per acre', openField: '10-15 tons', polyhouse: '40-60 tons' },
    { aspect: 'Water usage', openField: '100%', polyhouse: '10-20%' },
    { aspect: 'Pesticide use', openField: '100%', polyhouse: '20-30%' },
    { aspect: 'Crop cycles/year', openField: '1-2', polyhouse: '3-4' },
    { aspect: 'Quality grade', openField: 'Standard', polyhouse: 'Premium' },
    { aspect: 'Market price', openField: 'Regular', polyhouse: '2-3x higher' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Advantages</span> of Polyhouse
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Discover how polyhouse farming can transform your agricultural productivity and profitability
            </p>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-cream rounded-2xl p-8 card-hover">
                <div className="flex items-start space-x-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full flex-shrink-0">
                    <advantage.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{advantage.description}</p>
                    <ul className="space-y-2">
                      {advantage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Polyhouse vs <span className="text-gradient">Open Field</span>
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic difference in productivity and efficiency
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-6 py-4 text-center font-semibold">Open Field</th>
                    <th className="px-6 py-4 text-center font-semibold">Polyhouse</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.openField}</td>
                      <td className="px-6 py-4 text-center text-green-700 font-semibold">{row.polyhouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Return on <span className="text-gradient">Investment</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-cream p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Payback Period</h3>
                  <p className="text-3xl font-bold text-green-700">2-3 Years</p>
                  <p className="text-gray-600 mt-2">Typical payback period for polyhouse investment</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-cream p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual ROI</h3>
                  <p className="text-3xl font-bold text-green-700">40-60%</p>
                  <p className="text-gray-600 mt-2">Expected return on investment per year</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-cream p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Profit Increase</h3>
                  <p className="text-3xl font-bold text-green-700">300-400%</p>
                  <p className="text-gray-600 mt-2">Increase in profit compared to open field</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                alt="Profitable Polyhouse Farming"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Lightbulb, Cpu, Leaf, Globe, Award, Users } from 'lucide-react';

export default function InnovationPage() {
  const innovations = [
    {
      icon: Cpu,
      title: 'IoT-Enabled Smart Farming',
      description: 'Advanced sensor networks and AI-driven analytics for precision agriculture',
      details: [
        'Real-time environmental monitoring',
        'Predictive analytics for crop health',
        'Automated decision-making systems',
        'Mobile app integration for remote control'
      ]
    },
    {
      icon: Droplets,
      title: 'Water-Smart Technologies',
      description: 'Revolutionary water conservation and management systems',
      details: [
        'Precision irrigation with soil moisture sensors',
        'Rainwater harvesting integration',
        'Nutrient solution recycling systems',
        'Weather-based irrigation scheduling'
      ]
    },
    {
      icon: Leaf,
      title: 'Sustainable Growing Systems',
      description: 'Eco-friendly solutions for carbon-neutral farming',
      details: [
        'Solar-powered automation systems',
        'Organic waste composting integration',
        'Biodegradable growing media',
        'Carbon footprint reduction technologies'
      ]
    },
    {
      icon: Globe,
      title: 'Climate-Adaptive Solutions',
      description: 'Resilient farming systems for changing climate conditions',
      details: [
        'Multi-climate polyhouse designs',
        'Extreme weather protection systems',
        'Adaptive ventilation technologies',
        'Energy-efficient climate control'
      ]
    }
  ];

  const researchAreas = [
    {
      title: 'Artificial Intelligence in Agriculture',
      description: 'Developing AI algorithms for crop prediction, disease detection, and yield optimization',
      progress: 85
    },
    {
      title: 'Vertical Farming Technologies',
      description: 'Advanced multi-tier growing systems for urban agriculture and space optimization',
      progress: 78
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Solar and wind energy solutions for sustainable farm operations',
      progress: 92
    },
    {
      title: 'Biotechnology Applications',
      description: 'Plant breeding, tissue culture, and genetic optimization for better yields',
      progress: 70
    }
  ];

  const partnerships = [
    {
      name: 'Agricultural Universities',
      description: 'Collaborative research with leading agricultural institutions',
      count: '15+'
    },
    {
      name: 'Technology Partners',
      description: 'Global partnerships with tech companies for innovation',
      count: '25+'
    },
    {
      name: 'Research Projects',
      description: 'Ongoing research and development initiatives',
      count: '50+'
    },
    {
      name: 'Patents Filed',
      description: 'Intellectual property in agricultural technology',
      count: '12+'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Innovation</span> & Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Pioneering the future of agriculture through cutting-edge research, 
              sustainable technologies, and innovative farming solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Innovation Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading breakthrough technologies that are shaping the future of farming
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-cream rounded-2xl p-8 card-hover">
                <div className="flex items-start space-x-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full flex-shrink-0">
                    <innovation.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{innovation.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{innovation.description}</p>
                    <ul className="space-y-2">
                      {innovation.details.map((detail, idx) => (
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

      {/* Research Progress */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current <span className="text-gradient">Research Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ongoing research initiatives driving agricultural innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="mb-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-green-700 font-semibold">{area.progress}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${area.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research <span className="text-gradient">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading institutions and organizations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-cream rounded-xl card-hover">
                <div className="text-4xl font-bold text-green-700 mb-2">{partnership.count}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partnership.name}</h3>
                <p className="text-gray-600 text-sm">{partnership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovation <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our journey of agricultural innovation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-300"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: '2024',
                  title: 'AI-Powered Crop Monitoring',
                  description: 'Launch of advanced AI systems for real-time crop health monitoring and predictive analytics'
                },
                {
                  year: '2023',
                  title: 'Solar Integration Systems',
                  description: 'Development of fully solar-powered polyhouse automation systems'
                },
                {
                  year: '2022',
                  title: 'Vertical Farming Solutions',
                  description: 'Introduction of space-efficient vertical hydroponic systems for urban farming'
                },
                {
                  year: '2021',
                  title: 'IoT Platform Launch',
                  description: 'Comprehensive IoT platform for remote farm monitoring and control'
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-green-700 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              We envision a world where technology and nature work in harmony to create 
              sustainable, efficient, and profitable farming systems that can feed the 
              growing global population while preserving our planet.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-green-200" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-green-100">Continuous research and development</p>
              </div>
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 text-green-200" />
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-green-100">Environmentally responsible solutions</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-green-200" />
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-green-100">Global partnerships for impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
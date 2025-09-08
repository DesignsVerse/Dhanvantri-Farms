import { Users, Award, Globe, TrendingUp, Shield, Target } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '15,000+', label: 'Happy Farmers' },
    { icon: Globe, value: '100+', label: 'Cities Presence' },
    { icon: Award, value: '50+', label: 'Years Experience' },
    { icon: TrendingUp, value: '400%', label: 'Avg Yield Increase' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality and use only premium materials and technology from global leaders.'
    },
    {
      icon: Target,
      title: 'Farmer-Centric',
      description: 'Every solution is designed with farmers\' success in mind, ensuring maximum ROI and sustainability.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'We bring world-class technology and practices to Indian agriculture for global competitiveness.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Driven',
      description: 'Continuous research and development to provide cutting-edge solutions for modern farming.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Dhanvantri Farms</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Your trusted partner for transforming agriculture with 50+ years of experience, 
              serving farmers across 100+ cities with innovative smart farming solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-cream rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded with a vision to revolutionize Indian agriculture, Dhanvantri Farms has been 
                  at the forefront of smart farming solutions for over five decades. What started as a 
                  small initiative to help local farmers has grown into a global leader in agricultural technology.
                </p>
                <p>
                  We specialize in advanced Polyhouses, Net Houses, Hydroponics systems, and smart 
                  Automation technologies. Our solutions combine traditional farming wisdom with 
                  cutting-edge technology to create sustainable, profitable farming systems.
                </p>
                <p>
                  Today, we serve farmers across 100+ cities, helping them achieve 3-4x higher yields 
                  while reducing water consumption by 90% and eliminating dependency on weather conditions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                alt="Our Journey"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that drive us to deliver excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 card-hover bg-gradient-to-br from-green-50 to-cream rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-green-100 leading-relaxed">
                To empower farmers worldwide with innovative, sustainable, and profitable 
                smart farming solutions that increase productivity while preserving our 
                environment for future generations.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-green-100 leading-relaxed">
                To be the global leader in smart farming technology, making advanced 
                agricultural solutions accessible to every farmer and contributing to 
                food security worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
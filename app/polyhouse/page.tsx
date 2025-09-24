'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Home, TrendingUp, Shield, Thermometer, Droplets, Sun, Sprout, Leaf, Globe, BarChart, Users, Mail, ArrowRight } from 'lucide-react';

export default function PolyhousePage() {
  const features = [
    {
      icon: Thermometer,
      title: 'Precise Climate Control',
      description: 'Intelligent sensors and automated systems maintain optimal temperature, humidity, and CO2 levels for year-round growth.'
    },
    {
      icon: Shield,
      title: 'Robust Weather Protection',
      description: 'Durable structures shield crops from extreme weather, including heavy rains, hail, strong winds, and frost.'
    },
    {
      icon: Droplets,
      title: 'Smart Water Management',
      description: 'Drip irrigation and fogging systems ensure efficient water usage, reducing consumption by up to 90% while preventing water stress.'
    },
    {
      icon: Sun,
      title: 'Advanced Light Optimization',
      description: 'UV-stabilized polyethylene covers with light diffusion properties maximize photosynthesis and promote uniform plant growth.'
    },
    {
      icon: Sprout,
      title: 'Crop-Specific Customization',
      description: 'Tailored designs for various crops like vegetables, flowers, and exotic fruits to maximize yield and quality.'
    },
    {
      icon: Leaf,
      title: 'Integrated Pest Management',
      description: 'Insect-proof netting and bio-control systems minimize pesticide use and promote organic farming practices.'
    }
  ];

  const advantages = [
    '3-5x higher crop yields compared to traditional open-field farming',
    'Extended growing seasons enabling multiple harvests per year',
    'Superior protection against pests, diseases, and environmental stresses',
    'Water savings of 70-90% through precision irrigation',
    'Premium quality produce with better size, color, and nutritional value',
    'Reduced chemical inputs for healthier, eco-friendly farming',
    'Controlled microclimate for consistent production quality',
    'Higher profitability with access to off-season markets and premium pricing',
    'Scalable from small farms to large commercial operations',
    'Government subsidies and incentives available in many regions'
  ];

  const types = [
    {
      title: 'Naturally Ventilated Polyhouse',
      description: 'Cost-effective design using roof and side vents for natural airflow. Ideal for moderate climates and vegetable cultivation.',
      image:"/service/poly/3.jpg"
    },
    {
      title: 'Fan and Pad Cooling System',
      description: 'Advanced evaporative cooling for hot climates. Maintains lower temperatures through exhaust fans and wet pads.',
      image:"/service/poly/5.jpg"
    },
    {
      title: 'Hi-Tech Climate-Controlled Polyhouse',
      description: 'Fully automated with HVAC, CO2 enrichment, and computerized controls. Perfect for high-value crops like flowers and herbs.',
      image:"/service/poly/4.jpg"
    },
    {
      title: 'Shade Net House',
      description: 'Partial shading structure for light-sensitive crops. Combines polyhouse benefits with shade cloth for temperature regulation.',
      image:"/service/poly/6.jpg"
    }
  ];

  const components = [
    'Galvanized steel frame for long-lasting structure (20+ years durability)',
    'UV-stabilized polyethylene film (200 micron thickness) with anti-drip and anti-fog properties',
    'Automated ventilation systems with motorized vents and fans',
    'Precision drip irrigation and fertigation systems',
    'Insect-proof netting (40-50 mesh) on sides and entrances',
    'Climate control sensors and IoT-based monitoring dashboard',
    'Optional heating systems for cold regions',
    'Rainwater harvesting integration for sustainability'
  ];

  const caseStudies = [
    {
      title: 'Tomato Farm in Maharashtra',
      description: 'Increased yield from 20 tons/acre to 80 tons/acre with our naturally ventilated polyhouse. ROI achieved in 2 years.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      metrics: ['400% yield increase', '50% water savings', 'Premium market access']
    },
    {
      title: 'Flower Cultivation in Karnataka',
      description: 'Hi-tech polyhouse enabled export-quality roses year-round, with 30% reduction in pesticide use and higher shelf life.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      metrics: ['Year-round production', 'Export standards met', '35% profit margin']
    }
  ];

  const testimonials = [
    {
      quote: 'Our polyhouse from this company transformed our farm. We now produce high-quality vegetables throughout the year with minimal water usage.',
      author: 'Rajesh Patel, Farmer in Gujarat',
      image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg' // Placeholder
    },
    {
      quote: 'The climate control features are outstanding. We\'ve seen a massive increase in yield and quality for our exotic flowers.',
      author: 'Priya Sharma, Agri-Entrepreneur in Tamil Nadu',
      image: 'https://images.pexels.com/photos/7654321/pexels-photo-7654321.jpeg' // Placeholder
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/service/poly/1.jpg"
          alt="Dhanvantri Farms Polyhouse Landscape"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-green-800/60 to-transparent">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4 max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
              Transform Farming with <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-300">Dhanvantri Farms Polyhouses</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-100 max-w-4xl mx-auto mb-8 drop-shadow-md">
              Discover Dhanvantri Farms’ advanced polyhouse solutions for sustainable, high-yield farming with year-round crop protection.
            </p>
            <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-lime-400 text-green-900 rounded-full font-bold text-lg hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Polyhouse Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is a <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Dhanvantri Farms Polyhouse</span>?
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                A Dhanvantri Farms polyhouse is a state-of-the-art controlled environment structure designed for modern agriculture. Covered with durable, UV-stabilized polyethylene film, it creates an optimal microclimate by precisely managing temperature, humidity, light, and ventilation.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Unlike open-field farming, Dhanvantri Farms polyhouses shield crops from harsh weather, pests, and diseases, while minimizing water and chemical use. Perfect for high-value crops like vegetables, flowers, and fruits, our polyhouses boost yields by 3-5x and enable year-round farming.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                With advanced features like automated climate control and precision irrigation, Dhanvantri Farms polyhouses empower farmers to achieve sustainable, high-quality production with maximum efficiency.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-semibold">Trusted by farmers across India for protected cultivation</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <Image
          src="/service/poly/2.jpg"
          alt="Inside a Dhanvantri Farms Polyhouse"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for efficiency, durability, and maximum productivity in modern agriculture.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-100"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full mb-4 mx-auto shadow-md">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unmatched <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Advantages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why polyhouses are transforming agriculture worldwide.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:bg-green-50 transition-all"
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-lg text-gray-800">{advantage}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/polyhouse/advantages" className="inline-flex items-center px-8 py-4 bg-lime-400 text-green-900 rounded-full font-bold text-lg hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl">
              Explore Detailed Benefits <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Types Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-emerald-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Polyhouses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect polyhouse design based on your climate, crops, and budget.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover brightness-90 hover:brightness-100 transition-all"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Components Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 order-last lg:order-first"
            >
              <Image
                src="https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg"
                alt="Polyhouse Components"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Essential <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Components</span> & Specifications
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Our polyhouses are built with premium materials and innovative technology for superior performance.
              </p>
              <div className="space-y-4">
                {components.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-all"
                  >
                    <BarChart className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">{component}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our polyhouses are boosting farm productivity.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from farmers who have transformed their operations with our polyhouse solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <Users className="w-8 h-8 text-green-600 mb-4 mx-auto" />
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-semibold text-gray-900">{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-green-700 to-emerald-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Mail className="w-12 h-12 mx-auto mb-6 text-lime-300" />
          <h2 className="text-4xl font-bold mb-6 drop-shadow-md">
            Ready to Elevate Your Farming Game?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Join thousands of successful farmers using our polyhouse solutions. Get personalized advice and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-lime-400 text-green-900 rounded-full font-bold text-lg hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl">
              Request Free Quote <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/polyhouse/demo" className="inline-flex items-center px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all shadow-lg hover:shadow-xl">
              Schedule Demo <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
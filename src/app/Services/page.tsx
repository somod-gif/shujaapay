"use client";
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  CreditCard, 
  Smartphone, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  Star,
  Play,
  Store,
  Truck,
  Lock,
  BarChart2,
  Globe2,
  Box,
  ShoppingCart,
  Smartphone as MobileIcon
} from 'lucide-react';

const ServicesPage = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto carousel effect for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Store,
      title: 'Store Builder',
      description: 'Create mobile-friendly online shops in minutes',
      features: ['Optimized for smartphones', 'Low data usage', 'Custom domains', 'Inventory management']
    },
    {
      icon: CreditCard,
      title: 'Payments & Escrow',
      description: 'Cross-border payments with built-in protection',
      features: ['Escrow system', 'Multi-currency support', 'Instant payouts', 'Fraud prevention']
    },
    {
      icon: Truck,
      title: 'Delivery Infrastructure',
      description: 'Built-in logistics for reliable shipping',
      features: ['Order tracking', 'Delivery proof', 'Multiple carriers', 'Cost optimization']
    }
  ];

  const features = [
    {
      icon: Lock,
      title: 'Trust Infrastructure',
      description: 'Ratings, proof-of-delivery, and dispute systems'
    },
    {
      icon: BarChart2,
      title: 'Analytics Dashboard',
      description: 'Real-time insights for sellers and admins'
    },
    {
      icon: Globe2,
      title: 'Pan-African Reach',
      description: 'Works across Nigeria, Kenya, Ghana, South Africa'
    },
    {
      icon: Box,
      title: 'Dropshipping Tools',
      description: 'Source and fulfill without holding inventory'
    },
    {
      icon: ShoppingCart,
      title: 'Mobile Checkout',
      description: 'Optimized for African mobile users'
    },
    {
      icon: Users,
      title: 'Buyer Protection',
      description: 'Verified sellers and transparent policies'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Auto-release payments after confirmed delivery'
    },
    {
      icon: MobileIcon,
      title: 'Mobile-First',
      description: 'Designed for Africa\'s smartphone dominance'
    }
  ];

  const testimonials = [
    {
      name: 'Adunni Okafor',
      role: 'Fashion Entrepreneur',
      location: 'Lagos, Nigeria',
      content: 'KAIHMA helped me expand to Kenya and Ghana without worrying about payments or logistics. My cross-border sales grew 300% in 6 months!',
      rating: 5
    },
    {
      name: 'Samuel Maina',
      role: 'Electronics Seller',
      location: 'Nairobi, Kenya',
      content: 'The escrow system gave my customers confidence to order. My chargeback rate dropped to zero after switching to KAIHMA.',
      rating: 5
    },
    {
      name: 'Ama Mensah',
      role: 'Handmade Goods',
      location: 'Accra, Ghana',
      content: 'Before KAIHMA, I lost money to fake orders. Now I have peace of mind with payment guarantees before shipping.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'African Sellers' },
    { number: '₦2B+', label: 'Monthly GMV' },
    { number: '15+', label: 'Countries Supported' },
    { number: '98%', label: 'Delivery Success Rate' }
  ];

  const africanChallenges = [
    {
      challenge: "Payments",
      traditional: "Only local payment support",
      reality: "Cross-border payments are complex and unreliable",
      icon: CreditCard
    },
    {
      challenge: "Delivery",
      traditional: "Sellers must sort logistics",
      reality: "Logistics is broken, slow or missing",
      icon: Truck
    },
    {
      challenge: "Trust",
      traditional: "No buyer protection",
      reality: "Fraud and fear are common",
      icon: Shield
    },
    {
      challenge: "Setup",
      traditional: "Complicated tools",
      reality: "Many lack access or experience",
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-100 text-sm font-medium">🚀 The Commerce OS for Africa</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              eCommerce That Actually Works in Africa
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              KAIHMA combines store creation, payments, logistics and trust tools into one platform built for Africa's unique market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center">
                Start Selling
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 sm:py-12 -mt-8 sm:-mt-10 relative z-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why eCommerce Fails in Africa
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Traditional platforms don't solve Africa's unique challenges
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {africanChallenges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.challenge}</h3>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Traditional:</span> {item.traditional}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Reality:</span> {item.reality}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-blue-50 px-6 py-4 border-t border-blue-100">
              <p className="text-center text-blue-700 font-medium">
                KAIHMA is designed to solve these problems with built-in solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The KAIHMA Commerce OS
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything African sellers need in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Create Store",
                description: "Mobile-friendly shop in minutes",
                icon: Store
              },
              {
                step: "2", 
                title: "Secure Payment",
                description: "Buyer funds held in escrow",
                icon: Lock
              },
              {
                step: "3",
                title: "Reliable Delivery",
                description: "Built-in logistics with tracking",
                icon: Truck
              },
              {
                step: "4",
                title: "Trusted Transaction",
                description: "Payment released after confirmation",
                icon: CheckCircle
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl sm:text-2xl font-bold group-hover:bg-blue-700 transition-all duration-300 shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 mt-14 sm:mt-17 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center group-hover:border-blue-200 transition-all duration-300">
                      <Icon className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Complete Commerce Stack
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              All the tools African sellers need to succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 border border-blue-100 hover:shadow-xl transition-all duration-200">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-700">
                        <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for African Commerce
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Features designed around Africa's unique market needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.slice(0, showAllFeatures ? features.length : 8).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center justify-center mx-auto text-sm sm:text-base"
            >
              {showAllFeatures ? 'Show Less Features' : 'Show All Features'}
              {showAllFeatures ? (
                <ChevronUp className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              ) : (
                <ChevronDown className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              African Entrepreneurs Love KAIHMA
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Stories from sellers across the continent
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
                    <div className="flex justify-center mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-3 sm:mr-4">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm sm:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          {testimonial.role}
                        </div>
                        <div className="text-blue-600 text-xs font-medium">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Grow Your African Business?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of African entrepreneurs using KAIHMA to sell across borders with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg">
              Start Selling Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
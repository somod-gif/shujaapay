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
  Play
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
      icon: CreditCard,
      title: 'E-commerce Protection',
      description: 'Sell online with guaranteed payments',
      features: ['Pre-payment escrow', 'Auto-payout on delivery', 'Buyer verification', 'Dispute resolution']
    },
    {
      icon: Smartphone,
      title: 'Freelancer Security',
      description: 'Get paid upfront for your work',
      features: ['Milestone payments', 'Client verification', 'Work protection', 'Secure contracts']
    },
    {
      icon: TrendingUp,
      title: 'B2B Transactions',
      description: 'Secure large business deals with confidence',
      features: ['Bulk order protection', 'Document verification', 'Multi-party escrow', 'API integration']
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Payment Guarantee',
      description: 'Funds secured in escrow before you ship or deliver services'
    },
    {
      icon: Zap,
      title: 'Instant Payouts',
      description: 'Get paid immediately when buyers confirm delivery'
    },
    {
      icon: Globe,
      title: 'Pan-African',
      description: 'Works across Nigeria, Kenya, and major African markets'
    },
    {
      icon: Users,
      title: 'Fraud Protection',
      description: 'Verified buyers only - no more fake orders'
    }
  ];

  const testimonials = [
    {
      name: 'Adunni Okafor',
      role: 'Fashion Store Owner',
      location: 'Lagos, Nigeria',
      content: 'Kaihma saved me from losing ₦80k monthly to fake buyers. Now I process ₦450k monthly with zero rejections!',
      rating: 5
    },
    {
      name: 'Samuel Maina',
      role: 'Freelance Developer',
      location: 'Nairobi, Kenya',
      content: 'I was stressed about client payments until Kaihma. Now I handle 50+ orders weekly worry-free.',
      rating: 5
    },
    {
      name: 'Victory Eze',
      role: 'Dropshipper',
      location: 'Abuja, Nigeria',
      content: 'I was ready to quit e-commerce until Kaihma. The escrow system helped me scale and hire my second employee.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'Protected Transactions' },
    { number: '₦500M+', label: 'In Escrow' },
    { number: '98%', label: 'Success Rate' },
    { number: '0', label: 'Payment Rejections' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-100 text-sm font-medium">🚀 Trusted by African sellers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              Stop Losing Money To Fake Buyers
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Kaihma's escrow system guarantees your payments before you ship. 
              No more rejected deliveries or payment scams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                How It Works
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

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Kaihma Protects You
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Simple 4-step process to eliminate payment risks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Buyer Pays",
                description: "Customer funds are secured in escrow",
                icon: CreditCard
              },
              {
                step: "2", 
                title: "You Ship",
                description: "Get notified to dispatch the order",
                icon: Smartphone
              },
              {
                step: "3",
                title: "Delivery Confirmed",
                description: "Buyer confirms receipt of goods",
                icon: CheckCircle
              },
              {
                step: "4",
                title: "Instant Payout",
                description: "Funds released to your account",
                icon: TrendingUp
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
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Uses Kaihma?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Any seller who's tired of losing money to payment scams
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
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sellers Love Kaihma
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              The escrow system that eliminates payment rejections and fraud
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.slice(0, showAllFeatures ? features.length : 4).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
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

          {features.length > 4 && (
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
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Sellers, Real Results
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              African sellers who stopped losing money with Kaihma
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
            Stop Losing Money Today
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of sellers who've already protected their income with Kaihma's escrow system.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
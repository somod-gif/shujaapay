"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Globe, Users, CreditCard, Smartphone, TrendingUp, CheckCircle, Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Page = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process transactions in seconds with our advanced payment infrastructure'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your money and data are protected with enterprise-grade encryption'
    },
    {
      icon: Globe,
      title: 'Pan-African Reach',
      description: 'Send money across borders with competitive exchange rates'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Get help whenever you need it from our dedicated support team'
    }
  ];

  const services = [
    {
      icon: CreditCard,
      title: 'Bill Payments',
      description: 'Pay utilities, subscriptions, and services instantly',
      features: ['Electricity Bills', 'Internet & Cable', 'Insurance', 'Government Services']
    },
    {
      icon: Smartphone,
      title: 'Mobile Money',
      description: 'Transfer money to any mobile wallet across Africa',
      features: ['Instant Transfers', 'Low Fees', 'Multiple Networks', 'Bulk Payments']
    },
    {
      icon: TrendingUp,
      title: 'Merchant Solutions',
      description: 'Accept payments online and in-store with ease',
      features: ['Online Checkout', 'POS Integration', 'Analytics', 'Multi-currency']
    }
  ];

  const testimonials = [
    {
      name: 'Amina Hassan',
      role: 'Small Business Owner',
      location: 'Dar es Salaam, Tanzania',
      content: 'ShujaaPay has transformed how I handle payments in my shop. My customers love the seamless mobile money integration.',
      rating: 5,
      avatar: 'AH'
    },
    {
      name: 'John Mwangi',
      role: 'Freelance Designer',
      location: 'Nairobi, Kenya',
      content: 'Receiving payments from clients across Africa has never been easier. Fast, secure, and always reliable.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Fatima Diallo',
      role: 'E-commerce Store Owner',
      location: 'Lagos, Nigeria',
      content: 'The analytics and reporting features help me understand my business better. Perfect for African entrepreneurs!',
      rating: 5,
      avatar: 'FD'
    },
    {
      name: 'David Banda',
      role: 'Restaurant Owner',
      location: 'Kampala, Uganda',
      content: 'ShujaaPay simplified our payment process. Now we accept mobile money from all major networks seamlessly.',
      rating: 5,
      avatar: 'DB'
    }
  ];

  const stats = [
    { number: '100K+', label: 'Active Users' },
    { number: 'TSh 5B+', label: 'Processed Monthly' },
    { number: '20+', label: 'African Countries' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-20 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-blue-100 text-sm font-medium">🚀 Trusted by 100,000+ users across Africa</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Africa's Leading
                <span className="block text-blue-200">
                  Payment Platform
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Send money, pay bills, and grow your business across Tanzania and Africa. 
                Fast, secure, and built for African entrepreneurs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900 font-semibold">Quick Transfer</h3>
                  <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded">✓ Verified</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amount</span>
                    <span className="text-2xl font-bold text-gray-900">TSh 50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fee</span>
                    <span className="text-gray-900">TSh 500</span>
                  </div>
                  <div className="border-t pt-4">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Send Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ShujaaPay?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for Africa, trusted by thousands. Experience the perfect blend of speed, security, and simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Payment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personal transfers to business solutions, we've got everything you need to manage your finances.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Africa
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers from Tanzania and across Africa have to say about ShujaaPay.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="h-5 w-5 text-blue-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </button>

              {/* Testimonial Content */}
              <div className="text-center px-16">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users across Tanzania and Africa who trust ShujaaPay for their financial needs. 
            Start your journey today - it's free to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Create Free Account
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
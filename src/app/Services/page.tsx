"use client";
import React, { useState } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  BarChart3, 
  Clock, 
  DollarSign,
  Wifi,
  Car,
  Home,
  GraduationCap,
  Plane,
  ShoppingCart,
  Code,
  Headphones,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  const mainServices = [
    {
      id: 'mobile-money',
      title: 'Mobile Money Services',
      subtitle: 'Send & Receive Money Instantly',
      description: 'Connect with all major mobile money networks across Tanzania and Africa.',
      icon: Smartphone,
      features: ['M-Pesa, Tigo Pesa, Airtel Money support', 'Cross-network transfers', 'Real-time processing', 'Low fees'],
      stats: { value: '99.9%', label: 'Uptime' },
      steps: [
        { title: 'Enter recipient details', description: 'Add phone number and amount' },
        { title: 'Confirm transaction', description: 'Review and verify payment details' },
        { title: 'Complete payment', description: 'Use PIN or biometric authentication' },
        { title: 'Get confirmation', description: 'Instant SMS and app notification' }
      ]
    },
    {
      id: 'bill-payments',
      title: 'Bill Payment Solutions',
      subtitle: 'Pay All Your Bills in One Place',
      description: 'Simplify your life by paying utilities, subscriptions, and services in one platform.',
      icon: CreditCard,
      features: ['Electricity & water bills', 'Internet & TV subscriptions', 'Insurance & school fees', '24/7 availability'],
      stats: { value: '500K+', label: 'Bills Paid' },
      steps: [
        { title: 'Select bill type', description: 'Choose from utilities, subscriptions, etc.' },
        { title: 'Enter account details', description: 'Add your account or meter number' },
        { title: 'Confirm amount', description: 'Verify bill amount and due date' },
        { title: 'Pay securely', description: 'Complete payment and get receipt' }
      ]
    },
    {
      id: 'merchant-solutions',
      title: 'Merchant Solutions',
      subtitle: 'Accept Payments, Grow Your Business',
      description: 'Complete payment solutions for businesses of all sizes across Africa.',
      icon: Building,
      features: ['Online payment gateway', 'POS integration', 'QR code payments', 'Advanced analytics'],
      stats: { value: '10K+', label: 'Merchants' },
      steps: [
        { title: 'Set up account', description: 'Register your business details' },
        { title: 'Integrate payment', description: 'Add our gateway to your platform' },
        { title: 'Accept payments', description: 'Receive payments from customers' },
        { title: 'Track performance', description: 'Monitor sales and analytics' }
      ]
    }
  ];

  const additionalServices = [
    { icon: Wifi, title: 'Airtime & Data', description: 'Buy airtime and data bundles' },
    { icon: Car, title: 'Transport', description: 'Bus tickets and ride payments' },
    { icon: Home, title: 'Property', description: 'Rent and mortgage payments' },
    { icon: GraduationCap, title: 'Education', description: 'School fees and services' },
    { icon: Plane, title: 'Travel', description: 'Flight and hotel bookings' },
    { icon: ShoppingCart, title: 'E-commerce', description: 'Online shopping payments' }
  ];

  const whyChooseFeatures = [
    { icon: Shield, title: '100% Secure', description: 'Bank-level security with encryption' },
    { icon: Zap, title: 'Lightning Fast', description: 'Instant transactions across networks' },
    { icon: Globe, title: 'Pan-African', description: 'Connect across Tanzania and Africa' },
    { icon: Users, title: '24/7 Support', description: 'Round-the-clock customer support' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Payment Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your financial operations across Tanzania and Africa with our comprehensive payment platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Services Work
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get you started with secure payments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                description: "Create your account and verify your identity in minutes",
                icon: Users
              },
              {
                step: "02", 
                title: "Choose Service",
                description: "Select from mobile money, bill payments, or merchant solutions",
                icon: CreditCard
              },
              {
                step: "03",
                title: "Make Payment",
                description: "Complete transactions with bank-level security and real-time processing",
                icon: Shield
              },
              {
                step: "04",
                title: "Track & Manage",
                description: "Monitor all your payments and get instant confirmations",
                icon: BarChart3
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold group-hover:bg-blue-700 transition-all duration-300 shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12  bg-white border-4 border-blue-100 rounded-full flex items-center justify-center group-hover:border-blue-200 transition-all duration-300">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Services - Interactive Tabs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions designed for the African market
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab Navigation */}
            <div className="lg:w-1/3 space-y-4">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeService === index
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white hover:bg-blue-50 shadow-md border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon className={`h-6 w-6 mr-4 ${
                          activeService === index ? 'text-white' : 'text-blue-600'
                        }`} />
                        <div>
                          <h3 className={`font-semibold mb-1 ${
                            activeService === index ? 'text-white' : 'text-gray-900'
                          }`}>
                            {service.title}
                          </h3>
                          <p className={`text-sm ${
                            activeService === index ? 'text-blue-100' : 'text-gray-600'
                          }`}>
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className={`text-right ${
                        activeService === index ? 'text-white' : 'text-blue-600'
                      }`}>
                        <div className="text-lg font-bold">{service.stats.value}</div>
                        <div className="text-xs opacity-75">{service.stats.label}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Service Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                    {React.createElement(mainServices[activeService].icon, {
                      className: 'h-6 w-6'
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {mainServices[activeService].title}
                    </h3>
                    <p className="text-gray-600">
                      {mainServices[activeService].subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">
                  {mainServices[activeService].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {mainServices[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service-specific steps */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">How it works:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mainServices[activeService].steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-1">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Compact Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ShujaaPay?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands across Africa for secure, fast payments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services - Collapsible */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="text-blue-600 font-semibold flex items-center mx-auto hover:text-blue-700 transition-colors"
            >
              {showAllServices ? 'Show Less' : 'Explore More Services'}
              {showAllServices ? 
                <ChevronUp className="ml-2 h-5 w-5" /> : 
                <ChevronDown className="ml-2 h-5 w-5" />
              }
            </button>
          </div>

          {/* Always show first 3 services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {additionalServices.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Collapsible additional services */}
          {showAllServices && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-top duration-300">
              {additionalServices.slice(3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index + 3} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who trust ShujaaPay. Start your secure transaction today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">500K+</div>
                <div className="text-gray-600">Transactions Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
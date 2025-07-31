
"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Users,
  CreditCard,
  Smartphone,
  TrendingUp,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Store,
  Truck,
  UserCheck,
  BarChart3,
  Layers,
  Coins,
  ShoppingBag,
  Wifi,
  Clock,
  Target
} from "lucide-react";

const KaihmaLanding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [currentHeroTestimonial, setCurrentHeroTestimonial] = useState(0);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    const heroTestimonialInterval = setInterval(() => {
      setCurrentHeroTestimonial((prev) => (prev + 1) % heroTestimonials.length);
    }, 4000);

    const animationInterval = setInterval(() => {
      setAnimatedValue((prev) => (prev + 1000) % 50000);
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(heroTestimonialInterval);
      clearInterval(animationInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const coreFeatures = [
    {
      icon: Store,
      title: "Mobile-First Store Builder",
      description: "Create stunning online shops in minutes, optimized for smartphones and low data usage"
    },
    {
      icon: Shield,
      title: "Built-in Escrow System",
      description: "Cross-border payments with guaranteed money release only after confirmed delivery"
    },
    {
      icon: Truck,
      title: "Integrated Logistics",
      description: "Track deliveries, capture proof, and ensure reliable fulfillment across Africa"
    },
    {
      icon: UserCheck,
      title: "Trust Infrastructure",
      description: "Verified sellers, ratings system, and transparent dispute resolution"
    }
  ];

  const services = [
    {
      icon: ShoppingBag,
      title: "E-commerce Store Creation",
      description: "Complete online store with mobile checkout",
      features: [
        "Theme builder & customization",
        "Inventory management tools",
        "Product upload & optimization",
        "Custom domain integration"
      ],
    },
    {
      icon: CreditCard,
      title: "Wallet & Payment System",
      description: "Secure cross-border payments with escrow protection",
      features: [
        "Multi-currency support",
        "Automated escrow release",
        "Payment tracking & history",
        "Instant payout on delivery"
      ],
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Real-time insights and performance tracking",
      features: [
        "Sales dashboard & reports",
        "Customer behavior analytics",
        "Inventory tracking",
        "Revenue optimization tools"
      ],
    },
  ];

  const testimonials = [
    {
      name: "Adunni Okafor",
      role: "Fashion Store Owner",
      location: "Lagos, Nigeria",
      content: "KAIHMA's escrow system saved me from losing ₦80k monthly to fake buyers. Now I process ₦450k monthly with complete peace of mind!",
      rating: 5,
      avatar: "AO",
    },
    {
      name: "Samuel Maina", 
      role: "Tech Entrepreneur",
      location: "Nairobi, Kenya",
      content: "The integrated logistics and payment system helped me scale from 10 to 200+ orders monthly. KAIHMA handles everything seamlessly.",
      rating: 5,
      avatar: "SM",
    },
    {
      name: "Victory Eze",
      role: "Dropshipper",
      location: "Abuja, Nigeria", 
      content: "I was ready to quit e-commerce until KAIHMA. The trust infrastructure helped me scale and hire my second employee.",
      rating: 5,
      avatar: "VE",
    },
  ];

  const heroTestimonials = [
    {
      name: "Adebayo O.",
      business: "Electronics Seller",
      text: "KAIHMA's Commerce OS eliminated all my payment headaches"
    },
    {
      name: "Fatima A.",
      business: "Fashion Store",
      text: "Built my entire online business in under 30 minutes"
    },
    {
      name: "Chidi M.",
      business: "Phone Dealer", 
      text: "Cross-border payments finally work reliably in Africa"
    },
  ];

  const stats = [
    { number: "50,000+", label: "Transactions Protected" },
    { number: "₦2.5B+", label: "Secured in Escrow" },
    { number: "99.9%", label: "Success Rate" },
    { number: "15+", label: "African Countries" },
  ];

  const problemPoints = [
    "Complex payment systems that don't work across borders",
    "Broken logistics that lose your products and damage trust", 
    "No buyer protection leading to constant fraud fears",
    "Technical barriers preventing quick store setup",
    "Lack of integrated tools forcing expensive third-party solutions"
  ];

  const solutionSteps = [
    {
      step: "1",
      title: "Quick Store Setup",
      description: "Launch your mobile-optimized store in minutes with our drag-and-drop builder"
    },
    {
      step: "2", 
      title: "Secure Payments",
      description: "Customers pay into escrow first - your money is guaranteed before shipping"
    },
    {
      step: "3",
      title: "Reliable Delivery", 
      description: "Our logistics network tracks every package with proof of delivery"
    },
    {
      step: "4",
      title: "Instant Payout",
      description: "Money releases automatically when delivery is confirmed"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white pt-20 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 right-1/3 w-60 h-60 bg-blue-300/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Shield
            className="absolute top-1/4 left-1/4 w-8 h-8 text-white/20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Store
            className="absolute top-1/3 right-1/4 w-6 h-6 text-green-300/30 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
          <Coins
            className="absolute bottom-1/3 left-1/6 w-5 h-5 text-yellow-300/40 animate-bounce"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Hero Content */}
            <div className="space-y-8">
              {/* Brand Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-green-100">
                    🌍 KAIHMA - The Commerce Operating System for Africa
                  </span>
                </div>
              </div>

              {/* Dynamic Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Make eCommerce
                  </span>
                  <br />
                  <span className="text-white">Actually</span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                    Work in Africa
                  </span>
                </h1>

                <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>

              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-lg">
                The <span className="font-semibold text-white">complete commerce infrastructure</span> that combines store creation, secure payments, delivery tracking, and buyer protection into one powerful platform built for Africa's unique market realities.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-blue-100">Escrow-Protected Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-blue-100">Built-in Logistics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-blue-100">Mobile-First Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-blue-100">Cross-Border Ready</span>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-white to-blue-50 text-blue-700 hover:from-blue-50 hover:to-white px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Building Your Store</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>

                <button className="group border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center hover:border-white hover:shadow-lg">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  See How It Works
                </button>
              </div>

              {/* Rotating Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {heroTestimonials[currentHeroTestimonial].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/90 text-lg italic mb-2">
                      "{heroTestimonials[currentHeroTestimonial].text}"
                    </p>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold text-blue-200">
                        {heroTestimonials[currentHeroTestimonial].name}
                      </p>
                      <span className="text-blue-300">•</span>
                      <p className="text-sm text-blue-300">
                        {heroTestimonials[currentHeroTestimonial].business}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visual - Commerce OS Dashboard */}
            <div className="relative">
              {/* Main Commerce Dashboard */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-lg">KAIHMA Dashboard</h3>
                      <p className="text-gray-500 text-sm">Commerce Operating System</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600 text-sm font-semibold bg-green-50 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>All Systems Active</span>
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Store className="h-5 w-5 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">STORES</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">24</div>
                    <div className="text-xs text-gray-600">Active stores</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">ESCROW</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">₦{(450 + (animatedValue % 100)).toLocaleString()}k</div>
                    <div className="text-xs text-gray-600">Protected</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-gray-700">Recent Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">Payment released for Order #1247</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-700">New store created: Fashion Hub</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg">
                      <Truck className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm text-gray-700">Delivery in progress: 3 orders</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <Store className="h-4 w-4" />
                    <span className="text-sm font-medium">New Store</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                    <BarChart3 className="h-4 w-4" />
                    <span className="text-sm font-medium">Analytics</span>
                  </button>
                </div>
              </div>

              {/* Floating Success Cards */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-20">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-semibold">Store Live!</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl z-20 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Monthly Growth</p>
                    <p className="font-bold text-xl text-gray-900">+247%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <Target className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-red-800 mb-6">
                  Why Traditional eCommerce Platforms Fail in Africa
                </h3>
                <div className="text-red-700 space-y-4">
                  <p className="font-semibold text-lg mb-4">
                    African entrepreneurs face unique challenges that global platforms ignore:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {problemPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-red-100 rounded-lg text-center">
                    <p className="text-xl font-bold text-red-800">
                      Result: 60%+ of African commerce still happens offline
                    </p>
                    <p className="text-sm mt-2">Not because people don't want to buy online, but because the infrastructure doesn't work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Introducing KAIHMA - Built for African Realities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The first Commerce Operating System designed from the ground up to solve Africa's unique eCommerce challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {solutionSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Differentiator */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We're Not Building an African Shopify
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We're writing a new playbook — one where <strong>trust is built-in, not assumed</strong>. 
              KAIHMA provides the complete commerce stack: store, payments, delivery, and trust infrastructure.
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 px-6 py-3 rounded-full">
                <span className="text-blue-800 font-semibold">Commerce Operating System</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">KAIHMA By The Numbers</h3>
              <p className="text-blue-100">Powering the future of African commerce</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KAIHMA combines all essential commerce tools into a unified operating system designed for African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Commerce Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From store creation to payment processing, KAIHMA handles every aspect of your online business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Real Sellers, Real Results
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              African sellers who stopped losing money with Kaihma
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg md:shadow-xl relative overflow-hidden">
              {/* Navigation Buttons - Hidden on mobile, shown on md+ */}
              <button
                onClick={prevTestimonial}
                className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="h-5 w-5 text-blue-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full items-center justify-center transition-colors z-10"
              >
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </button>

              {/* Testimonial Content */}
              <div className="text-center px-4 sm:px-8 md:px-16">
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-gray-900 text-md md:text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-blue-600 text-xs md:text-sm font-medium">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Buttons - Shown only on mobile */}
              <div className="flex md:hidden justify-between mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-blue-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* App Screenshot */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                {/* iPhone Mockup */}

                {/* Android Phone Floating Next to iPhone */}
                <div className="absolute -bottom-16 -right-16 w-56 h-auto">
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    <img
                      src="/images/logo.jpg" // Your app screenshot
                      alt="App Preview"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Manage Transactions On The Go
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our mobile app gives you full control over your escrow payments,
                order tracking, and buyer communication - all from your
                smartphone.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Real-time Notifications
                    </h3>
                    <p className="text-gray-600">
                      Get instant alerts when payments are secured or orders are
                      completed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Secure Mobile Payments
                    </h3>
                    <p className="text-gray-600">
                      Approve or release funds with biometric authentication for
                      extra security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Offline Mode
                    </h3>
                    <p className="text-gray-600">
                      Check order statuses even when you're offline - updates
                      sync when you reconnect.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Download Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold leading-none">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-xl font-semibold leading-none">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Losing Money Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 1,353 sellers who've already protected their income with
            Kaihma's escrow system. Limited spots available - next batch opens
            Q2 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Claim Your Spot
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              See Pricing
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Page;
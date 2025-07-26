// app/page.tsx
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
} from "lucide-react";

const Page = () => {
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

  const features = [
    {
      icon: Shield,
      title: "Payment Guarantee",
      description:
        "Funds secured in escrow before you ship or deliver services",
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Get paid immediately when buyers confirm delivery",
    },
    {
      icon: Globe,
      title: "Pan-African",
      description: "Works across Nigeria, Kenya, and major African markets",
    },
    {
      icon: Users,
      title: "Fraud Protection",
      description: "Verified buyers only - no more fake orders",
    },
  ];

  const services = [
    {
      icon: CreditCard,
      title: "E-commerce Protection",
      description: "Sell online with guaranteed payments",
      features: [
        "Pre-payment escrow",
        "Auto-payout on delivery",
        "Buyer verification",
        "Dispute resolution",
      ],
    },
    {
      icon: Smartphone,
      title: "Freelancer Security",
      description: "Get paid upfront for your work",
      features: [
        "Milestone payments",
        "Client verification",
        "Work protection",
        "Secure contracts",
      ],
    },
    {
      icon: TrendingUp,
      title: "B2B Transactions",
      description: "Secure large business deals with confidence",
      features: [
        "Bulk order protection",
        "Document verification",
        "Multi-party escrow",
        "API integration",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Adunni Okafor",
      role: "Fashion Store Owner",
      location: "Lagos, Nigeria",
      content:
        "Kaihma saved me from losing ₦80k monthly to fake buyers. Now I process ₦450k monthly with zero rejections!",
      rating: 5,
      avatar: "AO",
    },
    {
      name: "Samuel Maina",
      role: "Freelance Developer",
      location: "Nairobi, Kenya",
      content:
        "I was stressed about client payments until Kaihma. Now I handle 50+ orders weekly worry-free.",
      rating: 5,
      avatar: "SM",
    },
    {
      name: "Victory Eze",
      role: "Dropshipper",
      location: "Abuja, Nigeria",
      content:
        "I was ready to quit e-commerce until Kaihma. The escrow system helped me scale and hire my second employee.",
      rating: 5,
      avatar: "VE",
    },
  ];

  const heroTestimonials = [
    {
      name: "Adebayo O.",
      business: "Electronics Seller",
      text: "No more fake buyers! Kaihma saved me ₦200k last month",
    },
    {
      name: "Fatima A.",
      business: "Fashion Store",
      text: "100% payment guarantee. My business finally feels secure",
    },
    {
      name: "Chidi M.",
      business: "Phone Dealer",
      text: "Zero scams since I started using Kaihma. Amazing!",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Protected Transactions" },
    { number: "₦2.5B+", label: "Secured in Escrow" },
    { number: "99.9%", label: "Success Rate" },
    { number: "0", label: "Payment Rejections" },
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
          <CheckCircle
            className="absolute top-1/3 right-1/4 w-6 h-6 text-green-300/30 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
          <Star
            className="absolute bottom-1/3 left-1/6 w-5 h-5 text-yellow-300/40 animate-bounce"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Hero Content */}
            <div className="space-y-8">
              {/* Trust Badge with Animation */}
              <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-100">
                    🛡️ 50,000+ sellers protected • Zero fraud guarantee
                  </span>
                </div>
              </div>

              {/* Dynamic Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Stop Losing
                  </span>
                  <br />
                  <span className="text-white">Money To</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Fake Buyers
                  </span>
                </h1>

                <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>

              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-lg">
                <span className="font-semibold text-white">
                  Kaihma's AI-powered escrow
                </span>{" "}
                guarantees your payments before shipping. Join thousands of
                African sellers who sleep peacefully knowing their money is{" "}
                <span className="text-green-300 font-semibold">
                  always protected
                </span>
                .
              </p>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-white to-blue-50 text-blue-700 hover:from-blue-50 hover:to-white px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Selling Safely</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>

                <button className="group border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center hover:border-white hover:shadow-lg">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Watch Demo (2 min)
                </button>
              </div>

              {/* Rotating Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {heroTestimonials[currentHeroTestimonial].name.charAt(
                          0
                        )}
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

            {/* Enhanced Hero Visual */}
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-lg">
                        Secure Transaction
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Real-time protection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600 text-sm font-semibold bg-green-50 px-4 py-2 rounded-full">
                    <CheckCircle className="h-4 w-4" />
                    <span>Verified & Protected</span>
                  </div>
                </div>

                {/* Transaction Details */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 font-medium">
                        Order Value
                      </span>
                      <div className="text-right">
                        <div className="text-3xl font-black text-gray-900">
                          ₦{(45000 + (animatedValue % 10000)).toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                          +12% from last month
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-gray-500 text-sm">Status</span>
                        <div className="font-semibold text-gray-900 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Funds Secured
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Delivery</span>
                        <p className="font-semibold text-gray-900">
                          Confirmed ✓
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Transaction Progress</span>
                        <span>Ready to release</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-full transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Release Payment Instantly
                  </button>

                  {/* Security Features */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t">
                    <div className="text-center">
                      <Shield className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">
                        AI Fraud Detection
                      </p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">
                        Instant Verification
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="h-6 w-6 text-purple-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">
                        24/7 Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Notification */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-20">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    Payment Secured!
                  </span>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl z-20 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="font-bold text-xl text-gray-900">99.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-red-800 mb-4">
                  It's 11 PM. Another "customer" just rejected your ₦15,000
                  delivery.
                </h3>
                <div className="mt-2 text-red-700">
                  <p className="font-semibold mb-2">
                    You're losing ₦40k-150k monthly to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Fake buyers who waste your time</li>
                    <li>POD failures that steal your inventory</li>
                    <li>
                      The constant stress of "Will they pay or won't they?"
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg text-center">
                    <p className="text-2xl font-bold text-red-800">
                      ₦40k-150k{" "}
                      <span className="text-lg font-normal">
                        lost every single month
                      </span>
                    </p>
                  </div>
                  <p className="mt-4 italic">
                    While you're losing sleep, other sellers sleep peacefully.
                  </p>
                  <p className="mt-2 font-bold">
                    What's the difference? They stopped playing the broken game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Added after Problem section */}
      <section className="bg-blue-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Kaihma
            </h2>
            <p className="text-xl text-gray-600">
              The infrastructure that makes POD failures impossible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl mb-3">1</div>
              <h3 className="text-xl font-bold mb-2">
                Customers pay into escrow first
              </h3>
              <p className="text-gray-600">
                No more "I'll pay when I see it" games
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl mb-3">2</div>
              <h3 className="text-xl font-bold mb-2">
                Your money is guaranteed
              </h3>
              <p className="text-gray-600">Before you even ship the product</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl mb-3">3</div>
              <h3 className="text-xl font-bold mb-2">
                Zero rejected deliveries
              </h3>
              <p className="text-gray-600">
                The system won't allow it to happen
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl mb-3">4</div>
              <h3 className="text-xl font-bold mb-2">Build customer trust</h3>
              <p className="text-gray-600">
                Verified seller status increases conversions
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">
              Proof It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-600">Was losing ₦80k/month</p>
                <p className="text-lg font-bold">
                  → Now makes ₦450k with zero rejections
                </p>
                <p className="text-sm text-gray-500 mt-1">- Adunni, Ibadan</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-600">Couldn't sleep from stress</p>
                <p className="text-lg font-bold">
                  → Processes 50+ orders weekly worry-free
                </p>
                <p className="text-sm text-gray-500 mt-1">- Samuel, Lagos</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-600">Ready to quit selling online</p>
                <p className="text-lg font-bold">
                  → Just hired her second employee
                </p>
                <p className="text-sm text-gray-500 mt-1">- Victory, Abuja</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-red-100 border-l-4 border-red-500 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-800 mb-3">
              The Cost of Waiting
            </h3>
            <p className="text-red-700 font-semibold">
              Every day: ₦1,300-5,000 lost to these problems
            </p>
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
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
              How Kaihma Protects Sellers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The escrow system that eliminates payment rejections and fraud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Uses Kaihma?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Any seller who's tired of losing money to payment scams
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

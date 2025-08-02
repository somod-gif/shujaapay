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
  Target,
} from "lucide-react";

const KaihmaLanding: React.FC = () => {
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
      description:
        "Create stunning online shops in minutes, optimized for smartphones and low data usage",
    },
    {
      icon: Shield,
      title: "Built-in Escrow System",
      description:
        "Cross-border payments with guaranteed money release only after confirmed delivery",
    },
    {
      icon: Truck,
      title: "Integrated Logistics",
      description:
        "Track deliveries, capture proof, and ensure reliable fulfillment across Africa",
    },
    {
      icon: UserCheck,
      title: "Trust Infrastructure",
      description:
        "Verified sellers, ratings system, and transparent dispute resolution",
    },
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
        "Custom domain integration",
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
        "Instant payout on delivery",
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
        "Revenue optimization tools",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Adunni Okafor",
      role: "Fashion Store Owner",
      location: "Lagos, Nigeria",
      content:
        "KAIHMA's escrow system saved me from losing ₦80k monthly to fake buyers. Now I process ₦450k monthly with complete peace of mind!",
      rating: 5,
      avatar: "AO",
    },
    {
      name: "Samuel Maina",
      role: "Tech Entrepreneur",
      location: "Nairobi, Kenya",
      content:
        "The integrated logistics and payment system helped me scale from 10 to 200+ orders monthly. KAIHMA handles everything seamlessly.",
      rating: 5,
      avatar: "SM",
    },
    {
      name: "Victory Eze",
      role: "Dropshipper",
      location: "Abuja, Nigeria",
      content:
        "I was ready to quit e-commerce until KAIHMA. The trust infrastructure helped me scale and hire my second employee.",
      rating: 5,
      avatar: "VE",
    },
  ];

  const heroTestimonials = [
    {
      name: "Adebayo O.",
      business: "Electronics Seller",
      text: "KAIHMA's Commerce OS eliminated all my payment headaches",
    },
    {
      name: "Fatima A.",
      business: "Fashion Store",
      text: "Built my entire online business in under 30 minutes",
    },
    {
      name: "Chidi M.",
      business: "Phone Dealer",
      text: "Cross-border payments finally work reliably in Africa",
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
    "Lack of integrated tools forcing expensive third-party solutions",
  ];

  const solutionSteps = [
    {
      step: "1",
      title: "Quick Store Setup",
      description:
        "Launch your mobile-optimized store in minutes with our drag-and-drop builder",
    },
    {
      step: "2",
      title: "Secure Payments",
      description:
        "Customers pay into escrow first - your money is guaranteed before shipping",
    },
    {
      step: "3",
      title: "Reliable Delivery",
      description:
        "Our logistics network tracks every package with proof of delivery",
    },
    {
      step: "4",
      title: "Instant Payout",
      description: "Money releases automatically when delivery is confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section - Super Responsive */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-10 sm:-left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-400/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-blue-300/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Floating Icons - Responsive positioning */}
        <div className="absolute inset-0 pointer-events-none">
          <Shield
            className="absolute top-1/4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white/20 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <Store
            className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-300/30 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
          <Coins
            className="absolute bottom-1/3 left-1/6 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-300/40 animate-bounce"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Enhanced Hero Content - Mobile First */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Brand Badge - Responsive */}
              <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 border border-white/20 animate-fade-in mt-5">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-xs sm:text-sm font-medium text-green-100">
                    🌍 KAIHMA - The Commerce Operating System for Africa
                  </span>
                </div>
              </div>

              {/* Dynamic Headline - Responsive Typography */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
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

                <div className="h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Enhanced Description - Responsive */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
                The{" "}
                <span className="font-semibold text-white">
                  complete commerce infrastructure
                </span>{" "}
                that combines store creation, secure payments, delivery
                tracking, and buyer protection into one powerful platform built
                for Africa's unique market realities.
              </p>

              {/* Enhanced CTA Buttons - Responsive Stacking */}
              <div className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                <a
                  href="/Auth/Register"
                  className="group bg-gradient-to-r from-white to-blue-50 text-blue-700 hover:from-blue-50 hover:to-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    Start Building Your Store
                  </span>
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>

                <button className="group border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 flex items-center justify-center hover:border-white hover:shadow-lg">
                  <Play className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform" />
                  Coming Soon 
                </button>
              </div>

              {/* Rotating Testimonial - Mobile Optimized */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 max-w-md mx-auto lg:max-w-none">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                        {heroTestimonials[currentHeroTestimonial].name.charAt(
                          0
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg italic mb-1 sm:mb-2">
                      "{heroTestimonials[currentHeroTestimonial].text}"
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                      <p className="text-xs sm:text-sm font-semibold text-blue-200">
                        {heroTestimonials[currentHeroTestimonial].name}
                      </p>
                      <span className="text-blue-300 hidden sm:inline">•</span>
                      <p className="text-xs sm:text-sm text-blue-300">
                        {heroTestimonials[currentHeroTestimonial].business}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visual - Mobile Responsive Dashboard */}
            <div className="relative mt-8 lg:mt-0">
              {/* Main Commerce Dashboard - Responsive Sizing */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10">
                {/* Dashboard Header - Responsive */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Layers className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-sm sm:text-base lg:text-lg">
                        KAIHMA Dashboard
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Commerce Operating System
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-green-600 text-xs sm:text-sm font-semibold bg-green-50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="hidden sm:inline">All Systems Active</span>
                    <span className="sm:hidden">Active</span>
                  </div>
                </div>

                {/* Dashboard Metrics - Responsive Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-50 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <Store className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600" />
                      <span className="text-xs font-medium text-blue-600">
                        STORES
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      24
                    </div>
                    <div className="text-xs text-gray-600">Active stores</div>
                  </div>
                  <div className="bg-green-50 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-600" />
                      <span className="text-xs font-medium text-green-600">
                        ESCROW
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      ₦{(450 + (animatedValue % 100)).toLocaleString()}k
                    </div>
                    <div className="text-xs text-gray-600">Protected</div>
                  </div>
                </div>

                {/* Recent Activity - Responsive */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700">
                    Recent Activity
                  </h4>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 truncate">
                        Payment released for Order #1247
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 bg-blue-50 rounded-lg">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 truncate">
                        New store created: Fashion Hub
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 bg-yellow-50 rounded-lg">
                      <Truck className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 truncate">
                        Delivery in progress: 3 orders
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions - Responsive */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button className="flex items-center justify-center space-x-1 sm:space-x-2 bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <Store className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">
                      New Store
                    </span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 sm:space-x-2 bg-green-600 text-white py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-colors">
                    <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">
                      Analytics
                    </span>
                  </button>
                </div>
              </div>

              {/* Floating Success Cards - Responsive Positioning */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg shadow-lg animate-bounce z-20">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm font-semibold">
                    Store Live!
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl p-2 sm:p-3 lg:p-4 shadow-xl z-20 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-500" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Monthly Growth
                    </p>
                    <p className="font-bold text-lg sm:text-xl text-gray-900">
                      +247%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Super Responsive */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="flex flex-col sm:flex-row">
              <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-red-800 mb-4 sm:mb-6">
                  Why Traditional eCommerce Platforms Fail in Africa
                </h3>
                <div className="text-red-700 space-y-3 sm:space-y-4">
                  <p className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                    African entrepreneurs face unique challenges that global
                    platforms ignore:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {problemPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-100 rounded-lg text-center">
                    <p className="text-lg sm:text-xl font-bold text-red-800">
                      Result: 60%+ of African commerce still happens offline
                    </p>
                    <p className="text-xs sm:text-sm mt-2">
                      Not because people don't want to buy online, but because
                      the infrastructure doesn't work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Responsive */}
      <section className="bg-blue-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Introducing KAIHMA - Built for African Realities
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The first Commerce Operating System designed from the ground up to
              solve Africa's unique eCommerce challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {solutionSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Differentiator - Responsive */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              We're Not Building an African Shopify
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
              We're writing a new playbook — one where{" "}
              <strong>trust is built-in, not assumed</strong>. KAIHMA provides
              the complete commerce stack: store, payments, delivery, and trust
              infrastructure.
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <span className="text-blue-800 font-semibold text-sm sm:text-base">
                  Commerce Operating System
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section - Responsive Grid */}
      {/* <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              KAIHMA combines all essential commerce tools into a unified
              operating system designed for African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Services Deep Dive - Mobile First Layout */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Complete Commerce Infrastructure
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From store creation to payment processing, KAIHMA handles every
              aspect of your online business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 hover:shadow-xl transition-all duration-200"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700 text-sm sm:text-base"
                      >
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
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

      {/* Testimonials Section - Super Mobile Friendly */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Real Sellers, Real Results
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600">
              African sellers who stopped losing money with Kaihma
            </p>
          </div>

          {/* Testimonial Carousel - Enhanced Mobile Experience */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg lg:shadow-xl relative overflow-hidden">
              {/* Navigation Buttons - Hidden on mobile, shown on md+ */}
              <button
                onClick={prevTestimonial}
                className="hidden md:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 hover:bg-blue-200 rounded-full items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="hidden md:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 hover:bg-blue-200 rounded-full items-center justify-center transition-colors z-10"
              >
                <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
              </button>

              {/* Testimonial Content - Mobile Optimized */}
              <div className="text-center px-2 sm:px-4 md:px-8 lg:px-16">
                <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                <p className="text-sm sm:text-base lg:text-xl text-gray-700 mb-4 sm:mb-6 lg:mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex flex-col items-center space-y-2 sm:space-y-1">
                  <div className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-blue-600 text-xs sm:text-sm font-medium">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Buttons - Touch Friendly */}
              <div className="flex md:hidden justify-center space-x-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5 text-blue-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors active:scale-95"
                >
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </button>
              </div>

              {/* Indicators - Touch Optimized */}
              <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
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

      {/* Mobile App Section - Responsive Layout */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* App Content - Mobile First */}
            <div className="order-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Manage Transactions On The Go
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Our mobile app gives you full control over your escrow payments,
                order tracking, and buyer communication - all from your
                smartphone.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-start text-left">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 mr-3 sm:mr-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Real-time Notifications
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Get instant alerts when payments are secured or orders are
                      completed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start text-left">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 mr-3 sm:mr-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Secure Mobile Payments
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Approve or release funds with biometric authentication for
                      extra security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start text-left">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2 mr-3 sm:mr-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Offline Mode
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Check order statuses even when you're offline - updates
                      sync when you reconnect.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Download Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-lg transition-colors active:scale-95"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-base sm:text-xl font-semibold leading-none">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-lg transition-colors active:scale-95"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-base sm:text-xl font-semibold leading-none">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Super Responsive with Limited Spots Counter */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Stop Losing Money Today
          </h2>

          {/* Limited Spots Badge */}
          <div className="inline-block bg-blue-500/20 border border-blue-300 rounded-full px-4 py-2 mb-4 sm:mb-6">
            <span className="text-white font-medium text-sm sm:text-base">
              <span className="font-bold">Limited Spots (147 Remaining)</span>
            </span>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
            <span className="font-semibold text-white">1,353 sellers</span>{" "}
            joined the waitlist.
            <br className="hidden sm:block" />
            Only <span className="font-bold text-white">
              147 spots left
            </span>{" "}
            for early access.
          </p>
          <p className="text-sm sm:text-base text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Next batch waits until{" "}
            <span className="font-semibold">Q2 2026</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95">
              Claim Your Spot
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 active:scale-95">
              See Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaihmaLanding;

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

  const stats = [
    { number: "10K+", label: "Protected Transactions" },
    { number: "₦500M+", label: "In Escrow" },
    { number: "98%", label: "Success Rate" },
    { number: "0", label: "Payment Rejections" },
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
                <span className="text-blue-100 text-sm font-medium">
                  🚀 Trusted by African sellers
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Stop Losing Money
                <span className="block text-blue-200">To Fake Buyers</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Kaihma's escrow system guarantees your payments before you ship.
                No more rejected deliveries or payment scams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  How It Works
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900 font-semibold">
                    Secure Transaction
                  </h3>
                  <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded">
                    ✓ Protected
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Order Value</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ₦50,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className="text-gray-900 font-medium">
                      Funds secured in escrow
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Release Payment
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

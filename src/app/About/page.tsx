"use client";
import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Heart,
  Target,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Building,
  Zap,
  Lock,
  CreditCard,
  Package,
  BadgeCheck,
  Store,
  Truck,
  BarChart2,
  Globe2,
  ShoppingCart,
  Box
} from 'lucide-react';

const AboutUsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const missionValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make eCommerce actually work in Africa by solving core infrastructure challenges."
    },
    {
      icon: Shield,
      title: "Trust Infrastructure",
      description: "Building confidence between buyers and sellers across African markets."
    },
    {
      icon: Store,
      title: "Commerce OS",
      description: "Creating an all-in-one operating system for African online businesses."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Empowering African entrepreneurs to scale beyond borders."
    }
  ];

  const problems = [
    "60%+ of Africa's commerce still happens offline due to trust issues",
    "Cross-border payments are complex and unreliable",
    "Logistics infrastructure is broken or non-existent",
    "No integrated solutions for African market realities"
  ];

  const solutions = [
    "Complete Commerce Operating System (Commerce OS)",
    "Built-in escrow and payment protection",
    "Integrated logistics and delivery tracking",
    "Mobile-first platform optimized for African users"
  ];

  const stats = [
    { value: "10K+", label: "African Sellers", icon: Users },
    { value: "₦2B+", label: "Monthly GMV", icon: CreditCard },
    { value: "15+", label: "Countries Supported", icon: Globe },
    { value: "98%", label: "Delivery Success Rate", icon: BadgeCheck }
  ];

  const teamMembers = [
    {
      name: "Oluwaseun Adebayo",
      role: "CEO & Co-Founder",
      bio: "Pioneer in African e-commerce infrastructure with 10+ years experience"
    },
    {
      name: "Amina Mohammed", 
      role: "CTO & Co-Founder",
      bio: "Built payment systems serving 5M+ Africans across borders"
    },
    {
      name: "Kwame Mensah",
      role: "Head of Logistics",
      bio: "Created last-mile delivery networks in 8 African countries"
    },
    {
      name: "Ngozi Eze",
      role: "Head of Seller Success",
      bio: "Helped 5,000+ African businesses move online successfully"
    }
  ];

  const testimonials = [
    {
      name: "Adunni Okafor",
      role: "Fashion Entrepreneur",
      company: "Lagos, Nigeria → Nairobi, Kenya",
      rating: 5,
      text: "KAIHMA helped me expand to Kenya without worrying about payments or logistics. My cross-border sales grew 300% in 6 months!"
    },
    {
      name: "Samuel Maina",
      role: "Electronics Wholesaler",
      company: "Nairobi, Kenya → Accra, Ghana",
      rating: 5,
      text: "The integrated logistics and escrow gave me confidence to sell across borders. My business now operates in 3 countries."
    },
    {
      name: "Ama Mensah",
      role: "Handmade Goods",
      company: "Accra, Ghana → Lagos, Nigeria",
      rating: 5,
      text: "Before KAIHMA, cross-border selling was impossible. Now I have customers in 5 countries with guaranteed payments."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-100 text-sm font-medium">🚀 The Commerce OS for Africa</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About KAIHMA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We're building Africa's Commerce Operating System - integrating payments, logistics and trust to power the continent's digital economy.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center mx-auto">
              Start Selling
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  KAIHMA was founded in 2022 by African entrepreneurs who experienced firsthand the challenges of building online businesses on the continent. We realized existing platforms weren't built for Africa's unique realities.
                </p>
                <p>
                  Our vision was to create more than just another eCommerce platform - but a complete Commerce Operating System that solves the fundamental infrastructure gaps holding African businesses back.
                </p>
                <p>
                  Today, KAIHMA powers thousands of businesses across 15+ African countries, processing millions in transactions monthly through our integrated storefronts, payments, and logistics solutions.
                </p>
              </div>
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center group">
                How Our Commerce OS Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Store className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Store Builder</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <CreditCard className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Escrow Payments</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Truck className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Delivery Network</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <BarChart2 className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Business Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the infrastructure to power Africa's digital commerce revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionValues.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The KAIHMA Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solving the fundamental challenges of African eCommerce
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Problem */}
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                African Commerce Challenges
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                The KAIHMA Solution
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-4 flex-shrink-0" />
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-600">
              Africans building Africa's commerce infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              African businesses growing with KAIHMA's Commerce OS
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl border border-gray-100">
              <Quote className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mb-4 md:mb-6" />
              
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex justify-center items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg md:text-xl font-bold">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-1">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your African Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of African entrepreneurs using KAIHMA's Commerce OS to sell across borders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
              Start Selling Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
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
  BadgeCheck
} from 'lucide-react';

const AboutUsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const missionValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To eliminate payment fraud in African e-commerce by creating trusted transactions through our escrow protection system."
    },
    {
      icon: Shield,
      title: "Security",
      description: "We guarantee payment security before shipment, ensuring sellers never lose money to fake buyers again."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building confidence between buyers and sellers through transparent, guaranteed transactions."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Empowering African businesses to scale by removing the risk of payment rejections and fraud."
    }
  ];

  const problems = [
    "Sellers losing ₦40k-150k monthly to fake buyers and POD rejections",
    "Lack of trust between online buyers and sellers",
    "Cashflow uncertainty due to payment delays and fraud",
    "Limited options for secure payment protection"
  ];

  const solutions = [
    "Escrow payment protection before shipping",
    "Guaranteed payments for sellers",
    "Zero rejected deliveries system",
    "Pan-African coverage with local payment options"
  ];

  const stats = [
    { value: "1,500+", label: "Protected Sellers", icon: Users },
    { value: "₦500M+", label: "In Escrow", icon: CreditCard },
    { value: "0", label: "Payment Rejections", icon: BadgeCheck },
    { value: "5+", label: "Countries Supported", icon: Globe }
  ];

  const teamMembers = [
    {
      name: "Oluwaseun Adebayo",
      role: "CEO & Co-Founder",
      bio: "10+ years in African e-commerce and payment solutions"
    },
    {
      name: "Amina Mohammed", 
      role: "CTO & Co-Founder",
      bio: "Fintech security expert specializing in escrow systems"
    },
    {
      name: "Kwame Mensah",
      role: "Head of Growth",
      bio: "Driving adoption of secure payments across African markets"
    },
    {
      name: "Ngozi Eze",
      role: "Head of Seller Success",
      bio: "Dedicated to helping sellers maximize their online business"
    }
  ];

  const testimonials = [
    {
      name: "Adunni Okafor",
      role: "Fashion Store Owner",
      company: "Lagos, Nigeria",
      rating: 5,
      text: "Kaihma saved me from losing ₦80k monthly to fake buyers. Now I process ₦450k monthly with zero rejections!"
    },
    {
      name: "Samuel Maina",
      role: "Freelance Developer",
      company: "Nairobi, Kenya",
      rating: 5,
      text: "I was stressed about client payments until Kaihma. Now I handle 50+ orders weekly worry-free."
    },
    {
      name: "Victory Eze",
      role: "Dropshipper",
      company: "Abuja, Nigeria",
      rating: 5,
      text: "I was ready to quit e-commerce until Kaihma. The escrow system helped me scale and hire my second employee."
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
              <span className="text-blue-100 text-sm font-medium">🚀 Trusted by African sellers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Kaihma
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We're building the trust infrastructure for African e-commerce, eliminating payment fraud and rejected deliveries through our escrow protection system.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center mx-auto">
              Get Started Free
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
                  Kaihma was born from our founders' frustration with losing money to fake buyers and payment-on-delivery rejections. As former online sellers ourselves, we experienced firsthand the pain of unreliable payments.
                </p>
                <p>
                  In 2022, we set out to solve this problem by creating Africa's first seller-focused escrow system. Our solution ensures sellers get paid before shipping, while giving buyers confidence their money is protected.
                </p>
                <p>
                  Today, we're proud to protect over 1,500 African sellers from payment fraud, securing ₦500M+ in transactions with zero rejected deliveries. Our mission is to make e-commerce safer for every African business.
                </p>
              </div>
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center group">
                How Escrow Protection Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Payment Guarantee</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Package className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Zero Rejections</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <CreditCard className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Escrow Protection</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Zap className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Instant Payouts</div>
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
              We exist to create trust in African e-commerce through guaranteed payments
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
              The Kaihma Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solving the payment problems African sellers face every day
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Problem */}
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                What Sellers Endure
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
                How Kaihma Fixes It
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
              Passionate Africans building payment security for African sellers
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
              African sellers thriving with Kaihma's protection
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
            Ready to Stop Losing Money?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 1,500+ African sellers who've eliminated payment fraud with Kaihma's escrow protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
              Get Started Free
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
"use client";
import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Heart,
  Target,
  Award,
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
  Lock
} from 'lucide-react';

const AboutUsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const missionValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize digital payments across Africa by providing secure, accessible, and reliable financial services that empower individuals and businesses to thrive in the digital economy."
    },
    {
      icon: Shield,
      title: "Security",
      description: "We prioritize the security of funds and personal information, using industry-leading practices and bank-level encryption to protect our users."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building lasting relationships based on transparency, reliability, and consistent service delivery across all our platforms."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Empowering businesses and individuals to grow through secure and trusted digital commerce solutions that scale with their needs."
    }
  ];

  const problems = [
    "Limited access to reliable payment systems across Africa",
    "High transaction fees and complex payment processes",
    "Lack of trust between buyers and sellers in digital commerce",
    "Barriers to financial inclusion for underserved communities"
  ];

  const solutions = [
    "Comprehensive payment platform with multiple service options",
    "Competitive rates and transparent pricing structures",
    "Secure escrow services and fraud protection systems",
    "User-friendly interfaces accessible to all skill levels"
  ];

  const stats = [
    { value: "500K+", label: "Active Users", icon: Users },
    { value: "50M+", label: "Transactions Processed", icon: Zap },
    { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { value: "15+", label: "Countries Served", icon: Globe }
  ];

  const teamMembers = [
    {
      name: "David Kiprotich",
      role: "CEO & Co-Founder",
      image: "/api/placeholder/300/300",
      bio: "10+ years in fintech and digital payments across Africa"
    },
    {
      name: "Sarah Mwangi",
      role: "CTO & Co-Founder", 
      image: "/api/placeholder/300/300",
      bio: "Former software architect with expertise in secure payment systems"
    },
    {
      name: "James Okello",
      role: "Head of Operations",
      image: "/api/placeholder/300/300",
      bio: "Specialist in African market expansion and regulatory compliance"
    },
    {
      name: "Grace Mutua",
      role: "Head of Product",
      image: "/api/placeholder/300/300",
      bio: "UX expert focused on creating accessible financial products"
    }
  ];

  const testimonials = [
    {
      name: "Maria Gonzalez",
      role: "Small Business Owner",
      company: "Mama's Kitchen, Nairobi",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "ShujaaPay has transformed how I handle payments. My customers love the convenience, and I've seen a 40% increase in sales since integrating their payment gateway."
    },
    {
      name: "John Mwamba",
      role: "E-commerce Manager",
      company: "TechStore Tanzania",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The escrow service gives our customers confidence to make larger purchases. We've reduced payment disputes by 80% and improved customer satisfaction significantly."
    },
    {
      name: "Fatma Ali",
      role: "Freelance Designer",
      company: "Creative Studio",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As a freelancer, getting paid on time was always a challenge. ShujaaPay's secure payment system ensures I get paid promptly and safely for my work."
    },
    {
      name: "Peter Ndung'u",
      role: "CFO",
      company: "GreenTech Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The analytics and reporting features help us track all payments efficiently. ShujaaPay has streamlined our financial operations across multiple countries."
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
      <section className="bg-blue-600 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ShujaaPay
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We are revolutionizing digital commerce in Africa by providing secure, accessible payment solutions that build trust and empower growth across the continent.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  ShujaaPay was founded with a simple yet powerful vision: to create a trusted environment for digital commerce across Africa. We recognized that the lack of accessible, secure payment solutions was a major barrier to economic growth in our region.
                </p>
                <p>
                  Starting as a small team of passionate technologists and financial experts, we set out to build payment infrastructure that would serve everyone - from individual users sending money to family, to large enterprises processing thousands of transactions daily.
                </p>
                <p>
                  Today, we're proud to serve over 500,000 users across 15+ African countries, processing millions of transactions safely and efficiently. Our journey has just begun, and we're committed to expanding financial inclusion across the continent.
                </p>
              </div>
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center group">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Mobile Money</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Building className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Merchant Solutions</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Lock className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Secure Escrow</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Zap className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Instant Transfers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are driven by our commitment to building trust and enabling secure digital commerce across Africa
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We Exist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The challenges we solve and the impact we create in the African digital commerce landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Problem */}
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                The Problem
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
                Our Solution
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from businesses and individuals across Africa
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
      <section className="bg-blue-600 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of the digital payment revolution in Africa. Start your secure transaction experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
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
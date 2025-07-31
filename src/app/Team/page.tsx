"use client";
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  Twitter,
  MapPin,
  Briefcase,
  Shield,
  Heart,
  Target,
  Users,
  Globe,
  Award,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  CreditCard,
  Package,
  ChevronLeft,
  ChevronRight,
  Store,
  Truck,
  BarChart2,
  ShoppingCart,
  Box
} from 'lucide-react';

const leadershipTeam = [
  {
    name: "Oluwaseun Adebayo",
    role: "CEO & Co-Founder",
    email: "oluwaseun@kaihma.com",
    bio: "Oluwaseun founded KAIHMA after identifying the infrastructure gaps in African e-commerce. With 10+ years building pan-African commerce solutions, he's driven to create an operating system that empowers businesses across the continent.",
    expertise: ["E-commerce Infrastructure", "Cross-border Payments", "Market Expansion"],
    experience: "10+ years",
    location: "Lagos, Nigeria",
    social: {
      linkedin: "#",
      twitter: "#"
    },
    achievements: [
      "Built Africa's first Commerce Operating System",
      "Featured in TechCabal's Fintech 50",
      "Speaker at Africa Money & DeFi Summit"
    ]
  },
  {
    name: "Amina Mohammed",
    role: "CTO & Co-Founder",
    email: "amina@kaihma.com",
    bio: "Amina leads KAIHMA's technical vision, architecting the integrated systems that power our Commerce OS. She specializes in building scalable infrastructure for Africa's unique market needs.",
    expertise: ["Payment Systems", "Logistics Tech", "API Architecture"],
    experience: "8+ years",
    location: "Nairobi, Kenya",
    social: {
      linkedin: "#",
      twitter: "#"
    },
    achievements: [
      "Developed Africa-first commerce APIs",
      "Built systems processing ₦2B+ monthly",
      "Fintech infrastructure patent holder"
    ]
  }
];

const coreTeam = [
  {
    name: "Kwame Mensah",
    role: "Head of Logistics",
    department: "Operations",
    bio: "Kwame builds the delivery networks that power KAIHMA's integrated logistics across 15+ African countries.",
    expertise: ["Last-mile Delivery", "Cross-border Logistics"],
    experience: "7+ years",
    location: "Accra, Ghana"
  },
  {
    name: "Ngozi Eze",
    role: "Head of Seller Success",
    department: "Customer Experience",
    bio: "Ngozi ensures African businesses maximize KAIHMA's Commerce OS, providing education and support for growth.",
    expertise: ["Seller Growth", "Market Education"],
    experience: "6+ years",
    location: "Abuja, Nigeria"
  },
  {
    name: "David Kimani",
    role: "Head of Engineering",
    department: "Technology",
    bio: "David leads the team building KAIHMA's Commerce OS infrastructure, ensuring reliability across African markets.",
    expertise: ["Payment Systems", "Fraud Detection"],
    experience: "9+ years",
    location: "Nairobi, Kenya"
  },
  {
    name: "Fatima Diallo",
    role: "Head of Partnerships",
    department: "Business Development",
    bio: "Fatima develops strategic alliances with payment processors and logistics providers across Africa.",
    expertise: ["Strategic Alliances", "Market Expansion"],
    experience: "8+ years",
    location: "Dakar, Senegal"
  }
];

const TeamPage = () => {
  const [currentLeader, setCurrentLeader] = useState(0);
  const [currentCoreMember, setCurrentCoreMember] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentLeader((prev) => (prev + 1) % leadershipTeam.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [autoPlay, leadershipTeam.length]);


  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentCoreMember((prev) => (prev + 1) % coreTeam.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, coreTeam.length]);

  const companyValues = [
    {
      icon: Store,
      title: "Commerce First",
      description: "We build solutions that solve real African commerce problems",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Pan-African",
      description: "We design for the diversity of Africa's markets",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Infrastructure Mindset",
      description: "We create the foundational systems African businesses need",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Integrated Solutions",
      description: "We combine payments, logistics and trust into one platform",
      color: "text-yellow-600"
    }
  ];

  const teamStats = [
    { value: "20+", label: "African Experts", icon: Users },
    { value: "15+", label: "Countries Covered", icon: Globe },
    { value: "₦2B+", label: "Monthly GMV", icon: CreditCard },
    { value: "10K+", label: "Businesses Served", icon: Store }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Health insurance for you and your family",
    "Flexible remote-first work environment",
    "Continual learning budget for your growth",
    "Opportunity to build Africa's commerce future"
  ];

  const nextLeader = () => {
    setCurrentLeader((prev) => (prev + 1) % leadershipTeam.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevLeader = () => {
    setCurrentLeader((prev) => (prev - 1 + leadershipTeam.length) % leadershipTeam.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const nextCoreMember = () => {
    setCurrentCoreMember((prev) => (prev + 1) % coreTeam.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevCoreMember = () => {
    setCurrentCoreMember((prev) => (prev - 1 + coreTeam.length) % coreTeam.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-100 text-sm font-medium">🚀 The Commerce OS for Africa</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              The KAIHMA Team
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We're building Africa's Commerce Operating System - integrating payments, logistics and trust to power the continent's digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="h-5 sm:h-6 w-5 sm:w-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries creating Africa's Commerce Operating System
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentLeader * 100}%)` }}>
                {leadershipTeam.map((leader, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8`}>
                      <div className="lg:w-1/3">
                        <div className="relative group">
                          <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                              {leader.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg">
                            <div className="flex space-x-1 sm:space-x-2">
                              <a href={`mailto:${leader.email}`} className="w-7 sm:w-8 h-7 sm:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Mail className="h-3 sm:h-4 w-3 sm:w-4" />
                              </a>
                              <a href={leader.social.linkedin} className="w-7 sm:w-8 h-7 sm:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Linkedin className="h-3 sm:h-4 w-3 sm:w-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-2/3 text-center lg:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-3 sm:mb-4">
                          {leader.role}
                        </p>
                        
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="h-3 sm:h-4 w-3 sm:w-4 mr-1 sm:mr-2" />
                            {leader.experience}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 sm:h-4 w-3 sm:w-4 mr-1 sm:mr-2" />
                            {leader.location}
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                          {leader.bio}
                        </p>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Expertise:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {leader.expertise.map((skill, skillIndex) => (
                              <span key={skillIndex} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {leadershipTeam.length > 1 && (
              <>
                <button 
                  onClick={prevLeader}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-all duration-300 z-10"
                  aria-label="Previous leader"
                >
                  <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                </button>
                <button 
                  onClick={nextLeader}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-6 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-all duration-300 z-10"
                  aria-label="Next leader"
                >
                  <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                </button>
              </>
            )}

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {leadershipTeam.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentLeader(index);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), 10000);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentLeader === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to leader ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              The experts building Africa's Commerce Operating System
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentCoreMember * 100}%)` }}>
                {coreTeam.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2 sm:mb-3">
                        {member.role}
                      </p>
                      <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                        <MapPin className="h-3 sm:h-4 w-3 sm:w-4 mr-1" />
                        {member.location}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-3 sm:mt-4">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {coreTeam.length > 1 && (
              <>
                <button 
                  onClick={prevCoreMember}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-all duration-300 z-10"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                </button>
                <button 
                  onClick={nextCoreMember}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-6 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-all duration-300 z-10"
                  aria-label="Next team member"
                >
                  <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                </button>
              </>
            )}

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {coreTeam.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCoreMember(index);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), 10000);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentCoreMember === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              What drives us to build Africa's Commerce OS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                  <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                    <Icon className={`h-6 sm:h-8 w-6 sm:w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Help Build Africa's Commerce Future
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              We're looking for passionate Africans to join our mission
            </p>
          </div>


          {/* Benefits */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Join KAIHMA?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
"use client";
import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Twitter,
  MapPin,
  Calendar,
  Award,
  Users,
  Target,
  Shield,
  Heart,
  Lightbulb,
  ArrowRight,
  Globe,
  Code,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';

const TeamPage = () => {
  const [activeTeamSection, setActiveTeamSection] = useState('leadership');

  const leadershipTeam = [
    {
      name: "Fahad Saada",
      role: "Founder & CEO",
      email: "fahad@shujaapay.com",
      image: "/api/placeholder/400/400",
      bio: "Fahad is a visionary entrepreneur with over 12 years of experience in fintech and digital commerce across Africa. He founded ShujaaPay with the mission to build trust and enable secure digital transactions across the continent. Previously, he led digital transformation initiatives at major financial institutions in East Africa.",
      expertise: ["Fintech Strategy", "Digital Commerce", "Market Expansion", "Regulatory Affairs"],
      education: "MBA, Harvard Business School",
      experience: "12+ years",
      location: "Nairobi, Kenya",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "Featured in Forbes 30 Under 30 Africa",
        "Led $50M+ in digital payment transactions",
        "Keynote speaker at African Fintech Summit"
      ]
    },
    {
      name: "Mundhir Saada",
      role: "Co-Founder & CTO",
      email: "mundhir@shujaapay.com",
      image: "/api/placeholder/400/400",
      bio: "Mundhir brings deep technical expertise and innovation leadership to ShujaaPay. As CTO, he oversees the development of our secure payment platform, ensuring the highest standards of security, scalability, and reliability. He has a proven track record of building fintech infrastructure that serves millions of users.",
      expertise: ["System Architecture", "Blockchain Technology", "Cybersecurity", "API Development"],
      education: "MS Computer Science, MIT",
      experience: "10+ years",
      location: "Dar es Salaam, Tanzania",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "Built payment systems processing 1M+ daily transactions",
        "Expert in blockchain and cryptocurrency technologies",
        "Published researcher in fintech security"
      ]
    }
  ];

  const coreTeam = [
    {
      name: "Sarah Mwangi",
      role: "Head of Product",
      department: "Product & Design",
      image: "/api/placeholder/300/300",
      bio: "Sarah leads product strategy and user experience design, ensuring our solutions meet the real needs of African businesses and consumers.",
      expertise: ["Product Strategy", "UX Design", "Market Research"],
      experience: "8+ years",
      location: "Nairobi, Kenya"
    },
    {
      name: "James Okello",
      role: "Head of Operations",
      department: "Operations",
      image: "/api/placeholder/300/300",
      bio: "James oversees daily operations and business expansion across multiple African markets, ensuring seamless service delivery.",
      expertise: ["Operations Management", "Business Development", "Process Optimization"],
      experience: "9+ years",
      location: "Kampala, Uganda"
    },
    {
      name: "Amina Hassan",
      role: "Head of Compliance",
      department: "Legal & Compliance",
      image: "/api/placeholder/300/300",
      bio: "Amina ensures ShujaaPay operates within regulatory frameworks across all markets while maintaining the highest security standards.",
      expertise: ["Regulatory Compliance", "Risk Management", "Legal Affairs"],
      experience: "7+ years",
      location: "Lagos, Nigeria"
    },
    {
      name: "David Kimani",
      role: "Head of Engineering",
      department: "Technology",
      image: "/api/placeholder/300/300",
      bio: "David leads our engineering team in building robust, scalable technology solutions that power millions of transactions daily.",
      expertise: ["Software Architecture", "DevOps", "Team Leadership"],
      experience: "11+ years",
      location: "Nairobi, Kenya"
    },
    {
      name: "Grace Mutua",
      role: "Head of Marketing",
      department: "Marketing & Growth",
      image: "/api/placeholder/300/300",
      bio: "Grace drives brand awareness and user acquisition strategies across African markets, building strong community relationships.",
      expertise: ["Digital Marketing", "Brand Strategy", "Community Building"],
      experience: "6+ years",
      location: "Kigali, Rwanda"
    },
    {
      name: "Peter Ochieng",
      role: "Head of Customer Success",
      department: "Customer Experience",
      image: "/api/placeholder/300/300",
      bio: "Peter ensures exceptional customer experience and leads our 24/7 support operations across all ShujaaPay services.",
      expertise: ["Customer Success", "Support Operations", "Training"],
      experience: "8+ years",
      location: "Nairobi, Kenya"
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Every team member is committed to our mission of revolutionizing digital payments across Africa",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize security in everything we do, protecting our users' funds and personal information",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Our users are at the heart of every decision we make, driving us to deliver exceptional service",
      color: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to improve our services and stay ahead of industry trends",
      color: "text-purple-600"
    }
  ];

  const teamStats = [
    { value: "25+", label: "Team Members", icon: Users },
    { value: "8", label: "Countries", icon: Globe },
    { value: "15+", label: "Years Combined Experience", icon: Award },
    { value: "5", label: "Departments", icon: Briefcase }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health insurance", 
    "Flexible remote work options",
    "Professional development budget"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              The passionate individuals behind ShujaaPay, working together to revolutionize digital commerce across Africa through secure payment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
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

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving ShujaaPay's mission to build trust in Africa's digital commerce
            </p>
          </div>

          <div className="space-y-12">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                <div className="lg:w-1/3">
                  <div className="relative group">
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                      <div className="flex space-x-2">
                        <a href={`mailto:${leader.email}`} className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                          <Mail className="h-4 w-4" />
                        </a>
                        <a href={leader.social.linkedin} className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {leader.role}
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {leader.experience}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {leader.location}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {leader.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The core principles that guide our team and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                  <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to be part of the team that's transforming digital commerce in Africa? We're always looking for passionate individuals to join our growing team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

        
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
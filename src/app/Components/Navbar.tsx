"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {
  logo: string;
}

const Navbar = ({ logo }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    { name: 'Services', href: '/Services' },
    { name: 'About Us', href: '/About' },
    { name: 'Our Team', href: '/Team' },
    { name: 'Contact Us', href: '/Contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61576003595160', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/kaihmahq', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/kaihma', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kaihmahq?igsh=MWVmMnV0dGltYnhnNw==', label: 'Instagram' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active state based on current path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const activeMenuItem = menuItems.find(item => item.href === currentPath);
      setActiveItem(activeMenuItem ? activeMenuItem.name : '');
    }
  }, []);

  const handleNavClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with subtle animation */}
          <div className="flex-shrink-0 flex items-center group">
            <a href="/" className="flex items-center">
              <div className="relative w-10 h-10 transform group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={logo}
                  alt="Kaihma Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-200">
                Kaihma
              </span>
            </a>
          </div>

          {/* Desktop Menu - Center with modern hover effects */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50/80' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/80'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-300 rounded-full ${
                    isActive 
                      ? 'w-8 left-4' 
                      : 'w-0 group-hover:w-8 group-hover:left-4'
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Right side - Social + CTA with glassmorphism */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social links with modern glass effect */}
            <div className="flex items-center space-x-1 bg-gray-50/50 backdrop-blur-sm rounded-full p-1 border border-gray-200/50">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-white/80 hover:shadow-sm transition-all duration-200 transform hover:scale-105"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            
            {/* Modern CTA button with gradient */}
            <a
              href="/Auth/Register"
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-blue-600/25"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Modern mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-700 hover:text-blue-600 p-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Menu with slide animation */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {/* Navigation Items with stagger animation */}
            {menuItems.map((item, index) => {
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-xl transform hover:translate-x-1 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50/80 border-l-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/80'
                  } ${isOpen ? 'animate-slide-in' : ''}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {isActive && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </a>
              );
            })}
            
            {/* Social Media Section */}
            <div className="pt-4 border-t border-gray-100/50">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-4 mb-3">
                Connect with us
              </p>
              <div className="flex items-center justify-center space-x-3 px-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-500 hover:text-blue-600 p-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 transform hover:scale-110 ${
                        isOpen ? 'animate-fade-in' : ''
                      }`}
                      style={{ animationDelay: `${(menuItems.length + index) * 50}ms` }}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <a
              href="/Auth/Register"
              className={`block mt-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25 ${
                isOpen ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${(menuItems.length + socialLinks.length) * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
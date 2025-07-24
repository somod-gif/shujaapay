"use client";
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h2 className="ml-3 text-2xl font-bold">Shujaa Pay</h2>
            </div>
            <p className="text-blue-200">
              Building trust in Africa's social commerce through secure escrow services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-200 hover:text-white transition">About Us</a></li>
              <li><a href="/team" className="text-blue-200 hover:text-white transition">Our Team</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/escrow" className="text-blue-200 hover:text-white transition">Escrow Service</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-blue-200">Maruhubi Street</p>
                <p className="text-blue-200">Zanzibar, Tanzania</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-blue-200">info@shujaapay.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-blue-200">+255 625 851 607</p>
                <p className="text-blue-200">+255 710 578 275</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-700 text-center text-blue-300">
          <p>© 2025 Shujaa Pay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
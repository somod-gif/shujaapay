"use client";
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  logo: string;
}

const Footer = ({ logo }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-10 h-10">
                <Image
                  src={logo}
                  alt="Kaihma Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="ml-3 text-2xl font-bold">Kaihma</h2>
            </div>
            
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/About" className="text-blue-200 hover:text-white transition">About Us</a></li>
              <li><a href="/Team" className="text-blue-200 hover:text-white transition">Our Team</a></li>
              <li><a href="/Contact" className="text-blue-200 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="/Services" className="text-blue-200 hover:text-white transition">Escrow Payments</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-blue-200">Lagos, Nigeria</p>
                <p className="text-blue-200">Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-blue-200">support@kaihma.com</p>
                <p className="text-blue-200">sales@kaihma.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-blue-200">+234 703 566 0459</p>
                <p className="text-blue-200">+254 700 000 000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-700 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Kaihma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

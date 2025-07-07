import React from 'react';
import { Palette } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gradient-to-r from-amber-800 to-red-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="h-8 w-8 text-amber-300" />
              <span className="text-2xl font-bold">Tanjore Art</span>
            </div>
            <p className="text-amber-100 leading-relaxed">
              Preserving the divine tradition of Tanjore paintings and bringing 
              authentic South Indian art to homes worldwide.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-amber-300 mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-amber-100 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-amber-100 hover:text-white transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('order')}
                className="block text-amber-100 hover:text-white transition-colors"
              >
                Order
              </button>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-amber-300 mb-4 block">Contact Info</span>
            <div className="space-y-2 text-amber-100">
              <p>Thanjavur, Tamil Nadu, India</p>
              <p>+91 98765 43210</p>
              <p>info@tanjavurart.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2025 Tanjore Art. All rights reserved. Preserving tradition, creating beauty.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
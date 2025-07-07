import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Palette className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              Tanjore Art
            </span>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Order
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
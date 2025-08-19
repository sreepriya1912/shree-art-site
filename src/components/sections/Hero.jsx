import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-red-100/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
            Shree School of Arts
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Celebrate creativity with our diverse collection of artworks – from traditional Tanjore and classical oil paintings to contemporary acrylics. Each piece is handcrafted with passion and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('gallery')}
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View Gallery
            </Button>
            <Button 
              onClick={() => scrollToSection('order')}
              variant="outline"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Order Now
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-400 to-red-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
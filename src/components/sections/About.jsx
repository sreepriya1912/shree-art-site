import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Star, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-6">
            About Tanjore Art
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the rich heritage and divine beauty of traditional Tanjore paintings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              A Timeless Tradition
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tanjore paintings, also known as Thanjavur paintings, are a classical South Indian painting style 
              that originated in the town of Thanjavur in Tamil Nadu. These paintings are known for their rich 
              colors, surface richness, compact composition, and use of gold foil.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dating back to the 16th century, these paintings typically depict Hindu gods and goddesses, 
              saints, and mythological characters. The art form is characterized by its distinctive style 
              of raised relief work that gives a three-dimensional effect.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-red-50 rounded-lg">
                <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-700">Premium Quality</span>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-red-50 rounded-lg">
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-700">Handcrafted</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img  
                alt="Traditional Tanjore painting showing intricate gold work and religious motifs"
                className="w-full h-96 object-cover"
               src="https://images.unsplash.com/photo-1695319252843-5af212c1965d" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-red-400 rounded-2xl -z-10 opacity-20"></div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-red-50 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Authentic Materials</h4>
            <p className="text-gray-600">
              Made with traditional materials including gold foil, precious stones, and natural pigments
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-red-50 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Master Craftsmanship</h4>
            <p className="text-gray-600">
              Each painting is meticulously crafted by skilled artisans with years of experience
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-red-50 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Cultural Heritage</h4>
            <p className="text-gray-600">
              Preserving centuries-old traditions and bringing divine art to your home
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
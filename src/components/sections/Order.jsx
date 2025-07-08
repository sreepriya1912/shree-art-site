import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Order = () => {
  const { toast } = useToast();

  const handleOrderClick = () => {
    toast({
      title: "🚧 Order feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleContactClick = () => {
    toast({
      title: "🚧 Contact feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-6">
            Order Your Painting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring divine art to your home with our custom Tanjore paintings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Paintings?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-red-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Authentic Craftsmanship</h4>
                  <p className="text-gray-600">Hand-painted by master artisans using traditional techniques</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-red-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Premium Materials</h4>
                  <p className="text-gray-600">22k gold foil, precious stones, and natural pigments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-red-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Custom Sizes</h4>
                  <p className="text-gray-600">Available in various sizes to fit your space perfectly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-red-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Worldwide Shipping</h4>
                  <p className="text-gray-600">Safe and secure delivery to your doorstep</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <span className="text-gray-700">+91 94484 87092</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <span className="text-gray-700">shreeschoolofarts@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="text-gray-700">Bengaluru, Karnataka, India</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Button 
                onClick={handleContactClick}
                className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact for Custom Order
              </Button>
              
              <Button 
                onClick={handleOrderClick}
                variant="outline"
                className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Quick Order
              </Button>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
              <p className="text-sm text-gray-600 text-center">
                <strong>Starting from ₹5,000</strong><br />
                Prices vary based on size and complexity
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Order;

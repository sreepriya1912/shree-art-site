import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Gallery = () => {
  const { toast } = useToast();

  const handleOrderClick = () => {
    toast({
      title: "🚧 Order feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const paintings = [
    {
      title: "Lord Ganesha",
      description: "Traditional Ganesha painting with intricate gold work",
      image: "Tanjore painting of Lord Ganesha with gold foil and precious stones"
    },
    {
      title: "Goddess Lakshmi",
      description: "Divine Lakshmi with lotus and gold embellishments",
      image: "Tanjore painting of Goddess Lakshmi with gold work and jewels"
    },
    {
      title: "Lord Krishna",
      description: "Krishna playing flute with peacock feathers",
      image: "Tanjore painting of Lord Krishna with flute and gold details"
    },
    {
      title: "Goddess Saraswati",
      description: "Saraswati with veena and swan in gold foil",
      image: "Tanjore painting of Goddess Saraswati with veena and gold work"
    },
    {
      title: "Lord Murugan",
      description: "Murugan with peacock and divine weapons",
      image: "Tanjore painting of Lord Murugan with peacock and gold details"
    },
    {
      title: "Radha Krishna",
      description: "Divine couple in eternal love with gold embellishments",
      image: "Tanjore painting of Radha Krishna with intricate gold work"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of exquisite Tanjore paintings, each telling a divine story
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img  
                  alt={painting.description}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1696192958959-37896599c6b7" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{painting.title}</h3>
                <p className="text-gray-600 mb-4">{painting.description}</p>
                <Button 
                  onClick={handleOrderClick}
                  className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white rounded-lg transition-all duration-300"
                >
                  Order This Painting
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
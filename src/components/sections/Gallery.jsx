import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { FolderOpen } from "lucide-react";

const categories = [
  {
    title: "Oil Paintings",
    slug: "oil",
    description: "Classic realism, portraits, and landscapes in oils.",
    cover:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
    count: 32,
  },
  {
    title: "Acrylic Paintings",
    slug: "acrylic",
    description: "Bold colors and contemporary styles in acrylic.",
    cover:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
    count: 27,
  },
  {
    title: "Tanjore Paintings",
    slug: "tanjore",
    description:
      "Intricate gold foil work and rich devotional iconography.",
    cover:
      "https://images.unsplash.com/photo-1696192958959-37896599c6b7?q=80&w=1600&auto=format&fit=crop",
    count: 18,
  },
  {
    title: "Classical Art",
    slug: "classical",
    description: "Traditional Indian styles and techniques.",
    cover:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1600&auto=format&fit=crop",
    count: 14,
  },
  {
    title: "Contemporary Art",
    slug: "contemporary",
    description: "Modern expressions, abstracts and mixed media.",
    cover:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop",
    count: 21,
  },
];

const Gallery = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const openCategory = (slug) => {
    navigate(`/gallery/${slug}`);
  };

  const handleOrderClick = (title) => {
    toast({
      title: "🚧 Order feature coming soon",
      description: `Custom orders for “${title}” are almost ready. Tell me what you need and I’ll draft the flow.`,
    });
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"
    >
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
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Browse by category—each card opens a folder with artworks in that
            style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Clickable cover -> acts like folder */}
              <button
                type="button"
                onClick={() => openCategory(cat.slug)}
                className="w-full text-left"
                aria-label={`Open ${cat.title} folder`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cat.cover}
                    alt={cat.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <FolderOpen className="h-5 w-5" />
                    <span className="text-sm/none bg-white/20 px-2 py-0.5 rounded-full">
                      {cat.count} items
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600">{cat.description}</p>
                </div>
              </button>

              {/* Optional CTA row */}
              <div className="px-6 pb-6">
                <Button
                  variant="secondary"
                  onClick={() => handleOrderClick(cat.title)}
                  className="w-full bg-white border border-gray-200 hover:bg-gray-50 rounded-xl"
                >
                  Commission in {cat.title}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

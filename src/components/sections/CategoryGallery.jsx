import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const pretty = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const items = {
  oil: [
    { title: "Monsoon Street", img: "https://images.unsplash.com/photo-1473643068424-cd2485b63f85?q=80&w=1600&auto=format&fit=crop" },
    { title: "Old Port", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
  ],
  acrylic: [
    { title: "Color Field", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop" },
  ],
  tanjore: [
    { title: "Ganesha", img: "https://images.unsplash.com/photo-1696192958959-37896599c6b7?q=80&w=1600&auto=format&fit=crop" },
  ],
  classical: [],
  contemporary: [],
};

export default function CategoryGallery() {
  const { category } = useParams();
  const data = items[category] ?? [];
  const titleMap = {
    oil: "Oil Paintings",
    acrylic: "Acrylic Paintings",
    tanjore: "Tanjore Paintings",
    classical: "Classical Art",
    contemporary: "Contemporary Art",
  };
  const title = titleMap[category] ?? pretty(category);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-gray-700 mb-10">
          {data.length
            ? "Browse artworks in this collection."
            : "No artworks uploaded yet. Add items to this category."}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
            >
              <img src={it.img} alt={it.title} className="w-full h-64 object-cover" />
              <figcaption className="p-4 font-medium text-gray-800">
                {it.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

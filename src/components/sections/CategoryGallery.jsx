import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* ---------- Config ---------- */
const PHONE_E164 = "919448487092"; // country code + number, digits only
const EMAIL = "shreeschoolofarts@gmail.com";

const MATERIALS_BY_CATEGORY = {
  tanjore: "Wooden plank, relief work, gold foil, natural colors & stones",
  oil: "Canvas, premium oil paints",
  acrylic: "Canvas, artist-grade acrylics",
};

const CATEGORY_INTRO = {
  tanjore:
    "Tanjore paintings are handcrafted with relief work and gold foil. Prices vary by deity chosen, size, gold foil used, and frame.",
  oil:
    "Oil paintings on canvas. Pricing varies by canvas size, subject, and level of detail.",
  acrylic:
    "Vibrant acrylic works on canvas. Pricing varies by size and complexity.",
};

/* ---------- Your artworks (edit/extend) ---------- */
const ITEMS = {
  tanjore: [
    {
      title: "Ganesha (Navy/Red, carved frame)",
      img: "/images/tanjore/tanjore1.jpeg",
      size: "12 × 18 in",
      priceFrom: 18000,
    },
    {
      title: "Ganesha (Green/Red)",
      img: "/images/tanjore/tanjore2.jpeg",
      size: "12 × 18 in",
      priceFrom: 15000,
    },
    {
      title: "Gaja Lakshmi (Red)",
      img: "/images/tanjore/tanjore4.jpeg",
      size: "12 × 18 in",
      priceFrom: 15000,
    },
    {
      title: "Venkateshwara (brown/tirupati)",
      img: "/images/tanjore/tanjore3.jpeg",
      size: "4 × 3 ft",
      priceFrom: 35000,
    },
  ],
  oil: [
    { title: "Oil Painting 1", img: "/images/oil/oil1.jpeg", size: "18 × 24 in", priceFrom: 10000 },
    { title: "Oil Painting 2", img: "/images/oil/oil2.jpeg", size: "24 × 30 in", priceFrom: 14000 },
  ],
  acrylic: [
    { title: "Abstract Ganesha", img: "/images/acrylic/acrylic1.jpeg", size: "1.5 × 1.5 ft", priceFrom: 2500 },
    { title: "Abstract Radha - Krishna ", img: "/images/acrylic/acrylic2.jpeg", size: "1.5 × 1.5 ft", priceFrom: 3000 },
    { title: "Tropical", img: "/images/acrylic/acrylic3.jpeg", size: "1 × 1 ft", priceFrom: 1000 },
    { title: "Abstract Indian classical dancer", img: "/images/acrylic/acrylic4.jpeg", size: "1 × 1.5 ft", priceFrom: 1000 },
    { title: "Aquaman", img: "/images/acrylic/acrylic5.jpeg", size: "A4", priceFrom: 1000 },
    { title: "Scenary", img: "/images/acrylic/acrylic6.jpeg", size: "1 × 1 ft", priceFrom: 1000 },
    { title: "Girl with an instrument", img: "/images/acrylic/acrylic7.jpeg", size: "1 × 1 ft", priceFrom: 1000 },
    { title: "Abstract Ganesha 2", img: "/images/acrylic/acrylic8.jpeg", size: "1.5 × 1.5 ft", priceFrom: 1000 },
    { title: "Bride", img: "/images/acrylic/acrylic9.jpeg", size: "1 × 1.5 ft", priceFrom: 1000 },
    { title: "Abstract musical instruments", img: "/images/acrylic/acrylic10.jpeg", size: "1 × 1 ft", priceFrom: 1000 }

  ],
};

const TITLE_MAP = {
  tanjore: "Tanjore Paintings",
  oil: "Oil Paintings",
  acrylic: "Acrylic Paintings",
};

/* ---------- Helpers ---------- */
const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

const buildWhatsappUrl = (phoneE164, text) =>
  `https://wa.me/${phoneE164}?text=${encodeURIComponent(text || "")}`;

const buildMailtoUrl = (email, subject, body) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function CategoryGallery() {
  const { category } = useParams();
  const data = ITEMS[category] ?? [];
  const title = TITLE_MAP[category] ?? category;
  const intro = CATEGORY_INTRO[category] ?? "";

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = data.map((d) => ({
    src: d.img,
    description: `${d.title}${d.size ? ` · ${d.size}` : ""}`,
  }));

  const messageFor = (art) =>
    `Hello! I'm interested in:\n• ${art.title}\n${art.size ? `• Size: ${art.size}\n` : ""}• Category: ${title}\n\nPlease share price & availability.`;

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & intro */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        {intro && <p className="text-gray-700 mb-10 text-lg">{intro} For custom sizes or deities, please enquire.</p>}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((art, i) => {
            const materials = art.materials || MATERIALS_BY_CATEGORY[category] || "";
            const waUrl = buildWhatsappUrl(PHONE_E164, messageFor(art));
            const mailUrl = buildMailtoUrl(
              EMAIL,
              `Enquiry: ${title} — ${art.title}`,
              `Hi,\n\nI'm interested in this artwork.\n\nCategory: ${title}\nTitle: ${art.title}\nSize: ${art.size || "—"}\n\nPlease share current price and availability.\n\nThanks!`
            );

            return (
              <motion.div
                key={`${art.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
              >
                {/* Image (opens lightbox) */}
                <button
                  className="block w-full text-left"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <img src={art.img} alt={art.title} className="w-full h-64 object-cover" loading="lazy" />
                </button>

                {/* Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{art.title}</h3>
                  {art.size && <p className="text-sm text-gray-600">Size: {art.size}</p>}
                  {materials && <p className="text-sm text-gray-600">Materials: {materials}</p>}
                  {typeof art.priceFrom === "number" ? (
                    <p className="text-sm text-gray-700 mt-1">
                      Price: <span className="font-medium">{formatINR(art.priceFrom)}</span>+
                      <span className="text-gray-500"> (varies by artwork, size & frame)</span>
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 mt-1 italic">Price varies by size and detail</p>
                  )}

                  {/* Enquiry actions */}
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-3 py-2 rounded-lg bg-green-600 text-white hover:opacity-90"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={mailUrl}
                      className="text-center px-3 py-2 rounded-lg bg-stone-800 text-white hover:opacity-90"
                    >
                      Email
                    </a>
                  </div>

                  {/* Optional fallback contact line */}
                  <p className="mt-2 text-xs text-gray-500 text-center">
                    Or call <a className="underline" href="tel:+919448487092">+91 94484 87092</a>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={slides}
          />
        )}
      </div>
    </section>
  );
}

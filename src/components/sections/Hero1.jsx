import React from "react";

/**
 * Compact, centered hero.
 * - Wider copy (max-w-3xl)
 * - Tight vertical rhythm
 * - Optional textured background (bg.jpg in /public)
 *   Toggle: set USE_TEXTURE = true/false
 */
const USE_TEXTURE = true;

export default function Hero1({ scrollToSection }) {
  return (
    <section
      id="hero"
      className={[
        "relative overflow-hidden",
        // keep the site’s light vibe if texture is off
        USE_TEXTURE ? "" : "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50",
        // tighter paddings
        "py-8 md:py-10"
      ].join(" ")}
      // hero-only texture
      style={
        USE_TEXTURE
          ? {
              backgroundImage: "url(/bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* soft veil for readability when texture is on */}
      {USE_TEXTURE && (
        <div className="absolute inset-0 bg-white/72 md:bg-white/66" />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Logo: smaller & closer to headline */}
          {/* <img
            src="/banner.png"
            alt="Shree School of Arts logo"
            className="mx-auto h-18 md:h-20 object-contain mb-4"
          /> */}

          {/* Headline (match Gallery vibe, but readable on light bg) */}
          <h1 className="text-[2.25rem] md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="bg-gradient-to-r from-amber-700 to-red-600 bg-clip-text text-transparent">
              Discover the World of Fine Art!
            </span>
          </h1>

          {/* Wider paragraph (max-w-3xl), less spacing */}
          <p className="mx-auto max-w-3xl text-[1.02rem] md:text-lg text-stone-800 leading-relaxed mb-5">
            Celebrate creativity with our diverse collection of artworks —
            from traditional Tanjore and classical oils to bold acrylics and
            contemporary pieces. Every work is handcrafted with passion and
            precision.
          </p>

          {/* CTAs — compact */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <button
              onClick={() => scrollToSection?.("gallery")}
              className="bg-red-700 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow hover:bg-red-800 transition"
            >
              View Collection
            </button>
            <button
              onClick={() => scrollToSection?.("order")}
              className="bg-white border border-gray-300 px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow hover:bg-gray-50 transition"
            >
              Order Custom Art
            </button>
          </div>

          {/* Tags — single line when possible, smaller & tight */}
          <div className="flex justify-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-[0.82rem] font-medium text-gray-700">
              Handcrafted
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-[0.82rem] font-medium text-gray-700">
              Made to Order
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-[0.82rem] font-medium text-gray-700">
              Workshops
            </span>
          </div>
        </div>
      </div>

      {/* tiny fade so hero flows into next section without big gap */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-amber-50" />
    </section>
  );
}

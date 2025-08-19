import React from "react";

export default function Hero({ scrollToSection }) {
  return (
    <main id="home" className="hero">
      <div className="hero-content">
        <h1>Discover the World of Fine Art</h1>
        <p>
          Celebrate creativity with our diverse collection of artworks— from
          traditional Tanjore and classical oils to bold acrylics and
          contemporary pieces. Every work is handcrafted with passion and
          precision.
        </p>
        <div className="cta">
          <a
            className="btn btn-primary"
            href="#gallery"
            onClick={(e) => { e.preventDefault(); scrollToSection?.("gallery"); }}
          >
            View Collection
          </a>
          <a
            className="btn btn-ghost"
            href="#order"
            onClick={(e) => { e.preventDefault(); scrollToSection?.("order"); }}
          >
            Order Custom Art
          </a>
        </div>
      </div>
      <div className="badges">
        <span>Handcrafted</span>
        <span>Made to Order</span>
        <span>Workshops</span>
      </div>
    </main>
  );
}

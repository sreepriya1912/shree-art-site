import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

import Navbar1 from "@/components/layout/Navbar1";
import Hero1 from "@/components/sections/Hero1";
import About from "@/components/sections/About";
import AboutArtist from "@/components/sections/AboutArtist";
import Gallery from "@/components/sections/Gallery";
import Order from "@/components/sections/Order";
import Footer from "@/components/layout/Footer";
import CategoryGallery from "@/components/sections/CategoryGallery";

import "./ArtLanding.css";

function App() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Art works and Paintings by Shree School of Art</title>
        <meta
          name="description"
          content="Discover exquisite handcrafted Tanjore, Oil and Acrylic paintings by Shree School of Art."
        />
      </Helmet>

      <div className="min-h-screen bg-amber-50">
        <Navbar1 scrollToSection={scrollToSection} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* --------- FOLD: Logo + Hero + About (fits one screen) --------- */}
                <div
                  className="
                    bg-gradient-to-br from-amber-50 via-orange-50 to-red-50
                    grid grid-rows-[auto_auto_minmax(8px,1fr)]
                    min-h-[100svh]
                  "
                >
                  {/* Hero (compact) */}
                  <Hero1 scrollToSection={scrollToSection} />
                <Gallery />

                  {/* About (compact wrapper to keep spacing tight) */}
                  <section id="about" className="px-4">
                    <div className="max-w-5xl mx-auto pt-2 md:pt-3 pb-4 md:pb-6">
                      <About />
                    </div>
                  </section>

                  {/* tiny spacer row so fold doesn't feel cramped */}
                  <div />
                </div>
                {/* -------------------- End fold -------------------- */}

                {/* Continue site */}
                <AboutArtist />
                <Order />
              </>
            }
          />
          <Route path="/gallery/:category" element={<CategoryGallery />} />
        </Routes>

        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </>
  );
}

export default App;

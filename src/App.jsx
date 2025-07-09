import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Order from '@/components/sections/Order';
import Footer from '@/components/layout/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Art works and Paintings by Shree School of Art</title>
        <meta name="description" content="Discover exquisite handcrafted Tanjore paintings featuring traditional South Indian art with gold foil work, religious themes, and cultural heritage." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <Navbar scrollToSection={scrollToSection} />
        <main>
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Gallery />
          <Order />
        </main>
        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </>
  );
}

export default App;

import React from "react";

export default function Navbar({ scrollToSection }) {
  const link = (id) => (e) => {
    e.preventDefault();
    scrollToSection?.(id);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
       <div className="brand flex items-center gap-2">
  <img
    src="/logo.png"
    alt="Shree School of Arts logo"
    className="h-8 w-8 object-contain"
  />
  <span className="brand-text font-semibold text-gray-900">
    Shree School of Arts
  </span>
</div>
        <nav className="links">
          <a href="#home" onClick={link("home")}>Home</a>
          <a href="#about" onClick={link("about")}>About</a>
          <a href="#gallery" onClick={link("gallery")}>Gallery</a>
          <a href="#classes" onClick={link("classes")}>Classes</a>
          <a href="#order" onClick={link("order")}>Order</a>
        </nav>
      </div>
    </header>
  );
}

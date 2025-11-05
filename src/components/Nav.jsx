import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`staatliches-regular fixed top-0 px-9 py-4 flex items-center justify-between w-full z-[99] transition-all duration-300 ${
          scrolled ? "bg-transparent shadow-none" : "bg-white shadow-2xl"
        }`}
      >
        <div className="text-[#8B276F] font-bold text-xl">Athravashree</div>

        {/* Desktop Menu */}
        <div className="hidden text-[15px] inter md:flex text-[#2C3C78] font-semibold gap-10">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/project" onClick={closeMenu}>Project</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden block text-[#8B276F]">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide Menu (from Top) */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-2xl z-[98] transform transition duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center mt-10 z-50 justify-center gap-8 py-20 text-[#2C3C78] font-semibold text-lg">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/project" onClick={closeMenu}>Project</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </div>

      {/* Background Overlay */}
      
    </>
  );
}

export default Nav;

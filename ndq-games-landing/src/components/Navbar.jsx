import React, { useState } from 'react';

const Navbar = ({ currentSlide, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showHamburger = currentSlide > 0 && activeSection === 'hero';

  const handleNavigate = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const navBackground = activeSection === 'hero' ? '' : 'bg-black/50 backdrop-blur-md';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigate('hero')}
        >
          <img 
            src="/logo.png" 
            alt="NDQ Logo" 
            className="h-20 w-auto brightness-0 invert hover:opacity-80 transition-opacity"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Navigation Links - Show on first slide or when not in hero */}
        {(!showHamburger || activeSection !== 'hero') && (
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => handleNavigate('about')}
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigate('games')}
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
            >
              Games
            </button>
          </div>
        )}

        {/* Hamburger Menu - Show on other slides */}
        {showHamburger && (
          <div className="flex items-center gap-8">
            {/* Show links when menu is open */}
            <div 
              className={`flex items-center space-x-8 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
              }`}
            >
              <button 
                onClick={() => handleNavigate('about')}
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
              >
                Contact
              </button>
              <button 
                onClick={() => handleNavigate('games')}
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
              >
                Games
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

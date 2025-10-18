import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Zap, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Trang chủ', href: '#' },
    { name: 'Khuyến mãi', href: '#promotions' },
    { name: 'Câu lạc bộ', href: '#club' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const productCategories = [
    { name: 'Vợt cầu lông', href: '#products' },
    { name: 'Túi xách', href: '#products' },
    { name: 'Áo thể thao', href: '#products' },
    { name: 'Giày thể thao', href: '#products' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="SmashPro Logo" 
              className="h-18 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductMenuOpen(true)}
              onMouseLeave={() => setIsProductMenuOpen(false)}
            >
              <button className="text-gray-600 hover:text-primary font-medium transition-colors flex items-center space-x-1">
                <span>Sản phẩm</span>
                <ChevronDown size={16} className={`transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {productCategories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button & Hamburger */}
          <div className="flex items-center space-x-4">
            <button className="btn-primary hidden sm:flex items-center space-x-2">
              <ShoppingCart size={20} />
              <span>Mua ngay</span>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 mt-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-600 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Products Menu */}
            <div className="py-3">
              <button 
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                className="w-full text-left text-gray-600 hover:text-primary font-medium transition-colors flex items-center justify-between"
              >
                <span>Sản phẩm</span>
                <ChevronDown size={16} className={`transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductMenuOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {productCategories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block py-2 text-gray-500 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <button className="btn-primary w-full mt-4 flex items-center justify-center space-x-2">
              <ShoppingCart size={20} />
              <span>Mua ngay</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import logoToy from '../../logo_toy.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Trang chủ', 'Danh mục', 'Ưu đãi', 'Giới thiệu', 'Liên hệ'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img 
              src={logoToy} 
              alt="ToyWorld Logo" 
              className="h-16 w-auto transition-all duration-300"
              style={{ 
                filter: scrolled ? 'brightness(0) saturate(100%)' : 'none'
              }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className={`font-medium transition-colors ${
                  scrolled ? 'text-[#1a535c] hover:text-[#ff6b6b]' : 'text-white hover:text-[#ffd93d]'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right side - Cart & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2 ${scrolled ? 'text-[#1a535c]' : 'text-white'}`}
            >
              <FiShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-[#ff6b6b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-6 py-2 rounded-xl font-medium shadow-lg transition-all"
            >
              Mua ngay
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-[#1a535c]' : 'text-white'}`}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-[#1a535c] hover:text-[#ff6b6b] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-6 py-2 rounded-xl font-medium">
              Mua ngay
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Features', 'Pricing', 'Testimonials', 'Blog'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-glass">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-white/40 border-b border-white/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Nexus
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-1"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-3"
          >
            <button className="px-5 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 pt-4 pb-6 space-y-3 border-t border-white/20">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-medium mt-4">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

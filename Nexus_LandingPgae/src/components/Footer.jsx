import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Security', 'Enterprise'],
    'Company': ['About', 'Blog', 'Careers', 'Contact'],
    'Resources': ['Documentation', 'API Docs', 'Community', 'Support'],
    'Legal': ['Privacy', 'Terms', 'Cookies', 'License']
  };

  const socialLinks = [
    { icon: FaTwitter, name: 'Twitter' },
    { icon: FaFacebook, name: 'Facebook' },
    { icon: FaLinkedin, name: 'LinkedIn' },
    { icon: FaGithub, name: 'GitHub' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-10 w-96 h-96 bg-gray-200/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 pb-16 border-b border-gray-200/40"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600">
                  Get the latest updates, tips, and exclusive offers delivered to your inbox.
                </p>
              </div>
              <motion.form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/40 backdrop-blur-glass border border-white/60 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white/80 transition-colors"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </motion.form>
            </div>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8 border-t border-gray-200/40"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Logo & Copyright */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Nexus
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  © 2025 Quyen Nguyen Duc. All rights reserved.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href="#"
                      whileHover={{ y: -4 }}
                      className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-glass border border-white/60 hover:border-white/80 flex items-center justify-center text-gray-900 hover:bg-white/60 transition-all duration-300"
                      title={social.name}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/40 bg-white/20 backdrop-blur-glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>Made with ❤️ by the Quyen Nguyen Duc</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-900 transition-colors">Status</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
                <a href="#" className="hover:text-gray-900 transition-colors">RSS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

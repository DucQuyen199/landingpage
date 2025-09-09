import React, { useState } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Bất động sản', href: '#properties' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <FaHome className="text-3xl text-primary-600 mr-3" />
            <h1 className="text-3xl font-bold text-primary-600">
              Nhà Đất
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="text-gray-700 hover:text-primary-600 px-4 py-2 text-base font-medium transition-colors duration-200">
              Đăng nhập
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors duration-200">
              Đăng ký
            </button>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3 px-4">
                  <button className="text-gray-700 hover:text-primary-600 py-3 text-base font-medium transition-colors duration-200">
                    Đăng nhập
                  </button>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg text-base font-medium transition-colors duration-200">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

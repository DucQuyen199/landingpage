import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80"
          alt="Luxury Real Estate Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            
            {/* Main Content */}
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Modern Left-Aligned Layout */}
              <div className="max-w-4xl">
                
                {/* Brand */}
                <motion.div 
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Nhà Đất Việt Nam
                  </h1>
                  <p className="text-base text-gray-300">Kết nối - Tin cậy - Thành công</p>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-12">
                  
                  {/* Main Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                      <span className="block text-white">Tìm kiếm</span>
                      <span className="block text-white">Bất động sản</span>
                      <span className="block text-white">Hoàn hảo</span>
                    </h2>
                    
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                      Khám phá hàng nghìn bất động sản chất lượng cao trên toàn quốc. 
                      Từ căn hộ chung cư đến biệt thự cao cấp.
                    </p>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors duration-300">
                      Tìm kiếm ngay
                    </button>
                    
                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white hover:text-gray-900 transition-colors duration-300">
                      Tư vấn miễn phí
                    </button>
                  </motion.div>

                  {/* Stats - Horizontal Layout */}
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </div>

      {/* Scroll Indicator */}
    </section>
  );
};

export default Hero;

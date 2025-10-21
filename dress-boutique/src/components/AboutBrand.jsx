import { motion } from 'framer-motion';

const AboutBrand = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Tinh Tế Brand"
                className="w-full h-auto object-cover"
              />
              {/* Decorative Overlay */}
              <div className="absolute top-8 left-8 bg-white/90 p-8 shadow-lg max-w-xs">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Tinh<span className="text-gray-600">Tế</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nơi phong cách gặp gỡ sự tinh tế
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              TINH TẾ
            </h2>
            <div className="w-20 h-1 bg-gray-900 mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                Boutique Fashion được thành lập với niềm đam mê mang đến những thiết kế 
                thời trang tinh tế, sang trọng và đầy nữ tính cho phái đẹp Việt Nam.
              </p>
              
              <p className="text-base md:text-lg">
                Chúng tôi tin rằng mỗi người phụ nữ đều xứng đáng tỏa sáng với phong cách 
                riêng của mình. Từ những chiếc váy công sở thanh lịch đến những mẫu đầm 
                dự tiệc lộng lẫy, mỗi sản phẩm của K.K đều được chăm chút tỉ mỉ từ 
                khâu thiết kế đến may đo.
              </p>
              
              <p className="text-base md:text-lg">
                Với chất liệu cao cấp, đường may hoàn hảo và sự chú trọng đến từng chi tiết, 
                Boutique Fashion mang đến sự tự tin và vẻ đẹp hoàn hảo cho mọi dịp đặc biệt 
                trong cuộc sống của bạn.
              </p>

              <div className="pt-6">
                <button className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                  TÌM HIỂU THÊM
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;

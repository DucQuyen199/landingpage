import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900/95 backdrop-blur-lg text-gray-300 py-8 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logo.png" 
                alt="City Lane Logo" 
                className="h-12 w-auto object-contain filter brightness-0 invert opacity-90"
              />
            </motion.div>
            <p className="text-sm leading-relaxed">
              Dự án căn hộ cao cấp tại vị trí đắc địa, mang đến không gian sống hiện đại và tiện nghi cho cư dân.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Giới thiệu</a></li>
              <li><a href="#location" className="hover:text-blue-400 transition-colors">Vị trí</a></li>
              <li><a href="#amenities" className="hover:text-blue-400 transition-colors">Tiện ích</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Hình ảnh</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-bold mb-4">Giờ làm việc</h3>
            <ul className="space-y-2 text-sm">
              <li>Thứ 2 - Thứ 6: 8:00 - 18:00</li>
              <li>Thứ 7: 8:00 - 17:00</li>
              <li>Chủ nhật: 8:00 - 12:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; 2025 City Lane. Tất cả các quyền được bảo lưu.</p>
          <p className="mt-2 text-gray-500">Website được phát triển bởi Nguyen Duc Quyen</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer


import { motion } from 'framer-motion'

const Amenities = () => {
  const amenitiesNoiKhu = [
    { number: '①', name: 'Công viên trung tâm' },
    { number: '②', name: 'Sân bóng rổ' },
    { number: '③', name: 'Sân cầu lông' },
    { number: '④', name: 'Lối di bộ' },
    { number: '⑤', name: 'BBQ' },
    { number: '⑥', name: 'Sân cát' },
    { number: '⑦', name: 'Khu vui chơi trẻ em' },
    { number: '⑧', name: 'Hồ bơi' },
    { number: '⑨', name: 'Ghế nghỉ' },
    { number: '⑩', name: 'Sảnh đón' },
    { number: '⑪', name: 'Trung tâm thương mại' },
    { number: '⑫', name: 'Hầm giữ xe' },
  ]

  const amenitiesNgoaiKhuCol1 = [
    { number: '①', name: 'Trung tâm thương mại' },
    { number: '③', name: 'THPT Cát Lái' },
    { number: '⑤', name: 'Tiểu học Mỹ Thủy' },
    { number: '⑦', name: 'Tòa án' },
    { number: '⑨', name: 'Cơ quan hành chính' },
    { number: '⑪', name: 'Đại học quản lí & công nghệ (UMT)' },
  ]

  const amenitiesNgoaiKhuCol2 = [
    { number: '②', name: 'Bệnh viện' },
    { number: '④', name: 'Mẫu giáo Sơn Ca' },
    { number: '⑥', name: 'THCS Cát Lái' },
    { number: '⑧', name: 'Sân vận động' },
    { number: '⑩', name: 'Câu lạc bộ' },
    { number: '⑫', name: 'Bưu điện' },
  ]

  return (
    <motion.section 
      id="amenities" 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-500 mb-12">NHỮNG TIỆN ÍCH</h2>

        {/* Top Section - Nội khu */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Image */}
          <div className="glass-card glass-glow glass-float">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://yootek.vn/wp-content/uploads/2024/03/tien-ich-noi-bat-can-ho-new-galaxy-binh-duong.jpg" 
                alt="Mặt bằng tiện ích nội khu"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Tiện ích nội khu */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Tiện ích nội khu:</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenitiesNoiKhu.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {item.number}
                  </span>
                  <span className="text-gray-700">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Ngoại khu */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Tiện ích ngoại khu */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Tiện ích ngoại khu:</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {/* Column 1 */}
              <div className="space-y-4">
                {amenitiesNgoaiKhuCol1.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {item.number}
                    </span>
                    <span className="text-gray-700 text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Column 2 */}
              <div className="space-y-4">
                {amenitiesNgoaiKhuCol2.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {item.number}
                    </span>
                    <span className="text-gray-700 text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="glass-card glass-glow glass-float">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://buildingcare.biz/wp-content/uploads/2022/09/tien-ich-noi-khu-1.jpg" 
                alt="Phối cảnh tiện ích ngoại khu"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Amenities

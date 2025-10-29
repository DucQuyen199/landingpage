import { motion } from 'framer-motion'

const ProjectInfo = () => {
  return (
    <motion.section 
      id="about" 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm text-gray-500 mb-2">Dự án cao cấp</h3>
            <h2 className="text-4xl font-bold text-blue-600 mb-6">City Lane</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                City Lane là dự án căn hộ cao cấp tọa lạc tại vị trí đắc địa trong khu vực phát triển năng động. 
                Với thiết kế hiện đại, tiện nghi đầy đủ và không gian sống xanh, dự án hứa hẹn mang đến một cuộc sống 
                tiện nghi và đẳng cấp cho cư dân.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Dự án được quy hoạch bài bản với đầy đủ các tiện ích nội khu như: công viên cây xanh, khu vui chơi 
                trẻ em, phòng gym, hồ bơi, khu thương mại... đáp ứng mọi nhu cầu của cuộc sống hiện đại.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Vị trí thuận lợi giúp cư dân dễ dàng di chuyển đến các khu vực trung tâm, trường học, bệnh viện 
                và các tiện ích công cộng khác.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative glass-card glass-glow glass-float"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://vinhomeoceanpark.com.vn/wp-content/uploads/2019/07/tmb-vinhomes-ocean-park-moi-1500x1057.jpg"
                alt="City Lane Project"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectInfo


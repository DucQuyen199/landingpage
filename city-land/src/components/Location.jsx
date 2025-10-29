import { motion } from 'framer-motion'

const Location = () => {
  const locationBoxes = [
    {
      title: 'TRUNG TÂM QUẬN 1',
      desc: 'Từ Citialto chỉ 15 phút kết nối trực tiếp với quận 1 thông qua hầm thủ thiêm.',
      icon: '✚',
    },
    {
      title: 'CÁC TIỆN ÍCH LÂN CẬN',
      desc: 'Chỉ chưa tới 1 phút chạy xe đã dẫn cư Citialto có thể tiếp cận cụm tiện ích khu đô thị Cát Lái. Hệ thống giáo dục từ mầm non tới đại học, khu thể thao, khu mua sắm...',
      icon: '✚',
    },
    {
      title: 'CÁC TIỆN ÍCH QUẬN 2',
      desc: 'Chưa đến 8 phút khách hàng thuận tiện tới các tiện ích hiện hữu của quận 2 – Trung tâm hành chính quận, Parkson Cantatil, Vincom Mega Mall...',
      icon: '✚',
    },
    {
      title: 'PHÚ MỸ HƯNG',
      desc: 'Từ dự án liền kết tới trung tâm khu nam Phú Mỹ Hưng chỉ mất chưa tới 10 phút chạy xe qua cầu Phú Mỹ.',
      icon: '✚',
    },
  ]

  return (
    <motion.section 
      id="location" 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-cyan-500 mb-6">VỊ TRÍ ĐẮC ĐỊA</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              City Land tọa lạc tại ngay trung tâm khu đô thị Cát Lái quận 2. Chỉ cần không quá 15 phút di chuyển khách hàng có thể kết nối tất cả các tiện ích lân cận, tất cả những quận lân cận và quận 1. Trường học, bệnh viện, siêu thị, khu vui chơi giải trí, công viên kề bên...Citialto giúp bạn hiện thực ước mơ có 1 căn nhà ngay trung tâm thành phố, phù hợp trở thành một nơi an cư lý tưởng.
            </p>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div
            className="glass-card glass-glow"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.634!2d106.7573!3d10.7577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525b6c4a6ab4f%3A0x8b3c6c3c3c3c3c3c!2sCat%20Lai%2C%20District%202%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí dự án City Lane"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - 4 Boxes */}
        <div className="grid md:grid-cols-2 gap-6">
          {locationBoxes.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg glass-card glass-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-cyan-500 text-white px-6 py-4 flex items-center gap-3">
                <span className="text-2xl font-bold">{item.icon}</span>
                <h3 className="text-xl font-bold uppercase">{item.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Location


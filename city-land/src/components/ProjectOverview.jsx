import { motion } from 'framer-motion'

const ProjectOverview = () => {
  const details = [
    { label: 'Tên dự án:', value: 'City Land', icon: '⊙' },
    { label: 'Chủ đầu tư:', value: 'Công ty TNHH Nguyen Duc Quyen', icon: '⊙' },
    { label: 'Vị trí:', value: 'Khu đô thị Cát Lái, Phường Cát Lái, Quận 2, TP HCM', icon: '⊙' },
    { label: 'Đơn vị tư vấn thiết kế:', value: 'MIA', icon: '⊙' },
    { label: 'Đơn vị thi công:', value: 'COSACO', icon: '⊙' },
    { label: 'Tổng diện tích khu đất:', value: '17.000 m2', icon: '⊙' },
    { label: 'Diện tích xây dựng:', value: '19%', icon: '⊙' },
    { label: 'Tổng diện tích tầng hầm:', value: 'Full giữa 2 block', icon: '⊙' },
    { label: 'Tổng số căn hộ:', value: '675 căn', icon: '⊙' },
    { label: 'Bàn giao:', value: 'quý 4/2019', icon: '⊙' },
  ]

  return (
    <motion.section 
      className="relative py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://nhadepgiatot.vn/uploads/auto/pc03tong-the-tien-ich-noi-khu-final-scaled-1699283541.jpg"
          alt="City Lane Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Details Box */}
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-10 rounded-lg border-4 border-cyan-400 shadow-2xl glass-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white">
              TỔNG QUAN DỰ ÁN
            </h2>
            <div className="space-y-4">
              {details.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <span className="text-cyan-400 mt-1 flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <span className="font-semibold">{item.label}</span>{' '}
                    <span className="font-normal">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Empty space for background to show */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectOverview


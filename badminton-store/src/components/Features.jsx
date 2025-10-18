import { motion } from 'framer-motion';
import { Truck, RefreshCw, Lock, Headphones } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Giao hàng nhanh',
      description: '24h giao hàng toàn Hà Nội, ngoại tỉnh 1-3 ngày',
    },
    {
      icon: RefreshCw,
      title: 'Đổi trả dễ dàng',
      description: 'Đổi trả trong 30 ngày không cần lý do',
    },
    {
      icon: Lock,
      title: 'Hàng chính hãng',
      description: '100% hàng chính hãng từ các thương hiệu hàng đầu',
    },
    {
      icon: Headphones,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ chuyên viên sẵn sàng giúp đỡ bạn',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full p-6 text-center border border-gray-100 rounded-lg hover:border-primary/20 hover:shadow-sm transition-all duration-300">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-all duration-300 mx-auto">
                    <Icon size={24} className="text-gray-700 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
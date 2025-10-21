import { motion } from 'framer-motion';

const Lookbook = () => {
  const lookbookItems = [
    {
      id: 1,
      title: 'PRU_21',
      subtitle: 'lookbook',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    },
    {
      id: 2,
      title: 'PRU_Xanh',
      subtitle: 'lookbook',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
    },
    {
      id: 3,
      title: 'PRU_T.ÁO',
      subtitle: 'lookbook',
      image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&q=80',
    },
  ];

  return (
    <section id="lookbook" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LOOKBOOK
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lookbookItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white shadow-lg aspect-[3/4] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 italic">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;

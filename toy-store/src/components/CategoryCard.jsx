import { motion } from 'framer-motion';

const CategoryCard = ({ category }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all w-full h-44 sm:h-48 lg:h-52"
    >
      {/* Image */}
      <div className="relative h-24 sm:h-28 lg:h-32 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-25`}></div>
        <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg"
          >
            <Icon className="text-sm sm:text-base text-gray-700" />
          </motion.div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-3 sm:p-4 h-20 flex flex-col justify-between">
        <div>
          <h3 className="text-xs sm:text-sm font-bold text-[#1a535c] mb-0.5 sm:mb-1 truncate">{category.name}</h3>
          <p className="text-[#1a535c]/70 text-[10px] sm:text-xs line-clamp-1 hidden sm:block">{category.description}</p>
        </div>
        <motion.div
          whileHover={{ x: 5 }}
          className="text-[#ff6b6b] font-semibold flex items-center gap-1 text-[10px] sm:text-xs mt-1"
        >
          <span>Khám phá</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;

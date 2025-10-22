import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  // Card đầu tiên (id = 1) chỉ hiển thị hình ảnh
  const isFirstCard = product.id === 1;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-2 border-gray-200"
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${isFirstCard ? 'h-full' : 'h-80'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.badge && (
          <div className={`absolute top-4 right-4 ${
            product.badge === 'GIẢM GIÁ' ? 'bg-[#ff6b6b]' : product.badge === 'MỚI' ? 'bg-[#4ecdc4]' : 'bg-[#ff6b6b]'
          } text-white px-3 py-1 rounded-full text-sm font-bold`}>
            {product.badge}
          </div>
        )}
        {!isFirstCard && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <FiShoppingCart className="text-[#ff6b6b]" size={20} />
          </motion.button>
        )}
      </div>

      {/* Content - Chỉ hiển thị cho card 2-8 */}
      {!isFirstCard && (
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#1a535c] mb-2 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={i < product.rating ? 'text-[#ffd93d] fill-current' : 'text-gray-300'}
                size={16}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-[#ff6b6b]">
                ${product.price}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff6b6b] text-white px-4 py-2 font-medium hover:bg-[#ff5252] transition-colors"
            >
              Thêm vào giỏ
            </motion.button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductCard;

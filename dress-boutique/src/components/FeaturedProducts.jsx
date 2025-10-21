import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const FeaturedProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const allProducts = [
    {
      id: 1,
      name: 'ÁO TRẮNG LINEN DÁNG SUÔNG CÔNG SỞ',
      code: 'ASM27-26',
      price: '490.000',
      image: 'https://cdn.kkfashion.vn/39327-large_default/ao-trang-linen-dang-suong-cong-so-asm27-26.jpg?w=1000',
    },
    {
      id: 2,
      name: 'QUẦN CÔNG SỞ LINEN ĐEN DÁNG SUÔNG',
      code: 'QCS08-02',
      price: '350.000',
      image: 'https://cdn.kkfashion.vn/39410-large_default/quan-cong-so-linen-den-dang-suong-qcs08-02.jpg?w=1000',
    },
    {
      id: 3,
      name: 'ĐẦM CÔNG SỞ MÀU NÂU CỔ V TÙNG XẾP LY',
      code: 'KK179-10',
      price: '600.000',
      image: 'https://cdn.kkfashion.vn/39446-large_default/dam-cong-so-mau-nau-co-v-tung-xep-ly-kk179-10.jpg?w=1000',
    },
    {
      id: 4,
      name: 'ĐẦM ĐEN CHỮ A CỔ TRÒN PHỐI CHOÀNG CHIFFON',
      code: 'KK179-32',
      price: '590.000',
      image: 'https://cdn.kkfashion.vn/39466-large_default/dam-den-chu-a-co-tron-phoi-choang-chiffon-kk179-32.jpg?w=1000',
    },
    {
      id: 5,
      name: 'ÁO KIỂU GILE NỮ HOẠ TIẾT CARO',
      code: 'ASM25-38',
      price: '390.000',
      image: 'https://cdn.kkfashion.vn/39324-large_default/ao-kieu-gile-nu-hoa-tiet-caro-asm25-38.jpg?w=1000',
    },
    {
      id: 6,
      name: 'ĐẦM TWEED DÁNG CHỮ A PHỐI TÚI',
      code: 'KK181-16',
      price: '590.000',
      image: 'https://cdn.kkfashion.vn/39508-large_default/dam-tweed-dang-chu-a-phoi-tui-kk181-16.jpg?w=1000',
    },
    {
      id: 7,
      name: 'ÁO SƠ MI TRẮNG TƠ XÀ CỪ TAY DÀI',
      code: 'ASM27-35',
      price: '370.000',
      image: 'https://cdn.kkfashion.vn/39342-large_default/ao-so-mi-trang-to-xa-cu-tay-dai-asm27-35.jpg?w=1000  ',
    },
    {
      id: 8,
      name: 'ĐẦM CARO DÁNG XÒE XẾP LY PHỐI NÚT',
      code: 'HL32-10',
      price: '650.000',
      image: 'https://cdn.kkfashion.vn/39428-large_default/dam-caro-dang-xoe-xep-ly-phoi-nut-hl32-10.jpg?w=1000',
    },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section id="products" className="py-16 bg-white">
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
            SẢN PHẨM NỔI BẬT
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-[calc(50%-55px)] -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all ${
              !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Products Container - Single Row with Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pb-2">
              {allProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]"
                  onMouseEnter={() => setHoveredIndex(product.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow aspect-[3/4.5] mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {hoveredIndex === product.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/20 flex items-center justify-center"
                        >
                          <span className="bg-white text-gray-900 px-4 py-2 text-xs font-medium hover:bg-gray-100 transition-colors">
                            XEM CHI TIẾT
                          </span>
                        </motion.div>
                      )}
                    </div>
                    <div className="text-center px-2">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {product.code}
                      </p>
                      <div className="flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">
                          {product.price}đ
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-[calc(50%-55px)] -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all ${
              !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;

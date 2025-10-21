import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const YouMayLike = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products = [
    {
      id: 1,
      name: 'Đầm ren hồng dự tiệc đính hoa',
      price: '750.000',
      image: 'https://cdn.kkfashion.vn/38887-large_default/dam-ren-hong-du-tiec-dinh-hoa-kk180-07.jpg',
    },
    {
      id: 2,
      name: 'Đầm đen hoa tiết dáng xòe chữ A tay lỡ',
      price: '265.000',
      image: 'https://cdn.kkfashion.vn/32755-large_default/dam-den-hoa-tiet-dang-xoe-chu-a-tay-lo-kk171-11.jpg',
    },
    {
      id: 3,
      name: 'Áo thun nữ sát nách cổ cao sọc ngang',
      price: '72.000',
      image: 'https://cdn.kkfashion.vn/37486-large_default/ao-thun-nu-sat-nach-co-cao-soc-ngang-asm27-31.jpg?w=768',
    },
    {
      id: 4,
      name: 'Đầm đen dáng xòe đính hoa',
      price: '620.000',
      image: 'https://cdn.kkfashion.vn/38860-large_default/dam-den-dang-xoe-dinh-hoa-kk179-25.jpg',
    },
    {
      id: 5,
      name: 'Áo thun ôm kẻ sọc cổ V xoăn ngực',
      price: '54.000',
      image: 'https://cdn.kkfashion.vn/33499-large_default/ao-thun-om-ke-soc-xanh-co-v-xoan-nguc-asm22-01.jpg',
    },
    {
      id: 6,
      name: 'Đầm hoa dáng xòe cổ V viền dáng tèn',
      price: '550.000',
      image: 'https://cdn.kkfashion.vn/38829-large_default/dam-hoa-dang-xoe-co-v-vien-dang-ten-kk179-02.jpg',
    },
    {
      id: 7,
      name: 'Áo kiểu nữ tay phồng hoa tiết hoa',
      price: '90.000',
      image: 'https://cdn.kkfashion.vn/38750-large_default/ao-kieu-nu-tay-phong-hoa-tiet-hoa-asm24-22.jpg?w=150',
    },
    {
      id: 8,
      name: 'Đầm công sở dáng xòe màu xanh đen phối nút',
      price: '590.000',
      image: 'https://cdn.kkfashion.vn/38835-large_default/dam-cong-so-dang-xoe-mau-xanh-den-phoi-nut-kk179-07.jpg',
    },
    {
      id: 9,
      name: 'Đầm hoa dáng xòe cổ V tay ngắn',
      price: '480.000',
      image: 'https://cdn.kkfashion.vn/39499-large_default/dam-hoa-cam-dang-xoe-tay-ngan-co-v-kk180-35.jpg',
    },
    {
      id: 10,
      name: 'Áo sơ mi trắng tay dài cổ vest',
      price: '320.000',
      image: 'https://cdn.kkfashion.vn/17622-large_default/ao-so-mi-trang-nu-cong-so-tay-dai-asm11-31.jpg',
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#8B1538' }}>
            CÓ THỂ NÀNG SẼ THÍCH - KHÁM PHÁ NGAY!
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all ${
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
            <div className="flex gap-4 pb-2">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer flex-shrink-0 w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px]"
                >
                  <div className="relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow aspect-[3/4.5] mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="text-xs font-medium text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-gray-900">
                      {product.price} đ
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all ${
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

export default YouMayLike;

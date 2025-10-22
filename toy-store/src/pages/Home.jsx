import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaHeart, FaPuzzlePiece } from 'react-icons/fa';
import { FiStar, FiMessageCircle, FiSmile, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GiPartyPopper, GiPresent } from 'react-icons/gi';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Newsletter from '../components/Newsletter';
import { products, categories, testimonials, newArrivals } from '../data/products';

const Home = () => {
  const scrollContainerRef = useRef(null);
  const newArrivalsScrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // width of card + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollNewArrivals = (direction) => {
    if (newArrivalsScrollRef.current) {
      const scrollAmount = 320; // width of card + gap
      const newScrollLeft = newArrivalsScrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      newArrivalsScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Categories Section */}
      <section id="categories" className="py-12 sm:py-16 lg:py-20 bg-[#fff7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a535c]">
              Danh mục sản phẩm
            </h2>
          </motion.div>

          {/* Categories Grid - Responsive: 2 cols mobile, 4 cols tablet, 8 cols desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="offers" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a535c]">
              Đồ chơi phổ biến tuần này
            </h2>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative group">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 disabled:opacity-50"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-[#1a535c]" size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-[#1a535c]" size={24} />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fff7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8 flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a535c] flex items-center gap-2">
                <GiPresent className="text-[#ff6b6b]" /> Hàng mới về
              </h2>
              <p className="text-[#1a535c]/70 mt-2">Khám phá những sản phẩm mới nhất vừa cập nhật</p>
            </div>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative group">
            {/* Left Arrow */}
            <button
              onClick={() => scrollNewArrivals('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 disabled:opacity-50"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-[#1a535c]" size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollNewArrivals('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-[#1a535c]" size={24} />
            </button>

            <div 
              ref={newArrivalsScrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            >
              {newArrivals.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandsSection />

      {/* Promotion Banner */}
      <PromotionBanner />

      {/* Testimonials Section */}
      <section className="py-20 bg-[#fff7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a535c] mb-4 flex items-center justify-center gap-3">
              <FiMessageCircle className="text-[#4ecdc4]" /> Phụ huynh nói gì
            </h2>
            <p className="text-[#1a535c]/70 text-lg">
              Đánh giá thực từ khách hàng hài lòng của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

// Promotion Banner Component
const PromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 to-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <GiPartyPopper /> Mua 2 Tặng 1 Miễn phí cho tất cả bộ LEGO!
          </h2>
          <p className="text-white/90 text-xl mb-8">Ưu đãi có thời hạn - Đừng bỏ lỡ!</p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white rounded-2xl p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-[#ff6b6b]">{value.toString().padStart(2, '0')}</div>
                <div className="text-sm text-[#1a535c] capitalize">{unit}</div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#ff6b6b] px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 mx-auto"
          >
                  <GiPresent /> Nắm bắt ưu đãi ngay!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const features = [
    { icon: FaHeart, title: 'An toàn & Đã kiểm tra', description: '100% vật liệu an toàn cho trẻ em', color: 'text-red-500' },
    { icon: FaPuzzlePiece, title: 'Giáo dục', description: 'Học tập qua vui chơi', color: 'text-purple-500' },
    { icon: FiSmile, title: 'Khách hàng yêu thích', description: '50,000+ gia đình hạnh phúc', color: 'text-yellow-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop"
              alt="Happy kids playing"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#ffd93d] p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-[#ff6b6b]">10+</div>
              <div className="text-[#1a535c] font-medium">Năm tin tưởng</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a535c] mb-6">
              Được tin tưởng bởi các gia đình từ năm 2010
            </h2>
            <p className="text-[#1a535c]/70 text-lg mb-8 leading-relaxed">
              Chúng tôi tin rằng vui chơi là chìa khóa của sự phát triển. Sứ mệnh của chúng tôi là mang lại niềm vui và học tập
              thông qua mỗi món đồ chơi. Từ những câu đố giáo dục đến bộ xây dựng sáng tạo, chúng tôi
              cẩn thận chọn lọc những món đồ chơi khơi dậy trí tưởng tượng và phát triển.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <Icon className={`text-4xl ${feature.color}`} />
                    <div>
                      <h3 className="font-bold text-[#1a535c] text-lg">{feature.title}</h3>
                      <p className="text-[#1a535c]/70">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Brands Section Component
const BrandsSection = () => {
  const brands = [
    {
      id: 1,
      name: "LEGO",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/LEGO-Logo.png",
      description: "Khối xây dựng sáng tạo"
    },
    {
      id: 2,
      name: "Barbie",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barbie_Logo.svg/1200px-Barbie_Logo.svg.png",
      description: "Búp bê thời trang"
    },
    {
      id: 3,
      name: "Hot Wheels",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvO7gKy943DLS-4oOz7381bpVw0UpxnejlCw&s",
      description: "Xe đồ chơi tốc độ"
    },
    {
      id: 4,
      name: "Fisher-Price",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Fisher-Price_logo_2020.png",
      description: "Đồ chơi trẻ em"
    },
    {
      id: 5,
      name: "Hasbro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Hasbro_4c_no_R.png",
      description: "Trò chơi gia đình"
    },
    {
      id: 6,
      name: "Mattel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mattel_logo.svg/1196px-Mattel_logo.svg.png",
      description: "Đồ chơi chất lượng cao"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a535c] mb-4">
            Thương hiệu đối tác của chúng tôi
          </h2>
          <p className="text-[#1a535c]/70 text-lg">
            Những thương hiệu đồ chơi hàng đầu thế giới
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center group cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-[120px] max-h-[60px] object-contain transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

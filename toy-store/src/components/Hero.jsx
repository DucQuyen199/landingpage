import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://www.mykingdom.com.vn/cdn/shop/files/homepage_1280x496_f1dbdce8-ed8a-4b48-8ee3-2678ee308c7d.jpg?v=1760322703&width=1200',
      title: 'Nơi mỗi món đồ chơi mang lại nụ cười!',
      subtitle: 'Khám phá những món đồ chơi vui nhộn, an toàn và giáo dục cho mọi lứa tuổi.',
      description: 'Mang lại niềm vui và học tập cùng nhau!'
    },
    {
      image: 'https://www.mykingdom.com.vn/cdn/shop/files/HERO_BANNER_3bd455a8-ce90-4373-a193-30ce41f1b1ca.png?v=1760339441&width=1200',
      title: 'Đồ chơi chất lượng cao',
      subtitle: 'Những món đồ chơi được chọn lọc kỹ lưỡng để khơi dậy sự sáng tạo',
      description: 'An toàn, bền bỉ và được thiết kế cho niềm vui bất tận!'
    },
    {
      image: 'https://www.mykingdom.com.vn/cdn/shop/files/1._1280x496_0995ab58-0305-4974-9d00-81ca4c0c5b58.png?v=1760340080&width=1200',
      title: 'Giáo dục & Vui nhộn',
      subtitle: 'Học tập qua trò chơi chưa bao giờ thú vị đến thế',
      description: 'Phát triển kỹ năng trong khi tận hưởng thời gian vui vẻ!'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges',
          WebkitImageRendering: 'crisp-edges',
          MozImageRendering: 'crisp-edges',
          msImageRendering: 'crisp-edges',
          imageRendering: 'high-quality',
          WebkitImageRendering: 'high-quality',
          MozImageRendering: 'high-quality',
          msImageRendering: 'high-quality',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
      >
        <FiChevronLeft className="text-2xl" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
      >
        <FiChevronRight className="text-2xl" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#ffd93d]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>


    </section>
  );
};

export default Hero;

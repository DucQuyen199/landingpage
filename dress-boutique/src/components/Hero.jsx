import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const bannerImages = [
    "https://nishatboutique.com/cdn/shop/files/boutique-october-web-banner-deeva_83d53b53-66d1-4fc6-b6cb-bb13d7860f37.jpg?v=1760509159&width=1880",
    "https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2_master.jpg?v=2795",
    "https://heradg.vn/media/25991/content/LA2-01_Resize_Logo-2.jpg",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];
  return (
    <section id="home" className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden bg-gray-50">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <motion.img
          key={currentImage}
          src={bannerImages[currentImage]}
          alt={`Banner Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/30"></div>
      </div>


      {/* Navigation Numbers */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-10">
        {['01', '02', '03', '04'].map((num, index) => (
          <motion.button
            key={num}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setCurrentImage(index)}
          >
            <div className={`w-8 h-px mr-3 transition-colors ${
              currentImage === index ? 'bg-white' : 'bg-white/50'
            }`}></div>
            <span className={`text-sm font-light transition-colors ${
              currentImage === index ? 'text-white' : 'text-white/70'
            }`}>{num}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Hero;

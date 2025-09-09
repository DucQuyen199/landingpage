import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery: React.FC = () => {
  const images = [
    // Staggered layout - alternating heights for masonry effect
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=400&fit=crop",
      alt: "Luxury Property 1",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=250&fit=crop",
      alt: "Modern Apartment",
      size: "short"
    },
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=350&fit=crop",
      alt: "House Front",
      size: "tall"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBd5DWAFA2leUM69Jpm3qTELePznsVt2Ufg&s",
      alt: "Land Development",
      size: "short"
    },
    
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop",
      alt: "Beach Villa",
      size: "medium"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH81AAn5wCzFXtfNW3qmUM6FyyeDQpPbIcndlc6ov6IDEGR81O6qV_6032aMu1ZDF92YA&usqp=CAU",
      alt: "Office Building",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=250&fit=crop",
      alt: "Modern Interior",
      size: "short"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_CEwsgC7p24bMHOf2mK6zdZQleOs92UVrw&s",
      alt: "Contemporary Home",
      size: "tall"
    },
    
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=200&fit=crop",
      alt: "Architectural Design",
      size: "short"
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&h=350&fit=crop",
      alt: "Modern Architecture",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=300&fit=crop",
      alt: "Luxury Residence",
      size: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=300&h=250&fit=crop",
      alt: "Elegant Home",
      size: "short"
    },
    
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=400&fit=crop",
      alt: "Contemporary Villa",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop",
      alt: "Luxury Penthouse",
      size: "short"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=350&fit=crop",
      alt: "Modern Office",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&h=300&fit=crop",
      alt: "Architectural Beauty",
      size: "medium"
    },
    
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=250&fit=crop",
      alt: "Elegant Residence",
      size: "short"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'tall':
        return 'col-span-1 md:col-span-1 row-span-2';
      case 'medium':
        return 'col-span-1 md:col-span-1 row-span-1';
      case 'short':
        return 'col-span-1 md:col-span-1 row-span-1';
      default:
        return 'col-span-1 md:col-span-1 row-span-1';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Image Gallery */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${getSizeClasses(image.size)}`}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.alt}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Xem chi tiết
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Consultation Form Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Nhận tư vấn miễn phí từ chuyên gia
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Để lại thông tin liên hệ, chúng tôi sẽ tư vấn miễn phí và giúp bạn tìm kiếm 
            bất động sản phù hợp nhất với nhu cầu và ngân sách.
          </p>
          
          {/* Contact Form */}
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên *"
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại *"
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
            </div>
            
            <div>
              <select className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-white focus:outline-none">
                <option value="">Loại bất động sản quan tâm</option>
                <option value="apartment">Căn hộ chung cư</option>
                <option value="house">Nhà riêng</option>
                <option value="villa">Biệt thự</option>
                <option value="land">Đất nền</option>
                <option value="commercial">Bất động sản thương mại</option>
                <option value="other">Khác</option>
              </select>
            </div>
            
            <div>
              <textarea
                placeholder="Mô tả nhu cầu của bạn (tùy chọn)"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none resize-none"
              ></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="submit"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Gửi yêu cầu tư vấn
              </button>
              <button 
                type="button"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Gọi hotline: 1900 1234
              </button>
            </div>
            
            <p className="text-primary-100 text-sm">
              * Thông tin của bạn sẽ được bảo mật và chỉ sử dụng để tư vấn bất động sản
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;

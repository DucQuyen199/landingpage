import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'NÊN MẶC GÌ vào Tết Nguyên Đán? - Gợi ý 10 outfit Tết có thể mặc lại sau Tết',
      date: '12 Tháng Một, 2025',
      excerpt: 'Tết Nguyên Đán sắp đến, bạn đã chuẩn bị những bộ trang phục đẹp cho mình chưa? Hãy cùng K.K khám phá 10 gợi ý trang phục Tết...',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
      category: 'Phong cách',
    },
    {
      id: 2,
      title: 'Tổng hợp những kiểu váy maxi đẹp nhất 2025',
      date: '08 Tháng Một, 2025',
      excerpt: 'Váy maxi luôn là lựa chọn hoàn hảo cho những buổi dạo phố, du lịch hay dự tiệc. Cùng điểm qua những mẫu váy maxi hot nhất năm nay...',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
      category: 'Xu hướng',
    },
    {
      id: 3,
      title: 'BÍ QUYẾT phối đồ với ĐẦM công sở - Giúp bạn gái thêm phần thu hút tại văn phòng',
      date: '05 Tháng Một, 2025',
      excerpt: 'Đầm công sở không chỉ giúp bạn trông chuyên nghiệp mà còn tôn lên vẻ đẹp thanh lịch của người phụ nữ hiện đại...',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      category: 'Công sở',
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white">
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
            BLOG
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 text-xs font-semibold text-gray-900">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors flex items-center">
                  ĐỌC THÊM 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
            XEM TẤT CẢ BÀI VIẾT
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

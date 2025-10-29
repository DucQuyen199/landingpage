import { motion } from 'framer-motion'

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'City Land chính thức mở bán',
      excerpt: 'Dự án căn hộ cao cấp City Land chính thức được mở bán với nhiều ưu đãi hấp dẫn...',
      date: '15/10/2025',
      image: 'https://qsbsteel.com/wp-content/uploads/2021/09/khai-niem-cong-trinh-xay-dung.png',
    },
    {
      id: 2,
      title: 'Tiến độ xây dựng đạt 70%',
      excerpt: 'Dự án City Land đang trong giai đoạn hoàn thiện với tiến độ đạt 70%...',
      date: '10/10/2025',
      image: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2025/3/5/gia-lai-tam-dung-dau-tu-xay-moi-nang-cap-tru-so-lam-viec-co-quan-hanh-chinh-cap-huyen-xa-anh-ha-duy-1741143094787-17411430951171562770540.jpg',
    },
    {
      id: 3,
      title: 'Chính sách ưu đãi tháng 10',
      excerpt: 'Nhận ngay voucher du lịch và nhiều quà tặng giá trị khi mua căn hộ trong tháng 10...',
      date: '01/10/2025',
      image: 'https://ngaymoionline.com.vn/stores/news_dataimages/nguyenloan/082021/17/16/thumbnail/0431_ivory.png?rt=20210817160432',
    },
    {
      id: 4,
      title: 'Lễ cất nóc dự án thành công',
      excerpt: 'Lễ cất nóc dự án City Land diễn ra thành công tốt đẹp với sự tham gia của đông đảo...',
      date: '25/09/2025',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP-bX4iYlPFUmDWaFpFxsewlZ6f51oUopNw&s',
    },
  ]

  return (
    <motion.section 
      id="news" 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">TIN TỨC</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-card glass-glow rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 w-full overflow-hidden flex-shrink-0 bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{item.excerpt}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 mt-auto">
                  Đọc thêm
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default News


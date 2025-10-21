import { motion } from 'framer-motion';
import { useState } from 'react';

function ShopByOccasion() {
  const [activeTab, setActiveTab] = useState('work');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tabs = [
    { id: 'work', label: 'ĐỒ ĐI LÀM' },
    { id: 'casual', label: 'ĐỒ ĐI CHƠI' },
    { id: 'party', label: 'ĐỒ ĐI TIỆC' },
  ];

  const products = {
    work: [
      {
        id: 1,
        name: 'Đầm đen hoa tiết dáng xòe chữ A tay lỡ',
        code: 'KK171-11',
        price: '265.000',
        image: 'https://cdn.kkfashion.vn/32755-large_default/dam-den-hoa-tiet-dang-xoe-chu-a-tay-lo-kk171-11.jpg',
      },
      {
        id: 2,
        name: 'Chân váy midi công sở màu đen dáng xòe',
        code: 'CV10-22',
        price: '350.000',
        image: 'https://static.hotdeal.vn/images/854/854297/400x500/194704-dam-da-hoi-sang-trong-dinh-phu-kien-bst-th-hoang-chi-194694-vn-2-3.jpg',
      },
      {
        id: 3,
        name: 'Đầm công sở cổ sơ mi dáng xòe phối nút',
        code: 'KK178-37',
        price: '590.000',
        image: 'https://cdn.kkfashion.vn/38821-large_default/dam-cong-so-co-so-mi-dang-xoe-phoi-nut-kk178-37.jpg',
      },
      {
        id: 4,
        name: 'Áo sơ mi trắng dáng suông tay dài',
        code: 'ASM27-27',
        price: '370.000',
        image: 'https://cdn.kkfashion.vn/38752-large_default/ao-so-mi-trang-dang-suong-tay-dai-asm27-27.jpg',
      },
      {
        id: 5,
        name: 'Chân váy xòe công sở màu cam',
        code: 'CV10-15',
        price: '128.000',
        image: 'https://cdn.kkfashion.vn/38155-large_default/chan-vay-xoe-cong-so-mau-cam-cv10-15.jpg',
      },
      {
        id: 6,
        name: 'Đầm đen dáng xòe cổ V phối viền trắng',
        code: 'KK171-25',
        price: '280.000',
        image: 'https://cdn.kkfashion.vn/18245-large_default/dam-xoe-den-cong-so-nhan-eo-vien-trang-kk114-26.jpg',
      },
    ],
    casual: [
      {
        id: 7,
        name: 'Áo kiểu nữ tay phồng hoa tiết hoa',
        code: 'ASM24-22',
        price: '90.000',
        image: 'https://cdn.kkfashion.vn/23216-large_default/ao-kieu-hoa-tiet-hoa-tay-phong-co-chu-v-asm13-12.jpg',
      },
      {
        id: 8,
        name: 'Áo hoa kiểu nữ croptop tay phồng',
        code: 'ASM20-30',
        price: '102.000',
        image: 'https://cdn.kkfashion.vn/31583-large_default/ao-hoa-kieu-nu-croptop-tay-phong-asm20-30.jpg',
      },
      {
        id: 9,
        name: 'Áo thun nữ sát nách cổ cao sọc ngang',
        code: 'ASM27-31',
        price: '72.000',
        image: 'https://cdn.kkfashion.vn/37486-large_default/ao-thun-nu-sat-nach-co-cao-soc-ngang-asm27-31.jpg?w=768',
      },
      {
        id: 10,
        name: 'Đầm đen dáng xòe cổ V phối viền trắng',
        code: 'KK171-25',
        price: '260.000',
        image: 'https://cdn.kkfashion.vn/33573-large_default/dam-den-dang-xoe-co-v-phoi-vien-trang-kk171-25.jpg',
      },
      {
        id: 11,
        name: 'Đầm công sở cổ sơ mi dáng xòe phối nút',
        code: 'KK178-37',
        price: '590.000',
        image: 'https://cdn.kkfashion.vn/38821-large_default/dam-cong-so-co-so-mi-dang-xoe-phoi-nut-kk178-37.jpg',
      },
      {
        id: 12,
        name: 'Đầm xòe hoa tiết hoa bản lớn cổ sen',
        code: 'KK178-14',
        price: '540.000',
        image: 'https://cdn.kkfashion.vn/38369-large_default/dam-xoe-hoa-tiet-hoa-ban-lon-co-sen-kk178-14.jpg',
      },
    ],
    party: [
      {
        id: 13,
        name: 'Đầm dạ hội dài màu đen sang trọng',
        code: 'KK180-01',
        price: '890.000',
        image: 'https://static.hotdeal.vn/images/854/854297/400x500/194704-dam-da-hoi-sang-trong-dinh-phu-kien-bst-th-hoang-chi-194694-vn-2-3.jpg',
      },
      {
        id: 14,
        name: 'Đầm dạ hội dài màu xanh rêu',
        code: 'KK180-02',
        price: '890.000',
        image: 'https://julina.vn/wp-content/uploads/2023/11/vay-du-tiec-hai-day-dang-dai-xe-ta-julina-remy-moss-green-j964-3-1024.jpg',
      },
      {
        id: 15,
        name: 'Đầm dạ hội lệch vai màu đỏ',
        code: 'KK180-03',
        price: '920.000',
        image: 'https://lh5.googleusercontent.com/proxy/6lqIAFcAR8eQogUJtNGHFd6Y7AXMD60SzQYqNa03ClL4sls-N_5H7mDYw0BcB63tFoiopd6Y7begE4feUczRa2d2kVQrL0ye3AG5xaSx2SEyM0hMYw',
      },
      {
        id: 16,
        name: 'Đầm dạ hội dài màu hồng pastel',
        code: 'KK180-04',
        price: '850.000',
        image: 'https://lh5.googleusercontent.com/proxy/ca1Sr203_ngqR-xyTeAdIevJeYdIWqY8vjsKYWqXFB293LZfM6p61U20T1rVosQL71CabV_Wi_85Ze4ARgYhlr0BlKYqFPiV7GjshEzUfTYr7m_cYNIACdp4RO0c8Oc',
      },
      {
        id: 17,
        name: 'Đầm dạ hội cổ V màu xanh navy',
        code: 'KK180-05',
        price: '880.000',
        image: 'https://julina.vn/wp-content/uploads/2023/11/vay-du-tiec-dang-dai-co-chu-v-vai-lua-julina-leila-midnight-navy-j921-3-1024.jpg',
      },
      {
        id: 18,
        name: 'Đầm dạ hội lệch vai màu vàng gold',
        code: 'KK180-06',
        price: '950.000',
        image: 'https://cf.shopee.vn/file/9803a7926393aa1cca637ea4c08d6929',
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {products[activeTab].map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(product.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow aspect-[3/4.5] mb-3">
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
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-1 text-xs md:text-sm line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{product.code}</p>
                <div className="flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">
                    {product.price}đ
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-full text-sm font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300">
            XEM TẤT CẢ ĐỒ ĐI LÀM
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShopByOccasion;

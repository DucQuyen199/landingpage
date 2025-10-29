import { useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('apartment')

  const tabs = [
    { id: 'apartment', label: 'CĂN HỘ' },
    { id: 'masterplan', label: 'MẶT BẰNG' },
    { id: 'others', label: 'TIỆN ÍCH KHÁC' },
  ]

  // Image sources from your provided links and project assets
  const IMG_LIVING = 'https://havenly.com/blog/wp-content/uploads/2024/02/kyliefitts_havenly_tundeoyeneyin_2-5-1500x970.jpg'
  const IMG_KITCHEN = 'https://kinhphucdat.com/wp-content/uploads/2024/08/top-99-mau-nha-bep-dep-hot-nhat-2024.png'
  const IMG_PLAN = 'https://enic.vn/wp-content/uploads/2023/09/z4635165197305_2e77041a8d47b03fc162dfe3c99c7308-copy.jpg'
  const IMG_AMENITIES = 'https://www.midas-travel.com/wp-content/uploads/2024/09/Hotel-fruit_dk.jpg'

  const images = {
    apartment: [
      { id: 'bath', title: 'Phòng tắm', subtitle: 'Căn hộ City Land', src: IMG_PLAN, layout: 'tall-left' },
      { id: 'living', title: 'Phòng khách', subtitle: 'Căn hộ City Land', src: IMG_LIVING, layout: 'hero' },
      { id: 'kitchen', title: 'Nhà bếp', subtitle: 'Căn hộ City Land', src: IMG_KITCHEN, layout: 'tall-right' },
      { id: 'thumb1', title: 'Không gian bếp', subtitle: 'Căn hộ City Land', src: IMG_KITCHEN, layout: 'thumb' },
      { id: 'thumb2', title: 'Phòng ngủ', subtitle: 'Căn hộ City Land', src: IMG_LIVING, layout: 'thumb' },
      { id: 'thumb3', title: 'Góc đọc sách', subtitle: 'Căn hộ City Land', src: IMG_LIVING, layout: 'thumb' },
    ],
    masterplan: [
      { id: 'plan-hero', title: 'Mặt bằng tổng thể', subtitle: 'City Land', src: IMG_PLAN, layout: 'hero-only' },
    ],
    others: [
      { id: 'amenities-hero', title: 'Tiện ích khác', subtitle: 'Hồ bơi, công viên...', src: IMG_AMENITIES, layout: 'hero-only' },
    ],
  }

  const renderApartmentGrid = () => (
    <div className="hidden lg:grid gap-6" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto' }}>
      {/* Top row: 2 large images */}
      <GalleryCard item={images.apartment[0]} className="col-span-2 row-start-1 h-[400px]" />
      <GalleryCard item={images.apartment[2]} className="col-span-2 row-start-1 h-[400px]" />

      {/* Bottom row: 4 thumbnails */}
      <GalleryCard item={images.apartment[3]} className="col-span-1 row-start-2 h-[150px]" />
      <GalleryCard item={images.apartment[4]} className="col-span-1 row-start-2 h-[150px]" />
      <GalleryCard item={images.apartment[5]} className="col-span-1 row-start-2 h-[150px]" />
      <GalleryCard item={images.apartment[1]} className="col-span-1 row-start-2 h-[150px]" />
    </div>
  )

  const renderSimpleHero = (src, title, subtitle) => (
    <GalleryCard item={{ src, title, subtitle }} className="w-full h-[520px]" darkCaption />
  )

  return (
    <motion.section 
      id="gallery" 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">HÌNH ẢNH</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop layout matching the screenshot */}
        {activeTab === 'apartment' && (
          <>
            <div className="lg:hidden grid grid-cols-2 gap-4">
              {images.apartment.map((it) => (
                <GalleryCard key={it.id} item={it} className="h-48" />
              ))}
            </div>
            <div className="hidden lg:block">{renderApartmentGrid()}</div>
          </>
        )}

        {activeTab === 'masterplan' && (
          <div className="mt-4">{renderSimpleHero(IMG_PLAN, 'Mặt bằng tổng thể', 'City Land')}</div>
        )}

        {activeTab === 'others' && (
          <div className="mt-4">{renderSimpleHero(IMG_AMENITIES, 'Tiện ích khác', 'City Land')}</div>
        )}
      </div>
    </motion.section>
  )
}

const GalleryCard = ({ item, className = '', darkCaption = false }) => {
  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow glass-card glass-glow ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
      <div className={`absolute inset-0 bg-gradient-to-t ${darkCaption ? 'from-black/60 via-black/30 to-transparent' : 'from-black/40 to-transparent'} p-4 flex items-end`}> 
        <div>
          <p className="text-white font-semibold text-lg">{item.title}</p>
          {item.subtitle && <p className="text-white/80 text-sm">{item.subtitle}</p>}
        </div>
      </div>
    </motion.div>
  )
}

export default Gallery


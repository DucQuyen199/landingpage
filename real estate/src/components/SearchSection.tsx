import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { SearchFilters } from '../types';

const SearchSection: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    type: '',
    minPrice: 0,
    maxPrice: 0,
    bedrooms: 0,
    bathrooms: 0,
  });

  const propertyTypes = [
    { value: '', label: 'Tất cả loại' },
    { value: 'apartment', label: 'Căn hộ' },
    { value: 'house', label: 'Nhà phố' },
    { value: 'villa', label: 'Biệt thự' },
    { value: 'land', label: 'Đất nền' },
  ];

  const locations = [
    'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5',
    'Quận 6', 'Quận 7', 'Quận 8', 'Quận 9', 'Quận 10',
    'Quận 11', 'Quận 12', 'Thủ Đức', 'Bình Thạnh', 'Tân Bình'
  ];

  const priceRanges = [
    { min: 0, max: 0, label: 'Tất cả giá' },
    { min: 0, max: 2000000000, label: 'Dưới 2 tỷ' },
    { min: 2000000000, max: 5000000000, label: '2 - 5 tỷ' },
    { min: 5000000000, max: 10000000000, label: '5 - 10 tỷ' },
    { min: 10000000000, max: 0, label: 'Trên 10 tỷ' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search filters:', filters);
    // Implement search logic here
  };

  return (
    <motion.section 
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tìm kiếm bất động sản
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sử dụng bộ lọc thông minh để tìm kiếm bất động sản phù hợp với nhu cầu của bạn
          </p>
        </motion.div>

        <div className="card p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vị trí
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Chọn khu vực</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loại bất động sản
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Khoảng giá
                </label>
                <select
                  onChange={(e) => {
                    const selectedRange = priceRanges[parseInt(e.target.value)];
                    setFilters({ 
                      ...filters, 
                      minPrice: selectedRange.min, 
                      maxPrice: selectedRange.max 
                    });
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {priceRanges.map((range, index) => (
                    <option key={index} value={index}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số phòng ngủ
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({ ...filters, bedrooms: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value={0}>Tất cả</option>
                  <option value={1}>1 phòng</option>
                  <option value={2}>2 phòng</option>
                  <option value={3}>3 phòng</option>
                  <option value={4}>4 phòng</option>
                  <option value={5}>5+ phòng</option>
                </select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số phòng tắm
                </label>
                <select
                  value={filters.bathrooms}
                  onChange={(e) => setFilters({ ...filters, bathrooms: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value={0}>Tất cả</option>
                  <option value={1}>1 phòng</option>
                  <option value={2}>2 phòng</option>
                  <option value={3}>3 phòng</option>
                  <option value={4}>4+ phòng</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg"
                >
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Quick Search Tags */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tìm kiếm nhanh:</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Căn hộ Quận 1',
              'Biệt thự Quận 2',
              'Nhà phố Quận 3',
              'Đất nền Quận 7',
              'Penthouse',
              'View sông',
              'Gần trường học',
              'Mặt tiền kinh doanh'
            ].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full text-sm font-medium transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SearchSection;

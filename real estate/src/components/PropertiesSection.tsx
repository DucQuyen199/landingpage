import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';
import type { Property } from '../types';

const PropertiesSection: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'Tất cả' },
    { key: 'featured', label: 'Nổi bật' },
    { key: 'apartment', label: 'Căn hộ' },
    { key: 'house', label: 'Nhà phố' },
    { key: 'villa', label: 'Biệt thự' },
    { key: 'land', label: 'Đất nền' },
  ];

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredProperties(properties);
    } else if (filter === 'featured') {
      setFilteredProperties(properties.filter(p => p.isFeatured));
    } else {
      setFilteredProperties(properties.filter(p => p.type === filter));
    }
  };

  return (
    <motion.section 
      id="properties" 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bất động sản nổi bật
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những bất động sản chất lượng cao được lựa chọn kỹ lưỡng cho bạn
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="btn-secondary text-lg px-8 py-4">
            Xem thêm bất động sản
            <svg className="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Bất động sản</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PropertiesSection;

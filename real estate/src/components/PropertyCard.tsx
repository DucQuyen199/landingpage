import React from 'react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000000) {
      return `${(price / 1000000000).toFixed(1)} tỷ`;
    }
    return `${(price / 1000000).toFixed(0)} triệu`;
  };

  const getTypeLabel = (type: string) => {
    const typeMap: { [key: string]: string } = {
      apartment: 'Căn hộ',
      house: 'Nhà phố',
      villa: 'Biệt thự',
      land: 'Đất nền'
    };
    return typeMap[type] || type;
  };

  return (
    <div className="card overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {property.isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Nổi bật
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price and Type */}
        <div className="flex justify-between items-start mb-3">
          <div className="text-2xl font-bold text-primary-600">
            {formatPrice(property.price)}
          </div>
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
            {getTypeLabel(property.type)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          {property.type !== 'land' && (
            <>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
                <span>{property.bedrooms} phòng ngủ</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <span>{property.bathrooms} phòng tắm</span>
              </div>
            </>
          )}
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{property.area} m²</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{property.features.length - 3} khác
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 btn-primary">
            Xem chi tiết
          </button>
          <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

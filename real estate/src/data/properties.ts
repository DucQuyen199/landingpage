import type { Property } from '../types';

export const properties: Property[] = [
  {
    id: 1,
    title: "Biệt thự cao cấp tại Quận 2",
    price: 15000000000,
    location: "Quận 2, TP.HCM",
    type: "villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 300,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop",
    description: "Biệt thự sang trọng với thiết kế hiện đại, gần trung tâm thành phố",
    features: ["Hồ bơi", "Sân vườn", "Garage", "Hệ thống an ninh"],
    isFeatured: true
  },
  {
    id: 2,
    title: "Căn hộ chung cư cao cấp",
    price: 8500000000,
    location: "Quận 1, TP.HCM",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
    description: "Căn hộ view sông với đầy đủ tiện ích cao cấp đem đến cho bạn cuộc sống thư giãn và thoải mái",
    features: ["View sông", "Gym", "Hồ bơi", "Bảo vệ 24/7"],
    isFeatured: true
  },
  {
    id: 3,
    title: "Nhà phố mặt tiền",
    price: 12000000000,
    location: "Quận 3, TP.HCM",
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
    description: "Nhà phố kinh doanh lý tưởng với mặt tiền rộng",
    features: ["Mặt tiền rộng", "Kinh doanh", "Gần trường học", "Giao thông thuận tiện"],
    isFeatured: false
  },
  {
    id: 4,
    title: "Đất nền dự án",
    price: 2500000000,
    location: "Quận 9, TP.HCM",
    type: "land",
    bedrooms: 0,
    bathrooms: 0,
    area: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Aog5-uVrVUI2Vh33Bz4chNolabNPKh-fjg&s",
    description: "Đất nền trong dự án phát triển, tiềm năng tăng giá cao",
    features: ["Dự án phát triển", "Hạ tầng hoàn thiện", "Pháp lý rõ ràng", "Tiềm năng tăng giá"],
    isFeatured: false
  },
  {
    id: 5,
    title: "Penthouse cao cấp",
    price: 25000000000,
    location: "Quận 7, TP.HCM",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop",
    description: "Penthouse view toàn thành phố với thiết kế độc đáo",
    features: ["View 360°", "Terrace riêng", "Thiết kế độc đáo", "Tiện ích cao cấp"],
    isFeatured: true
  },
  {
    id: 6,
    title: "Biệt thự biển",
    price: 18000000000,
    location: "Vũng Tàu",
    type: "villa",
    bedrooms: 6,
    bathrooms: 5,
    area: 400,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
    description: "Biệt thự nghỉ dưỡng view biển tuyệt đẹp với đầy đủ tiện ích cao cấp",
    features: ["View biển", "Bãi biển riêng", "Hồ bơi vô cực", "Dịch vụ nghỉ dưỡng"],
    isFeatured: true
  }
];

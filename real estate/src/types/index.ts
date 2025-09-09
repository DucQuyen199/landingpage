export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  type: 'apartment' | 'house' | 'villa' | 'land';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface SearchFilters {
  location: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number;
  bathrooms: number;
}

# 🏠 Real Estate Landing Page

A modern, professional real estate landing page built with React, TypeScript, Tailwind CSS, and Framer Motion. Features property listings, search functionality, and responsive design.

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth gradients
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **✨ Smooth Animations** - Beautiful entrance effects using Framer Motion
- **🔍 Property Search** - Advanced search with filters (location, type, price range)
- **🏘️ Property Listings** - Beautiful property cards with detailed information
- **📸 Image Gallery** - Showcase properties with high-quality images
- **⚡ TypeScript** - Type-safe code for better development experience
- **🚀 Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. **Navigate to the project directory**
```bash
cd "real estate"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 📚 Project Structure

```
real estate/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Top navigation bar
│   │   ├── Hero.tsx             # Hero section with search
│   │   ├── SearchSection.tsx    # Advanced property search
│   │   ├── PropertiesSection.tsx # Property grid container
│   │   ├── PropertyCard.tsx     # Individual property card
│   │   ├── ImageGallery.tsx     # Property image viewer
│   │   ├── AboutSection.tsx     # About us section
│   │   └── Footer.tsx           # Footer component
│   ├── data/
│   │   └── properties.ts        # Property data and types
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

## 🎨 Sections Overview

### 1. **Header**
- Modern navigation with logo
- Menu items: Home, Properties, About, Contact
- CTA button
- Responsive mobile menu

### 2. **Hero Section**
- Bold headline: "Find Your Dream Home"
- Search functionality with location input
- Trust indicators (properties, happy clients, awards)
- Gradient background with animations

### 3. **Search Section**
- Property type filter (All, House, Apartment, Villa)
- Location search
- Price range selector
- Advanced filtering options

### 4. **Properties Section**
- Responsive grid layout (1-3 columns based on screen size)
- Property cards featuring:
  - High-quality images
  - Property name and location
  - Price display
  - Key specs (beds, baths, area)
  - "View Details" button
- Hover effects and animations

### 5. **About Section**
- Company information
- Mission statement
- Key statistics
- Team highlights

### 6. **Footer**
- Quick links and navigation
- Contact information
- Social media links
- Newsletter signup
- Copyright information

## 🎨 Color Scheme

- **Primary**: `#3B82F6` (Blue) - Main brand color
- **Secondary**: `#1E293B` (Slate) - Text and headers
- **Accent**: `#10B981` (Green) - Success states
- **Background**: White with subtle gradients

## 🛠️ Technologies Used

- **React 19** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite 7** - Next-generation build tool

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production (TypeScript + Vite)
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🔧 Customization

### Adding New Properties

Edit `src/data/properties.ts`:

```typescript
export const properties: Property[] = [
  {
    id: 1,
    name: 'Your Property Name',
    location: 'City, Country',
    price: 500000,
    image: 'image-url',
    beds: 3,
    baths: 2,
    area: 2000,
    type: 'house'
  },
  // Add more properties...
]
```

### Updating Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1E293B',
      }
    }
  }
}
```

### TypeScript Types

Update type definitions in `src/types/index.ts`:

```typescript
export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  area: number;
  type: 'house' | 'apartment' | 'villa';
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)
- **Large Desktop**: > 1280px (xl)

All components are fully responsive across these breakpoints.

## 🚀 Performance Optimizations

- Lazy loaded components with `whileInView` animations
- Optimized images with proper sizing
- TypeScript for compile-time optimization
- Tailwind CSS purging for minimal bundle size
- Vite for fast HMR and build times

## 🎯 Future Enhancements

- [ ] Virtual property tours (360° view)
- [ ] Property comparison tool
- [ ] Saved favorites/wishlist
- [ ] Advanced map integration
- [ ] Mortgage calculator
- [ ] Agent profiles and contact
- [ ] Property detail pages
- [ ] User authentication
- [ ] Review and rating system

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Quyen Nguyen Duc**
- GitHub: [@ducquyen199](https://github.com/ducquyen199)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For questions or support, please open an issue in the repository.

---

**Made with ❤️ for real estate professionals and home seekers** 🏡

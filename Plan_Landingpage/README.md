# ✈️ Travel Agency Landing Page

A beautiful, modern travel agency landing page built with React and Bootstrap. Features destination showcases, trip booking flow, testimonials, and comprehensive travel services.

## ✨ Features

- **🌍 Beautiful Design** - Stunning travel-themed design with vibrant colors
- **📱 Fully Responsive** - Works perfectly on all devices
- **✨ Smooth Animations** - AOS (Animate On Scroll) library for elegant animations
- **🎨 Bootstrap Integration** - Leverages Bootstrap 5 for responsive layouts
- **🗺️ Destination Showcase** - Beautiful destination cards with images
- **📋 Booking Flow** - Step-by-step trip booking visualization
- **💬 Testimonials** - Customer reviews and experiences
- **🏢 Partner Logos** - Display trusted airline and travel partners

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. **Navigate to the project directory**
```bash
cd Plan_Landingpage
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

## 📚 Project Structure

```
Plan_Landingpage/
├── public/
│   ├── images/
│   │   ├── hero.png             # Hero section image
│   │   ├── destinations/        # Destination images
│   │   │   ├── rome.png
│   │   │   ├── london.png
│   │   │   ├── greece.png
│   │   │   └── europe.png
│   │   ├── testimonials/        # Customer photos
│   │   │   ├── person1.jpg
│   │   │   ├── person2.jpg
│   │   │   ├── person3.jpg
│   │   │   └── person4.jpg
│   │   ├── logos/               # Partner airline logos
│   │   │   ├── axon.png
│   │   │   ├── expedia.png
│   │   │   ├── jetstar.png
│   │   │   ├── qantas.png
│   │   │   └── alitalia.png
│   │   └── ...                  # Other images
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Menu/                # Navigation menu
│   │   │   ├── Menu.jsx
│   │   │   └── Menu.css
│   │   ├── Hero/                # Hero section
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Services/            # Services section
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── Destinations/        # Top destinations
│   │   │   ├── Destinations.jsx
│   │   │   └── Destinations.css
│   │   ├── BookTrip/            # Booking steps
│   │   │   ├── BookTrip.jsx
│   │   │   └── BookTrip.css
│   │   ├── Testimonials/        # Customer reviews
│   │   │   ├── Testimonials.jsx
│   │   │   └── Testimonials.css
│   │   ├── Logos/               # Partner logos
│   │   │   ├── Logos.jsx
│   │   │   └── Logos.css
│   │   ├── Subscribe/           # Newsletter section
│   │   │   ├── Subscribe.jsx
│   │   │   └── Subscribe.css
│   │   ├── Footer/              # Footer
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── icons/               # Icon components
│   │   │   └── ...
│   │   └── index.jsx            # Component exports
│   ├── data.jsx                 # Static data
│   ├── App.js                   # Main app component
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles
├── package.json
└── LICENSE
```

## 🎨 Sections Overview

### 1. **Navigation Menu**
- Logo with tagline "Explore your travel"
- Menu items: Destinations, Hotels, Flights, Bookings
- Sign up / Login buttons
- Responsive hamburger menu for mobile

### 2. **Hero Section**
- Headline: "Travel, enjoy and live a new and full life"
- Subheadline and description
- Play button for video
- Beautiful hero illustration
- Decorative spiral elements

### 3. **Services Section**
- Three service cards:
  - Calculated Weather
  - Best Flights
  - Local Events
- Icons and descriptions for each service

### 4. **Top Destinations**
- Featured destination cards:
  - Rome, Italy
  - London, UK
  - Greece
  - Full Europe
- Price and trip duration
- Beautiful destination images

### 5. **Book a Trip**
- Step-by-step booking process:
  1. Choose Destination
  2. Make Payment
  3. Reach Airport on Selected Date
- Visual progress indicators
- Destination image preview

### 6. **Testimonials**
- Customer reviews and experiences
- Multiple testimonial cards
- Customer photos and names
- Location information

### 7. **Partner Logos**
- Trusted airline partners
- Logo carousel:
  - Axon
  - Expedia
  - Jetstar
  - Qantas
  - Alitalia

### 8. **Newsletter Subscription**
- Email signup form
- Decorative send icon
- Call-to-action message

### 9. **Footer**
- Company logo and tagline
- Social media links (Facebook, Instagram, Twitter)
- Copyright information

## 🎨 Color Scheme

- **Primary**: `#F5967F` (Coral) - Main accent color
- **Secondary**: `#14183E` (Dark Blue) - Text and headers
- **Background**: White with decorative elements
- **Gradients**: Soft orange to pink gradients

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Bootstrap** - Bootstrap components for React
- **Bootstrap 5** - CSS framework
- **AOS** - Animate On Scroll library
- **React Scripts** - Build configuration
- **Web Vitals** - Performance monitoring

## 📝 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from create-react-app (not recommended)
npm run eject
```

## 🔧 Customization

### Adding Destinations

Edit `src/data.jsx`:

```javascript
export const destinations = [
  {
    name: 'City Name',
    country: 'Country',
    price: '$5,42k',
    duration: '10 Days Trip',
    image: '/images/your-image.png'
  },
  // Add more destinations...
]
```

### Updating Services

Edit the Services component in `src/components/Services/Services.jsx`

### Modifying Colors

Update CSS variables in component-specific CSS files or create global variables in `src/index.css`

### Adding Testimonials

Edit testimonial data and add customer photos to `public/images/`

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

All sections use Bootstrap's responsive grid system.

## 🚀 Performance

- Optimized images for web
- Lazy loading with AOS
- Bootstrap's optimized CSS
- React's efficient rendering
- Production build minification

## 🎯 Future Enhancements

- [ ] Real-time flight search
- [ ] Hotel booking integration
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Booking history
- [ ] Interactive destination map
- [ ] Multi-language support
- [ ] Currency converter
- [ ] Weather API integration
- [ ] Customer dashboard

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Quyen Nguyen Duc**
- GitHub: [@ducquyen199](https://github.com/ducquyen199)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support or questions, please open an issue in the repository.

---

**Made with ❤️ for travel enthusiasts and adventurers** ✈️🌍

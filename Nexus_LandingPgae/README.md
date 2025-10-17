# Feat Landing Page

A modern, responsive landing page built with React and Tailwind CSS, featuring beautiful animations and real images from Unsplash.

## Features

- **Modern Design**: Clean, minimal design with beautiful gradients and animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Real Images**: High-quality images from Unsplash for authentic visual appeal
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, and modern tooling

## Sections

1. **Navigation Bar**: Logo, menu items, and CTA button with mobile responsiveness
2. **Hero Section**: Bold headline, description, buttons, and product dashboard image
3. **Features Section**: 6 detailed feature cards with real images and statistics
4. **Testimonials Section**: Customer testimonials with real photos and company logos
5. **Call-to-Action Section**: Strong conversion-focused section with multiple CTAs
6. **Footer**: Comprehensive footer with links, social media, and newsletter signup

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Feat_LandingPage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section with product image
│   ├── Features.jsx    # Features grid with images
│   ├── Testimonials.jsx # Customer testimonials
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    600: '#0284c7', // Main primary color
    // ... more shades
  }
}
```

### Content
- Update text content in each component file
- Replace images by updating the `src` attributes in components
- Modify testimonials in `Testimonials.jsx`
- Update feature details in `Features.jsx`

### Styling
- Use Tailwind utility classes for styling
- Add custom CSS in `index.css` if needed
- Modify animations in Framer Motion components

## Performance

- Optimized images from Unsplash with proper sizing
- Lazy loading for better performance
- Modern build tools for optimal bundle size
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support or questions, please open an issue in the repository.
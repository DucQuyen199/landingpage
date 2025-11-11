# NDQ Games Landing Page

A modern, responsive landing page inspired by NDQ Games design, built with React, Vite, and Tailwind CSS.

## Features

- 🎮 Immersive hero slider with 6 gaming-themed slides
- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 🖼️ Auto-playing carousel with manual controls
- 🎯 Navigation dots (both side and bottom)

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Unsplash** - High-quality images

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd NDQ-games-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
NDQ-games-landing/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   └── Hero.jsx        # Hero slider component
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles with Tailwind
├── public/                 # Static assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies

```

## Customization

### Changing Slides

Edit the `slides` array in `src/components/Hero.jsx`:

```javascript
const slides = [
  {
    title: "Your Title",
    image: "your-image-url",
    subtitle: "Your Subtitle"
  },
  // Add more slides...
];
```

### Adjusting Colors

Modify the Tailwind configuration in `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Navigation Links

Update the navigation links in `src/components/Navbar.jsx` to match your needs.

## License

MIT License - Feel free to use this project for personal or commercial purposes.

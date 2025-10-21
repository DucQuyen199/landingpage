import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ShopByOccasion from './components/ShopByOccasion';
import Lookbook from './components/Lookbook';
import AboutBrand from './components/AboutBrand';
import Blog from './components/Blog';
import YouMayLike from './components/YouMayLike';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ShopByOccasion />
      <Lookbook />
      <AboutBrand />
      <Blog />
      <YouMayLike />
      <Footer />
    </div>
  );
}

export default App;

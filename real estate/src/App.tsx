import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import PropertiesSection from './components/PropertiesSection';
import AboutSection from './components/AboutSection';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SearchSection />
        <PropertiesSection />
        <AboutSection />
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
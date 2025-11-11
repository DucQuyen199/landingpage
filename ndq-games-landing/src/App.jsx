import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Games from './components/Games';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('hero'); // 'hero', 'about', 'games'

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar 
        currentSlide={currentSlide} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {activeSection === 'hero' && (
        <Hero currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      )}
      
      {activeSection === 'about' && <About />}
      
      {activeSection === 'games' && <Games />}
    </div>
  );
}

export default App;

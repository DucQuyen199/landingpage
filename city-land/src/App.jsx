import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectInfo from './components/ProjectInfo'
import ProjectOverview from './components/ProjectOverview'
import Location from './components/Location'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Benefits from './components/Benefits'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProjectInfo />
      <ProjectOverview />
      <Location />
      <Amenities />
      <Gallery />
      <Benefits />
      <News />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

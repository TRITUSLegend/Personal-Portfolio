import React from 'react';
import VantaBackground from './components/VantaBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactIcons from './components/ContactIcons';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* 🌌 Full-page background */}
      <VantaBackground />

      {/* 🌐 Content stacked on top */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactIcons />
        <Footer />
      </div>
    </>
  );
}

export default App;

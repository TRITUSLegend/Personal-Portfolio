import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactIcons from './components/ContactIcons';
import Footer from './components/Footer';

const scanlineStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0,0,0,0.08) 1px, rgba(0,0,0,0.08) 2px)',
  pointerEvents: 'none',
  zIndex: 9999,
  opacity: 0.4,
};

function App() {
  return (
    <>
      <div style={scanlineStyle} />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <ContactIcons />
      <Footer />
    </>
  );
}

export default App;

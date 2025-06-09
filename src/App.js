import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Education />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

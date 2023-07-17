App.js :

import React from 'react';
import './style.css';
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;

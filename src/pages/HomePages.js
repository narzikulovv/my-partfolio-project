import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

const HomePages = () => {
  return (
    <div>
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HomePages;
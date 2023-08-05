import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

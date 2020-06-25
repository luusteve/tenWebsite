import React from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import SlideShow from './components/slideshow'
import Contact from './components/contact'
import Footer from './components/footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <Home>
      </Home>
      <About></About>
      <SlideShow></SlideShow>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}


export default App;

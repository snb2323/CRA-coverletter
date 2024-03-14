import React from 'react';
import './App.css';
import './component/About_me'
import About from './component/About_me';
import Skill from './component/Skill';
import Project from './component/Project';
import Preinteriew from './component/Preinteriew';
import ScrollToTop from './component/Scrolltotop';
import Contact from './component/Contact_me'
import Footer from './component/Footer'


function App() {
  return (

    <>
      <ScrollToTop></ScrollToTop>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Preinteriew></Preinteriew>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;

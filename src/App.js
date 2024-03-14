import React from 'react';
import './App.css';
import About from './component/About_me';
import Skill from './component/Skill';
import Project from './component/Project';
import Preinteriew from './component/Preinteriew';
import Contact from './component/Contact_me'
import Footer from './component/Footer'
import ScrollToTop from './component/Scrolltotop';



function App() {
  return (

    <>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Preinteriew></Preinteriew>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>

    </>
  );
}

export default App;

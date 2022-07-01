import React from 'react';
import './App.css';
import Headers from './Headers'
import Navbar from './Navbar';
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Testimonial from './Testimonial'
import Contact from './Contact'
function App() {
  
  return (
    <div    className="text-gray-400 text-white bg-gray-900 body-font">
        <Headers />
        <About/>
      <Projects/>
      <Skills  />
      <Testimonial />
      <Contact/>
   </div>
   
  );
}

export default App;

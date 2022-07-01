import React from 'react'
import Headers from './Headers'
import home from './home.css'
export const Home = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Tushar.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 fw-bold leading-relaxed">
           Web Developer
          </p>
          <div className=" justify-center">
            <a
              href="#skills"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <button type="button" className="btn fw-bold text-white bg-indigo-500 border-1 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg "  style={{backgroundColor:"skyblue",borderRadius:"80px"}}>Work With Me</button>
            </a>
          
            <a
              href="#projects"
              className="m-auto text-white inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
             <button type="button" className="btn fw-bold text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg"  style={{backgroundColor:"skyblue",borderRadius:"80px"}}>See My Past Work</button>
            </a>
            
            <a
              href="#contact"
              className="m-auto text-white inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white text-lg">
              <button type="button" className="fw-bold text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg"
             style={{backgroundColor:"skyblue",borderRadius:"80px"}}
              >Hire Me</button>
            </a>    
          </div>
          <br/>
        </div>
        <div  className="d-flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            style={{marginLeft:"auto",marginRight:"auto",width:"250px"}}
            className=" object-cover  object-center rounded"
            alt="hero"
            src="./lap.webp"
          />
        </div>
      </div>
    </section>
  );
}
export default Home;

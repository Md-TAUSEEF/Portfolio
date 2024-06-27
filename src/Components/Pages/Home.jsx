import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Corrected import statement
import tauseef from "../Images/tauseef.png";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import Footer from './Footer';
import "./Home.css"
import { NavLink } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const options = {
      strings: ["Programming", "Software Developer", "MERN Stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

    const typedInstance = new Typed(".text", options); // Corrected variable name

    return () => {
      typedInstance.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className='Home_container'>
        <div className='Home_left'>
          <h1>Hello, It's Me</h1>
          <h2>Md Tauseef Ali</h2>
          <h3>I'm a student who is <br/> passionate in <span className="text"></span></h3>
          <div className='svfimage'>
            <RiLinkedinFill />
            <FaGithub />
            <IoLogoInstagram />
            <IoLogoYoutube />
          </div>

          <NavLink to="https://drive.google.com/file/d/1sIg64Vr79No9nrVLhZkVZUaxTVKxv6Gw/view?usp=drive_link" style={{textDecoration:"none"}}><button>Download Resume</button></NavLink>
        </div>
        <div className='Home_right'>
          <img src={tauseef} alt='this is my profile image' />
        </div>

   
      </div>
<Footer/>
    </>
  );
}

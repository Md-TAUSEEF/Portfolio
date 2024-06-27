import React from 'react';
import profile from "../Images/pfg.jpg"
import { NavLink } from 'react-router-dom';
import "./About.css";
import Footer from './Footer';

export default function About() {
  return (
    <>
    <div className='about_container'>
    <div className='about_left'>
      
      <img src={profile} alt='this is my profile image'/>
    </div>

    <div className='about_right'>
      <h1>About <span>Me</span></h1>

      <p>Mern stack Developer with hands-on experience in MERN stack development
       and React.js. Skilled in developing web applications using technologies such
       as React.js, Redux.js, Node.js, and MongoDB. Successfully completed
       projects include an e-commerce website with tracking sales metrics and
       user-friendly functionality, a LinkedIn clone with added features like YouTube
       integration, and a todo list application with Firebase authentication. Seeking a
       Mern stack Developer position to leverage expertise in MERN stack
       development and contribute to the mission of a forward-thinking company.</p>

       <NavLink to="https://drive.google.com/file/d/1sIg64Vr79No9nrVLhZkVZUaxTVKxv6Gw/view?usp=drive_link" style={{textDecoration:"none"}}><button>Download Resume</button></NavLink>
    </div>
    
     
    </div>
    <Footer/>
    </>
  )
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Footer.css'; 

export default function Footer() {
  return (
    <div className='footer_cnt'>
        <div className='footer_left'>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}><span>Home</span></NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}><span>About</span></NavLink>
            <NavLink to="/skill" className={({ isActive }) => (isActive ? 'active' : '')}><span>Skill</span></NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}><span>Contact</span></NavLink>
            <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : '')}><span>Project</span></NavLink>
            <NavLink to="/certificate" className={({ isActive }) => (isActive ? 'active' : '')}><span>Certificate</span></NavLink>
        </div>

        <div className='footer_mid'>
            <p>© 2024 Your Company. All rights reserved.</p>
        </div>

        <div className='footer_right'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:your-email@example.com"><SiGmail /></a>
        </div>
    </div>
  )
}

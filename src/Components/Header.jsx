import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='Header_container'>
      <div className="Header_left">
        Dsk Technology
      </div>
      <div className='Header_Right'>
        <NavLink to="/" activeClassName="active"><span>Home</span></NavLink>
        <NavLink to="/about" activeClassName="active"><span>About</span></NavLink>
        <NavLink to="/skill" activeClassName="active"><span>Skill</span></NavLink>
        <NavLink to="/contact" activeClassName="active"><span>Contact</span></NavLink>
        <NavLink to="/project" activeClassName="active"><span>Project</span></NavLink>
        <NavLink to="/certificate" activeClassName="active"><span>Certificate</span></NavLink>
       

      </div>
    </div>
  );
}

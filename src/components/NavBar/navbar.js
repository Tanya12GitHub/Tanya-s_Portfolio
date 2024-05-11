import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/t.jpg';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
import menu  from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-150} duration={500}  className="desktopMenuListItem">About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-150} duration={500}  className="desktopMenuListItem">Certificates</Link>
        <Link activeClass='active' to='proj' spy={true} smooth={true} offset={-150} duration={500}  className="desktopMenuListItem">Projects</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() =>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});

      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-150} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-150} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Certificates</Link>
        <Link activeClass='active' to='proj' spy={true} smooth={true} offset={-150} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-150} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar

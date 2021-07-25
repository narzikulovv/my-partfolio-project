import React, {useEffect, useState} from 'react';
import {FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaCommentAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll =() =>{
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll/ height) * 100;
    setScrollTop(scrolled);
  };
  useEffect(() =>{
    window.addEventListener("scroll", onScroll);
    return  () => window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav className="navbar px-0">
        
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">Sardor</Link>
        <div className="menu-icon" onClick={handClick}>
          {click ? <FaTimes />  : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}><span className="icon"><FaHome/></span>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}><span className="icon"><FaUserAlt/></span>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}><span className="icon"><FaBriefcase/></span>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}><span className="icon"><FaCommentAlt /></span>Contact</Link>
          </li>
        </ul>
        </div>
        <div className="progressMain">
          <div className="progressMainStyle"
          style={{width:`${Math.abs(scrollTop - 0.4)}%`}}></div>
        </div>
      </nav>
    
    </>
  );
};

export default Navbar;
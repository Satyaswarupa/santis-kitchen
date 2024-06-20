import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Santi's Kitchen</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/menu">About</Link>
          <Link to="/menu">Meal</Link>
          <Link to="/menu">Contact</Link>
        </div>
        <div className="navbar-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </nav>

      {/* mobile view navbar */}

      <nav className="mobile-nav">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <motion.div
          className={`nav-menu ${isOpen ? 'open' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{  duration: 0.1 }}
        >
          <ul>
            <motion.li
               initial={{
                x: "100%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            ><Link to="/" onClick={toggleMenu}>Home</Link></motion.li>

            <motion.li initial={{
                x: "100%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2,
              }}><Link to="/about" onClick={toggleMenu}>About</Link></motion.li>

            <motion.li initial={{
                x: "100%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 3,
              }}><Link to="/contact" onClick={toggleMenu}>Contact</Link></motion.li>
           <div className="navsocial">
           <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
           <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
           </div>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;

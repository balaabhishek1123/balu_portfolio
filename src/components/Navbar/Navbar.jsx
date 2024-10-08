import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleSetActive = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' style={{ width: '150px', height: '120px' }} />
      <ul className="nav-menu">
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={menu === "home" ? "active" : ""}
            onClick={() => handleSetActive("home")}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={menu === "about" ? "active" : ""}
            onClick={() => handleSetActive("about")}
          >
            About Me
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className={menu === "services" ? "active" : ""}
            onClick={() => handleSetActive("services")}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            className={menu === "portfolio" ? "active" : ""}
            onClick={() => handleSetActive("portfolio")}
          >
            Portfolio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={menu === "contact" ? "active" : ""}
            onClick={() => handleSetActive("contact")}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;

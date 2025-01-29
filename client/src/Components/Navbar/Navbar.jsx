/*
File Name: Navbar.jsx
Name: Abdallah Divkar
StudentID: 301302441
Date: 27/9/2024
*/ 
import React, { useRef, useState, useEffect } from "react";
import './Navbar.css';
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {

  //Managing the item selected
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  //Tracks scrolling
  const [scrolled, setScrolled] = useState(false);

  /*JavaScript Functions */
  // Scroll event to change navbar background on scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //Add/Remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  /*HTML Structure */
  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Menu Open" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Menu Close" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Projects</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="underline" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">Connect with Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

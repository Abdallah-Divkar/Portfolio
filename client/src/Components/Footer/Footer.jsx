/*
File Name: Footer.jsx
Name: Abdallah Divkar
StudentID: 301302441
Date: 27/9/2024
*/ 
import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/logo.png"
import user_icon from "../../assets/user_icon.svg"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">

        {/*Logo & Description */}
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>Abdallah Fardin Divkar</p>
            <p>301302441</p>
            <p>adivkar@my.centennialcollege.ca</p>
        </div>
        <div className="footer-top-right">
          {/*Email & Subscribe buttons */}
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy;&nbsp;&nbsp;Copyright: Abdallah Divkar -- 301302441 -- Centennial College -- adivkar@my.centennialcollege.ca</p>
        <div className="footer-bottom-right">
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

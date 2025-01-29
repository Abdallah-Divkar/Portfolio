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
      <hr></hr>
      <div className="footer-top">

        {/*Logo & Description */}
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
        </div>
       <div className="footer-top-right">
            <p>Abdallah Fardin Divkar</p>
            <p>+1(437)-955-5106</p>
            <p>divkerabdallah@gmail.com</p>
        </div>
          {/*Email & Subscribe buttons 
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <button type='submit' className="contact-submit">Subscribe</button>

        </div>*/}
      </div>
      
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy;&nbsp;&nbsp;Copyright: Abdallah Divkar -- divkerabdallah@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer

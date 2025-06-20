/*
File Name: About.jsx
Name: Abdallah Divkar
StudentID: 301302441
Date: 27/9/2024
*/ 
import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from '../../assets/about_profile.jpg'
import resume from "../../assets/resume.pdf"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m an aspiring Software Engineer passionate about building efficient and innovative software solutions. With hands-on experience in Python,
              Java, JavaScript, C#, SQL, and MERN stack development, I enjoy working on projects that blend creativity with problem-solving.
                I’m currently pursuing an Advanced Diploma in Software Engineering Technology, specializing in Artificial Intelligence, which fuels my
                interest in machine learning and data-driven applications.</p>

            <p>I thrive in collaborative, fast-paced environments and follow Agile methodologies to deliver quality code and impactful features.
              Whether it’s developing software for robotics, designing user-friendly interfaces, or exploring AI-driven innovations, 
              I focus on writing clean, maintainable code and creating solutions that make a difference.</p>

            <p>When I’m not coding, I enjoy learning new technologies, contributing to open-source projects, and exploring ways to merge AI with practical applications.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>C#</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Oracle SQL</p><hr style={{width:"65%"}}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import abouttop from "../assets/abouttop.png";
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${abouttop})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Our Technical Drawing lessons for Form 5 students are designed to equip learners with essential skills in creating and interpreting building drawings. From the foundations of a structure to detailed sectional elevations, students will learn how to effectively communicate architectural concepts through precise drawings. The course will cover key topics such as floor plans, roof framing, and elevations, all while emphasizing the importance of accuracy and clarity in construction documentation. Through hands-on practice and theoretical knowledge, students will gain the foundational skills needed for further study in architecture, engineering, or related fields.</p>
      </div>
    </div>
  )
}

export default About;

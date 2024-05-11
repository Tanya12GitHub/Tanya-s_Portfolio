import React from 'react';
import './skills.css';
import WebDeveloper from '../../assets/website-design.png';
import Education from '../../assets/education.png';
import Experience from '../../assets/experience.jpg';

const Skills = () => {
  return (
    <div  className='skill'>
      <section id="skills">
      <span className="skillsTitle">About Me..</span>
      <span className="skillsDesc"> I am a final Year Undergraduate at Pranveer Singh Institute Of Technology, Kanpur<br/> pursuing a Bachelor's Of Technology majoring in Computer Science and Engineering.<br/>I have a strong foundation in HTML, CSS and JavaScript and Python along with  <br/> exposure to frameworklike React.
       Innovative and results-driven Developer with a passion  <br/>for crafting clean , efficient and user-friendly digital solutions.</span> <br/>
      <div className="skillsBars"> 
        <div className="skillBar">
          <img src={WebDeveloper} alt="WebDeveloper" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>An IT professional who creates and maintains web applications and websites. Our responsibilities include designing, creating and maintaining websites.</p><br></br>
            <h2>UI/UX Design</h2>
            <p>A specialized software developer who focuses on creating user interfaces and user experiences for a variety of products, such as websites and mobile apps.</p>
          </div>
        </div>
        <div className="skillBar">
        <img src={Education} alt="Education" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Education</h2>
            <p>B-Tech CSE: 2024 <br/> Pranveer Singh Institute of Technology. <br/> CGPA: 8.5</p><br/>
            <p>Diploma CSE: 2021 <br/> BTE- UP <br/> Percentage: 80%</p>
          </div>
        </div>
        <div className="skillBar">
        <img src={Experience} alt="Experience" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Experience</h2>
            <p>Fresher <br/>Looking for Opportunities in Full Stack Development.</p>
            
          </div>
        </div>
        
        
      </div>
      </section>
      
    </div>
    
    
  )
}

export default Skills;

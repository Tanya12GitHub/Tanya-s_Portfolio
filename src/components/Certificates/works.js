import React from 'react';
import './works.css';
import FreeCodeCamp from '../../assets/freecodecamp.png';
import Hackerrank from '../../assets/HackerRank_logo.png';
import GreatLearning from '../../assets/greatlearnimg.png';


function Works() {
  return (
    <div className="works">
      <section id="works">
      <h2 className="worksTitle">My Certificates..</h2>
      <span className="worksDesc">Here are my some Certificates that I earned during my Academic Journey.</span>
      <div className="worksBars"> 
        <div className="workBar">
          <img src={FreeCodeCamp} alt="FreeCodeCamp" className="workBarImg" />
          <div className="workBarText">
            <h2>Free Code Camp</h2>
            <p>Earn a Certificate of Responsive Web Design.In this certification, I learn how to build webpages that respond to different screen sizes, such as desktops, mobiles, and tablets. I also learn how to create visual designs and debug code.</p><br></br>
            
            <a href="https://www.freecodecamp.org/certification/fccc0bc922c-c1b3-4248-aa87-0cea7676a079/responsive-web-design" className='new'> 🔗 Click Here</a>
          </div>
        </div>
        <div className="workBar">
          <img src={Hackerrank} alt="Hackerrank" className="workBarImg" />
          <div className="workBarText">
            <h2>Hackerrank</h2>
            <p>Successfully Cleared the Assessment for the skill python(basic) offered by Hackerrank.</p><br></br>
            
            <a href="https://www.hackerrank.com/certificates/e58760f27265" className='new'>🔗 Click Here</a>
          </div>
        </div>
        <div className="workBar">
          <img src={GreatLearning} alt="GreatLearning" className="workBarImg" />
          <div className="workBarText">
            <h2>Great Learning</h2>
            <p>Earn a Certificate for Successfully completing a Front End Development- HTML offered by Great Learning Academy .</p><br></br>
            
            <a href="https://olympus.mygreatlearning.com/courses/12761/certificate" className='new'>🔗 Click Here</a>
          </div>
        </div>
      </div>
    </section>

    </div>
    
  );
}

export default Works;

import React from 'react';
import './proj.css';
import Commerce from '../../assets/project1.png';
import QRcodeGenerator from '../../assets/project2.png';
import Music from '../../assets/project3.png';


const Proj = () => {
  return (
    <div className='proj'>
      <section id="proj">
      <span className="projTitle">My Projects..</span>
      <span className="projDesc"> Here are my some projects..</span> <br/>
      <div className="projBars"> 
        <div className="projBar">
          <img src={Commerce} alt="Commerce" className="projBarImg" />
          <div className="projBarText">
            <h2>E-Commerce Website</h2>
            <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet.Through an e-commerce website, a business can process orders, accept payments, manage shipping , and provide customer service.</p><br></br>
            <a href="https://tanya12github.github.io/E-commerce-website-Project/"className='new'> 🔗 Click Here</a>
            
          </div>
        </div>
        <div className="projBar">
          <img src={QRcodeGenerator} alt="QRcodeGenerator" className="projBarImg" />
          <div className="projBarText">
            <h2>QRcodeGenerator</h2>
            <p>A QR code generator is an application that stores any required textual data into a QR code which can be later scanned with a QR code scanner to reveal the stored information.</p><br></br>
            <a href="https://tanya12github.github.io/QR-code-Generator/"className='new'> 🔗 Click Here</a>
            
          </div>
        </div>
        <div className="projBar">
          <img src={Music} alt="Music" className="projBarImg" />
          <div className="projBarText">
            <h2>Music Player</h2>
            <p>Music players allow one to enjoy music in any browser and supports a lot of the features of an offline music player.</p><br></br>
            <a href="https://tanya12github.github.io/A-music-player/"className='new'> 🔗 Click Here</a>
            
          </div>
        </div>
      </div>
    </section>
    </div>
    

  )
}

export default Proj;

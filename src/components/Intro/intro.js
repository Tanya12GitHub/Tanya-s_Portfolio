import React from 'react';
import './intro.css';
import bg from '../../assets/first.png';
import {Link} from 'react-scroll';
import BtnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello Everyone ! ,</span>
        <span className="span introText">My Self <span className="introName">Tanya Singh</span> <br />I am a Full Stack Developer</span>
        <p className="introPara">And here is my Portfolio Website .
        Here you will learn about my journery <br />as a Full Stack Developer.</p>
        <Link><button className="Btn"><img src={BtnImg} alt="Let's Connect" className='BtnImg'/>Let's Connect</button></Link>


      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;


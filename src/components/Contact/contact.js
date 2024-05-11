import React, { useRef } from 'react';
import './contact.css';
import LinkedinIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/githubicon.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagrm.png';
import tanyaresume from '../../assets/tanyaresume.pdf';
import Resume from '../../assets/resume-.jpg';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_x91rn1m', 'template_jdu4gl1', form.current, 
        'rJb8ddaYoKZaPqOk4')
        .then(() => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !');
        },(error) => {
          console.log('FAILED...', error.text);
  });
  };
  return (
    <section className="contactPage">
      <br/><br/><br/>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1><br/>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span><br/><br/><br/><br/><br/>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='Your_name'/>
          <input type="email" className="email" placeholder='Your Email' name='your_email' />
          <textarea className='msg' name="message"  rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button><br/><br/>
          <div className="links">
          <a href="https://www.linkedin.com/in/tanya-singh-2014b022b/"><img src={LinkedinIcon} alt="Linkedin" className="link" /></a>
            <a href="https://github.com/Tanya12GitHub"><img src={GithubIcon } alt="Github" className="link"/></a>
            <a href="https://www.youtube.com/"><img src={YouTubeIcon} alt="YouTube" className="link" /></a>
            <a href="https://instagram.com/"><img src={InstagramIcon} alt="Instagram" className="link" /></a>
            <a href={tanyaresume} download><img src={Resume} className="link" /></a>

          </div>
        </form>

      </div>

    </section>
    
  );
}

export default Contact;

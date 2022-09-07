import React from 'react';
import { AiFillPhone, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (

    <div className="footer-container">
      <ul className="icons">
        <a href="tel:+256772450576"><img src='/images/phone.png' width={50}/></a> 
      </ul>
      <ul className="copyright" style={{color:'black'}}>
        <li>&copy; </li>Andrey Sek<li>
          Design: <a target="_blank" rel="noreferrer" href="https://portfolio-blond-omega.vercel.app/">Andrey Sek</a></li>
      </ul>
  
    </div>


  );
};

export default Footer
import React from 'react';
import { AiFillPhone, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (

    <div className="footer-container">
      <ul className="icons">
        <a href="tel:+256772450576"><img src='/images/phone.png' width={50}/></a>
        <a target="_blank" rel="noreferrer" href="linkedin.com/in/sekitto-andrew-9120351b2"><img src='/images/linkedin.png' width={50}/></a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/SekAndrue"><img src='/images/twitter.png' width={50}/></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/andreysek"><img src='/images/github.png' width={50}/></a>
      </ul>
      <ul className="copyright">
        <li>&copy; </li>Andrey Sek<li>
          Design: <a target="_blank" rel="noreferrer" href="https://portfolio-blond-omega.vercel.app/">Andrey Sek</a></li>
      </ul>
  
    </div>


  );
};

export default Footer
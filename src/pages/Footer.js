import React from 'react';
import { AiFillPhone, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (

    <div className="footer-container">

      <ul className="copyright" style={{ color: 'black' }}>
      
        <li>&copy; </li>Andrey Sek 2022<li><script>document.write(new Date().getFullYear())</script>
        </li>
      </ul>

    </div>


  );
};

export default Footer
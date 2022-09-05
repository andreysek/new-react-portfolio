import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBg from 'particles-bg';



import Carousel from './imageCarousel';
import Popups from './popup';




const Project = () => {

  return (
  
      <div className='about'>
        <ParticlesBg color='#377D71' num={200} type='cobweb' bg={true} />
        <div className='banner-text'>
          
          <TypeAnimation
            cursor={false}
            sequence={[
              'My Projects',
              2000,

            ]}
            wrapper="h2"
            repeat={Infinity}
            style={{ fontSize: '3em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}
          />
          <hr />
          <Popups />
          <Carousel />
         
      
        </div>
        
      </div>
   



  )
}

export default Project;
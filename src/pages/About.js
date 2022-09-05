import React from 'react'
import Fade from "react-reveal";
import { TypeAnimation } from 'react-type-animation';
import ParticlesBg from 'particles-bg';

const About = () => {
    return (
        <div className='about'>
            <ParticlesBg color='#377D71' num={100} type='cobweb' bg={true} />
            <div>
                <div className='banner-text'>
                    <TypeAnimation
                        cursor={false}
                        sequence={[
                            'About Me',
                            2000,
                            'Profile',
                            2000,

                        ]}
                        wrapper="h2"
                        repeat={Infinity}
                        style={{ fontSize: '3em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}
                    />
                    <hr />
                    <p>
                        I'm a web developer with a full stack knowledge, but still exploring other technologies and frameworks to broaden my knowledge and understanding of the tech-world!
                    </p>

                </div>

                <div className='smoothscroll'>
                        <a href="/Project">
                            <img src="/images/next.png" width={100} />
                        </a>
                    </div>

            </div>
        </div>

    )
}

export default About
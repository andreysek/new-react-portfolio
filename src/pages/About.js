import React, { Fragment } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Zoom from 'react-reveal/Zoom';
import { GiEnergyArrow } from 'react-icons/gi';


const About = () => {
    return (
        <Fragment>

            <div className="col py-3 d-flex align-items-center">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
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
                                    style={{ fontSize: '3.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                                />


                                <p className="ls-2 mt-2 slide-in-bottom">I'm a web developer with a full stack knowledge, but still exploring other technologies and frameworks to broaden my knowledge and understanding of the tech-world!</p>
                                <div>
                                    <a href='/Project'><GiEnergyArrow size={50} color='#F7EDDB' /></a>
                                </div>
                            </div>

                        </div>
                        <Zoom right>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/images/About me-cuate.png" alt="..."></img>
                            </div>
                        </Zoom>
                    </div>
                    <hr style={{ color: 'black' }} />
                </div>
               
            </div>


        </Fragment>
    )


}

export default About

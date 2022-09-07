import React,{Fragment} from 'react'
import Fade from "react-reveal";
import { TypeAnimation } from 'react-type-animation';
import ParticlesBg from 'particles-bg';

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

                            <hr />
                            <p className="ls-2 mt-2 slide-in-bottom">I'm a web developer with a full stack knowledge, but still exploring other technologies and frameworks to broaden my knowledge and understanding of the tech-world!</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="/images/About me-cuate.png" alt="..."></img>
                    </div>

                </div>

            </div>

        </div>
    </Fragment>
)

    
}

export default About



// <div className='about'>
//             <ParticlesBg color='#377D71' num={100} type='cobweb' bg={true} />
//             <div>
//                 <div className='banner-text'>
//                     <TypeAnimation
//                         cursor={false}
//                         sequence={[
//                             'About Me',
//                             2000,
//                             'Profile',
//                             2000,

//                         ]}
//                         wrapper="h2"
//                         repeat={Infinity}
//                         style={{ fontSize: '3em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}
//                     />
//                     <hr />
//                     <p>
//                         I'm a web developer with a full stack knowledge, but still exploring other technologies and frameworks to broaden my knowledge and understanding of the tech-world!
//                     </p>

//                 </div>

               
//             </div>
//         </div>
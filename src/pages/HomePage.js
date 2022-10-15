import React, { Fragment } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Fade from 'react-reveal/Fade';
 import { GiLobArrow } from 'react-icons/gi'

function HomePage() {
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
                                        'Sekitto Andrew',
                                        2000,
                                        'Full-Stack Developer',
                                        2000,

                                    ]}
                                    wrapper="h2"
                                    repeat={Infinity}
                                    style={{ fontSize: '3.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                                />

                                <hr />
                                <Fade left>
                                    <p className="ls-2 mt-2 slide-in-bottom">All i do is REACT & NODE with components to bring out the best feel of web development!</p>
                                </Fade>
                                <div style={{alignItems: 'center'}}>
                                    <a href='/About'><GiLobArrow size={50} color= '#ADCF9F' /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="/images/Social load-bro.png" alt="..."></img>
                        </div>

                    </div>

                    <hr style={{ color: 'black' }} />
                </div>



            </div>
        </Fragment>
    )
}

export default HomePage














































// import React from 'react';
// import ParticlesBg from 'particles-bg';
// import Roll from 'react-reveal/Roll';
// import { TypeAnimation } from 'react-type-animation';




// const HomePage = () => {
//     return (
//         <React.Fragment>
//             <div className='wrapper'>
//                 <ParticlesBg color='#377D71' num={200} type='cobweb' bg={true} />

//                 <div className='row banner'>
//                     <div className='banner-text'>
//                         <TypeAnimation
//                             cursor={false}
//                             sequence={[
//                                 'Sekitto Andrew',
//                                 2000,
//                                 'Full-Stack Developer',
//                                 2000,

//                             ]}
//                             wrapper="h2"
//                             repeat={Infinity}
//                             style={{ fontSize: '3.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}


//                         />

//                         <hr />
//                         <Roll>
//                             <h3>All i do is REACT & NODE with components to bring out the best feel of web development!</h3>
//                         </Roll>
//                     </div>
//                     <div className='smoothscroll'>
//                         <a href="/About">
//                             <img src="/images/next.png" width={100} />
//                         </a>
//                     </div>


//                 </div>


//             </div>


//         </React.Fragment>



//     );

// }




// export default HomePage
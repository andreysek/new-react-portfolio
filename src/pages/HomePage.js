import React from 'react';
import ParticlesBg from 'particles-bg';
import Roll from 'react-reveal/Roll';
import { TypeAnimation } from 'react-type-animation';




const HomePage = () => {
    return (
        <React.Fragment>
            <div className='wrapper'>
                <ParticlesBg color='#377D71' num={200} type='cobweb' bg={true} />

                <div className='row banner'>
                    <div className='banner-text'>
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
                        <Roll>
                            <h3>All i do is REACT & NODE with components to bring out the best feel of web development!</h3>
                        </Roll>
                    </div>
                    <div className='smoothscroll'>
                        <a href="/About">
                            <img src="/images/next.png" width={100} />
                        </a>
                    </div>


                </div>


            </div>


        </React.Fragment>



    );

}




export default HomePage
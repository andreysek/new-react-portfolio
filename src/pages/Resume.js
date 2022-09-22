import React, { Fragment } from 'react'
import { SiGithub, SiLinkedin, SiDiscord, SiHackerrank, SiReact, SiJavascript, SiPython, SiCss3, SiHtml5, SiSwift, SiNodemon, SiBootstrap, SiTwitter, SiIos, SiSteam } from 'react-icons/si';
import { FaAws } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation';





function Resume() {
    return (
        <Fragment>
            <div className="col p-4" style={{ color: 'black', }}>
                <div className="p-4 style={{backgroundColor:'#968e8e'}} slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2" >
                                <TypeAnimation
                                    cursor={false}
                                    sequence={[
                                        'SEKITTO ANDREW',
                                        2000,

                                    ]}
                                    wrapper="h2"
                                    repeat={Infinity}
                                    style={{ fontSize: '1.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                                />
                            </h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2"> <TypeAnimation
                                cursor={false}
                                sequence={[
                                    'EXPERIENCE',
                                    2000,

                                ]}
                                wrapper="h2"
                                repeat={Infinity}
                                style={{ fontSize: '1.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                            /></h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-black">Information Technology Specialist</h4>
                                    <h6 className="white-label px-2 py-1">Ongoing from Jul 2013</h6>
                                    <p className="m-0">AppsWorld · Full-time</p>
                                    <p>Kampala, Uganda</p>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-6">

                            <h4 className="ff-jose ls-2"> <TypeAnimation
                                cursor={false}
                                sequence={[
                                    'EDUCATION',
                                    2000,

                                ]}
                                wrapper="h2"
                                repeat={Infinity}
                                style={{ fontSize: '1.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                            /></h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-black">Bachelor in Business Computing</h4>
                                    <h6 className="white-label px-2 py-1">2011 - 2014</h6>
                                    <p className="m-0">Makerere University</p>

                                </li>

                            </ul>

                        </div>
                        <div className="col-md-6">

                            <h4 className="ff-jose ls-2"> <TypeAnimation
                                cursor={false}
                                sequence={[
                                    'SKILLS',
                                    2000,

                                ]}
                                wrapper="h2"
                                repeat={Infinity}
                                style={{ fontSize: '1.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                            /></h4>
                            <ul>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiReact /> React JS </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiJavascript />JavaScript</h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiCss3 /> CSS 3 </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiHtml5 /> HTML 5/Web Scrapping </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiSwift /> SWIFT/AppleGenius </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiNodemon /> NODE JS </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiBootstrap /> BOOTSTRAP </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiPython />PYTHON/FLASK</h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiGithub /> GIT </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><SiIos /> APPLE GENIUS </h4>
                                </li>
                                <li>
                                    <h4 className="white-label px-2 py-1"><FaAws /> AWS Cloud </h4>
                                </li>

                            </ul>

                        </div>

                        <div className="col-md-6">

                            <h4 className="ff-jose ls-2"> <TypeAnimation
                                cursor={false}
                                sequence={[
                                    'LICENSES & CERTIFICATIONS',
                                    2000,

                                ]}
                                wrapper="h2"
                                repeat={Infinity}
                                style={{ fontSize: '1.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                            /></h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-black">
                                    AWS Training and Certification</h4>
                                    <h6 className="white-label px-2 py-1"><a href='https://explore.skillbuilder.aws/learn/course/134/aws-cloud-practitioner-essentials'>AWS Cloud Practitioner Essentials</a></h6>
                                </li>

                                <li>
                                    <h4 className="ff-jose my-1 text-black">The Complete 2022 Web Development BootCamp </h4>
                                    <h6 className="white-label px-2 py-1">Certificate ID</h6>
                                    <p className="m-0"><a href>https://www.udemy.com/certificate/UC-52036532-9bd9-4400-988d-5e074b143cee/</a></p>

                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-black">100 Days of Code: The Complete Python Pro Bootcamp for 2022 -</h4>
                                    <h6 className="white-label px-2 py-1">Certificate ID</h6>
                                    <p className="m-0"><a href>https://www.udemy.com/certificate/UC-52036532-9bd9-4400-988d-5e074b143cee/</a></p>

                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-black">iOS & Swift - The Complete iOS App Development Bootcamp
                                    </h4>

                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-black">
                                        (New) Responsive Web Design Certification</h4>
                                    <h6 className="white-label px-2 py-1"><a href='https://www.freecodecamp.org/learn'>FreeCodeCamp</a></h6>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-black">
                                        JavaScript Algorithms and Data Structures Certification</h4>
                                    <h6 className="white-label px-2 py-1"><a href='https://www.freecodecamp.org/learn'>FreeCodeCamp</a></h6>
                                </li>


                            </ul>

                        </div>
                    </div>

                    <hr></hr>

                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2"> <TypeAnimation
                                cursor={false}
                                sequence={[
                                    'PROFILE',
                                    2000,

                                ]}
                                wrapper="h2"
                                repeat={Infinity}
                                style={{ fontSize: '1.5em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

                            /></h4>
                            <h1>
                                <a href="https://github.com/andreysek" target="/blank" className="text-black text-decoration-none mx-2">
                                    <SiGithub className="zoom-on-hover" />
                                </a>
                                <a href="https://www.linkedin.com/in/sekitto-andrew-9120351b2" target="/blank" className="text-black text-decoration-none mx-2">
                                    <SiLinkedin className="zoom-on-hover" />
                                </a>
                                <a href="https://www.hackerrank.com/andreysek" target="/blank" className="text-black text-decoration-none mx-2">
                                    <SiHackerrank className="zoom-on-hover" />
                                </a>
                                <a href="https://discord.com/channels/@me" target="/blank" className="text-black text-decoration-none mx-2">
                                    <SiDiscord className="zoom-on-hover" />
                                </a>
                                <a href="https://twitter.com/SekAndrue" target="/blank" className="text-black text-decoration-none mx-2">
                                    <SiTwitter className="zoom-on-hover" />
                                </a>
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Resume
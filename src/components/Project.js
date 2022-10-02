import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import {VscOpenPreview} from "react-icons/vsc";

import { TypeAnimation } from 'react-type-animation';

function Project() {
  return (
    <Fragment>
         <hr/>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2"><TypeAnimation
    cursor={false}
    sequence={[
        'My Projects',
        2000,
        '',
        2000,

    ]}
    wrapper="h2"
    repeat={Infinity}
    style={{ fontSize: '1.3em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

/></h2>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="/images/premium.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1" style={{color:'black'}}>E-COMMERCE STORE</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://premium-gadgets.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><VscOpenPreview/> Preview </a>
                                <a href="https://github.com/andreysek/Premium-Gadgets" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><AiFillGithub/> Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="/images/expenditure.png" className="" alt="..." width={180}/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1" style={{color:'black'}}>EXPENSE TRACKER</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://arcane-dawn-47057.herokuapp.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><VscOpenPreview/> Preview</a>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="/images/tania.png" className="" alt="..." width={455}/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1" style={{color:'black'}}>ACTRESS PORTFOLIO</h5>
                            <div className="row d-flex justify-content-center">
                            <a href="https://tania2.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><VscOpenPreview/> Preview</a>
                                <a href="https://github.com/andreysek/tania2" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><AiFillGithub/> Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="/images/crypto.png" className="" alt="..." width={355}/>
                                </div>
                               
                              
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1" style={{color:'black'}}>CRYPTO-APP</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://crypto-gka7bh0j1-andreysek.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><VscOpenPreview/> Preview</a>
                                <a href="https://github.com/andreysek/crypto-app" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><AiFillGithub/> Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="/images/andey.png" className="" alt="..." width={455}/>
                                </div>
                              
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1" style={{color:'black'}}>CLONE TEMPLATE</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://portfolio-blond-omega.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><VscOpenPreview/> Preview</a>
                                <a href="https://github.com/andreysek/portfolio-website" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><AiFillGithub/> Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="/images/family.png" className="d-block w-100" alt="..."/>
                                </div>
                              
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1" style={{color:'black'}}>Landing Page</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://andreysek.github.io/family-hearts/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><VscOpenPreview/> Preview</a>
                                <a href="https://github.com/andreysek/andreysek.github.io" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-black m-1 px-2 py-1 bg-#968e8e rounded" target="_blank"><AiFillGithub/> Code</a>
                            </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Project










































































































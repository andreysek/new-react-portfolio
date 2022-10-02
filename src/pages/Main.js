import React from 'react'
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Resume from "../pages/Resume";

import Project from "../components/Project"
import Contact from '../pages/Contact/Contact';

const Main = () => {
  return (
    <React.Fragment>
        <HomePage />
        <About />
        <Project />
        <Resume />
        <Contact />
    </React.Fragment>
  )
}

export default Main
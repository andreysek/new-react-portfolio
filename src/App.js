import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/NavBar';
import HomePage from "./pages/HomePage"
import About from './pages/About';
import Project from './components/projects/Project';
import Contact from './pages/Contact';

import "./main.css";


function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Project' element={<Project />} />
         
        </Routes>
        <Contact />
      </Router>

    </div>
  );
}

export default App;

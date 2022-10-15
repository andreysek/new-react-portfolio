import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar"
import HomePage from './pages/HomePage';
import About from './pages/About';
import Project from './components/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer';
import "./App.css";


function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        
      <Footer />
      </Router>
    </div>
  );
}

export default App;

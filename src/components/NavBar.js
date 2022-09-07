

import { GrProjects } from "react-icons/gr"
import { AiFillHome } from "react-icons/ai"
import { AiFillContacts } from "react-icons/ai";
import { FcAbout } from "react-icons/fc"
import { GrResume } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="#968e8e" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/"><AiFillHome color="black" size={30}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" color="black"/>
        <Navbar.Collapse id="responsive-navbar-nav" color="black">
          <Nav className="me-auto" color="black">
            <Nav.Link as={Link} to="/About"><SiAboutdotme color="black" size={30}/></Nav.Link>
            <Nav.Link as={Link} to="/Project"><GrProjects color="black" size={30}/></Nav.Link>
            < Nav.Link as={Link} to="/Resume"><GrResume color="black" size={30}/></Nav.Link>

            <Nav.Link as={Link} to="/Contact"><AiFillContacts color="black" size={30}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
export default Navigation;


import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../assets/img/nav-linkedin.svg';
import github from '../assets/img/nav-github.svg';

export const NavComponent = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState('');
  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);  
      } else {
        setScrolled(false);
      }    
    }
    
    window.addEventListener("scroll", onScroll);

    //Removes when component removed from the DOM
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/andrei-iakimov-50167a94/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://github.com/andrei-iakimov"  target="_blank"><img src={github} alt="Github" /></a>
          </div>
          <button className="vvd" onClick={() => {
            document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
          }}><span>Let’s Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import './Navbar2.css';
  

function Menubar() {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" id="menubar">
      <Container>
        <Navbar.Brand className="nav-link" to="/">
            <img class="iitk" src="https://i.postimg.cc/90z57Xsv/IIT-K-logo.jpg" alt="" />
          <img id="ppoc-logo" src="https://i.postimg.cc/bYRs0mWg/ppoc-logo.png" alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-center navaa">
        
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/policyconclave" target="_blank">Policy Conclave</Link>
            <Link className="nav-link" to="/#speakers">Speakers</Link>
            <Link className="nav-link" to="/blog">Articles</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/events">Events</Link>
            <Link className="nav-link" to="/team">Team</Link>
            {/* <Link className="nav-link" to="#gallery">Gallery</Link> */}
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
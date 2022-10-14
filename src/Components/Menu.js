import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Options from './Options';
import Footer from './Footer'


function Menu() {
  return (
    <>
    <Router>
        <Navbar className="navbar navbar-dark bg-dark" expand="lg" fixed='top'>
          <Container>
            <Navbar.Brand href="/home">Kshama</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='justify-content-center ms-5' id="basic-navbar-nav">
              <Nav>
                <Nav.Link className='nav-link navbar-brand ms-5' href="/home">Home</Nav.Link>
                <Nav.Link className='nav-link navbar-brand ms-5' href="/about">About</Nav.Link>
                <Nav.Link className='nav-link navbar-brand ms-5' href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link className='nav-link navbar-brand ms-5' href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
            <Route exact path="/" element={ <Options count={1} />}/>
            <Route exact path="/home" element={ <Options count={1} />}/>
            <Route path="/about" element={ <Options count={2} />}/>
            <Route path="/portfolio" element={ <Options count={3} />}/>
            <Route path="/contact" element={ <Options count={4} />}/>  
        </Routes>
        <Footer />
    </Router>
   
</>
  
  );
}

export default Menu;
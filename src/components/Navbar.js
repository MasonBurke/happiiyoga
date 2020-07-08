import React from 'react'
import  {Nav,Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png"

function Navigation() {
    return (

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="home">
<img src={logo} style={{height:65, width:65, marginRight:25}} />     
Happii Yoga
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="lessons">Lessons</Nav.Link>
      <Nav.Link href="contact">Contact</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}

export default Navigation
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import logo from "../image/done.png"

function Header() {
    return (
        <div>
            <Navbar className='Navbar' style={{backgroundColor:"#41206545"}} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to="/" >
                        <img src={logo} alt="" className='img-fluid' style={{width:"200px"}} /></Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/" style={{textDecoration:"none",fontFamily:"cursive"}} ><b>Home</b></Link></Nav.Link>
                        <Nav.Link ><Link to="/about" style={{textDecoration:"none",fontFamily:"cursive"}} ><b>About</b></Link></Nav.Link>
                        <Nav.Link ><Link to="/portfolio" style={{textDecoration:"none",fontFamily:"cursive"}} ><b>Portfolio</b></Link></Nav.Link>
                        <Nav.Link ><Link to="/contact" style={{textDecoration:"none",fontFamily:"cursive"}} ><b>Contact</b></Link></Nav.Link>
                    
                    </Nav>
                </Container>
            </Navbar>


        </div>
    )
}

export default Header

import React from 'react'
import { Container , Navbar , Nav ,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar bg='dark'  variant='dark' sticky="top" expand="md">
            <Container >
                <Navbar.Brand href="#">
                    <Image className="mx-3"src="https://img.icons8.com/ios-filled/50/000000/portfolio.png" sizes='5'/>
                    MyPortFolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" ></Navbar.Toggle>
                <Navbar.Collapse >
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/ability">Ability</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  
import Home from '../home/Home';
import Contact from '../contact/ContactContent';
import News from '../news/NewsContent';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function NavigationContent() {
    return (
            <Router>
                <div>
                    <Navbar expand="lg" bg="light" variant="light">
                        <Container>
                            <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                    <NavLink to="/news" className="nav-link">News</NavLink>
                                </Nav>
                                <Form className="d-flex nav-form">
                                    <Form.Control type="search" placeholder="Search" className="mr-sm-2"/>
                                    <Button className="search-btn-primary">Go</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
 

                    
                    {/* <hr /> */}
                    {/* 
                    A <Switch> looks through all its children <Route>
                    elements and renders the first one whose path 
                    matches the current URL. Use a <Switch> any time 
                    you have multiple routes, but you want only one 
                    of them to render at a time
                    */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                    </Switch>
                </div>
            </Router>
        
    )
}

export default NavigationContent

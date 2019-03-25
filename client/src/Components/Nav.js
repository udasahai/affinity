import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

 class Header extends React.Component {
    render() {
        return (
        	<div>
				<Navbar bg="light" expand="lg" fixed="top" >
				  <LinkContainer to="/app">
				  <Navbar.Brand>Affinity@UCLA</Navbar.Brand>
				  </LinkContainer>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
		          <Nav className="mr-auto">
		            <LinkContainer to="/app">
		              <Nav.Link>Home</Nav.Link>
		            </LinkContainer>
		            <LinkContainer to="/profile">
		              <Nav.Link>Profile</Nav.Link>
		            </LinkContainer>
				      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				        <NavDropdown.Item href="/app">App</NavDropdown.Item>
				        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				      </NavDropdown>
				    </Nav>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-success">Search</Button>
				    </Form>
				  </Navbar.Collapse>
				</Navbar>
            </div>
        )
    }
}

export default Header
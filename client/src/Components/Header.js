import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Route, Redirect } from 'react-router'
import { conditionalExpression } from "babel-types";
import { SET_DETAILS, setUserDetails } from '../Actions'
import { store } from '../Store'


const Header = (props) => {

	{

		console.log("Rendering Header")
		const firstName = store.getState().firstName;

		let greeting = 'Hello User, Plesae Sign In'

		if (firstName != "") {
			greeting = "Welcome, " + firstName;
		}

		return (
			<div>
				<Navbar bg="light" expand="lg" fixed="top" >
				  <LinkContainer to="/app">
				  <Navbar.Brand>Affinity@UCLA</Navbar.Brand>
				  </LinkContainer>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
		          <Nav className="mr-auto">

					<LinkContainer to={{
						pathname: "/app",
						state: {test: "test"}
					}}>
		              <Nav.Link>Home</Nav.Link>
		            </LinkContainer>

		            <LinkContainer to={{
						pathname: "/profile",
						state: {}
					}}>
		              <Nav.Link>My Profile</Nav.Link>
		            </LinkContainer>
		            
		            <h2> { store.getState().firstName } </h2> 

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

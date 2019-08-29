import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Route, Redirect } from 'react-router'
import { conditionalExpression } from "babel-types";
import * as api from '../api.js';

 class Header extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			userInfo : {}, 
			isClaimed: false,
			profileClicked: false
		}

		this.handleProfileClick = this.handleProfileClick.bind(this)
	}

	handleProfileClick(event){
		// console.log("clicked")
		this.setState({profileClicked: true})
	}

	componentDidMount(){

		this.setState({isClaimed: localStorage.getItem("ISCLAIMED")})
		api.getTargetId(localStorage.getItem("SHIBEDUPERSONTARGETEDID")).then((data) => {

			if (data.body.length > 0) {

				var user = data.body[0]
				user["fullname"] = user.firstName + " " + user.lastName
				user["interests"] = user.researchInterests.split(",")
				this.setState({userInfo: data.body[0]})

			}
		})
	}


    render() {
		if(!this.state.isClaimed && this.state.profileClicked) 
		{
			this.setState({profileClicked: false})
			return ( 
				<Redirect to={{
						pathname: '/create'
					}}/>
	  		) 
		} else {
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
						state: this.state.userInfo
					}} onClick={this.handleProfileClick}>
		              <Nav.Link>My Profile</Nav.Link>
		            </LinkContainer>

				      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				        <NavDropdown.Item href="/app">App</NavDropdown.Item>
				        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				      </NavDropdown> */}
				    </Nav>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-success">Search</Button>
				    </Form>
				  </Navbar.Collapse>
				</Navbar>
            </div>
        ) }
    }
}

export default Header
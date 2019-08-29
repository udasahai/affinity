
import React from "react"
import {Container, Row, Col, Image, Jumbotron, ListGroup,ButtonToolbar, Button} from 'react-bootstrap'
import { Route, Redirect } from 'react-router'
import { conditionalExpression } from "babel-types";
import "./Profile.css"


class Profile extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			userInfo: {
				interests: []
			},
			claimed: localStorage.getItem("ISCLAIMED") == "true",
			editPrivilege: false,
			redirect: false
		}

		this.handleClick = this.handleClick.bind(this)
		this.callApi = this.callApi.bind(this)
		this.redirect = this.redirect.bind(this)
	}

	handleClick(event) { 

		this.callApi()
		
	}

	redirect(event){
		this.setState({redirect: true})
	}

	callApi(){

		var self = this; 
		var str = "" ;
		// var str = 'https://ushare.idre.ucla.edu/ushare/api'; 
		var opts = {
			"userID": self.state.userInfo.userID, 
			"claimedBy": localStorage.getItem("SHIBEDUPERSONTARGETEDID")
		}
	
	
		fetch(str + '/users' , {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(opts)
		  }).then(function(response) {
			return response.json();
		  }).then(function(data) {
			localStorage.setItem("ISCLAIMED", true)
			self.setState({"claimed": true});
			alert("Succesfully Claimed")
		  });
	
	}


	componentDidMount() {
		window.scrollTo(0, 0)
		let userInfo = this.props.location.state;
		this.setState({"userInfo": userInfo})
		// console.log(userInfo)
		this.setState({"claimed": this.state.claimed || userInfo.claimed})

		// console.log(`${userInfo.claimedBy}, ${localStorage.getItem("SHIBEDUPERSONTARGETEDID")}`)
		if (userInfo.claimedBy == localStorage.getItem("SHIBEDUPERSONTARGETEDID")){
			this.setState({editPrivilege: true})
		}
	}

	render(){

		if (this.state.redirect){
			return (
				<Redirect to={{
					pathname: '/create'
				}}/>
			)
		}

		return (

		<div>

			<Container id={"bg-1"} fluid="true">
			<Row>
			<Col>
				<Image src={this.state.userInfo.profilePicture} id="imgContainer" thumbnail="true"  />

					<h1> {this.state.userInfo.fullname} </h1> 
					<h5> {this.state.userInfo.email} </h5>
			</Col> 

			<Col>
				<div> 
				<ButtonToolbar>
					{ this.state.editPrivilege ? 
							<Button variant="primary" size="lg" onClick={this.redirect}>
							Edit
							</Button> : null
					}

					{ !this.state.claimed ? 
						<Button variant="primary" size="lg" onClick={this.handleClick}>
						Claim
						</Button> : null
					}
				</ButtonToolbar>
					</div>
				<div id="jumbo" fluid="true">

				
				  <Container>
				    <h1 style={{textAlign:"center"}}>Research Interests</h1>
				<ul> 
					{this.state.userInfo.interests.map(item => <li> {item} </li>)}
				</ul> 
				  </Container>
				</div>

			</Col>
			</Row> 
			</Container>

			<Container id={"bg-2"} fluid="true">
				<h1> Recent Publications </h1>

<div className="lst"> 
<ListGroup>
  <ListGroup.Item><h5>Title</h5> <h5>HI</h5> </ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
</div> 
				<ol> 
					<li> Paper 1 </li> 
					<li> Paper 2 </li> 
					<li> Paper 3 </li> 
					<li> Paper 4 </li> 
				</ol>

			</Container>

			</div> 

			)
	}

}


export default Profile

import React from "react"
import {Container, Row, Col, Image, Jumbotron, ListGroup} from 'react-bootstrap'
import "./Profile.css"


class Profile extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			userInfo: {
				interests: []
			},
		}
	}


	componentDidMount() {
		window.scrollTo(0, 0)
		let userInfo = this.props.location.state;
		this.setState({"userInfo": userInfo})
	}

	render(){

		return (

		<div>

			<Container id={"bg-1"} fluid="true">
			<Row>
			<Col>
				<Image src={this.state.userInfo.img} id="imgContainer" thumbnail="true"  />

					<h1> {this.state.userInfo.name} </h1> 
					<h5> {this.state.userInfo.email} </h5>
			</Col> 

			<Col>
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
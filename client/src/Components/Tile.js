import React from "react"
import "./Tile.css"
import { Card } from 'react-bootstrap';
import { Route, Redirect } from 'react-router'
import { conditionalExpression } from "babel-types";

class Tile extends React.Component{

	constructor(props){
		super(props);

		this.state = {
		clicked: false
		}
	}


 makeUpperCaseAfterCommas(str) {
    return str.replace(new RegExp("(?:\\b|_)([a-z])", "g"), function($1) {
    return $1.toUpperCase();
});

}

componentDidMount(){
	// console.log(this.props.contact)
	// console.log("Hello")
}

	render(){

	if(this.state.clicked) 
	{
		return ( 
    <Redirect to={{
            pathname: '/profile',
            state: this.props.contact
        }}/>
  ) 
}
else 
	return(
 
	<Card onClick={()=> this.setState({ clicked: true })}>
	 {/*
	 <div className="ppic"> 
	  <Card.Img variant="top" src={this.props.contact.imgUrl}/>
	  </div> 
	  */}
	  <Card.Body>
	    <Card.Title>{this.props.contact.fullname }</Card.Title>
	    <Card.Text>
	      {(this.makeUpperCaseAfterCommas(this.props.contact.researchInterests))}
	    </Card.Text>
	  </Card.Body>
	</Card>
		)
	}
}

export default Tile; 
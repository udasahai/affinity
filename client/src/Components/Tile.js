import React from "react"
import "./Tile.css"
import { Card } from 'react-bootstrap';
import { Route, Redirect } from 'react-router'

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

	render(){

	if(this.state.clicked) 
	{
		return ( 
    <Redirect to={{
            pathname: '/profile',
            state: { img: this.props.contact.imgUrl,
            		 name: this.props.contact.name,
            		 interests: this.props.contact.interests.split(","),
					 email: this.props.contact.email, 
					 userID: this.props.contact.userID
            	   }
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
	    <Card.Title>{this.props.contact.name}</Card.Title>
	    <Card.Text>
	      {(this.makeUpperCaseAfterCommas(this.props.contact.interests))}
	    </Card.Text>
	  </Card.Body>
	</Card>
		)
	}
}

export default Tile; 
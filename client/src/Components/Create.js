import React from "react"
import "./Create.css"
import { Form, Button, Badge } from 'react-bootstrap';
import { Route, Redirect } from 'react-router'
import { conditionalExpression } from "babel-types";
import ImageUploader from 'react-images-upload';
import * as api from '../api.js'

class Create extends React.Component {

	constructor(props){
		super(props);

		this.state = {
            interests : [], 
            interestValue : "",
            firstName: "", 
            lastName: "", 
            email : "",
            pictures: [],
            hasPicture: false
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleInterestChange = this.handleInterestChange.bind(this);
        this.removePill = this.removePill.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onDrop = this.onDrop.bind(this);




    }

    removePill(event){
        var pills = this.state.interests
        var index = pills.indexOf(event.currentTarget.value)

        if (index > -1 ){
            pills.splice(index,1)
        }

        this.setState({interests: pills})
    }
    
    onDrop(picture) {

        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log("Hello World")
    }

    researchPills(){
        var pills = this.state.interests
        return pills.map( pill => 
            (<button type="button" value={pill} onClick={this.removePill}>
            <Badge variant="info">{pill}</Badge>
            </button>)
        )
    }

    handleFirstNameChange(event){
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange(event){
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailChange(event){
        this.setState({
            email: event.target.value
        })
    }
  
    handleInterestChange(event){
        this.setState({interestValue: event.target.value})
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.setState({interestValue: ""})
            var joined = this.state.interests.concat(this.state.interestValue)
            this.setState({
                interests : joined
            })
            
          }   
    }
    

    componentDidMount(){

        console.log("Hellos")
        var claimedBy = localStorage.getItem("SHIBEDUPERSONTARGETEDID")
        var that = this 

        api.getTargetId(claimedBy).then( (data) => {
            console.log(data.body.length)
            if (data.body.length > 0) {
                var userInfo = data.body[0]

                this.setState({firstName: userInfo.firstName})
                that.setState({lastName: userInfo.lastName})
                that.setState({email: userInfo.email})
                that.setState({interests: userInfo.researchInterests.split(",")})
  
                
            }
        })


    }

    render(){
        return(
            <div id="box"> 
                <Form>

                <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />


                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstname" autoComplete="off" value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="Enter First name" />
                    <Form.Text className="text-muted">
                    Include middle name here 
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="lastname" autoComplete="off" value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Enter Last name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" autoComplete="off" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter email address" />
                </Form.Group>

                <div>
               {this.researchPills()}
                </div>

                <Form.Group controlId="formBasicResearch">
                    <Form.Label>Research Interests</Form.Label>
                    <Form.Control type="interests" autoComplete="off" value={this.state.interestValue} onKeyPress={this.handleKeyPress}  onChange={this.handleInterestChange} placeholder="Enter research interests" />
                    <Form.Text className="text-muted">
                    Press Enter after each interest. Click on an interest to erase it. 
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="button">
                    Submit
                </Button>
                </Form>            
            </div>
        )
    }

}
export default Create; 
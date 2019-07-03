
import React from "react"
import {CardColumns,Form, Dropdown} from 'react-bootstrap'
import Tile from "./Tile"
import {tileData} from "../data"
import "./App.css"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	value: '',
    	selections_department: 0,
    	selections_research: "",
    	research_interest : null, 
    	department: null, 
    	response: null,
    	isLoaded: false
};

    this.handleChange = this.handleChange.bind(this);
    this.callApi = this.callApi.bind(this);
    this.department_selection = this.department_selection.bind(this);
    this.change_research = this.change_research.bind(this)
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }

  department_selection(event){
  	this.setState({
  		selections_department: event.target.value
  	})
  }

change_research(event){
    if (event.which == 13 || event.keyCode == 13) {
	    this.setState({
	  		selections_research: event.target.value
	  	})
    }
}

 componentDidMount() {
    this.callApi()
      .then(res => this.setState({isLoaded: true}))
      .catch(err => console.log(err));
  }


callApi(){

	var self = this; 

	return fetch('https://ushare.idre.ucla.edu/ushare/api' + '/users')
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(data) {
	  	if (data.status !== 200) throw Error();
		self.setState({response: (data.body) })
		return fetch('https://ushare.idre.ucla.edu/ushare/api' +'/department')
	  })
	  .then(function(response){
	  	return response.json();
	  })
	  .then(function(data){
	  	if (data.status !== 200) throw Error();
	  	self.setState({department: data.body})
	  	return fetch('https://ushare.idre.ucla.edu/ushare/api' +'research_interest')
	  }).then(function(response){
	  	return response.json()
	  }).then(function(data){
	  	if (data.status !== 200) throw Error();
	  	self.setState({research_interest: data.body})
	  	return true; 
	  })

}


// callApi(){

// 	return fetch('/users').then(function(response){
// 		let res = response.clone().json()
// 		console.log(res);
// 		return res;
// 	})
// };

 // callApi = async () => {
 //    const response = await fetch('/users');
 //    const body = await response.json();
 //    if (response.status !== 200) throw Error(body.message);
 //    return body;
 //  };


 tileComponents(){

 			var value = this.state.value; 
 			var selection = this.state.selections_department;
 			var selections_research = this.state.selections_research;

 			var data = this.state.response;

 			if(selections_research.length > 0){
 				value = value.toLowerCase();
	 			data = data.filter(function(tile){
	 				return tile.researchInterests.toLowerCase().includes(selections_research.toLowerCase())
	 			})
 			}

 			if(value.length >= 3){
 				data = data.filter(function(tile){
	 				return (tile.firstName.toLowerCase().includes(value) || tile.lastName.toLowerCase().includes(value))
	 			})
 			}


 			if(selection > 0){
 				data = data.filter(function(tile){
 					return tile.departmentID == selection
 				})
 			}



 			return data.map(tile => (
			<Tile key={tile.userID}
			contact={{name: tile.firstName + " " + tile.lastName , imgUrl: tile.profilePicture, 
			email: tile.email, interests: tile.researchInterests}}
			/>
    ))}

	render(){

		return(
		<div>
		<div id="search"> 
		<Form id = "form">
		  <Form.Group controlId="formBasicEmail">
		    <Form.Control type="text" onKeyUp={this.handleChange} placeholder="Enter Name" />
		  </Form.Group>
		</Form>
		<div id="drop"> 
			<select value={this.state.selections_department} onChange={this.department_selection}> 
				<option value={0}> All </option>
			  {
			  !this.state.isLoaded ? <option value={0}>Loading</option> :
			  this.state.department.map(dep => <option key={dep.name} value={dep.DepartmentID}>{dep.name}</option>)
			  }
			</select> 

			<input list="interests" onKeyPress={this.change_research}/>
			<datalist id="interests"> 

			    {
			    	!this.state.isLoaded ? <option value={0}/> :
			    	this.state.research_interest.map((item) =>
			      <option key={item.research_interestID} value={item.keyword} />
			    )

			    }
			</datalist>

		</div> 
		</div> 
		<div id="deck">
			<CardColumns>
				{!this.state.isLoaded ? "...Loading" : this.tileComponents()}
			</CardColumns>
		</div> 
		</div>
			)


		// return(
		// 	<div>
		// 	<CardColumns>
		// 	<Tile
		// 	contact={{name: "Udayan Sahai", imgUrl: "http://placekitten.com/300/200", 
		// 	email: "udasahai@gmail.com", interests: "Algs, Networks"}}
		// 	/>
		// 	<Tile
		// 	contact={{name: "Udayan Sahai", imgUrl: "http://placekitten.com/300/200", 
		// 	email: "udasahai@gmail.com", interests: "Algs, Networks"}}
		// 	/>
		// 	<Tile 
		// 	contact={{name: "Udayan Sahai", imgUrl: "../../pic.png", 
		// 	email: "udasahai@gmail.com", interests: "Algs, Networks"}}
		// 	/>
		// 	<Tile 
		// 	contact={{name: "Udayan Sahai", imgUrl: "../../shot.png", 
		// 	email: "udasahai@gmail.com", interests: "Algs, Networks"}}
		// 	/>
		// 	<Tile 
		// 	contact={{name: "Udayan Sahai", imgUrl: "http://placekitten.com/300/200", 
		// 	email: "udasahai@gmail.com", interests: "Algs, Networks"}}
		// 	/>
		// 	</CardColumns>
		// 	</div>
		// 	)
	}
}

export default App
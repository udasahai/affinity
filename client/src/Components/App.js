import React from "react"
import { CardColumns, Form, Dropdown, ModalTitle } from 'react-bootstrap'
import Tile from "./Tile"
import { tileData } from "../data"
import "./App.css"


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selections_department: 0,
            selections_research: "",
            research_interest: null,
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
        this.setState({ value: event.target.value });
    }

    department_selection(event) {
        this.setState({
            selections_department: event.target.value
        })
    }

    change_research(event) {
        if (event.which == 13 || event.keyCode == 13) {
            this.setState({
                selections_research: event.target.value
            })
        }
    }

    getTargetId(id) {
        var str = `/users/targetid?targetid=${id}`;

        return fetch(str).then(
            function(data) {
                return data.json()
            }
        )
    }

    getInfo() {
        var str = "/login"

        return fetch(str).then(
            function(data) {
                return data.json()
            }
        )
    }


    componentDidMount() {


        var that = this;

        this.getInfo().then(function(data) {
                // data["SHIBEDUPERSONTARGETEDID"] = "wilcox"
                localStorage.setItem("SHIBEDUPERSONAFFILIATION", data["SHIBEDUPERSONAFFILIATION"])
                localStorage.setItem("SHIBEDUPERSONPRINCIPALNAME", data["SHIBEDUPERSONPRINCIPALNAME"])
                localStorage.setItem("SHIBEDUPERSONTARGETEDID", data["SHIBEDUPERSONTARGETEDID"])
                localStorage.setItem("SHIBMAIL", data["SHIBMAIL"])
                localStorage.setItem("SHIBGIVENNAME", data["SHIBGIVENNAME"])
                return that.getTargetId(data["SHIBEDUPERSONTARGETEDID"])
            }).then(function(data) {
                // localStorage.setItem
                data.body.length > 0 ? localStorage.setItem("ISCLAIMED", "true") : localStorage.setItem("ISCLAIMED", "false")
                // return that.callApi()
                // localStorage.setItem("ISCLAIMED", "false")
                return that.callApi()
            })
            .then(res => this.setState({ isLoaded: true }))
            .catch(err => console.log(err));
    }


    callApi() {

        var self = this;
        var str = "";
        // var str = 'https://ushare.idre.ucla.edu/ushare/api'; 


        return fetch(str + '/users')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.status !== 200) throw Error();
                self.setState({ response: (data.body) })
                return fetch(str + '/department')
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.status !== 200) throw Error();
                self.setState({ department: data.body })
                return fetch(str + '/research_interest')
            }).then(function(response) {
                return response.json()
            }).then(function(data) {
                if (data.status !== 200) throw Error();
                self.setState({ research_interest: data.body })
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


    tileComponents() {

        var value = this.state.value;
        var selection = this.state.selections_department;
        var selections_research = this.state.selections_research;

        var data = this.state.response;

        if (selections_research.length > 0) {
            value = value.toLowerCase();
            data = data.filter(function(tile) {
                return tile.researchInterests.toLowerCase().includes(selections_research.toLowerCase())
            })
        }

        if (value.length >= 3) {
            data = data.filter(function(tile) {
                return (tile.firstName.toLowerCase().includes(value) || tile.lastName.toLowerCase().includes(value))
            })
        }


        if (selection > 0) {
            data = data.filter(function(tile) {
                return tile.departmentID == selection
            })
        }

        //  console.log(data[0])

        // data = data.map(tile => {

        // 	tile["fullname"] = tile.firstName + " " + tile.lastName
        // 	// tilel[""]
        // 	tile["interests"] = tile.researchInterests.split(",")
        // })

        for (var i = 0; i < data.length; i++) {
            data[i]["fullname"] = data[i].firstName + " " + data[i].lastName
            data[i]["interests"] = data[i].researchInterests.split(",")
        }

        // console.log(data)

        return data.map(tile => (
            <Tile key={tile.userID}
			// contact={{name: tile.firstName + " " + tile.lastName , imgUrl: tile.profilePicture, 
			// email: tile.email, interests: tile.researchInterests, userID: tile.userID, claimed: tile.claimed, data: tile}}
			contact={tile}
			/>
        ))
    }

    render() {

        return (
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

    }
}

export default App

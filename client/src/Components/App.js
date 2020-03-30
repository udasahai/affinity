import React from "react"
import { CardColumns, Form, Dropdown, ModalTitle } from 'react-bootstrap'
import Tile from "./Tile"
import { tileData } from "../data"
import "./App.css"
import { SET_DETAILS, setUserDetails } from '../Actions'
import { store } from '../Store'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            select_department_options: [],
            selections_department: 0,
            selections_research: "",
            research_interest: null,
            department: null,
            users: null,
            selectedOption: null,
            isLoaded: false
        };

        this.onSelect = this.onSelect.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.callApi = this.callApi.bind(this);
        this.department_selection = this.department_selection.bind(this);
        this.change_research = this.change_research.bind(this)
    }


    onSelect = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    department_selection(event) {

        store.dispatch(setUserDetails({
            username: "udasahai",
            firstName: "Udayan",
            lastName: "Sahai",
            email: "udasahai@gmail.com"
        }))

        const selected_index = event.target.options.selectedIndex;
        // console.log(event.target.options[selected_index].getAttribute('data-value'));

        console.log(event.target.value);

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

        let start = async() => {
            await that.callApi();
            // that.setState({ isLoaded: true });
            // console.log("Loaded")

        }

        start().catch(e => console.error(e));
        store.dispatch(setUserDetails({
            username: "udasahai",
            firstName: "pUdayan",
            lastName: "Sahai",
            email: "udasahai@gmail.com"
        }))

        // this.getInfo().then(function(data) {
        //         // data["SHIBEDUPERSONTARGETEDID"] = "wilcox"
        //         localStorage.setItem("SHIBEDUPERSONAFFILIATION", data["SHIBEDUPERSONAFFILIATION"])
        //         localStorage.setItem("SHIBEDUPERSONPRINCIPALNAME", data["SHIBEDUPERSONPRINCIPALNAME"])
        //         localStorage.setItem("SHIBEDUPERSONTARGETEDID", data["SHIBEDUPERSONTARGETEDID"])
        //         localStorage.setItem("SHIBMAIL", data["SHIBMAIL"])
        //         localStorage.setItem("SHIBGIVENNAME", data["SHIBGIVENNAME"])
        //         return that.getTargetId(data["SHIBEDUPERSONTARGETEDID"])
        //     }).then(function(data) {
        //         // localStorage.setItem
        //         data.body.length > 0 ? localStorage.setItem("ISCLAIMED", "true") : localStorage.setItem("ISCLAIMED", "false")
        //         // return that.callApi()
        //         // localStorage.setItem("ISCLAIMED", "false")
        //         return that.callApi()
        //     })
        //     .then(res => this.setState({ isLoaded: true }))
        //     .catch(err => console.log(err));
    }



    callApi() {

        var self = this;
        var str = '';

        let getInfo = async(param) => {
            let response = await fetch(str + param);
            let data = response.json()

            return data;
        }

        // Implement throw err if status code is not "ok" or change it to 200 in the backend too. 

        let load1 = getInfo('/user').then(data => {
            console.log(data.rows);
            self.setState({ users: data.rows })
            return true;
        }).catch(e => console.error(e));

        let load2 = getInfo('/department').then(data => {
            console.log(data.rows);
            self.setState({ department: data.rows })
            return true;
        }).catch(e => console.error(e));

        let load3 = getInfo('/research_interest').then(data => {
            console.log(data.rows);
            self.setState({ research_interest: data.rows })
            return true;
        }).catch(e => console.error(e));


        Promise.all([load1, load2, load3]).then(() => {
            self.setState({ isLoaded: true })
            console.log("Loaded")
        })
        console.log("meow")

    }




    tileComponents() {

        var value = this.state.value;
        var selection = this.state.selections_department;
        var selections_research = this.state.selections_research;
        var data = this.state.users;


        value = value.toLowerCase();

        console.log("dept : " + selection);

        if (selections_research.length > 0) {
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
                // console.log(tile)
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
            <Tile key={tile.userID*100 + tile.departmentID}
			// contact={{name: tile.firstName + " " + tile.lastName , imgUrl: tile.profilePicture, 
			// email: tile.email, interests: tile.researchInterests, userID: tile.userID, claimed: tile.claimed, data: tile}}
			contact={tile}
			/>
        ))
    }

    render() {

        const { selectedOption } = this.state;

        return (
            // <div> 
            //     <h1> Hello World </h1>
            // </div>

            !this.state.isLoaded ? <h1> Loading </h1> :
            <div>
            		<div id="search"> 
            		<Form id = "form">
            		  <Form.Group controlId="formBasicEmail">
            		    <Form.Control type="text" onKeyUp={this.handleChange} placeholder="Enter Name" />
            		  </Form.Group>
            		</Form>
            		<div id="drop"> 
            			<select value={this.state.selections_department} onChange={this.department_selection}> 
            				<option key={0} value={0}> All </option>

            			  {
            			  this.state.department.map(dep => <option key={dep.departmentID} value={dep.departmentID}>{dep.name}</option>
            			  )}
            			
            			</select> 

            			<input list="interests" onKeyPress={this.change_research}/>
            			<datalist id="interests"> 

            			    {
            			    	this.state.research_interest.map((item) =>
            			      <option key={item.research_interestID} value={item.keyword} />
            			    )}
            			    
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

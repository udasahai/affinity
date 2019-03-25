import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from "./Components/App"
import Profile from "./Components/Profile"
import Header from "./Components/Nav"
import Footer from './Components/Footer'


const routing = (
  <Router id="router">
    <div>

     <Header/> 

     <div id="top">
      <Route exact path="/" component={App}/>
      <Route path="/app" component={App}/>
      <Route path="/profile" component={Profile}/>
     </div>

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
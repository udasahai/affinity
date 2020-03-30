import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from "./Components/App"
import Profile from "./Components/Profile"
import Header from "./Components/Header"
import Footer from './Components/Footer'
import Create from './Components/Create';
import { store } from './Store'


const Routing = (props) => {
 return (
  <Router id="router">
        <div>
    
         <Header/> 
    
         <div id="top">
          <Route exact path="/" component={App}/>
          <Route path="/app" component={App}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/create" component={Create}/>
    
         </div>
    
        </div>
      </Router>
 )

}


const render = () => ReactDOM.render(<Routing />, document.getElementById('root'))

render();
store.subscribe(render);

import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Home from './Home';
import History from './History';
import "./App.css";
 

class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <ul>
              <li><NavLink to="/" className="normal" exact>Home</NavLink></li>
              <li><NavLink to="/History" className="normal" exact>History</NavLink></li>
            </ul>

            <hr/>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/History" component={History}/>
            </Switch>
      
          </div>
        </Router>
      );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/home-page/Home'
import Dashboard from './components/dashboard-page/Dashboard';

class App extends Component {

  constructor() {
    super();
    this.state ={
      id: null
    }
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({id: response.id});
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=>(<Home callback={this.responseFacebook} id={this.state.id} />)}/>
          <Route exact path="/dashboard" render={()=>(<Dashboard id={this.state.id} />)}/>
        </div>
      </Router>
    );
  }
}
export default App;

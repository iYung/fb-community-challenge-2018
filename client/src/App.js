import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/home-page/Home'
import Dashboard from './components/dashboard-page/Dashboard';
import Profile from './components/profile-page/Profile';

class App extends Component {

  constructor() {
    super();
    this.state ={
      id: null,
      name: null,
      picture: null
    }
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({id: response.id, name: response.name, picture: response.picture.data.url});
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=>(<Home callback={this.responseFacebook} id={this.state.id} />)}/>
          <Route exact path="/dashboard" render={()=>(<Dashboard id={this.state.id} name={this.state.name} />)}/>
          <Route exact path="/profile" render={()=>(<Profile id={this.state.id} name={this.state.name} />)}/>
        </div>
      </Router>
    );
  }
}
export default App;

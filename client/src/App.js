import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import HomePage from './components/home-page/Home'
import DashboardPage from './components/dashboard-page/Dashboard';
import ProfilePage from './components/profile-page/Profile';
import UserPage from './components/user-page/User'

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
          <Route exact path="/" render={()=>(<HomePage callback={this.responseFacebook} id={this.state.id} />)}/>
          <Route exact path="/dashboard" render={()=>(<DashboardPage id={this.state.id} name={this.state.name} />)}/>
          <Route exact path="/profile" render={()=>(<ProfilePage id={this.state.id} name={this.state.name} profilePic={this.state.picture}/>)}/>
          <Route exact path="/user/:id" render={()=>(<UserPage />)}/>
        </div>
      </Router>
    );
  }
}
export default App;

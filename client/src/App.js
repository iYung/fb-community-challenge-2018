import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/home-page/Home'
import Branch from './components/branch-page/Branch'
import Dashboard from './components/dashboard-page/Dashboard';
import Create from './components/create-page/Create';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/branch/:id" component={Branch}/>
        </div>
      </Router>
    );
  }
}
export default App;

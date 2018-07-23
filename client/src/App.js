import React, { Component } from 'react';
import Axios from 'axios';
import Qs from 'qs';

import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import HomePage from './components/home-page/Home'
import DashboardPage from './components/dashboard-page/Dashboard';
import ProfilePage from './components/profile-page/Profile';
import UserPage from './components/user-page/User'
import AboutPage from './components/about-page/About';

class App extends Component {

  constructor() {
    super();
    this.state ={
      id: null,
      name: null,
      picture: null,
      //from profilejs
      categories: null,
      tags: [],
      username: null,
      bio: null,
      likes: null
    }
  }

  updateProfile = () => {
    var nodes = document.getElementById("categories").childNodes;
    var cats = [];
    nodes.forEach( node => {
      if (node.tagName === "A"){
        cats.push(node.text);
      }
      
    })
    var arr = document.getElementById("tags").value.split(",")
    for(let index = 0; index < arr.length; index++) {
      arr[index] = arr[index].trim()
    }
    Axios.post("/api/user/update", Qs.stringify({
      "id" : this.state.id,
      "username" : document.getElementById("username").value,
      "bio" : document.getElementById("bio").value,
      "categories" : cats,
      "tags": arr
    })).then( res => {
      alert("Profile updated!");
      this.setState({
        "username" : res.data.username,
        "bio": res.data.bio,
        "tags": res.data.tags,
        "categories" : res.data.categories
      })
    })
  }

  responseFacebook = (response) => {
    Axios.post("/api/login", Qs.stringify({
      "id" : response.id,
      "pic": response.picture.data.url,
      "name": response.name
    })).then((res) => {
      this.setState({
        "id": response.id, 
        "name": response.name, 
        "picture": response.picture.data.url,
        "username" : res.data.username,
        "bio": res.data.bio,
        "tags": res.data.tags,
        "categories": res.data.categories,
        "likes": res.data.likes
      })
    })
  }

  render() {

    const optionsProfile = [
      { key: 'Development', text: 'Development', value: 'Development' },
      { key: 'Business', text: 'Business', value: 'Business' },
      { key: 'IT', text: 'IT', value: 'IT' },
      { key: 'Design', text: 'Design', value: 'Design' },
      { key: 'Marketing', text: 'Marketing', value: 'Marketing' },
      { key: 'Photography', text: 'Photography', value: 'Photography' },
      { key: 'Music', text: 'Music', value: 'Music' },
      { key: 'Language', text: 'Language', value: 'Language' },
      { key: 'Other', text: 'Other', value: 'Other' },
    ]

    const optionsDashboard = [
      { key: 'All', text: 'All', value: 'All' },
      { key: 'Development', text: 'Development', value: 'Development' },
      { key: 'Business', text: 'Business', value: 'Business' },
      { key: 'IT', text: 'IT', value: 'IT' },
      { key: 'Design', text: 'Design', value: 'Design' },
      { key: 'Marketing', text: 'Marketing', value: 'Marketing' },
      { key: 'Photography', text: 'Photography', value: 'Photography' },
      { key: 'Music', text: 'Music', value: 'Music' },
      { key: 'Language', text: 'Language', value: 'Language' },
      { key: 'Other', text: 'Other', value: 'Other' },
    ]

    return (
      <Router>
        <div>
          <Route exact path="/" render={()=>(<HomePage callback={this.responseFacebook} id={this.state.id} />)}/>
          <Route exact path="/dashboard" render={()=>(
            <DashboardPage 
              id={this.state.id} 
              name={this.state.name} 
              likes={this.state.likes}
              pic={this.state.picture}
              options = {optionsDashboard}
            />
          )}/>
          <Route exact path="/profile" render={()=>(
            <ProfilePage
              updateProfile={this.updateProfile}
              id={this.state.id} 
              name={this.state.name} 
              profilePic={this.state.picture}
              categories={this.state.categories}
              tags={this.state.tags}
              username={this.state.username}
              bio={this.state.bio}
              options = {optionsProfile}
            />
          )}/>
          <Route exact path="/user/:id" render={()=>(<UserPage 
            id={this.state.id} 
            profileLikes={this.state.likes}
            profilePic={this.state.picture}
            profileCategories={this.state.categories}/>
          )}/>
          <Route exact path="/about" render={()=>(<AboutPage 
            id={this.state.id} />)}/>
        </div>
      </Router>
    );
  }
}
export default App;
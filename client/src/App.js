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
    var arr = document.getElementById("tags").value.split(",")
    for(let index = 0; index < arr.length; index++) {
      arr[index] = arr[index].trim()
    }
    Axios.post("/api/user/update", Qs.stringify({
      "id" : this.state.id,
      "username" : document.getElementById("username").value,
      "bio" : document.getElementById("bio").value,
      "tags": arr
    })).then( res => {
      alert("Profile updated!");
      this.setState({
        "username" : res.data.username,
        "bio": res.data.bio,
        "tags": res.data.tags,
      })
    })
  }

  responseFacebook = (response) => {
    Axios.post("/api/user", Qs.stringify({
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

  tipUser = (id) => {
    if (this.state.likes > 0) {
      Axios.post("/api/user/" + id + "/tip", Qs.stringify({
        "id" : this.state.id
      }))
      this.setState({ "likes": this.state.likes - 1 })
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=>(<HomePage callback={this.responseFacebook} id={this.state.id} />)}/>
          <Route exact path="/dashboard" render={()=>(<DashboardPage id={this.state.id} name={this.state.name} likes={this.state.likes}/>)}/>
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
            />
          )}/>
          <Route exact path="/user/:id" render={()=>(<UserPage 
            id={this.state.id} 
            profileLikes={this.state.likes}
            profilePic={this.state.picture}
            tipFunction={this.tipUser}/>)}/>
          <Route exact path="/about" render={()=>(<AboutPage 
            id={this.state.id} />)}/>
        </div>
      </Router>
    );
  }
}
export default App;
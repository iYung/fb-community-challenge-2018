import React, { Component } from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import Axios from 'axios';
import Qs from 'qs';

import HeaderBar from '../header/Header';
import NavBar from '../nav/Nav';

class UserPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: null,
      categories: null,
      tags: [],
      username: null,
      bio: null,
      students: [],
      id : null
    };
  }

  componentWillMount() {
      let id = window.location.pathname.replace("/user/", "")
      Axios.post("/api/user", Qs.stringify({
        "id" : id
      })).then((res) => {
        this.setState({
          "id" : id,
          "name" : res.data.name,
          "username" : res.data.username,
          "bio": res.data.bio,
          "tags": res.data.tags,
          "students": res.data.students
        })
        console.log(res.data);
      })
  }

  enrollUser() {
    Axios.post("/api/user/" + this.state.id + "/add", Qs.stringify({
      "id" : this.props.id
    }))
  }

  render() {
    return (
      <div className="fullpage">
        <NavBar/>
        <HeaderBar title={this.state.name} content={
            <a href={"https:/m.me/" + this.state.username} target="_blank">
                <Button onClick={() => {this.enrollUser()}} >Messenger</Button>
            </a>
        }/>
        <Container text>
          <Header>
            Tags
          </Header>
          {this.state.tags.join(", ")}
          <Header>
            About me
          </Header>
          {this.state.bio}
        </Container>
      </div>
    );
  }
}

export default UserPage;
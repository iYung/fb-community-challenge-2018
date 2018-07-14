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
      bio: null
    };
  }

  componentWillMount() {
      Axios.post("/api/user", Qs.stringify({
        "id" : window.location.pathname.replace("/user/", "")
      })).then((res) => {
        this.setState({
            "name" : res.data.name,
          "username" : res.data.username,
          "bio": res.data.bio,
          "tags": res.data.tags
        })
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="fullpage">
        <NavBar/>
        <HeaderBar title={this.state.name} content={
            <a href={"https:/m.me/" + this.state.username} target="_blank">
                <Button>Messenger</Button>
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
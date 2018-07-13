import React, { Component } from 'react';
import { Container, Header, Input, Image, Button, Segment } from 'semantic-ui-react';
import Axios from 'axios';
import Qs from 'qs';

import HeaderBar from '../header/header';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: null,
      tags: null,
      username: null
    };
  }

  componentWillMount() {
    Axios.post("/api/user", Qs.stringify({
      "id" : this.props.id
    })).then((res) => {
      this.setState({
        "username" : res.data.username
      })
    })
  }

  updateData() {

    console.log(document.getElementById("username").value);
    Axios.post("/api/user/update", Qs.stringify({
      "id" : this.props.id,
      "username" : document.getElementById("username").value
    })).then( res => {
      console.log(res);
    })
  }

  render() {
    var title = this.props.name;
    return (
      <div className="fullpage">
        <HeaderBar title={
          <div>
          <Image circular avatar size="tiny" src={this.props.profilePic}/> 
          {" " + this.props.name}
          </div>
        }/>
        <Container text>
          <Header>
            Facebook Messenger Username
          </Header>
          <Input id="username" fluid defaultValue={this.state.username}/> 
          <Header>
            Categories
          </Header>
          <Input fluid/>
          <Header>
            Tags
          </Header>
          <Input fluid/>
          <Header>
            Example input field
          </Header>
          <Input fluid placeholder='Input...' />
          <Header>
            Example input field
          </Header>
          <Input fluid placeholder='Input...' />

          <Segment basic>
            <Button onClick={() => {this.updateData()}}>Submit</Button>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import { Container, Header, Input, Image, Button, Segment } from 'semantic-ui-react';

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
    //get data from server
    //populate state
  }

  updateData() {
    //upload user changes to server
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
          <Input fluid placeholder='Input...' />
          <Header>
            Example input field
          </Header>
          <Input fluid placeholder={'Input...'} />
          <Header>
            Example input field
          </Header>
          <Input fluid placeholder='Input...' />
          <Header>
            Example input field
          </Header>
          <Input fluid placeholder='Input...' />
          <Header>
            Example input field
          </Header>
          <Input fluid placeholder='Input...' />

          <Segment basic>
            <Button>Submit</Button>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Profile;

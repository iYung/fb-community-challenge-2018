import React, { Component } from 'react';
import { Container, Header, Input } from 'semantic-ui-react';

import HeaderBar from '../header/header';

class Profile extends Component {

  render() {
    return (
      <div className="fullpage">
        <HeaderBar title={this.props.name} subtitle={this.props.id}/>
        <Container text>
          <Header>
            Example input field
          </Header>
          <Input fluid placeholder='Input...' />
        </Container>
      </div>
    );
  }
}

export default Profile;

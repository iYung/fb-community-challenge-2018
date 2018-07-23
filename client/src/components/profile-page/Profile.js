import React, { Component } from 'react';
import { Container, Header, Input, Button, Segment, TextArea, Form, Dropdown } from 'semantic-ui-react';

import HeaderBar from '../header/Header';

class ProfilePage extends Component {

  render() {

    return (
      <div className="fullpage">
        <HeaderBar loggedin = "true" id={this.props.id} title={
          <div>
          {this.props.name}
          </div>
        }/>
        <Container text>
        <Form>
          <Header>
            Facebook Messenger Username
          </Header>
          <Input id="username" fluid defaultValue={this.props.username}/> 
          <Header>
            Categories
          </Header>
          <Dropdown placeholder='Skills' id="categories" defaultValue={this.props.categories} fluid multiple selection options={this.props.options} />
          <Header>
            Tags
          </Header>
          <Input id="tags" fluid defaultValue={this.props.tags.join(", ")}/>
          <Header>
            Description
          </Header>
          <Input id="description" fluid defaultValue={this.props.description}/> 
          <Header>
            About me
          </Header>
          <TextArea id="bio" fluid defaultValue={this.props.bio}/> 
          <Segment basic>
            <Button onClick={() => {this.props.updateProfile()}}>Submit</Button>
          </Segment>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ProfilePage;

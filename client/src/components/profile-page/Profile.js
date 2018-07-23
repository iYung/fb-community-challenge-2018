import React, { Component } from 'react';
import { Container, Header, Input, Button, Segment, TextArea, Form, Dropdown } from 'semantic-ui-react';

import HeaderBar from '../header/Header';

class ProfilePage extends Component {

  render() {

    const options = [
      { key: 'Development', text: 'Development', value: 'Development' },
      { key: 'Business', text: 'Business', value: 'Business' },
      { key: 'IT', text: 'IT', value: 'IT' },
      { key: 'Design', text: 'Design', value: 'Design' },
      { key: 'Marketing', text: 'Marketing', value: 'Marketing' },
      { key: 'Photography', text: 'Photography', value: 'Photography' },
      { key: 'Music', text: 'Music', value: 'Music' },
      { key: 'Language', text: 'Language', value: 'Language' },
    ]

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
          <Dropdown placeholder='Skills' id="categories" defaultValue={this.props.categories} fluid multiple selection options={options} />
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

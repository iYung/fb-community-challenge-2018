import React, { Component } from 'react';
import { Container, Header, Input, Button, Segment, TextArea, Form, Dropdown } from 'semantic-ui-react';
import HeaderBar from '../header/Header';

class ProfilePage extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="fullpage">
        <HeaderBar loggedin="true" backgroundImage="https://i.imgur.com/nIWbFtw.jpg" backgroundSize="100%" id={this.props.id} title={
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
            Description (25 character limit)
          </Header>
          <Input id="description" fluid defaultValue={this.props.description} maxLength="25"/> 
          <Header>
            About me (Markdown)
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

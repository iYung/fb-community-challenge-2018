import React, { Component } from 'react';
import { Header, Container, Grid, Image, List, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';

import './Home.css';
import HeaderBar from '../header/Header';

class HomePage extends Component {

  render() {
    if (this.props.id != null) {
      return <Redirect to="/dashboard" />
    }
    return (
      <div className="fullpage">
        <HeaderBar id={this.props.id} title="Homepage" subtitle="Smaller text" content={
          <FacebookLogin
          appId="1802578269836677"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.props.callback} />
        } />
        <Container text textAlign="center">
          <Header>
            Popular Skills
          </Header>
          <Grid stackable stretched columns="3">
            <Grid.Column verticalAlign="middle" key="1">
              <Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
            </Grid.Column>
            <Grid.Column key="2">
              <Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
            </Grid.Column>
            <Grid.Column key="3">
              <Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
            </Grid.Column>
          </Grid>
          <Header>
            Top Mentors
          </Header>
          <Grid stackable stretched columns="3">
            <Grid.Column verticalAlign="middle" key="1">
              <Segment textAlign="center"><Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
              Test text
              </Segment>
            </Grid.Column>
            <Grid.Column key="2">
              <Segment textAlign="center"><Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
                Test text
              </Segment>            </Grid.Column>
            <Grid.Column key="3">
              <Segment textAlign="center"><Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
                Test text
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
        <Container text>
          <Header>
            Can I be a tutor?
          </Header>
          Possibly
          <List bulleted>
            <List.Item>Books in your garage</List.Item>
            <List.Item>Youtube ads</List.Item>
          </List>
          <Image centered rounded bordered size="large" src={require("./music-tree.jpg")} />
        </Container>
        <Container text textAlign="center">
          <Header>
            Motivational Blurb
          </Header>
          I love the old Kanye, blah blah blah blah Kanye.
        </Container>
        <Container text verticalAlign="center">
          <Grid stackable verticalAlign='middle' columns="2">
            <Grid.Column key="1">
              <Header>
                TEXT
              </Header>
              TEXT
            </Grid.Column>
            <Grid.Column key="2">
              <Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
            </Grid.Column>
          </Grid>
        </Container>
        <Container text verticalAlign="center">
          <Grid stackable verticalAlign='middle' columns="2">
            <Grid.Column key="1">
              <Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} /> 
            </Grid.Column>
            <Grid.Column key="2">
              <Header>
                TEXT
              </Header>
              TEXT
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default HomePage;

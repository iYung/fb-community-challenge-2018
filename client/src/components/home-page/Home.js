import React, { Component } from 'react';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';

import './Home.css';
import HeaderBar from '../header/header';

class Home extends Component {

  render() {
    /*if (this.props.id != null) {
      return <Redirect to="/dashboard" />
    }*/
    return (
      <div className="fullpage">
        <HeaderBar title="Homepage" subtitle="Smaller text" content={
          <FacebookLogin
          appId="1802578269836677"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.props.callback} />
        } />
        <Container text>
          <Grid stackable stretched columns="2">
            <Grid.Column verticalAlign="middle" key="1">
              <Container text>
                <Header>
                  Words
                </Header>
                Less important words
              </Container>
            </Grid.Column>
            <Grid.Column key="2">
              <Image centered rounded bordered size="medium" src={require("./music-tree.jpg")} />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;

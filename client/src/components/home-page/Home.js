import React, { Component } from 'react';
import { Header, Button, Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './Home.css';
import HeaderBar from '../header/header';

class Home extends Component {

  render() {
    return (
      <div className="fullpage">
        <HeaderBar title="Homepage" subtitle="Smaller text" content={
          <Link to="/dashboard">
          <Button color="grey">
            Click me
          </Button>
          </Link>
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

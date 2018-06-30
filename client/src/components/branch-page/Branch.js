import React, { Component } from 'react';
import { Header, Container, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './branch.css';
import HeaderBar from '../header/header';

class Branch extends Component {
  render() {
    return (
      <div className="fullpage">
        <HeaderBar title="Big text" subtitle="New Branch" content={
          <Link to="/create">
          <Button>
              New branch
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
                <Container text>
                    <Header>
                    Words
                    </Header>
                    Less important words
                </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Branch;
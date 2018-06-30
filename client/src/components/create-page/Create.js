import React, { Component } from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import './create.css';
import HeaderBar from '../header/header';

class Create extends Component {
  render() {
    return (
      <div className="fullpage">
        <HeaderBar title="Big text" subtitle="New Branch" content={
          <Button>
            Upload
          </Button>
        } />
        <Container text>
          <Grid stackable stretched columns="2">
            <Grid.Column verticalAlign="middle" key="1">
            </Grid.Column>
            <Grid.Column key="2">
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Create;
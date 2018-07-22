import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

import HeaderBar from '../header/Header';

class AboutPage extends Component {

  render() {
    return (
      <div className="fullpage">
        <HeaderBar loggedin = "true" id={this.props.id} title="About Us" />
        <Container text textAlign="center">
          <Header>
            Popular Skills
          </Header>
          Blurb
        </Container>
      </div>
    );
  }
}

export default AboutPage;

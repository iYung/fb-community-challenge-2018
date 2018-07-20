import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './header.css';
import NavBar from '../nav/Nav';

class HeaderBar extends Component {

  render() {
    return (
      <div>
        <Container fluid textAlign="center" id="main-header">
          <NavBar id={this.props.id} />
          <Header id="main-title">
            {this.props.title}
          </Header>
          {
            this.props.subtitle ? 
            <p>
              {this.props.subtitle}
            </p>
            :
            ""
          }
          {this.props.content}
        </Container>
      </div>
    );
  }
}

export default HeaderBar;
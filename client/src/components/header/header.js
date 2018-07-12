import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import './header.css';

class HeaderBar extends Component {

  render() {
    return (
        <Segment basic textAlign="center" inverted color="black" id="main-header">
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
        </Segment>
    );
  }
}

export default HeaderBar;
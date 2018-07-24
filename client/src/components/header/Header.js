import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './header.css';
import NavBar from '../nav/Nav';

class HeaderBar extends Component {
  
  render() {
    var style = {};
    style["background-image"] = `url(${this.props.backgroundImage})`;
    if (this.props.backgroundSize != null) {
      style["background-size"] = this.props.backgroundSize;
    } else {
      style["background-position"] = "50% 35%";
    }
    return (
      <div>
        <Container fluid textAlign="center" id="main-header" style={style}>
          <NavBar id={this.props.id} callback={this.props.callback} loggedin={this.props.loggedin}/>
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
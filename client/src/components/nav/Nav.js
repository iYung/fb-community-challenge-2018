import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './nav.css';

class NavBar extends Component {

  render() {
    return (
        <Segment basic borderless textAlign="center" size="huge" style={{marginBottom: 0}}>
            <Menu borderless compact secondary size="huge">
                <Link to="/dashboard">
                    <Menu.Item name='Dashboard' className="white"/>
                </Link>
                <Link to="/profile">
                    <Menu.Item name='Profile' className="white"/>
                </Link>
            </Menu>
        </Segment>
    );
  }
}

export default NavBar;
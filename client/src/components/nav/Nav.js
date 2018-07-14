import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
        <Segment basic inverted style={{marginBottom: 0}}>
            <Menu inverted pointing secondary>
                <Link to="/dashboard">
                    <Menu.Item name='Dashboard' />
                </Link>
                <Link to="/profile">
                    <Menu.Item name='Profile'/>
                </Link>
            </Menu>
        </Segment>
    );
  }
}

export default NavBar;
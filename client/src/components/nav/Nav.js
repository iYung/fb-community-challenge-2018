import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import './nav.css';

class NavBar extends Component {

  render() {
    return (
        <Segment basic borderless textAlign="center" size="huge" style={{marginBottom: 0}}>
            <Menu borderless compact secondary size="huge">
                <Link to="/about">
                    <Menu.Item name='About Us' className="white"/>
                </Link>
                <Link to="/dashboard">
                    <Menu.Item name='Dashboard' className="white"/>
                </Link>
                {
                    this.props.id != null ? 
                    <Link to="/profile">
                        <Menu.Item name='Profile' className="white"/>
                    </Link>
                    :
                    ""
                }
                {
                    this.props.loggedin == null ?
                    <FacebookLogin
                    appId="1802578269836677"
                    fields="name,email,picture"
                    callback={this.props.callback}
                    size="small" />
                    :
                    ""
                }
                
            </Menu>
        </Segment>
    );
  }
}

export default NavBar;
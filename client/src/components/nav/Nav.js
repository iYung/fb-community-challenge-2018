import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import './nav.css';

class NavBar extends Component {

    scroll(){
        var elmnt = document.getElementById("testId");
        elmnt.scrollIntoView(); 
    }

    render() {
    return (
        <Segment basic borderless textAlign="center" size="huge" style={{marginBottom: 0}}>
            <Menu borderless compact secondary size="huge">
                {
                    window.location.pathname === "/" ? 
                    <Menu.Item name='About Us' onClick={() => { this.scroll()}} className="white"/>
                    :
                    ""
                }
                {
                    this.props.id != null ? 
                    <Link to="/dashboard">
                        <Menu.Item name='Dashboard' className="white"/>
                    </Link>
                    :
                    ""
                }
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
                    render={renderProps => (
                            <Menu.Item name='Login' onClick={renderProps.onClick} className="white"/>
                      )}
                    />
                    :
                    ""
                }
                
            </Menu>
        </Segment>
    );
  }
}

export default NavBar;
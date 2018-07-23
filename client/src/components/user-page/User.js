import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Axios from 'axios';
import Qs from 'qs';
import ReactMarkdown from 'react-markdown';

import HeaderBar from '../header/Header';

class UserPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: null,
      categories: null,
      tags: [],
      username: null,
      bio: null,
      students: [],
      id : null
    };
  }

  componentWillMount() {
      let id = window.location.pathname.replace("/user/", "")
      Axios.post("/api/user", Qs.stringify({
        "id" : id
      })).then((res) => {
        this.setState({
          "id" : id,
          "name" : res.data.name,
          "username" : res.data.username,
          "bio": res.data.bio,
          "tags": res.data.tags,
          "students": res.data.students
        })
        console.log(res.data);
      })
  }

  enrollUser() {
    Axios.post("/api/user/" + this.state.id + "/add", Qs.stringify({
      "id" : this.props.id
    }))
  }

  render() {
    return (
      <div className="fullpage">
        <HeaderBar loggedin = "true" id={this.props.id} title={this.state.name} content={
          <div>
          <a href={"https:/m.me/" + this.state.username} target="_blank">
              <input type="image" src="https://i.imgur.com/Pj9XQvJ.png" onClick={() => {this.enrollUser()}} alt="Messenger"/>
          </a>
          {
            this.state.students.indexOf(this.props.id) > -1 ?
            <input type="image" src="https://i.imgur.com/JKSJnXP.png" onClick={() => {this.props.tipFunction(this.state.id)}} alt="Tip?"/>
            :
            ""
          }
          <Header>
            {this.props.profileLikes} Likes
          </Header>
        </div>
        }/>
        <Container text>
          <Header>
            Tags
          </Header>
          {this.state.tags.join(", ")}
          <Header>
            About me
          </Header>
          <ReactMarkdown source={this.state.bio} />
        </Container>
      </div>
    );
  }
}

export default UserPage;
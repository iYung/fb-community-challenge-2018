import React, { Component } from 'react';
import { Container, Image, Grid, Segment, Label } from 'semantic-ui-react';
import Axios from 'axios';
import Qs from 'qs';
import ReactMarkdown from 'react-markdown';

import './user.css';
import HeaderBar from '../header/Header';

class UserPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: null,
      categories: [],
      tags: [],
      username: null,
      pic: null,
      bio: null,
      students: [],
      id : null,
      success: null,
      likes: null,
      description: null
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
          "pic": res.data.pic,
          "students": res.data.students,
          "likes": res.data.likes,
          "categories": res.data.categories,
          "description": res.data.description
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
    if (this.state.name == null) {
      return (
        <div className="fullpage">
        <HeaderBar loggedin = "true" id={this.props.id} title={"User not found!"}>
        </HeaderBar>
        </div>
      )
    }
    return (
      <div className="fullpage">
        <HeaderBar loggedin = "true" id={this.props.id} title={this.state.name} content={
          <Container text>
            <Grid centered columns="9">
              <Grid.Column verticalAlign="bottom" width="2" key="1">
              <a href={"https:/m.me/" + this.state.username} target="_blank">
              <Image size="small" verticalAlign="bottom" src="https://i.imgur.com/Pj9XQvJ.png" onClick={() => {this.enrollUser()}} alt="Messenger"/>
          </a>
              </Grid.Column>
              <Grid.Column key="2" stretched width="5" >
                <Segment className="blue" compact textAlign="center">
                  <Image src={this.state.pic} size='medium'/>
                  <div id="user-desc" className="black">
                    {this.state.description}
                  </div>
                  {this.state.likes} likes
                </Segment>
              </Grid.Column>
              <Grid.Column  verticalAlign="bottom" key="3" width="2" >
              {
            this.state.students.indexOf(this.props.id) > -1 ?
            <Image size="small" src="https://i.imgur.com/uPaZ35a.png" onClick={() => {this.props.tipFunction(this.state.id)}} alt="Tip?"/>
            :
            ""
          }
              </Grid.Column>
            </Grid>
        </Container>
        }/>
        <Container text>
          <ReactMarkdown source={this.state.bio} />
          {this.state.categories.join(", ")}
          {
            this.state.tags.map( tag =>
              <Label color="red">{tag}</Label>
            )
          }
        </Container>
      </div>
    );
  }
}

export default UserPage;
import React, { Component } from 'react';
import { Header, Container, Grid, Image, List, Segment, Label } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';

import './Home.css';
import HeaderBar from '../header/Header';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        users: []
    }
  }
  
  componentWillMount(){
    Axios.get("/api/user").then((res) => {
        this.setState({
            users: res.data
        })
        console.log(res.data);
    })
}

  render() {
    if (this.props.id != null) {
      return <Redirect to="/dashboard" />
    }
    return (
      <div className="fullpage">
        <HeaderBar backgroundImage="https://i.imgur.com/PzGMarm.jpg" id={this.props.id} title="Leach" subtitle="A platform to learn and teach" callback={this.props.callback} />
        <div id="container">
        <Container text textAlign="center">
          <Header>
            Popular Skills
          </Header>
          <br/>
          <Grid stackable stretched columns="3">
            <Grid.Column verticalAlign="middle" key="1">
              <Segment textAlign="center"><Image centered rounded bordered size="huge" src="https://i.imgur.com/ASSYHYr.jpg" />
              Language
              </Segment></Grid.Column>
            <Grid.Column key="2">
              <Segment textAlign="center"><Image centered rounded bordered size="medium" src={"https://i.imgur.com/HcRCdo8.jpg"} />
              Development
              </Segment></Grid.Column>
            <Grid.Column key="3">
              <Segment textAlign="center"><Image centered rounded bordered size="medium" src={"https://i.imgur.com/krVYtlH.jpg"} />
              Music
              </Segment></Grid.Column>
          </Grid>
          <br/>
          <br/>
          <Header>
            Top Mentors
          </Header>
          <br/>
          <SearchResults data={this.state.users}/>
          <br/>
          <br/>
          <br/>
        </Container>
        <br/>
        <div className="leach">
          <br/>
        <Container text textAlign="center" >
          <Header>
            Leach®: Learn + Teach 
          </Header>
          <Label className="text-label">
          <br/>
          Leach is a global marketplace for learning and teaching online where students are mastering new skills and achieving their goals by learning from courses taught by expert instructors.
          <br/>
          <br/>
          </Label>
        </Container>
          </div>
          <div className="bottom-section">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Image centered rounded bordered size="large" src={"https://i.imgur.com/cfeskRb.jpg"} />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Container text verticalAlign="left">
            <Grid stackable verticalAlign='middle' columns="2">
              <Grid.Column key="1">
                <Header id="testId">
                  How we work
                </Header>
                <Label className="text-label">
                  Everyone is talented in something! Share your expertise and knowledge with others who desire to learn. Or if you just want to learn something new, find a sensei to get yourself to where you want to be!
                </Label >

              </Grid.Column>
              <Grid.Column key="2">
                <Image centered rounded bordered size="medium" src={"https://i.imgur.com/hmbKhXD.jpg"} />
              </Grid.Column>
            </Grid>
          </Container>
            <br/>
            <br/>
            <br/>
            
            <br/>
            <br/>
            <br/>
          <Container text verticalAlign="center">
            <Grid stackable verticalAlign='middle' columns="2">
              <Grid.Column key="1">
                <Image centered rounded bordered size="medium" src={"https://i.imgur.com/2FuKSms.jpg"} /> 
              </Grid.Column>
              <Grid.Column key="2">
                <Header>
                  Meet people with similar interests
                </Header>
                <Label className="text-label">
                  Regardless of your prior experience level, you can find and connect with people who are experts in the field you wish to learn!  
                </Label >
              </Grid.Column>
            </Grid>
          </Container>

          <br/>
          <br/>
          <br/>
          <br/>

          <Container text textAlign="center">
            <Header>
              What you need to be a tutor
            </Header>  

            <Label textAlign="left" className="text-label">

            <br/>
            These are all that you need to become a successful mentor:
            <br/>
            <List textAlign="left" bulleted>
              <List.Item   >Passion and experience in the category of your choosing</List.Item>
              <List.Item  left aligned>Excellent communication skills to transfer your knowledge</List.Item>
              <List.Item left aligned>Availability to help your students</List.Item>
            </List>

            <br/>
            </Label>
          </Container>
        </div>
        </div>
        <br/>
      </div>
    );
  }
}

class SearchResults extends Component {

  render() {
      var results = this.props.data;
      var display = [];
      
      if (results.length > 3) {
        display.push(results.slice(0, 3));
      } else {
        display.push(results);
      }

      return (
          <div>
              {
                  display.map( row => 
                      <Grid centered stackable stretched columns="3">
                      {
                          row.map( col => 
                              <Grid.Column stretched textAlign="center">
                                  <Segment textAlign="center">
                                          <Image centered rounded bordered size="tiny" src={col.pic} />
                                          <b>{col.name}</b>
                                      <div>
                                      {col.description}
                                      </div>
                                  </Segment>
                              </Grid.Column>
                          )
                      }
                      </Grid>
                  )
              }
          </div>
      );
  }
}

export default HomePage;

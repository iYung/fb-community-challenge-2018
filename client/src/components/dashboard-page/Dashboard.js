import React, { Component } from 'react';
import { Container, Grid, Segment, Input, Image, Select, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import './dashboard.css';
import HeaderBar from '../header/Header';

class DashboardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResultText: "Top Mentors",
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

    search = () => {
        var target = document.getElementById("search").value;
        var category = document.getElementById("categories").childNodes[0].innerText;
        console.log(category)
        Axios.get("/api/user/search/" + category + "/" + target).then((res) => {
            this.setState({
                users: res.data,
                searchResultText: `Top mentors for '${target}' in ${category}`
            })
        })
    }

    handleKeyPress = (e) => {
        //13 is code for enter key
        if (e.charCode === 13) {
          // Prevent the default action to stop scrolling when space is pressed
          e.preventDefault()
          this.search()
        }
      }

    render() {
        return (
            <div className="fullpage">
                <HeaderBar 
                    loggedin="true" 
                    backgroundImage="https://i.imgur.com/3v3PqZj.jpg" 
                    id={this.props.id} title="Discover a New Skill" 
                    content={
                        <Container text>
                            <br/>
                            <Input id="search" type='text' fluid placeholder='Search...' onKeyPress= {this.handleKeyPress} action>
                                <Select id="categories" options={this.props.options} defaultValue='All' />
                                <input />
                                <Button type='submit' onClick={this.search} color='blue'>Search</Button>
                            </Input>
                        </Container>
                }/>
                <Container text>
                    <Header textAlign="center">
                        {this.state.searchResultText}
                    </Header>
                    <SearchResults enrollUser={this.props.enrollUser} pic={this.props.pic} data={this.state.users}/>
                </Container>
            </div>
        );
    }
}

class SearchResults extends Component {

    render() {
        var results = this.props.data;
        var display = [];
        while (results.length > 0){
            if (results.length > 2) {
                display.push(results.slice(0,3));
                results = results.slice(3);
            } else if (results.length > 1) {
                display.push(results.slice(0,2));
                results = results.slice(2);
            } else {
                display.push(results.slice(0,1));
                results = results.slice(1);
            }
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
                                        <Link to={"/user/" + col.id} >
                                            <Image centered rounded bordered size="tiny" src={col.pic} />
                                            <b>{col.name}</b>
                                        </Link>
                                        <div>
                                        {col.description}
                                        </div>
                                        <Grid stretched className="bottom" columns="2">
                                            <Grid.Column stretched>
                                                <a href={"https:/m.me/" + col.username} target="_blank">
                                                    <Image floated="left" size="mini" src="https://i.imgur.com/Pj9XQvJ.png" onClick={() => {this.props.enrollUser(col.id)}}/>
                                                </a>
                                            </Grid.Column>
                                            <Grid.Column textAlign="right" verticalAlign="bottom" stretched>
                                                {col.likes} likes
                                            </Grid.Column>
                                        </Grid>
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
export default DashboardPage;
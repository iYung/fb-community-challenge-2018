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
        Axios.get("/api/user/search/" + target).then((res) => {
            this.setState({
                users: res.data,
                searchResultText: `Top mentors for ${target}`
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
        const options = [
            { key: 'all categories', text: 'All Categories', value: 'all categories' },
            { key: 'languages', text: 'Languages', value: 'languages' },
            { key: 'technology', text: 'Technology', value: 'technology' },
            { key: 'cooking', text: 'Cooking', value: 'cooking' },
          ]
        return (
            <div className="fullpage">
                <HeaderBar loggedin="true" id={this.props.id} title="Dashboard" subtitle={"Logged in as " + this.props.name + ". You have " + this.props.likes + " units."} content={
                    <Container text>
                        <Input id="search" type='text' fluid placeholder='Search...' onKeyPress= {this.handleKeyPress} action>
                            <Select options={options} defaultValue='all categories' />
                            <input />
                            <Button type='submit' onClick={this.search} color='blue'>Search</Button>
                        </Input>
                    </Container>
                }/>
                <Container text>
                    <Header textAlign="center">
                        {this.state.searchResultText}
                    </Header>
                    <SearchResults pic={this.props.pic} data={this.state.users}/>
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
                                <Grid.Column textAlign="center">
                                    <Segment textAlign="center">
                                        <Link to={"/user/" + col.id} >
                                            <Image centered rounded bordered size="small" src={col.pic} />
                                            {col.name}
                                        </Link>
                                        {col.description}
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
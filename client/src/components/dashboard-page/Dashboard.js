import React, { Component } from 'react';
import { Container, Table, Input, Image, Select, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import './dashboard.css';
import HeaderBar from '../header/Header';

class DashboardPage extends Component {

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

    search = () => {
        Axios.get("/api/user/search/" + document.getElementById("search").value).then((res) => {
            this.setState({
                users: res.data
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
                <HeaderBar loggedin = "true" id={this.props.id} title="Dashboard" subtitle={"Logged in as " + this.props.name + ". You have " + this.props.likes + " units."} content={
                    <Container text>
                        <Input id="search" type='text' fluid placeholder='Search...' onKeyPress= {this.handleKeyPress} action>
                            <Select options={options} defaultValue='all categories' />
                            <input />
                            <Button type='submit' onClick={this.search} color='blue'>Search</Button>
                        </Input>
                    </Container>
                }/>
                <Container text>
                    <SearchResults data={this.state.users}/>
                </Container>
            </div>
        );
    }
}

class SearchResults extends Component {

    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Rating</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.props.data.map( user => 
                            <Table.Row>
                                <Table.Cell collapsing><Link to={"/user/" + user.id}><Image size="mini" rounded centered src={user.pic} /></Link></Table.Cell>
                                <Table.Cell><Link to={"/user/" + user.id}>{user.name}</Link></Table.Cell>
                                <Table.Cell>{user.likes}</Table.Cell>
                            </Table.Row> 
                        )
                    }                
                </Table.Body>
                <Table.Footer>
                </Table.Footer>
            </Table>
        );
    }
}
export default DashboardPage;
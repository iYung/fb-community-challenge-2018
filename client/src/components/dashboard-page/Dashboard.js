import React, { Component } from 'react';
import { Header, Container, Table, Input, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import './dashboard.css';
import HeaderBar from '../header/Header';
import NavBar from '../nav/Nav';

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

    render() {
        return (
            <div className="fullpage">
                <NavBar/>
                <HeaderBar title="Dashboard" subtitle={"Logged in as " + this.props.name} content={
                    <Link to="/profile">
                        <Button>
                            Edit your profile
                        </Button>
                    </Link>
                }/>
                <Container text>
                    <Header>
                        Search
                    </Header>
                    <Input id="search" action={{ color: 'blue', labelPosition: 'right', icon: 'search', content: 'Search', onClick: this.search }} fluid placeholder='Search...' />
                    <Header>
                        People
                    </Header>
                    <DummyTable data={this.state.users}/>
                </Container>
            </div>
        );
    }
}

class DummyTable extends Component {

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
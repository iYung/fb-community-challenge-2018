import React, { Component } from 'react';
import { Header, Container, Table, Input, Button } from 'semantic-ui-react';
import './dashboard.css';
import HeaderBar from '../header/header';

class Dashboard extends Component {
  render() {
    return (
        <div className="fullpage">
            <HeaderBar title="Dashboard" subtitle={"Logged in as " + this.props.id} content={
                <Button>
                    Edit your profile.
                </Button>
            }/>
            <Container text>
                <Header>
                    Search
                </Header>
                <Input fluid placeholder='Search...' />
                <Header>
                    People
                </Header>
                <DummyTable />
            </Container>
        </div>
    );
  }
}

class DummyTable extends Component {

    goToBranch(){
        window.location.replace('/branch/1');
    }
    
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row onClick={() => this.goToBranch()}>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Footer>
                </Table.Footer>
            </Table>
        );
    }
}

export default Dashboard;
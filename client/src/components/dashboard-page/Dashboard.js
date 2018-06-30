import React, { Component } from 'react';
import { Header, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './dashboard.css';
import HeaderBar from '../header/header';

class Dashboard extends Component {
  render() {
    return (
        <div className="fullpage">
            <HeaderBar title="Big text" content={
                <Link to="/create">
                    <Button>
                    New branch
                    </Button>
                </Link>
        } />
        <Container text>
            <Header>
                New branches
            </Header>
            <DummyTable />
            <Header>
                Your branches
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
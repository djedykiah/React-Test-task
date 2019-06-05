import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/main.sass';
import User from './User';

export default class Users extends Component {
  state = {
    users: [],
    links: {}
  };

  componentDidMount() {
    this.getUsers();   
  } 


  getUsers = () => {
    fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',  
    )
      .then(response => response.json())
      .then((response) => {
        this.setState({ users: response.users, links: response.links });
      }) 


  };  

  getNextUsers = () => {
    fetch(
      this.state.links.next_url,
    ) 
    .then(response => response.json()) 
    .then((response) => {
      const newUsers = response.users; 
        this.setState(({ users }) => {
          const plusUsers = [
            ...users,
            ...newUsers,
          ] 

          return {
            users: plusUsers, 
            links: response.links
          };
        });
    }) 
  }


  render() {


    const buttonVisibility = this.state.links.next_url === null ? 'hidden' : 'visible';

    return (
      <div className="users">
        <h1>Our cheerful users</h1>
        <p className="under-title">Attention! Sorting users by registration date</p>
        <Container>
          <Row>
            {this.state.users.map(function (item, index) {
              return (
                <Col lg="4">
                  <User key={item.id} photo={item.photo} name={item.name} position={item.position} email={item.email} phone={item.phone} />
                </Col>
              );
            })}
          </Row>
          <button type="button" onClick={ this.getNextUsers } className={`btn btn-more ${buttonVisibility}`}>
            Show more
          </button>
        </Container>
      </div>
    );
  }
}

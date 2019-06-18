import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import User from './User';
import { USERS_LIST } from '../constants';
import getUrl from '../helpers/getUrl';

export default class Users extends Component {
  state = {
    users: [],
    links: {},
  };

  componentDidMount() {
    this.getUsers();
  }


  getUsers = () => {
    getUrl(USERS_LIST)
      .then(({ users, links }) => {
        this.setState({ users, links });
      });
  }


  getNextUsers = () => {
    const { next_url: nextUsers } = this.state.links;
    getUrl(nextUsers)
      .then((response) => {
        this.setState(({ users }) => ({
          users: [
            ...users,
            ...response.users,
          ],
          links: response.links,
        }));
      });
  }


  render() {
    const { next_url: nextUrl } = this.state.links;
    const { users } = this.state;
    const buttonVisibility = nextUrl ? 'visible' : 'hidden';

    return (
      <div className="users">
        <h1>Our cheerful users</h1>
        <p className="under-title">Attention! Sorting users by registration date</p>
        <Container>
          <Row>
            {users.map((item) => {
              const {
                id,
                photo,
                name,
                position,
                email,
                phone,
              } = item;
              return (
                <Col lg="4" key={id}>
                  <User
                    photo={photo}
                    name={name}
                    position={position}
                    email={email}
                    phone={phone}
                  />
                </Col>
              );
            })}
          </Row>
          <button type="button" onClick={this.getNextUsers} className={`btn btn-more ${buttonVisibility}`}>
            Show more
          </button>
        </Container>
      </div>
    );
  }
}

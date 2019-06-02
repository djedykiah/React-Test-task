import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/main.sass";
import User from "./User";

export default class Users extends Component {
  state = {
    users: []
  };

  getUsers = () => {
    fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=3&count=6"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response.users });
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {

    const styles = {
      p: {
        textAlign: "center",
        marginBottom: 60
      },
      btn: {
        display: "block"
      }
    };
    return (
      <div className="users">
        <h1>Our cheerful users</h1>
        <p style={styles.p}>Attention! Sorting users by registration date</p>
        <Container>
          <Row>
            {this.state.users.map(function(item, index) {
              return (
                <Col lg="4">
                  <div className="user" key={item.id}>
                    <div className="user_avatar">
                      <img src={item.photo} alt="avatar" />
                    </div>
                    <h3>{item.name}</h3>
                    <div className="user_info"> 
                      <p className="user_position">{item.position}</p> 
                      <p className="user_mail">{item.email}</p> 
                      <p className="user_phone">{item.phone}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <button type="button" className="btn" style={styles.btn}>
            Show more
          </button>
        </Container>
      </div>
    );
  }
}

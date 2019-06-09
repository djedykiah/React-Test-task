import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { API } from '../constants';
import getUrl from '../helpers/getUrl';

export default class Register extends Component {
  state = {
    positions: [],
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: '',
    token: '',
  };

  componentDidMount() {
    this.getPositions();
  }

  getPositions = () => {
    getUrl(`${API}positions`).then((response) => {
      this.setState({ positions: response.positions });
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      position,
      token,
    } = this.state;

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('position_id', position);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', fileField.files[0]);

    fetch(`${API}token`)
      .then(res => res.json())
      .then(response => this.setState({ token: response.token }));

    fetch(`${API}users`, {
      method: 'POST',
      body: formData,
      headers: {
        Token: token,
      },
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log('success');
        } else {
          console.log('wrong');
        }
      })
      .catch((error) => {
        console.log('error');
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const {
      positions,
      name,
      photo,
      email,
      phone,
    } = this.state;
    return (
      <div className="register">
        <h1>Register to get work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          dolore?
        </p>
        <form onSubmit={this.onSubmit}>
          <Container className="register-container">
            <Row>
              <Col lg="4">
                <label htmlFor="name" className="name-label">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={this.onChange}
                  />
                </label>
              </Col>
              <Col lg="4">
                <label htmlFor="email" className="email-label">
                  <input
                    type="text"
                    id="email"
                    placeholder="Your email"
                    value={email}
                    onChange={this.onChange}
                  />
                </label>
              </Col>
              <Col lg="4">
                <label htmlFor="phone" className="phone-label">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your phone"
                    value={phone}
                    onChange={this.onChange}
                  />
                </label>
              </Col>
              <Col lg="6">
                <select name="positions" id="position" onChange={this.onChange}>
                  <option value="0">Select your position</option>
                  {positions.map(positionItem => (
                    <option value={positionItem.id} key={positionItem.id}>
                      {positionItem.name}
                    </option>
                  ))}
                </select>
              </Col>
              <Col lg="6">
                <label htmlFor="photo">
                  <input
                    type="file"
                    id="photo"
                    placeholder="Upload your photo"
                    value={photo}
                    onChange={this.onChange}
                  />
                </label>
              </Col>
            </Row>
          </Container>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

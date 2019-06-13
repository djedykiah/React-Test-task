import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { API, POSITIONS } from '../constants';
import FormErrors from './FormErrors';
import getUrl from '../helpers/getUrl';
import InputMask from 'react-input-mask';

export default class Register extends Component {
  state = {
    positions: [],
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: '',
    formErrors: { name: '', email: '', photo: '' },
    nameValid: false,
    emailValid: false,
    formValid: false,
  };

  componentDidMount() {
    this.getPositions();
  }

  getPositions = () => {
    getUrl(POSITIONS).then(({ positions }) => {
      this.setState({ positions });
    });
  };

  registrationRequest = (token, data) => (
    fetch(`${API}/users`, {
      method: 'POST',
      body: data,
      headers: {
        Token: token,
      },
    })
  );

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      position,
    } = this.state;

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('position_id', position);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', fileField.files[0]);

    getUrl(`${API}/token`)
      .then(({ token }) => {
        this.registrationRequest(token, formData);
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleUserInput = (e) => { 
    const { name, value } = e.target;
    this.validateField(name, value);
  }

  errorClass = (error) => {
    return error.length === 0 ? '' : 'has-error';
  };

  validateField(fieldName, value) {
    const { formErrors: fieldValidationErrors } = this.state;
    let { emailValid, nameValid } = this.state;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length >= 2 && value.length <= 60;
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
      nameValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.nameValid
    });
  }

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
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={this.onChange}
                    onBlur={this.handleUserInput} 
                    className={`${this.errorClass(this.state.formErrors.name)}`}
                  />
                </label>
              </Col>
              <Col lg="4">
                <label htmlFor="email" className="email-label">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={this.onChange}
                    onBlur={this.handleUserInput}
                    className={`${this.errorClass(this.state.formErrors.email)}`}
                  />
                </label>
              </Col>
              <Col lg="4">
                <label htmlFor="phone" className="phone-label">
                  <InputMask
                    mask="+380 99 999 99 99"
                    value={phone}
                    name="phone"
                    id="phone"
                    placeholder="+380"
                    maskChar=" "
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
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

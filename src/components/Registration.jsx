import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InputMask from 'react-input-mask';
import { API, POSITIONS } from '../constants';
import FormErrors from './FormErrors';
import getUrl from '../helpers/getUrl'; 
import Modal from './Modal';

export default class Register extends Component {
  state = {
    positions: [],
    modal: false,
    values: {
      name: '',
      email: '',
      phone: '',
      position: '',
      photo: '',
    },
    errors: {
      name: '',
      email: '',
      photo: '',
      position: '',
    },
    valid: {
      name: false,
      email: false,
      form: false,
    },
  };

  componentDidMount() {
    this.getPositions();
  }

  openModal = () => {
    this.setState({ modal: true });
  }

  closeModal = () => {
    this.setState({ modal: false })
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
      position,
    } = this.state.values;
    let { phone } = this.state.values;
    phone = `+${phone.replace(/[^\d]/g, '')}`;

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('position_id', position);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', fileField.files[0]);

    getUrl(`${API}/token`)
      .then(({ token }) => {
        this.registrationRequest(token, formData)
          .then(response => response.json())
          .then((response) => {
            if (response.success) {
              this.openModal(response.message);
            }
          })
          .catch((error) => {
            throw new Error(error);
          });
      });
  };

  onChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => {
      const valuesCopy = { ...prevState.values };
      valuesCopy[id] = value;
      return { values: valuesCopy };
    });
  };

  handleUserInput = (e) => {
    const { name, value } = e.target;
    this.validateField(name, value);
  }

  errorClass = error => (
    error.length === 0 ? '' : 'has-error'
  )

  emailValidation = (content) => {
    if (
      content.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i)
    ) {
      return true;
    }
    return false;
  }


  validateForm = () => {
    this.setState((prevState) => {
      const validCopy = { ...prevState.valid };
      validCopy.form = validCopy.email && validCopy.name;
      return { valid: validCopy };
    });
  }

  validateField(fieldName, value) {
    const { errors, valid } = this.state;
    switch (fieldName) {
      case 'email':
        valid[fieldName] = this.emailValidation(value);
        errors[fieldName] = valid[fieldName] ? '' : ' is invalid';
        break;
      case 'name':
        valid[fieldName] = value.length >= 2 && value.length <= 60;
        errors[fieldName] = valid[fieldName] ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      errors,
      valid,
    }, this.validateForm);
  }

  render() {
    const {
      name,
      photo,
      email,
      phone,
    } = this.state.values;
    const { positions } = this.state;
    const { form } = this.state.valid;
    const disabledBtn = !form ? 'disabled' : '';
    const modal = this.state.modal ? (
      <Modal onClose={this.closeModal} />
    ) : null;
    return (
      <div className="register">
        { modal }
        <h1 onClick={this.openModal}>Register to get work</h1>
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
                    className={`${this.errorClass(this.state.errors.name)}`}
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
                    className={`${this.errorClass(this.state.errors.email)}`}
                  />
                </label>
              </Col>
              <Col lg="4">
                <div className="phone-label">
                  <InputMask
                    mask="+380 99 999 99 99"
                    value={phone}
                    name="phone"
                    id="phone"
                    placeholder="+380"
                    maskChar=" "
                    onChange={this.onChange}
                  />
                </div>
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
          <button type="submit" className={`btn ${disabledBtn}`} disabled={`${disabledBtn}`}>
            Sign In
          </button>
        </form>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.errors} />
        </div>
      </div>
    );
  }
}

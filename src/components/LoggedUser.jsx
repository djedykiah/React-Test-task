import React, { Component } from 'react';
import iconSignout from '../icons/sign-out.svg';
import getUrl from '../helpers/getUrl';
import { API } from '../constants';

class LoggedUser extends Component {
  state = {
    user: [],
  }

  componentDidMount() {
    this.getLoggedUser();
  }

  getLoggedUser = () => {
    getUrl(`${API}/users/2`)
      .then((response) => {
        this.setState({ user: response.user });
      });
  }


  render() {
    const { name, email, photo } = this.state.user;
    return (
      <div className="user">
        <div className="user_info">
          <div className="user_name">{name}</div>
          <div className="user_mail">{email}</div>
        </div>
        <div className="user_avatar">
          <img src={photo} alt="avatar" />
        </div>
        <div className="user_quit">
          <button type="button">
            <img src={iconSignout} alt="sigh-out" />
          </button>
        </div>
      </div>
    );
  }
};

export default LoggedUser;

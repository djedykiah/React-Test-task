import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

const User = ({
  photo,
  name,
  position,
  email,
  phone,
}) => (
  <div className="user">
    <div className="user_avatar">
      <img src={photo} alt="avatar" />
    </div>
    <h3>{name}</h3>
    <div className="user_info">
      <p className="user_position">{position}</p>
      <p className="user_mail">{email}</p>
      <p className="user_phone">{phone}</p>
    </div>
  </div>
); 


User.propTypes = propTypes;

export default User;

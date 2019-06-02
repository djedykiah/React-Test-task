import React from 'react';

const User = ({ photo, name, position, email, phone, id }) => (
  <div className="user" key={id}>
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

export default User;

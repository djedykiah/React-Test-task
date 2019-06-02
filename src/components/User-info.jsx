import React from 'react';
import userPhoto from '../imgs/user-superstar-2x.jpg';
import iconSignout from '../icons/sign-out.svg';

import '../styles/main.sass';

const User = () => (
  <div className="user">
    <div className="user_info">
      <div className="user_name">Superstar</div>
      <div className="user_mail">Superstar@gmail.com</div>
    </div>
    <div className="user_avatar">
      <img src={userPhoto} alt="avatar" />
    </div>
    <div className="user_quit">
      <button type="button">
        <img src={iconSignout} alt="sigh-out" />
      </button>
    </div>
  </div>
); 

export default User;

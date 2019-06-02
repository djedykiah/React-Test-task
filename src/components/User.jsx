import React, { Component } from 'react'

export default class User extends Component { 

  render() { 
    const { avatar } = this.props;
    
    return (
      <div className='user'>
        <div className="user-avatar">
          <img src={avatar} alt="avatar" />
        </div> 
        <div className="user-name">
          { this.props.name }
        </div> 
        <div className="user-info">
          { this.props.info }
        </div>
      </div>
    )
  }
}

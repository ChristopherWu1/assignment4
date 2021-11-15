import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <span> 
            <Link to="/UserProfile">Go To Profile</Link> 
          </span>
          <span>
          <Link to="/">Go Home</Link>
          </span>
          <span>
          <Link to="/Credit">Go To Credits</Link>
          </span>
          <span>
          <Link to="/Debit">Go To Debits</Link>
          </span>
        </div>
         
    );
  }
}

export default UserProfile;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
          
        </div>
    );
  }
}

export default AccountBalance;

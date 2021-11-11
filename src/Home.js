import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import './style.css';


class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://picsum.photos/201" alt="bank"/>
          <h1>Bank of React</h1>
          
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <span> 
            <Link to="/UserProfile">Go To Profile</Link> 
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

export default Home;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import './style.css';
import axios from 'axios';

class debit extends Component {
  constructor(props)
  {
    super(props);
    this.state = {//only used in constructor
        
    }
  }
  
  showdebits = () =>
  {
    let currData = this.props.debits;
    console.log(this.props.debits);
    
    let list = currData.map((item,index) => 
    {
      return (<tr key = {index}> 
      <td> {item.description} </td>
      <td> {item.amount} </td>
      <td> {item.date.slice(0,10)} </td>
      </tr>);
    }
    );
    return list;
  } 

  render() {
    return (
      
        <div>
          
          <h1>Debit</h1>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <h3>Add Debit:</h3>
          <form onSubmit = {this.props.addDebit}>
            <input type = 'text' name = 'description' />
            <input type = 'number' name = 'amount' />
            <button type = "submit"> Add Debit </button>

          </form>
          
          <div>
               <h2>List of Debits</h2>
               <table class="center">
                  {this.showdebits()} 
                </table>
          </div> 
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

export default debit;
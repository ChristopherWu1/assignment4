import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import './style.css';
import axios from 'axios';

class Credit extends Component {
  constructor(props)
  {
    super(props);
    this.state = {//only used in constructor
        
    }
  }
  
  
  showCredits = () =>
  {
    let currData = this.props.credits;
    console.log('test 69');
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
          
          <h1>Credit</h1>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <h3>Add Credit:</h3>
          <form onSubmit = {this.props.addCredit}>
            <input type = 'text' name = 'description' />
            <input type = 'number' name = 'amount' />
            <button type = "submit"> Add Debit </button>

          </form>
           <div>
               <h2>List of Credits</h2>
               <table class="center">
                  {this.showCredits()} 
                  
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

export default Credit;
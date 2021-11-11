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
        apiData: {},
        descriptionText: "",
        amountText: "",
        found: false,
        clicked : false
    }
  }
  



  handleDescriptionChange = (event) => 
  {//input change event, called everytime the input is changed
    this.setState({descriptionText: event.target.value});
    console.log(this.state.descriptionText);
  }
  handlePriceChange = (event) => 
  {//input change event, called everytime the input is changed
    this.setState({amountText: event.target.value});
    console.log(this.state.amountText);
  }

  

  async componentDidMount(){
    this.setState({found: true});
  }
  showCredits = () =>
  {
    let currData = this.props.credits;
    console.log(this.props.credits);
    
    let list = currData.map((item,index) => 
    {
      return (<tr key = {index}> 
      <td> {item.description} </td>
      <td> {item.amount} </td>
      <td> {item.date} </td>
      </tr>);
    }
    );
    return list;
  } 

  componentDidUpdate()
  {
    this.showCredits();
  }

  makeCredit = () =>
  {
    this.setState({clicked : true});//

    //update balance
  }
  
  
 
  
  render() {
    return (
      
        <div>
          
          <h1>Credit</h1>
          <div> fuck yeah!</div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <div className="search">
              <h3>Add Credit:</h3>
              <input type="text" value={this.state.descriptionText} onChange={this.handleDescriptionChange} placeholder="Enter Description"/>
              <input type="text" value={this.state.amountText} onChange={this.handlePriceChange} placeholder="Enter Price"/>
              <button onClick={() => this.makeCredit()}>Add</button>
          </div>
          <Link to="/">Go Back Home</Link>
          { this.state.found 
            ? <div>
               <h2>List of Credits</h2>
               <table class="center">
                  {this.showCredits()} 
                  
                </table>
              </div> 
            : <h4>No results</h4>
            }
        </div>
    );
  }
}

export default Credit;
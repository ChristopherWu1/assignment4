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
  showdebits = () =>
  {
    let currData = this.props.debits;
    console.log(this.props.debits);
    
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
    this.showdebits();
  }

  makedebit = () =>
  {
    this.setState({clicked : true});//

    //update balance
  }
  /*
  showNewdebit = () =>
  {
    if(this.state.clicked)
    {
    let description = this.state.descriptionText;
    let amount = this.state.amountText;
    this.setState({descriptionText : "",amountText : "",clicked : false});
    console.log("burv");
    return (<tr> 
      <td> {description} </td>
      <td> {amount} </td>
      </tr>);
    }

  }*/
  
 
  
  render() {
    return (
      
        <div>
          
          <h1>Debit</h1>
          <div> fuck yeah!</div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <div className="search">
              <h3>Add debit:</h3>
              <input type="text" value={this.state.descriptionText} onChange={this.handleDescriptionChange} placeholder="Enter Description"/>
              <input type="text" value={this.state.amountText} onChange={this.handlePriceChange} placeholder="Enter Price"/>
              <button onClick={() => this.makedebit()}>Add</button>
          </div>
          <Link to="/">Go Back Home</Link>
          { this.state.found 
            ? <div>
               <h2>List of Debits</h2>
               <table class="center">
                  {this.showdebits()} 
                  
                </table>
              </div> 
            : <h4>No results</h4>
            }
        </div>
    );
  }
}

export default debit;
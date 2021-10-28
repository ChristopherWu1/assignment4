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
  let APIlink = "https://moj-api.herokuapp.com/credits";
  try 
  {
    let response = await axios.get(APIlink);//await waits until we get data
    this.setState({apiData: response.data});
    this.setState({found : true});
    
  } 
  catch (error) 
  {
    if (error.response) 
    {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data); //Not Found
        console.log(error.response.status); //404
        
    }
  }
  }
  showCredits = () =>
  {
    let currData = this.state.apiData;
    let list = currData.map((item,index) => 
    {
      return (<tr key = {index}> 
      <td> {item.description} </td>
      <td> {item.amount} </td>
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
  /*
  showNewCredit = () =>
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
               <h1>Holy Crap, Lois!</h1>
               <table>
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
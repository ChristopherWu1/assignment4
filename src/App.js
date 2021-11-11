import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import LogIn from './Login';
import UserProfile from './UserProfile';
import Credit from './Credit';
import Debit from './Debit';
import './style.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 117,
      currentUser: {
        userName: 'John React',
        memberSince: '03/18/2016',
      },
      credits: [],
      debits: []
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  async componentDidMount(){
    let APIlink = "https://moj-api.herokuapp.com/credits";
    try 
    {
      let response = await axios.get(APIlink);//await waits until we get data
      this.setState({credits: response.data});
      
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

    let APIlink2 = "https://moj-api.herokuapp.com/debits";
    try 
    {
      let response = await axios.get(APIlink2);//await waits until we get data
      this.setState({debits: response.data});
      
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
    let credits = this.state.credits;
    let debits = this.state.debits;
    let balance = this.state.accountBalance;
     credits.map((item) => 
    {
      balance += item.amount;

      
    })
    debits.map((item) =>{
      balance -= item.amount;

    })
    balance = Math.round(balance * 100) / 100;
    this.setState({accountBalance : balance});
    } 

  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    const CreditComponent = () => (<Credit accountBalance={this.state.accountBalance} credits = {this.state.credits}/>);
    const DebitComponent = () => (<Debit accountBalance={this.state.accountBalance} debits = {this.state.debits}/>);
  

    return (
        <Router>
          <div>
          <Route exact path="/Login" render={LogInComponent}/>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/Credit" render={CreditComponent}/>
          <Route exact path="/Debit" render={DebitComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;
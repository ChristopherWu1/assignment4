import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import LogIn from './Login';
import UserProfile from './UserProfile';
import Credit from './Credit';
import './style.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 117,
      currentUser: {
        userName: 'John React',
        memberSince: '03/18/2016',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    const CreditComponent = () => (<Credit accountBalance={this.state.accountBalance}/>);
  

    return (
        <Router>
          <div>
          <Route exact path="/Login" render={LogInComponent}/>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/Credit" render={CreditComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;
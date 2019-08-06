import React from 'react';
import Login from './Login';
import MainContainer from './MainContainer'

class App extends React.Component {
  
  constructor() {
    super() 

    this.state = {
      loggedIn: false,
      username: ''
    }

  }

  // fake "login" method that just makes us "logged in" based on being called
  // with a username
  login = (username) => {
    // in reality, we would do some DB query or API call here to check password
    // we'll pretend that that happened and the login was good
    this.setState({
      loggedIn: true,
      username: username
    })
  }


  render() {
    console.log("this.state in render() in App:");
    console.log(this.state);
    return (
      <div className="App">
        <h1>React Forms</h1>
        { this.state.loggedIn ? null : <Login login={this.login} /> }
        { this.state.loggedIn ? <MainContainer username={this.state.username}/> : null }
      </div>
    );
  }
}

export default App;

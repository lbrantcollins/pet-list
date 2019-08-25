import React from 'react';
import Login from './Login';
import MainContainer from './MainContainer'

class App extends React.Component {
  
  constructor() {
    super() 

    this.state = {
      // this is the single source of truth about whether and who is logged in
      /// you should NOT store the same data in multiple places
      // store it as high up as it needs to be to be able to be passed down
      // to the necessary children
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

  /// LOGOUT FUNCTION HERE-- because this component is the only one 
  // that actually knows whether we're logged in
  // be sure to pass this function in props down to MainContainer
  logout = () => {
    this.setState({
      loggedIn: false,
      username: ''
    })
  }

  render() {

    // conditionally render login page (if not logged in)
    // or main page (if logged in)
    return (

      <div className="App">
        
        { this.state.loggedIn ? null : <Login login={this.login} /> }

        { this.state.loggedIn ? <MainContainer logout={this.logout} username={this.state.username} /> : null }

      </div>
    );
  
  }
}

export default App;

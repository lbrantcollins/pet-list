import React from 'react';


// This is a container component because it is keeping track
// of some data in state

class Login extends React.Component {

  constructor() {
    super() // calling the constructor for React.Component

    this.state = {
      username: '', // set initial values here
      password: ''
    }
  }

  handleUsernameChange = (event) => {
    console.log("handleUsernameChange");
    console.log(event.currentTarget.value);
    this.setState({
      username: event.currentTarget.value
    })
    /// this is not a good place to use console.log to check something in state
  }

  render() {
    // this is a good place to check that something is in state
    console.log("this.state in render() in Login");
    console.log(this.state);
    return(
      <div>
        <h2>Login</h2>
        <form>
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            placeholder="username"
            onChange={this.handleUsernameChange}
          />
          <br />
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            placeholder="password" 
          />
          <br />
          <button>Log in!</button>
        </form>
      </div>
    )
  }

}


export default Login;



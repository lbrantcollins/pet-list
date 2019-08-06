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

  render() {
    return(
      <div>
        <h2>Login</h2>
        <form>
          <input type="text" name="username" value={this.state.username} placeholder="username" />
          <br />
          <input type="password" name="password" value={this.state.password} placeholder="password" />
          <br />
          <button>Log in!</button>
        </form>
      </div>
    )
  }

}


export default Login;



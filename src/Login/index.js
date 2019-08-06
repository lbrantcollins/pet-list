import React from 'react';

class Login extends React.Component {

  render() {
    return(
      <div>
        <h2>Login</h2>
        <form>
          <input type="text" name="username" placeholder="username" />
          <br />
          <input type="password" name="password" placeholder="password" />
          <br />
          <button>Log in!</button>
        </form>
      </div>
    )
  }

}


export default Login;



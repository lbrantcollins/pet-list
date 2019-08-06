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

  /// we can use some newer JS to handle changes to multiple text inputs
  handleChange = (event) => {
    console.log(event.currentTarget.name);
    // this is called COMPUTED PROPERTY NAMES syntax.  
    // it's some fancy newish JS
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("handleSubmit called"); 
    this.props.login(this.state.username)   
  }

  render() {
    // this is a good place to check that something is in state
    // console.log("this.state in render() in Login:");
    // console.log(this.state);
    // console.log("this.props in render() in Login:");
    // console.log(this.props);
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            placeholder="username"
            onChange={this.handleChange}
          />
          <br />
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            placeholder="password" 
            onChange={this.handleChange}
          />
          <br />
          <button>Log in!</button>
        </form>
      </div>
    )
  }

}


export default Login;



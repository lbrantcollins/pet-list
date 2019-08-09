// this component only shows when the user is not logged in


import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Container, Grid } from 'semantic-ui-react'


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
    // allowing a child to manipulate a parent's state via
    // a function that was passed down in props is called
    // LIFTING up STATE
    this.props.login(this.state.username)   
  }

  render() {
    // this is a good place to check that something is in state
    // console.log("this.state in render() in Login:");
    // console.log(this.state);
    // console.log("this.props in render() in Login:");
    // console.log(this.props);
    return (
      <div >
      <Container>
    <Grid>
        <Grid.Row centered>
            <Grid.Column width={14}>
        <Form  onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input 
              label="Username"
              width={8}
              type="text" 
              name="username" 
              value={this.state.username} 
              placeholder="username"
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Form.Field>
            <Form.Input 
              label="Password"
              width={8}
              type="password" 
              name="password" 
              value={this.state.password} 
              placeholder="password" 
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Button type='submit'>Log In</Button>
        </Form>
        </Grid.Column>
        </Grid.Row>
    </Grid>
</Container>
      </div>
    )
  }

}


export default Login;



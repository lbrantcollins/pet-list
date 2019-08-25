// this component only displays when the user is NOT logged in

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Container, Grid } from 'semantic-ui-react'

class Login extends React.Component {

   constructor() {
      super() // calling the constructor for React.Component

      this.state = {
         username: '', // set initial values here
         password: ''
      }
   }

   handleChange = (event) => {

      this.setState({
         [event.currentTarget.name]: event.currentTarget.value
      })

   }

   handleSubmit = (event) => {


      event.preventDefault()

      // lift up state
      this.props.login(this.state.username)   
   }

   render() {
    
      // "fake" login form
      return (
         <div >

            <h2>Type anything here for username, password</h2>

            <p>This is a "fake" login just to demonstrate 
            React conditional rendering upon login.</p>

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



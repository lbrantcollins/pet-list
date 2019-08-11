import React from 'react'
import {Form, Button, Label} from 'semantic-ui-react';
import "../../index.css"

class DogForm extends React.Component {
  constructor() {
    super() 
    this.state = {
      name: '',
      age: '',
      breed: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addDog(this.state)
    this.setState({
      name: '',
      age: '',
      breed: ''
    })
  }

  render() {
    return(
      <div>
        <h3>Add your dogs here, folks!</h3>
        <Form className="dog-form" onSubmit={this.handleSubmit} >
          <Form.Field>
            <Form.Input 
              type="text" 
              name="name" 
              placeholder="Enter a name"
              value={this.state.name} 
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Form.Field>
            <Form.Input 
              type="number" 
              name="age" 
              placeholder="Enter age"
              value={this.state.age} 
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Form.Field>
            <Form.Input 
              type="text" 
              name="breed"
              placeholder="Enter a breed" 
              value={this.state.breed} 
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button>Add Dog</Button> 
        </Form>

      </div>

    )
  }

}

export default DogForm
import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditDog = (props) =>  {

  return (
    <div>
      <h4> Edit the entry for {props.dogToEdit.name}</h4>
      <Form className="dog-form" onSubmit={this.handleSubmit} >
          <Form.Field>
          	<Label>Enter a new name
	            <Form.Input 
	              type="text" 
	              name="name" 
	              placeholder={props.dogToEdit.name}
	              value={this.state.name} 
	              onChange={this.handleChange} 
	            />
            </Label>
          </Form.Field>
          <Form.Field>
          	<Label>Edit the age
	            <Form.Input 
	              type="number" 
	              name="age" 
	              placeholder={props.dogToEdit.age}
	              value={this.state.age} 
	              onChange={this.handleChange} 
	            />
            </Label>
          </Form.Field>
          <Form.Field>
          	<Label>Change the breed
	            <Form.Input 
	              type="text" 
	              name="breed"
	              placeholder={props.dogToEdit.breed} 
	              value={this.state.breed} 
	              onChange={this.handleChange}
	            />
            </Label>
          </Form.Field>
          <Button>Submit changes</Button> 
        </Form>
    </div>

    )
  }

export default EditDog;        
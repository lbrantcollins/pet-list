import React, { Component } from 'react'
import {Form, Button, Label} from 'semantic-ui-react';

class EditForm extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			age: '',
			breed: '',
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		console.log("\nthis.state in handleSubmit in ShowEdit", this.state);

		// fill in values for fields the user did not change
		// Note that this prevents the user from blanking out an existing entry
		if (this.state.name === '') {
			await this.setState({
				name: this.props.dog.name
			})
		}
		if (this.state.age === '') {
			await this.setState({
				name: this.props.dog.age
			})
		}
		if (this.state.breed === '') {
			await this.setState({
				name: this.props.dog.breed
			})
		}
		
		this.props.updateDog(this.state, this.props.index)
		this.setState({
			name: '',
			age: '',
			breed: ''
		})
  	}

	handleChange = (event) => {
		console.log("inside handleChange in ShowEdit");
		this.setState({
      	[event.currentTarget.name]: event.currentTarget.value
    	})
	}

	render() {

		console.log("inside the ShowEdit function");

		// const dog = {
		// 	name: this.props.dogs.name[i],
		// 	age: this.props.age[i],
		// 	breed: this.props.breed[i]
		// }

		if (this.props.showEdit) {
			return (
			    <div>
			      <h4> Edit the entry for {this.props.dog.name}</h4>
			      <Form className="dog-form" onSubmit={this.handleSubmit} >
			          <Form.Field>
			          	<Label>Enter a new name
				            <Form.Input 
				              type="text" 
				              name="name" 
				              placeholder={this.props.dog.name}
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
				              placeholder={this.props.dog.age}
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
				              placeholder={this.props.dog.breed} 
				              value={this.state.breed} 
				              onChange={this.handleChange}
				            />
			            </Label>
			          </Form.Field>
			          <Button>Submit changes</Button> 
			        </Form>
			    </div>
			);
		} 
			return null; 
	}
}

export default EditForm;
  
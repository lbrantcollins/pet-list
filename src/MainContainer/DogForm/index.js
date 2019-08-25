import React from 'react'
import {Form, Button} from 'semantic-ui-react';
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
  
   // keep state up-to-date as the form fills for any field
   handleChange = (event) => {

      this.setState({
         [event.currentTarget.name]: event.currentTarget.value
      })

   }

   // handle a form submission
   handleSubmit = (event) => {

      // prevent default form behavior of a screen refresh
      event.preventDefault()

      // call add dog in the main container to add the dog to state there
      // lift up state
      this.props.addDog(this.state)

      // reset state here to a blank form
      this.setState({
         name: '',
         age: '',
         breed: ''
      })

   }

   render() {

      // return HTML to render the edit form
      return(

         <div>

            <h3>Add your pet (or a friend's pet) to the list</h3>

            <Form className="dog-form" onSubmit={this.handleSubmit} >

               <Form.Field>
                  <Form.Input 
                     type="text" 
                     name="name" 
                     placeholder="Enter name"
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
                     placeholder="Enter breed" 
                     value={this.state.breed} 
                     onChange={this.handleChange}
                  />
               </Form.Field>

               <Button>Add Pet</Button> 

            </Form>

         </div>

      )
  }

}

export default DogForm
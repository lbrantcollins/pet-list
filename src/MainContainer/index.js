// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'
import DogForm from './DogForm'
import DogList from './DogList'
import EditForm from './EditForm'
import { Button } from 'semantic-ui-react';

class MainContainer extends React.Component {

   constructor() {
      super() 

      this.state = {
         dogs: [],
         showEdit: false,  // conditionally render the edit form
         editIndex: null,  // id of dog to edit
         dogToEdit: {
           name: '',
           age: null,
           breed: ''
         }
      }
   }

   // handle submit from the add-a-dog form
   addDog = async (dog) => {

      // copy state
      const dogs = [...this.state.dogs];

      // add the dog to the copy
      dogs.push(dog);

      // set state to add the dog to state
      await this.setState({
         dogs: dogs
      })
   }

   // handle submit from a delete button on the dog list
   deleteDog = async (index) => {

      // copy state
      const dogs = [...this.state.dogs];

      // remove the dog from the copy of state
      dogs.splice(index, 1);

      // set state to be without the removed dog
      await this.setState({
         dogs: dogs
      })
   }

   // set the showEdit flag to conditionally render an edit form 
   // and then set state in main container
   requestEditForm = async (index) => {

      await this.setState({
         
         // conditionally render the edit form
         showEdit: true,   

         // id of dog to edit
         editIndex: index, 

         // existing data to maintain if not altered on edi form
         dogToEdit: {      
            name: this.state.dogs[index].name,
            age: this.state.dogs[index].age,
            breed: this.state.dogs[index].breed,
         }

      })

   }

   // handle submit from edit button on the dog list
   updateDog = async (dog) => {

      // copy state
      const dogs = [...this.state.dogs];

      // replace the existing contents with new data from the form
      dogs[this.state.editIndex] = dog;

      // set state to hold the new dog information
      // reset the showEdit flag so that the edit form 
      //  is NOT rendered until requested the next edit request
      await this.setState({
         showEdit: false,
         editIndex: null,
         dogs: dogs
      })
   }


   // render the React components
   render() {

      return(

         <div>
      
            <div className="intro">

               <h3 className="welcome">Hello, {this.props.username}.</h3>

               <Button className="logout-button welcome" onClick={this.props.logout}> Logout </Button>

            </div>

            <DogForm addDog={this.addDog} />

            <DogList dogs={this.state.dogs} deleteDog={this.deleteDog} requestEditForm={this.requestEditForm}/>

            <EditForm showEdit={this.state.showEdit} dog={this.state.dogToEdit} updateDog={this.updateDog}/>
        
         </div>
      )

   }

}


export default MainContainer 
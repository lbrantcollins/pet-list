// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'
import DogForm from './DogForm'
import DogList from './DogList'
import EditForm from './EditForm'
import {Button} from 'semantic-ui-react';



class MainContainer extends React.Component {

  constructor() {
    super() 

    this.state = {
      dogs: [],
      showEdit: false,
      editIndex: null,
      dogToEdit: {
        name: '',
        age: null,
        breed: ''
      }
    }
  }

  addDog = (dog) => {
    const dogs = this.state.dogs.slice();
    dogs.push(dog);
    this.setState({
      dogs: dogs
    })
  }

  deleteDog = (index) => {
    const dogs = this.state.dogs.slice();
      dogs.splice(index, 1);
      this.setState({
        dogs: dogs
      })
    // }
  }

  requestEditForm = (index) => {
    console.log("inside the editDog function");
    this.setState({
      showEdit: true,
      editIndex: index,
      dogToEdit: {
        name: this.state.dogs[index].name,
        age: this.state.dogs[index].age,
        breed: this.state.dogs[index].breed,
      }

    })
      
  }

  updateDog = (dog) => {
    console.log("inside updateDog function");
    console.log("\nupdated dog --->", dog);

  }


  render() {

    return(

      <div>

        <h3>Hello, {this.props.username}.</h3>
        <Button className="logout-button" onClick={this.props.logout}> Logout </Button>

        <DogForm addDog={this.addDog} />
        <DogList dogs={this.state.dogs} deleteDog={this.deleteDog} requestEditForm={this.requestEditForm}/>
        <EditForm showEdit={this.state.showEdit} dog={this.state.dogToEdit} updateDog={this.updateDog}/>
        
      </div>
    )

  }

}


export default MainContainer 
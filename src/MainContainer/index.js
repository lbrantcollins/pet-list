// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'
import DogForm from './DogForm'
import PuppyList from './PuppyList'

class MainContainer extends React.Component {

  constructor() {
    super() 

    this.state = {
      dogs: []
    }
  }

  addDog = (dog) => {
    console.log("addDogCalled!");
    const dogs = this.state.dogs;
    dogs.push(dog);
    this.setState({
      dogs: dogs
    })
  }

  deleteDog = (index) => {
    console.log("deleteDog called!");
    const dogs = this.state.dogs;
    dogs.slice(index, 1);
    this.setState({
      dogs: dogs
    })
  }

  render() {
    console.log("here is state in MainContainer");
    console.log(this.state);
    return(
      <div>
        <h3>Hello you are logged in as {this.props.username}</h3>
        <button onClick={this.props.logout}> Logout </button>

        <DogForm addDog={this.addDog}  />
        <PuppyList dogs={this.state.dogs} deleteDog={this.deleteDog}/>

        
      </div>
    )

  }

}


export default MainContainer 
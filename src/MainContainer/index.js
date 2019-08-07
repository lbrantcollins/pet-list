// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'
import DogForm from './DogForm'
import PuppyList from './PuppyList'
import SelectDelete from './SelectDelete'


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

  deleteDog = (name) => {
    console.log("\ndeleteDog called with name: ", name);

    const dogs = this.state.dogs.slice();
    console.log("\ndogs array before delete", dogs);
    const index = dogs.findIndex(dog => dog.name === name);
    console.log("\nthe index of the name is:", index);
    console.log("\ndeleteDog index", index);
    if (index !== -1) {
      dogs.splice(index, 1);
      console.log("\ndogs array after delete", dogs);
      this.setState({
        dogs: dogs
      })
    }
  }

  render() {
    console.log("here is state in MainContainer");
    console.log(this.state);
    return(
      <div>
        <h3>Hello you are logged in as {this.props.username}</h3>
        <button onClick={this.props.logout}> Logout </button>

        <DogForm addDog={this.addDog} />
        <PuppyList dogs={this.state.dogs} />
        <SelectDelete dogs={this.state.dogs} deleteDog={this.deleteDog} />

        
      </div>
    )

  }

}


export default MainContainer 
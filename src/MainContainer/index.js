// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'
import DogForm from './DogForm'

class MainContainer extends React.Component {

  constructor() {
    super() 

    this.state = {
      dogs: []
    }
  }

  addDog = (dog) => {
    console.log("addDogCalled!");
    const dogs = this.state.dogs
    dogs.push(dog)
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

        <DogForm addDog={this.addDog} />
      </div>
    )

  }

}


export default MainContainer 
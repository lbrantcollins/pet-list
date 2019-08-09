// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'
import DogForm from './DogForm'
import PuppyList from './PuppyList'
import SelectDelete from './SelectDelete'
import 'semantic-ui-css/semantic.min.css';


class MainContainer extends React.Component {

  constructor() {
    super() 

    this.state = {
      dogs: []
    }
  }

  addDog = (dog) => {
    const dogs = this.state.dogs.slice();
    dogs.push(dog);
    this.setState({
      dogs: dogs
    })
  }

  deleteDog = (name) => {
    const dogs = this.state.dogs.slice();
    const index = dogs.findIndex(dog => dog.name === name);
    if (index !== -1) {
      dogs.splice(index, 1);
      this.setState({
        dogs: dogs
      })
    }
  }

  render() {
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
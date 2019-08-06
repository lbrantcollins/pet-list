import React from 'react'

class DogForm extends React.Component {
  constructor() {
    super() 
    this.state = {
      name: '',
      age: '',
      breed: ''
    }
  }

  render() {
    return(
      <div>
        <h3>Add your dogs here, folks!</h3>
        <form>
          <input type="text" name="name" value={this.state.name} placeholder="Enter a name" />
          <br />
          <input type="number" name="age" value={this.state.age} placeholder="Enter age" />
          <br />
          <input type="text" name="breed" value={this.state.breed} placeholder="Enter a breed" />
          <br />


        </form>

      </div>

    )
  }

}

export default DogForm
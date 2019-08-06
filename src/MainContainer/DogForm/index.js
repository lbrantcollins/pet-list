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
  
  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addDog(this.state)
  }

  render() {
    return(
      <div>
        <h3>Add your dogs here, folks!</h3>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="name" value={this.state.name} placeholder="Enter a name" onChange={this.handleChange} />
          <br />
          <input type="number" name="age" value={this.state.age} placeholder="Enter age" onChange={this.handleChange} />
          <br />
          <input type="text" name="breed" value={this.state.breed} placeholder="Enter a breed" onChange={this.handleChange} />
          <br />

          <button>Add Dog</button> 
        </form>

      </div>

    )
  }

}

export default DogForm
// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'
import DogForm from './DogForm'

class MainContainer extends React.Component {

  // render a button below the div after the h3 that logs 
  // the user out by calling the logout function from props

  render() {
    console.log("here is props in MainContainer");
    console.log(this.props);
    return(
      <div>
        <h3>Hello you are logged in as {this.props.username}</h3>
        <button onClick={this.props.logout}> Logout </button>

        <DogForm />
      </div>
    )

  }

}


export default MainContainer 
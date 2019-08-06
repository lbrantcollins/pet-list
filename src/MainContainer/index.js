// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'

function MainContainer(props) {

  // render a button below the div after the h3 that logs 
  // the user out by calling the logout function from props

  console.log("here is props in MainContainer");
  console.log(props);
  return(
    <div>
      <h3>Hello you are logged in as {props.username}</h3>
      <button onClick={props.logout}> Logout </button>
    </div>
  )

}


export default MainContainer 
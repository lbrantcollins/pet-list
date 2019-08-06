// this component will be rendered by App
// so it will need the username in props
// it will only show when the user is logged in

import React from 'react'

function MainContainer(props) {
  console.log("here is props in MainContainer");
  console.log(props);
  return(
    <div>
      <h3>Hello you are logged in as {props.username}</h3>
    </div>
  )

}


export default MainContainer 
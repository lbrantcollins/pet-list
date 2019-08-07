import React from 'react';

function PuppyList(props) {

  const puppies = props.dogs.map((dog, i) => {
    return <li key={i}>{dog.name} is a {dog.age} year old {dog.breed}.</li>
  })

  return <ul> {puppies} </ul>

}

export default PuppyList;
import React from 'react';

class PuppyList extends React.Component {


  render() {

  const puppies = this.props.dogs.map((dog, i) => {
    return <li key={i}>{dog.name} is a {dog.age} year old {dog.breed}.</li>
  })

  	return (
  		<ul> {puppies} </ul>
  	);

  }

}

export default PuppyList;
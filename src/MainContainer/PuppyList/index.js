import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { List, Button } from 'semantic-ui-react'
import '../../index.css'

function PuppyList(props) {

	function handleClickForDelete (event, data) {
		event.preventDefault();
		props.deleteDog(data.value);
	}

	function handleClickForEdit (event, data) {
		event.preventDefault();
		props.deleteDog(data.value);
	}

	const puppies = props.dogs.map((dog, i) => {
		 return (
		 	<List.Item key={i}>
		 		<List.Icon name='paw'/>
	 			<List.Content>
	 				{dog.name} is a {dog.age} year old {dog.breed}.   
	 				&nbsp;<Button type="submit" value={i} onClick={handleClickForDelete}>Delete</Button>
	 				&nbsp;<Button type="submit" value={i} onClick={handleClickForEdit}>Edit</Button>
	 			</List.Content>
	 			
 			</List.Item>
		 )
		 
	})

  
  return (

  	<div>
  		<List> {puppies} </List>
	</div>

  );

}

export default PuppyList;
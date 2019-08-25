import React from 'react';
import { List, Button } from 'semantic-ui-react'
import '../../index.css'

function DogList(props) {

	function handleClickForDelete (event, data) {

		// prevent page refresh upon form submit
		event.preventDefault();

		// call deleteDog function in main container (to set state there)
		props.deleteDog(data.value);

	}

	function handleClickForEdit (event, data) {

		// prevent page refresh upon form submit
		event.preventDefault();

		// call requestEditForm in main container
		// to conditionally render an edit form 
		// and then set state in main container
		props.requestEditForm(data.value);

	}

	// list all dogs currently on the list
	// provide buttons for deleting or editing a dog on the list

	// start by building a list entry for each dog
	const dogs = props.dogs.map((dog, i) => {

		 return (

		 	<List.Item key={i}>

		 		<List.Icon name='paw'/>

	 			<List.Content>

	 				{dog.name} is a {dog.age} year old {dog.breed}.   

	 				&nbsp;<Button type="submit" value={i} onClick={handleClickForDelete}>Delete</Button>

	 				&nbsp;<Button type="submit" value={i} onClick={handleClickForEdit}>Edit</Button>

	 			</List.Content>
	 			
 			</List.Item>
		 );

	})


	// then return the HTML to render the full list of dogs
  	return (

	  	<div>
	  		<List className="dog-list"> {dogs} </List>
		</div>

  );

}

export default DogList;

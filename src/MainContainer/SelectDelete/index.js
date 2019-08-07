import React from 'react';

function SelectDelete(props) {

	function handleSelect (event) {
		props.deleteDog(event.currentTarget.value);
	}

	if (props.dogs.length > 0) {

		const dogOptions = props.dogs.map( (dog, i) => {
			return <option key={i}>{dog.name}</option>;
		})
 		
		return (
		  	<div>
		  		<p>Choose one dog to delete:</p>
			  	<select size={props.dogs.length} onClick={handleSelect}> {dogOptions} </select>
		  	</div>
		 );
	} else {
		return null;
	}


}

export default SelectDelete;
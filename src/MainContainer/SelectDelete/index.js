import React from 'react';

function SelectDelete(props) {

	function handleSelect (event) {
		props.deleteDog(event.currentTarget.value);
	}

	if (props.dogs.length > 0) {

		const dogs = [...props.dogs];
		dogs.unshift({name: "--Choose one dog to delete--"});
		console.log(dogs);

		const dogOptions = dogs.map( (dog, i) => {
			return (
				<option key={i}>{dog.name}</option>
			)
		})
 		
 	// 	console.log("dogOptions:")
		// console.log(dogOptions)

		return (
		  	<div>
		  		<p>Choose one dog to delete:</p>
			  	<select size={props.dogs.length+1} onClick={handleSelect}> {dogOptions} </select>
		  	</div>
		 );
	} else {
		return null;
	}


}

export default SelectDelete;
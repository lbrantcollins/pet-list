import React from 'react';
import { Select, Dropdown} from 'semantic-ui-react'

function SelectDelete(props) {

	function handleSelect (event) {
		event.preventDefault();
		console.log("\nevent.currentTarget.value", event.currentTarget.value);
		// props.deleteDog(event.currentTarget.value);
	}

	if (props.dogs.length > 0) {

		const dogs = [...props.dogs];
		dogs.unshift({name: "--Choose one dog to delete--"});
		console.log(dogs);

		const dogOptions = dogs.map( (dog, i) => {
			return (
				<option key={i} value={i-1}>{dog.name}</option>
			)
		})
 		
 	// 	const dogOptions = props.dogs.map( (dog, i) => {
 	// 		const name = dog.name;
		// 	return ({ 
		// 		key: i, 
		// 		value: i,
		// 		text: name
		// 	})
		// })
 		// const dogOptions = dogOpts.map( obj => {obj.text = obj.name})

		// const dogOptions = [
		// 	{key: 0, value: 0, ...props.dogs[0] },
		// 	{key: 1, value: 1, text: "Bbbbb"},
		// 	{key: 2, value: 2, text: "Ccccc"},
		// ]
		// console.log(dogOpts);
		// console.log(dogOptions);

// <p>Choose one dog to delete:</p>
		  		// <Select placeholder = "-- Choose one dog to delete--" options={dogOptions} />

		  		// <Select placeholder = "-- Choose one dog to delete--"  options={dogOptions} onSelect={handleSelect}/>
		return (
		  	<div>
			  	<select size={props.dogs.length+1} onClick={handleSelect}> {dogOptions} </select>
		  	</div>
		 );
	} else {
		return null;
	}


}

export default SelectDelete;
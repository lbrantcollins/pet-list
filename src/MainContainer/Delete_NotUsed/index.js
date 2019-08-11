import React from 'react';
import { Dropdown} from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';


// , {key: props.dogs.length, text: "Click on a dog's name to delete", value: props.dogs.length}

function SelectDelete(props) {

	 // {key: props.dogs.length, text: "Click to delete", value: props.dogs.length}

	function handleSelect (event, data) {
		event.preventDefault();
		props.deleteDog(data.value);
	}

	if (props.dogs.length > 0) {

		const dogOptionsObjects = props.dogs.map( (dog, i) => {
			return ({
				key: i,
				text: dog.name,
				value: i
			})
		})
		
		const	dogOptions = [...dogOptionsObjects];
				
		// A dropdown is a bit dysfunctional when there is only one item on the list
		return (
			<div>
				<Dropdown placeholder="Click on a dog's name to delete" options={dogOptions} onChange={handleSelect}/>
		  	</div>

		 );
	} else {
		return null;
	}


}

export default SelectDelete;
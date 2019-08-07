import React from 'react';

class SelectDelete extends React.Component {

	handleSelect = (event) => {
		console.log("\nevent.currentTarget.value in handleSelect in SelectDelete");
		console.log(event.currentTarget.value);
		this.props.deleteDog(event.currentTarget.value);
	}

	render() {

		if (this.props.dogs.length > 0) {

			const dogOptions = this.props.dogs.map( (dog, i) => {
				return <option key={i}>{dog.name}</option>;
			})
	 		
			return (
			  	<div>
			  		<p>Choose one dog to delete:</p>
				  	<select size={this.props.dogs.length} onClick={this.handleSelect}> {dogOptions} </select>
			  	</div>
			  );
		} else {
			return null;
		}

	}

}

export default SelectDelete;
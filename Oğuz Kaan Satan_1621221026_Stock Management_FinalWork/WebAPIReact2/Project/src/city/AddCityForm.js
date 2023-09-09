import React, { useState } from 'react'

const AddCityForm = props => {
	const initialFormState = { id: null, cityname: '' }
	const [ city, setCity ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setCity({ ...city, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!city.cityName ) 
				{
					alert("Please fill all values");
					return;
				}
				props.addCity(city);

				setCity(initialFormState)
			}}
		>
			<label>CityName</label>
			<input type="text" name="cityname" value={city.cityname} onChange={handleInputChange} />
			<button>Add new city</button>
		</form>
	)
}

export default AddCityForm

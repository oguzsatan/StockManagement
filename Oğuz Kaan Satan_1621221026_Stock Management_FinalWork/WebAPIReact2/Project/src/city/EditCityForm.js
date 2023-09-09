import React, { useState, useEffect } from 'react'

const EditCityForm = props => {
  const [ city, setCity ] = useState(props.currentCity)

  useEffect(
    () => {
      setCity(props.currentCity)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setCity({ ...city, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!city.cityname ) 
				{
					alert("Please fill all values");
					return;
				}

        props.updateCity(city.id, city)
      }}
    >
      <label>Name</label>
      <input type="text" name="cityname" value={city.cityname} onChange={handleInputChange} />
      <button>Update city</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditCityForm

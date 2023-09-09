import React, { useState } from 'react'

const AddContactForm = props => {
	const initialFormState = { id: null, name: '', phone: '',email: '', cityId: '' }
	const [ contact, setContact ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setContact({ ...contact, [name]: value })
	}

	

	const cityList = ["Istanbul", "Ankara"];

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!contact.name || !contact.phone || !contact.email  || !contact.cityId  ) 
				{
					alert("Please fill all values");
					return;
				}
				props.addContact(contact);

				setContact(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={contact.name} onChange={handleInputChange} />
			<label>Phone</label>
			<input type="text" name="phone" value={contact.phone} onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" name="email" value={contact.email} onChange={handleInputChange} />
			<label>City</label>

			<select
        name="cityId"
        value={contact.cityId}
        onChange={handleInputChange}
        className="form-control"
      >
        <option value="" disabled>
          Please Select
        </option>
        {cityList.map(city => {
          return (
            <option key={city} value={city} label={city}>
              {city}
            </option>
          );
        })}
      </select>


			<button>Add new contact</button>
		</form>
	)
}

export default AddContactForm

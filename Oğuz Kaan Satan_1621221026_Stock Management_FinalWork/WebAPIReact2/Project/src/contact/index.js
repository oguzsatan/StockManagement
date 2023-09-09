import React, { useEffect,useState, Fragment } from 'react'
import AddContactForm from './AddContactForm'
import EditContactForm from './EditContactForm'
import ContactTable from '../tables/ContactTable'
import axios from 'axios'

export const Contact = () => {
	// Data
	let contactsData = [];

	const initialFormState = { id: null, name: '', phone: '', email: '', cityId: '' }
	// Setting state
	const [ contacts, setContacts ] = useState(contactsData);
	const [ currentContact, setCurrentContact ] = useState(initialFormState);
	const [ editing, setEditing ] = useState(false);

	useEffect(() => {
		getData();

	  }, []);

	  const getData = async () => {
        let url = 'https://localhost:44343/api/Contacts'

        const response = await axios.get(url)
        console.log('response', response)
        setContacts(response.data)

        
    }



	

	// CRUD operations
	const addContact = contact => {
		contact.id = contacts.length + 1;
		setContacts([ ...contacts, contact ]);
		
		const ex= {
			Id: 0,
			Name: contact.name,
			Phone: contact.phone,
			Email: contact.email,
			CityId: contact.cityId==='Istanbul'?1:2,
		};

		axios({
			method: 'post',
			url: 'https://localhost:44343/api/Contacts',
			data: ex,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  },
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});

	}

	const deleteContact = id => {
		setEditing(false)

        axios({
			method: 'get',
			url: 'https://localhost:44343/api/Contacts/' + id ,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  },
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
        });
        

		setContacts(contacts.filter(contact => contact.id !== id))
	}

	const updateContact = (id, updatedContact) => {
		setEditing(false);

		const ex= {
			Id: updatedContact.id,
			Name: updatedContact.name,
			Phone: updatedContact.phone,
			Email: updatedContact.email,
			CityId: updatedContact.cityId==='Istanbul'?1:2,
		};

		axios({
			method: 'post',
			url: 'https://localhost:44343/api/Contacts',
			data: ex,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  },
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});


		setContacts(contacts.map(contact => (contact.id === id ? updatedContact : contact)))
	}

	const editRow = contact => {
		setEditing(true)

		setCurrentContact({ id: contact.id, name: contact.name, phone: contact.phone, email:contact.email, cityId: contact.cityId })
	}

	return (
		<div className="container">
			<h1>Crud App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Contacts</h2>
							<EditContactForm
								editing={editing}
								setEditing={setEditing}
								currentContact={currentContact}
								updateContact={updateContact}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add contact</h2>
							<AddContactForm addContact={addContact} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Contacts</h2>
					<ContactTable contacts={contacts} editRow={editRow} deleteContact={deleteContact} />
				</div>
			</div>
		</div>
	)
}

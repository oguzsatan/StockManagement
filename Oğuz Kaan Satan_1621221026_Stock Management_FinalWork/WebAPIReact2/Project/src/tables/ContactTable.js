import React from 'react'

const ContactTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>City</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.contacts.length > 0 ? (
        props.contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.cityId===1?'Istanbul':(contact.cityId===2?'Ankara':contact.cityId)}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(contact)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteContact(contact.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No contact</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ContactTable

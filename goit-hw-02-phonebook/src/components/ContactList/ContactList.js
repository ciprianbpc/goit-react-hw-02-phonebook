import React from 'react';
import './ContactList.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="ContactList">
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
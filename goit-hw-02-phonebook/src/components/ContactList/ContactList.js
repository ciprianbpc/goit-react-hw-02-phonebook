import React from 'react';
import './ContactList.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="ContactList">
      {contacts.map(contact => (
        <li key={contact.id} className="ContactList-item">
          <span>{contact.name}: {contact.number}</span>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
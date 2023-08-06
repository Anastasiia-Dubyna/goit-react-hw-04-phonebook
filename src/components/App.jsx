import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialState;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    return setContacts(prevContacts => ({
      contacts: [{ id: nanoid(), ...data }, ...prevContacts],
    }));
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter, 0);
    });
  };

  const inputChangeValue = evt => {
    return setFilter({
      [evt.target.name]: evt.target.value,
    });
  };

  const formSubmitSearchHandle = data => {
    const searchResult = contacts.find(contact => contact.name === data.name);
    if (!searchResult) {
      formSubmitHandler(data);
      return true;
    } else {
      alert(`${data.name} is already in contacts`);
      return false;
    }
  };

  const deleteItem = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== contactId)
    );
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmitHandler={formSubmitSearchHandle} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={inputChangeValue} />
      <ContactList list={visibleContacts} onDeleteItem={deleteItem} />
    </section>
  );
};

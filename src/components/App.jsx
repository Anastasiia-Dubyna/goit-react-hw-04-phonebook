import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    return this.setState(prevValue => ({
      contacts: [{ id: nanoid(), ...data }, ...prevValue.contacts],
    }));
  };

  calculateFilteredContacts = () => {
    const { contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter, 0);
    });
  };

  inputChangeValue = evt => {
    return this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  formSubmitSearchHandle = data => {
    const searchResult = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (!searchResult) {
      this.formSubmitHandler(data);
      return true;
    } else {
      alert(`${data.name} is already in contacts`);
      return false;
    }
  };

  deleteItem = contactId => {
    this.setState(prevValue => ({
      contacts: prevValue.contacts.filter(item => item.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.calculateFilteredContacts();
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitSearchHandle} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.inputChangeValue} />
        <ContactList list={visibleContacts} onDeleteItem={this.deleteItem} />
      </section>
    );
  }
}

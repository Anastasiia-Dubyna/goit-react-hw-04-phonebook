import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormStyle,
  InputStyle,
  ButtonStyle,
  Label,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmitHandler }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmitHandler({ name, number })) {
      setName('');
      setNumber('');
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label>Name</Label>
      <InputStyle
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="">Number</Label>
      <InputStyle
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ButtonStyle type="submit">Add contact</ButtonStyle>
    </FormStyle>
  );
};

ContactForm.propTypes = {
  onAlert: PropTypes.func,
};

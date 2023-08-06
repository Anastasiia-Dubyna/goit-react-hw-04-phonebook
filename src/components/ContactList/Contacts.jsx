import PropTypes from 'prop-types';
import { ContactStyle, ButtonStyle } from './Contacts.styled';

export function Contacts({ contact, onDelItem }) {
  const { name, number } = contact;
  return (
    <ContactStyle>
      <p>
        {name} : {number}
      </p>
      <ButtonStyle type="button" onClick={onDelItem}>
        Delete
      </ButtonStyle>
    </ContactStyle>
  );
}

Contacts.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onDelItem: PropTypes.func,
};

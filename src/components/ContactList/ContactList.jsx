import PropTypes from 'prop-types';
import { Contacts } from './Contacts';

export function ContactList({ list, onDeleteItem }) {
  return list.map(item => {
    return (
      <Contacts
        key={item.id}
        contact={item}
        onDelItem={() => onDeleteItem(item.id)}
      />
    );
  });
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onDelItem: PropTypes.func,
};

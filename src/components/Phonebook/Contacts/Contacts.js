import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ContactsItem from './ContactsItem';
import styles from './Contacts.module.scss';

function Contacts({ onDelete }) {
  const contactsList = useSelector(state => state.contacts.items);

  return contactsList.length > 0 ? (
    <ul>
      {contactsList.map(contactsItem => (
        <li key={contactsItem.id} className={styles.item}>
          <ContactsItem item={contactsItem} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No contacts here</p>
  );
}

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;

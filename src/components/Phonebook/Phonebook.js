import { useState, useEffect } from 'react';

import styles from './Phonebook.module.scss';
import Contacts from './Contacts';
import AddContact from './AddContact';
import Filter from './Filter';

function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let contactsLoad = localStorage.getItem('contacts');
    if (contactsLoad) {
      contactsLoad = JSON.parse(contactsLoad);
      contactsLoad && setContacts([...contactsLoad]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ id, namePeople, number }) => {
    if (contacts.find(contact => namePeople.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${namePeople} is alredy in contacts`);
    } else {
      setContacts(state => [...state, { id, name: namePeople, number }]);
    }
  };

  const handleOnFiler = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(state => state.filter(contactItem => contactItem.id !== id));
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  function getContacts() {
    const filterLC = filter.toLowerCase();
    return contacts.filter(contactItem => contactItem.name.toLowerCase().includes(filterLC));
  }

  const contactsFiltered = getContacts();
  const isShowFilter = contacts.length > 1;

  return (
    <div className={styles.componenet}>
      <h1 className={styles.title}>Phonebook</h1>
      <AddContact onSubmit={handleAddContact} />
      <h2 className={styles.title}>Contacts</h2>
      {isShowFilter && <Filter filter={filter} onChange={handleOnFiler} />}
      <Contacts contactsList={contactsFiltered} onDelete={handleDeleteContact} />
    </div>
  );
}

export default Phonebook;

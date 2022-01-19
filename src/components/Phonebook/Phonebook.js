import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addItem, deleteItem, changeFilter } from '../../redux/contacts/contactSlice';

import styles from './Phonebook.module.scss';
import Contacts from './Contacts';
import AddContact from './AddContact';
import Filter from './Filter';

function Phonebook() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  // const addFilter = () => dispatch(changeFilter(filter));

  // useEffect(() => {
  //   let contactsLoad = localStorage.getItem('contacts');
  //   if (contactsLoad) {
  //     contactsLoad = JSON.parse(contactsLoad);
  //     contactsLoad && setContacts([...contactsLoad]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = ({ id, namePeople, number }) => {
  //   if (contacts.find(contact => namePeople.toLowerCase() === contact.name.toLowerCase())) {
  //     alert(`${namePeople} is alredy in contacts`);
  //   } else {
  //     setContacts(state => [...state, { id, name: namePeople, number }]);
  //   }
  // };

  const handleOnFiler = event => {
    // setFilter(event.target.value);
    dispatch(changeFilter(event.target.value));
  };

  // const handleDeleteContact = id => {
  //   setContacts(state => state.filter(contactItem => contactItem.id !== id));
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // };

  // function getContacts() {
  //   return contacts.filter(contactItem =>
  //     contactItem.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // }

  // const contactsFiltered = getContacts();
  // const isShowFilter = contacts.length > 1;
  const isShowFilter = true;

  return (
    <div className={styles.componenet}>
      <h1 className={styles.title}>Phonebook</h1>
      <AddContact />
      <h2 className={styles.title}>Contacts</h2>
      {isShowFilter && <Filter />}
      <Contacts />
    </div>
  );
}

export default Phonebook;

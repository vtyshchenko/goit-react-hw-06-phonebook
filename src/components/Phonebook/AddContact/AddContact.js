import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { useState } from 'react';

import styles from './AddContact.module.scss';

function AddContact({ onSubmit }) {
  const [namePeople, setNamePeople] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'number') {
      setNumber(value);
    } else {
      setNamePeople(value);
    }
  };

  function reset() {
    setNamePeople('');
    setNumber('');
  }

  const handleSubmit = event => {
    event.preventDefault();

    const id = nanoid();
    onSubmit({ namePeople, number, id });
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="namePeople"
          placeholder="John Jonson"
          value={namePeople}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="123-55-66"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

AddContact.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddContact;

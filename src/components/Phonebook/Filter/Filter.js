import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../../redux/contacts/contactSlice';

import styles from './Filter.module.scss';

function Filter({ filter }) {
  const dispatch = useDispatch();
  return (
    <>
      <label className={styles.label}>
        Find contscts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="John Jonson"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => {
            dispatch(changeFilter(e.target.value));
          }}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;

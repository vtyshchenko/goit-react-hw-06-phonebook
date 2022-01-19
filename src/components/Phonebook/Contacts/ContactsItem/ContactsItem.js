import styles from './ContactsItem.module.scss';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../../redux/contacts/contactSlice';

const ContactsItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <span>
        {item.name}: {item.number}
      </span>

      <button className={styles.button} type="button" onClick={() => dispatch(deleteItem(item.id))}>
        Delete
      </button>
    </>
  );
};

ContactsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;

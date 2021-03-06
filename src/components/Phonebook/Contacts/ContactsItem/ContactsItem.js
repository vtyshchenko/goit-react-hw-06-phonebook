import styles from './ContactsItem.module.scss';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../../redux/contacts/contactSlice';

const ContactsItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(deleteContact({ id: item.id }));

  return (
    <>
      <span>
        {item.name}: {item.number}
      </span>

      <button className={styles.button} type="button" onClick={onClick}>
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

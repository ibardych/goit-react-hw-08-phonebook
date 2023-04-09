import { List } from '../ContactsList/ContactsList.styled';
import { Button, Loader } from 'components/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectDeleteLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { Contact } from './Contact.styled';
import { useState } from 'react';

const ContactsList = () => {
  const dispatch = useDispatch();
  const [deletingId, setDeletingId] = useState();

  const deleteLoading = useSelector(selectDeleteLoading);

  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    setDeletingId(id);
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <span>
            {name}:<strong>{number}</strong>
          </span>
          {deleteLoading && deletingId === id && <Loader className="delete" />}
          {deletingId !== id && (
            <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
          )}
        </Contact>
      ))}
    </List>
  );
};

export default ContactsList;

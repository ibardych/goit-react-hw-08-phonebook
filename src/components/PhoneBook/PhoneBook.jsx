import { PhoneBookStyled } from './PhoneBook.styled';
import { Loader } from 'components/Styled';
import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input';
import ContactsList from 'components/ContactsList/ContactsList';
import Notification from 'components/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectRequested,
} from 'redux/contacts/selectors';
import { setFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import Message from 'Message/Message';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const requested = useSelector(selectRequested);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <PhoneBookStyled>
      <Section title="New Contact" type="form">
        <Form />
      </Section>
      <Section title="Contacts">
        {!isLoading && error && <Message>{error}</Message>}
        {!!contacts.length && (
          <>
            {contacts.length > 1 && (
              <Input
                label="Find contacts by name or number"
                type="text"
                name="filter"
                onChange={handleFilter}
                value={filter}
              />
            )}
            <ContactsList />
          </>
        )}
        {requested && !isLoading && !error && !contacts.length && (
          <Notification message="There is no contacts yet" />
        )}
        {isLoading && !error && <Loader />}
      </Section>
    </PhoneBookStyled>
  );
};

export default PhoneBook;

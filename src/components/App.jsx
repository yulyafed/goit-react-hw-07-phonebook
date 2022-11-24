import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/selectors';
import * as operations from 'redux/operations';
import { useEffect } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { ContactsList } from './ContactsList/ContactsList';
import { Title, TitleContact } from './App.styled';

export default function App() {

  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectors.getContacts);

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <PhonebookForm />
      <TitleContact>Contacts</TitleContact>
      <ContactsFilter />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactsList />
    </>
  );
}

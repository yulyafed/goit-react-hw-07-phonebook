import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Text, Button } from './ContactsList.styled';
import * as selectors from 'redux/selectors';
import * as operations from 'redux/operations';
import { useEffect } from 'react';

export const ContactsList = () => {

  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);

  const dispatch = useDispatch();

  useEffect(
    () => dispatch(operations.fetchContacts()), [dispatch])
  

  const getVisibleContacts = () => {
    if (filter && filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }

    return contacts;
  };
 
  // const handleDelete = useEffect(
  //   id => dispatch(operations.deleteContact(id)),
  //   [dispatch]
  // );

  return (
    <>
      <List>
        {getVisibleContacts().map(contact => (
          <Item key={contact.id}>
            <Text>
              {contact.name} : {contact.phone}
            </Text>
            <Button onClick={() => operations.deleteContact(contact.id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};



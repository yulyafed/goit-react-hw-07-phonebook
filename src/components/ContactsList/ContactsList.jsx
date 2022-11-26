import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { List, Item, Text, Button } from './ContactsList.styled';
import * as selectors from 'redux/selectors';
import * as operations from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);

  const getVisibleContacts = () => {
    if (filter && filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }

    return contacts;
  };
 
  // useEffect(id => dispatch(operations.deleteContact(id)), [dispatch]);
  const handleDelete = id => dispatch(operations.deleteContact(id));

  return (
    <>
      {contacts.length > 0 && (
          <List>
            {getVisibleContacts().map(contact => (
              <Item key={contact.id}>
                <Text>
                  {contact.name} : {contact.phone}
                </Text>
                <Button
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </Button>
              </Item>
            ))}
          </List>
        )}
    </>
  );
};;



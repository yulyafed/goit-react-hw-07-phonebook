import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item, Text, Button } from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    if (filter && filter.length > 0) {
      return contacts.items.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }

    return contacts.items;
  };

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      <List>
        {getVisibleContacts().map(contact => (
          <Item key={contact.id}>
            <Text>
              {contact.name} : {contact.number}
            </Text>
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
          </Item>
        ))}
      </List>
    </>
  );
};



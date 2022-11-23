import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { ContactsList } from './ContactsList/ContactsList';
import { Title, TitleContact } from './App.styled';

export default function App() {
  
      return (
      <>
        <Title>Phonebook</Title>
        <PhonebookForm/>
        <TitleContact>Contacts</TitleContact>
        <ContactsFilter/>
        <ContactsList/>
      </>
    );
  }


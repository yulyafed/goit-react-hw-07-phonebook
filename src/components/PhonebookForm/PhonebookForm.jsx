import { useDispatch } from 'react-redux';
import { Button, Input, Label, FormPhone } from './PhonebookForm.styled';
import * as operations from 'redux/operations';

export const PhonebookForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    
    e.preventDefault();
    const form = e.currentTarget;
    
    dispatch(
      operations.addContact({
        name: form.elements.name.value,
        phone: form.elements.number.value,
      })
    );

    form.reset();
  };

  return (
   
    <FormPhone autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </Label>
        <Button type="submit">Add contact</Button>
      </FormPhone>
    );
};


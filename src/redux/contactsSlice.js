import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload)
            return state;
        }
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

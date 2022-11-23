import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
} 

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: contactsInitialState,
//     reducers: {
//         addContact: {
//             reducer(state, action) {
//                 state.items.push(action.payload);
//             },
//             prepare(name, number) {
//                 return {
//                     payload: {
//                         name,
//                         number,
//                         id: nanoid(),
//                     },
//                 };
//             },
//         },
//         deleteContact(state, action) {
//             state.items = state.items.filter(contact => contact.id !== action.payload)
//             return state;
//         }
//     },
// });

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;


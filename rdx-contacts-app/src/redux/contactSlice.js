import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: contactAdapter.addOne,
        addContacts: contactAdapter.addMany,
    },
})


export const {addContact,addContacts} = contactSlice.actions;

export default contactSlice.reducer;
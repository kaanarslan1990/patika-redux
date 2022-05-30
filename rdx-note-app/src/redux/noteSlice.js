import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const noteSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
        searchQuery: "",

    },
    reducers: {
        addNote: (state, action) => {
            state.items.push({
                "id": nanoid(),
                "note": action.payload.note,
                "color": action.payload.color,
            })
        },
        
        search: (state, action) => {
            state.searchQuery = action.payload
        }
    }

})

export const {addNote, search} = noteSlice.actions
export default noteSlice.reducer
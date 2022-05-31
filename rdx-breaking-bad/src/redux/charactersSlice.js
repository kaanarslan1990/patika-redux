import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;
const initialState = {
  items: [],
  isLoading: false,
  page: 0,
  hasNextPage:true,
};
export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (page) => {
    const res = await axios(
      `${
        process.env.REACT_APP_API_BASE_ENDPOINT
      }/characters?limit=${char_limit}&offset=${page * char_limit}`
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
     
      state.items =[...state.items, ...action.payload];     
      state.isLoading = false;
      state.page +=1;
      

      if(action.payload.length < 12) {
        state.hasNextPage = false;
      }
      
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.
  getItem('myFavorites') ? 
  JSON.parse(localStorage.getItem('myFavorites')):
  { favorites: [] };


const favoriteSlice = createSlice({
  name: 'myFavorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Get the new favorite from the payload
      const newFavorite = action.payload;
      // Add the new favorite to the favorite array
      state.favorites = [...state.favorites, newFavorite];
      // Update the local storage
      localStorage.setItem('myFavorites', JSON.stringify(state));
      return state;
    },
    removeFavorite: (state, action) => {
      // Find the index of the favorite to remove
      state.favorites = state.favorites.filter((favorite) => favorite._id !== action.payload);

      // Update the local storage
      localStorage.setItem('myFavorites', JSON.stringify(state));
      return state;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
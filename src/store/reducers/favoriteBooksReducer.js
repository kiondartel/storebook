import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingFavoriteBooks: true,
  data: [],
};

const sliceFavoriteBooks = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loadingFavoriteBooks = payload;
    },
    setfavoriteBooks: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setLoading, setfavoriteBooks } = sliceFavoriteBooks.actions;
export default sliceFavoriteBooks.reducer;

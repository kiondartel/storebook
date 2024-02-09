import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingAllBooks: true,
  data: [],
};

const sliceAllBooks = createSlice({
  name: "allBooks",
  initialState,
  reducers: {
    setLoadingBooks: (state, { payload }) => {
      state.loadingAllBooks = payload;
    },
    setAllBooks: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setLoadingBooks, setAllBooks } = sliceAllBooks.actions;
export default sliceAllBooks.reducer;

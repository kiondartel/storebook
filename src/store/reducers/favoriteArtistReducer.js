import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingFavoriteArtist: true,
  data: [],
};

const sliceFavoriteArtist = createSlice({
  name: "favoriteArtist",
  initialState,
  reducers: {
    setLoadingArtist: (state, { payload }) => {
      state.loadingFavoriteArtist = payload;
    },
    setFavoriteArtist: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setLoadingArtist, setFavoriteArtist } =
  sliceFavoriteArtist.actions;
export default sliceFavoriteArtist.reducer;

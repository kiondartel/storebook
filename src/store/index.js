import { configureStore } from "@reduxjs/toolkit";
import sliceFavoriteBooks from "./reducers/favoriteBooksReducer";
import sliceFavoriteArtist from "./reducers/favoriteArtistReducer";
import sliceAllBooks from "./reducers/allBooksReducer";
import sliceUser from "./reducers/userReducer";
const store = configureStore({
  reducer: {
    favoriteBooks: sliceFavoriteBooks,
    favoriteArtist: sliceFavoriteArtist,
    allBooks: sliceAllBooks,
    user: sliceUser,
  },
});

export default store;

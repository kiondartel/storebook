import { setfavoriteBooks, setLoading } from "../reducers/favoriteBooksReducer";
import { getFavoriteBooks } from "../../api/favoriteBooks_helper";

export const fetchFavoriteBooks = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const favoriteBooks = await getFavoriteBooks();
    dispatch(setfavoriteBooks(favoriteBooks));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};

import {
  setLoadingBooks,
  setAllBooks,
} from "../../store/reducers/allBooksReducer";
import { getAllBooks } from "../../api/libraryDisplay_helpers";

export const fetchAllBooks = () => async (dispatch) => {
  dispatch(setLoadingBooks(true));
  try {
    const allBooks = await getAllBooks();
    dispatch(setAllBooks(allBooks));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoadingBooks(false));
  }
};

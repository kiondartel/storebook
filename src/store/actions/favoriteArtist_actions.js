import {
  setLoadingArtist,
  setFavoriteArtist,
} from "../reducers/favoriteArtistReducer";
import { getFavoriteArtist } from "../../api/favoriteArtist_helper";

export const fetchFavoriteArtist = () => async (dispatch) => {
  dispatch(setLoadingArtist(true));
  try {
    const favoriteArtist = await getFavoriteArtist();
    dispatch(setFavoriteArtist(favoriteArtist));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoadingArtist(false));
  }
};

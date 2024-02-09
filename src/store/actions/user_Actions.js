import { setUser } from "../../store/reducers/userReducer";
import { getUser } from "../../api/user_helper";

export const fetchUser = () => async (dispatch) => {
  try {
    const user = await getUser();
    dispatch(setUser(user));
  } catch (error) {
    console.error(error);
  }
};

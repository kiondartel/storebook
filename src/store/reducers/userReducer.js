import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPicture: "",
};

const sliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userPicture = payload;
    },
  },
});

export const { setUser } = sliceUser.actions;
export default sliceUser.reducer;

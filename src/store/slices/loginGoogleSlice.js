import { createSlice } from "@reduxjs/toolkit";


const loginGoogleState = {
  isLoggedIn: false,
  error: false,
  credentials: {
    name: "",
    picture: "",
  },
};
const loginGoogleSlice = createSlice({
  name: "loginGoogle",
  initialState: loginGoogleState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.credentials.name = action.payload.name;
      state.credentials.picture = action.payload.picture;
    },
    loginFail(state) {
      state.error = true;
      state.isLoggedIn = false;
    },
  },
});

export const loginGoogleActions = loginGoogleSlice.actions;
export default loginGoogleSlice.reducer;

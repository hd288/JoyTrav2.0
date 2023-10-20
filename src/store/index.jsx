import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./slices/userLogin";
import userRegisterReducer from "./slices/userRegistration";
import showFormReducer from "./slices/showForm";
import loginGoogleReducer from "./slices/loginGoogleSlice";
const store = configureStore({
  reducer: {
    userLoginReducer,
    userRegisterReducer,
    showFormReducer,
    loginGoogle: loginGoogleReducer,
  },
});
export default store;

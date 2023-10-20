import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogleActions } from "../../store/slices/loginGoogleSlice";
import jwtDecode from "jwt-decode";

export default function GoogleLoginButton() {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const decode = jwtDecode(res.credential);
    const newUser = { name: decode.name, picture: decode.picture };

    dispatch(loginGoogleActions.login(newUser));

    localStorage.setItem("token", res.credential);

    alert(`Logged in successfully! Welcome ${newUser.name}`);
    window.location.reload();
  };

  const onError = () => {
    dispatch(loginGoogleActions.loginFail());
  };
  return (
    <>
      <GoogleLogin
        text="signin"
        theme="icon"
        onSuccess={onSuccess}
        onError={onError}
      />
    </>
  );
}
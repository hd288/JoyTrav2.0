import { BsXLg } from "react-icons/bs";
import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./index.scss";
import Login from "./login.jsx";
import Register from "./register.jsx";
import { useSelector } from "react-redux";

function LoginRegisterForm(props) {
  const [isLogin, setIsLogin] = useState(true);
  const registerInfo = useSelector((store) => store.userRegisterReducer);

  const handleSwitchPage = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    setIsLogin(registerInfo.loading);
  }, [registerInfo.loading]);

  return (
    <Modal {...props} size="xl" centered>
      <Modal.Header closeButton></Modal.Header>
      {isLogin ? (
        <Login handleSwitchPage={handleSwitchPage} />
      ) : (
        <Register handleSwitchPage={handleSwitchPage} />
      )}
    </Modal>
  );
}

export default LoginRegisterForm;

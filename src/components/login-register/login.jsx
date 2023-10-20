import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { Button, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoogleLoginButton from "../loginGoogle";
import { userLoginAction } from "../../store/slices/userLogin";
import api from "../../services/api";

function Login({ handleSwitchPage }) {
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://www.yeudalat.com/wp-content/uploads/2022/02/san-may-da-lat.jpg')",
    backgroundSize: "cover",
    height: "70vh",
  };

  // Logic:
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoginStore = useSelector((store) => store.userLoginReducer);
  const registeredUser = useSelector(
    (store) => store.userRegisterReducer.user || ""
  );

  console.log(users);

  const handleSubmit = (eventForm) => {
    eventForm.preventDefault();
    const inputEmail = eventForm.target.userEmail.value;
    const inputPassword = eventForm.target.userPassword.value;

    if (inputEmail === "" || inputPassword === "") {
      alert("Please fill in all the fields!");
      return;
    }

    const matchingUser = users.find((user) => user.email === inputEmail);

    if (!matchingUser) {
      alert("User not found! Please register or check your email.");
      return;
    }

    if (inputPassword !== matchingUser.password) {
      alert("Wrong password! Please enter the correct password.");
      return;
    }

    dispatch(
      userLoginAction.login({
        userEmail: inputEmail,
        userPassword: inputPassword,
      })
    );
    alert(
      `You're now logged in! Welcome ${userLoginStore.userInfor.firstname}!`
    );
    location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.user.findAllUser();
      setUsers(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userLoginStore.inforLogin === null) {
      if (localStorage.getItem("token")) {
        dispatch(
          userLoginAction.checkTokenLocal(localStorage.getItem("token"))
        );
      }
    } else {
      navigate("/");
    }
  }, [userLoginStore.inforLogin]);

  return (
    <MDBContainer fluid style={backgroundImageStyle}>
      <MDBRow className="px-2">
        <MDBCol
          md="5"
          className="text-center text-md-start my-5 d-none d-sm-block d-md-flex flex-column justify-content-center"
        >
          <h5 className="text-light  display-3 fw-bold ls-tight">
            The best place <br />
            <span className="text-light">to discover the world</span>
          </h5>

          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="7">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5 w-100">
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column justify-content-center"
              >
                <MDBInput
                  className="mb-4 w-100"
                  placeholder="Email"
                  id="form1"
                  type="email"
                  name="userEmail"
                  value={registeredUser.email}
                />

                <MDBInput
                  className="mb-4 w-100"
                  placeholder="Password"
                  id="form1"
                  type="password"
                  name="userPassword"
                  value={registeredUser.password}
                />

                <div className="d-flex justify-content-center mb-2">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                </div>

                <Button
                  variant="outline-secondary"
                  className={`w-100 ${window.innerWidth >= 576 ? "mb-4" : ""}`}
                  size="md"
                  type="submit"
                >
                  Login
                </Button>
              </form>

              <div className="text-center m-2">
                <p>
                  Don't have an account?
                  <u onClick={handleSwitchPage}> Register</u>
                </p>
              </div>

              <div className="text-center">
                <p>or join us with:</p>
                <Container className="d-flex justify-content-center gap-2">
                  {/* <GoogleLoginButton /> */}
                  <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faGoogle} />
                  </Button>
                  <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                </Container>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;

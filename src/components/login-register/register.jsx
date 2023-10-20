import { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import * as Yup from "yup";
import { Button, Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import { userRegisterAction } from "../../store/slices/userRegistration";
import api from "../../services/api";

function Register({ handleSwitchPage }) {
  const [users, setUsers] = useState([]);

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://www.yeudalat.com/wp-content/uploads/2022/02/san-may-da-lat.jpg')",
    backgroundSize: "cover",
    height: "70vh",
  };
  // Logic:
  const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required!"),
    lastName: Yup.string().required("Last Name is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters!")
      .required("Please do not leave this field empty!"),
    rePassword: Yup.string()
      .min(6, "Password must be at least 6 characters!")
      .required("Please do not leave this field empty!"),
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.user.findAllUser();
      setUsers(response.data);
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();

  const handleFormSubmit = async (values, actions) => {
    let newUser = {
      firstname: values.firstName,
      lastname: values.lastName,
      email: values.email,
      password: values.password,
      gender: "*",
      address: "*",
      avatar: "*",
      phone: "*",
      isAdmin: "false",
    };
    const isEmailTaken = users.some((user) => user.email === newUser.email);

    if (isEmailTaken) {
      alert("Email is already taken. Please use a different email.");
    } else {
      dispatch(userRegisterAction.register(newUser));
      alert("Registered Successfully! Let's log in ^^");
    }
  };
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
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: "",
                  rePassword: "",
                }}
                validationSchema={RegistrationSchema}
                onSubmit={(values) => handleFormSubmit(values)}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Container className="d-flex flex-row justify-content-start gap-2 p-0">
                      <Container className=" p-0">
                        <ErrorMessage
                          style={{ position: "absolute", bottom: "0" }}
                          name="firstName"
                          render={(msg) => <i className="text-danger">{msg}</i>}
                        />
                        <Field
                          type="text"
                          name="firstName"
                          wrapperClass="mb-2"
                          as={MDBInput}
                          placeholder="First Name"
                        />
                      </Container>

                      <Container className="p-0">
                        <ErrorMessage
                          name="lastName"
                          render={(msg) => <i className="text-danger">{msg}</i>}
                        />
                        <Field
                          type="text"
                          name="lastName"
                          as={MDBInput}
                          wrapperClass="mb-2"
                          placeholder="Last Name"
                        />
                      </Container>
                    </Container>

                    <ErrorMessage
                      name="email"
                      render={(msg) => <i className="text-danger">{msg}</i>}
                    />
                    <Field
                      type="email"
                      name="email"
                      as={MDBInput}
                      wrapperClass="mb-2"
                      placeholder="Email"
                    />

                    <ErrorMessage
                      name="password"
                      render={(msg) => <i className="text-danger">{msg}</i>}
                    />
                    <Field
                      type="password"
                      name="password"
                      as={MDBInput}
                      wrapperClass="mb-2"
                      placeholder="Password"
                    />

                    <ErrorMessage
                      name="rePassword"
                      render={(msg) => <i className="text-danger">{msg}</i>}
                    />
                    <Field
                      type="password"
                      name="rePassword"
                      as={MDBInput}
                      wrapperClass="mb-4"
                      placeholder="Re-enter Password"
                    />

                    <div className="d-flex justify-content-center mb-2">
                      <label>
                        <Field
                          type="checkbox"
                          name="subscribe"
                          as={MDBCheckbox}
                          id="flexCheckDefault"
                          label="Subscribe to our newsletter"
                        />
                      </label>
                    </div>

                    <Button
                      className={`w-100 ${
                        window.innerWidth >= 576 ? "mb-2" : ""
                      }`}
                      size="md"
                      type="submit"
                      variant="outline-secondary"
                    >
                      Register
                    </Button>
                  </Form>
                )}
              </Formik>

              <div className="text-center">
                <p>
                  Already have an account?{" "}
                  <u onClick={handleSwitchPage}> Login</u>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;

import React, { useState } from "react";
import "./Navbar.scss";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Image,
  Container,
  Form,
  Offcanvas,
  Dropdown,
} from "react-bootstrap";
import {
  BsSearch,
  BsBoxArrowInRight,
  BsBoxArrowRight,
  BsPersonCircle,
  BsTrainFrontFill,
} from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import LoginRegisterForm from "../login-register";

export default function NavBar() {
  const token = localStorage.getItem("token") || "";
  const [navigate, setNavigate] = useState(false);

  const handleLogout = () => {
    const confirmed = window.confirm(
      "You will be located back to Home Page. Are you sure you want to log out?"
    );
    if (confirmed) {
      localStorage.removeItem("token");

      setNavigate(!navigate);
    }
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="mb-1">
        <Container fluid>
          <Image
            style={{ width: "150px", border: "none" }}
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/367784816_144020932079229_7634449212922484509_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=z_0YNBshrTcAX9DxNZD&_nc_ht=scontent.fsgn2-8.fna&oh=03_AdS6CEoiuLFjkF5ngksI7QVVt_a2v0y-n5tgnJOBx8MMrg&oe=65715D8B"
            thumbnail
          />
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                JoyTrav
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-flex flex-column justify-content-center flex-grow-1">
                <Nav className="d-flex justify-content-center gap-3">
                  <Link className="customNavStyle" to="/">
                    Home
                  </Link>
                  <Link className="customNavStyle" to="/blogs">
                    Blogs
                  </Link>
                  <Link className="customNavStyle" to="/tours">
                    Tours
                  </Link>
                  <Link className="customNavStyle" to="/services">
                    Services
                  </Link>
                </Nav>

                {/* <Form className="d-flex justify-content-center">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 w-25"
                    aria-label="Search"
                  />
                  <Button
                    className="d-flex align-items-center"
                    variant="outline-secondary"
                  >
                    <BsSearch />
                  </Button>
                </Form> */}
              </Nav>

              <div className="d-flex justify-content-between align-items-center gap-1">
                {token ? (
                  <>
                    <Link to="/cart">
                      <Button className="customButton d-flex align-items-center">
                        <BsTrainFrontFill />
                      </Button>
                    </Link>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="customButton d-flex align-items-center h-100"
                        id="dropdown-basic"
                      >
                        <BsPersonCircle />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className="customDropdown d-flex justify-content-center align-items-center">
                          <Link className="customDropdown" to="/account">Account</Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="customDropdown d-flex justify-content-center align-items-center"
                        >
                          <Link className="customDropdown" to="#">Settings</Link>
                        </Dropdown.Item>
                        <NavDropdown.Divider />
                        <Dropdown.Item
                          onClick={handleLogout}
                          className="d-flex justify-content-center align-items-center"
                        >
                          Log out &nbsp; <BsBoxArrowRight />
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <Button
                    className="d-flex align-items-center"
                    variant="outline-primary"
                    onClick={() => setModalShow(true)}
                  >
                    <BsBoxArrowInRight />
                  </Button>
                )}
                <LoginRegisterForm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {navigate ? <Navigate to="/" replace={true} /> : ""}
    </>
  );
}

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import CryptoJS from "crypto-js";
import EditMode from "./EditMode";
import AccInfo from "./AccInfo";
import api from "../../services/api";
import { NavLink } from "react-router-dom";

export default function Account() {
  const token = localStorage.getItem("token") || "";
  const [user, setUser] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    mobile: "",
    address: "",
    avatar: "",
  });
  const decryptedUser = CryptoJS.AES.decrypt(
    token,
    import.meta.env.VITE_APP_JWT_KEY
  ).toString(CryptoJS.enc.Utf8);

  useEffect(() => {
    const fetchData = async () => {
      const tokenUser = JSON.parse(decryptedUser);
      const usersResponse = await api.user.findAllUser();
      const currentUser = usersResponse.data.find(
        (item) => item.id === tokenUser.id
      );

      setUser(currentUser);
      setUserInfo(currentUser);
    };
    fetchData();
  }, [decryptedUser]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleInputChange = (name, value) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    const edited = await api.user.editUser(user.id, userInfo);

    setIsEditMode(false);
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Container className="py-5">
        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Container className="d-flex justify-content-center">
                  <Image
                    roundedCircle
                    fluid
                    src={
                      userInfo.avatar != "*"
                        ? userInfo.avatar
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="avatar"
                    className="object-fit-cover"
                    style={{ width: "200px", height: "200px" }}
                  />
                </Container>
                <h5 className="my-3">
                  {userInfo.firstname} {userInfo.lastname}
                </h5>

                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-center align-items-center p-2">
                    <p className="mb-0">
                      {" "}
                      {userInfo.isAdmin != "false" ? (
                        <Button disabled variant="warning text-white">
                          Admin
                        </Button>
                      ) : (
                        <Button disabled variant="warning text-white">
                          User
                        </Button>
                      )}
                    </p>
                  </li>
                  <li className="list-group-item d-flex justify-content-center align-items-center p-3">
                    <p className="mb-0">
                      {userInfo.isAdmin == "true" ? (
                        <NavLink target="_blank" to="/admin">
                          Administration Page
                        </NavLink>
                      ) : (
                        "Your Posts Demo"
                      )}
                    </p>
                  </li>
                  {/* <li className="list-group-item d-flex justify-content-center align-items-center p-3">
                    <p className="mb-0">Notifications</p>
                  </li> */}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} className="d-flex flex-column">
            {isEditMode ? (
              <EditMode user={userInfo} onInputChange={handleInputChange} />
            ) : (
              <AccInfo user={userInfo} />
            )}
            {isEditMode ? (
              <Button
                variant="primary"
                className="align-self-end mx-3"
                onClick={handleSaveClick}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                className="align-self-end mx-3"
                onClick={handleEditClick}
              >
                Edit Profile
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

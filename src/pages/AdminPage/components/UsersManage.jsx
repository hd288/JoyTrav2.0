import React, { useEffect, useState } from "react";
import NavAdmin from "../NavAdmin";
import { Button, Container, Table } from "react-bootstrap";
import { BsPencilSquare, BsXLg } from "react-icons/bs";
import api from "../../../services/api";
import ItemDetail from "../ItemDetail";

export default function UsersManage() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.user.findAllUser();
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    let confirmed = confirm("Are you sure you want to delete this data?");
    if (confirmed) {
      api.user.deleteUser(id);
      location.reload();
    }
  };

  const openModal = (booking) => {
    setSelectedData(booking);
    setModalShow(true);
  };

  const handleInputChange = (name, value) => {
    setSelectedData({
      ...selectedData,
      [name]: value,
    });
  };
  const handleSaveClick = async () => {
    const edited = await api.user.editUser(selectedData.id, selectedData);
    setModalShow(false);
    location.reload();
  };
  return (
    <>
      <NavAdmin />
      <Container>
        <h4 className="text-center p-3">Users Manage</h4>
        <Table striped bordered hover variant="light">
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th style={{ width: "100px" }}>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.isAdmin == "true" ? "Admin" : "User"}</td>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Container className="d-flex flex-row gap-2 align-items-center w-100  p-0">
                    <Button
                      variant="warning"
                      className="w-100"
                      onClick={() => openModal(user)}
                    >
                      <BsPencilSquare />
                    </Button>
                    {user.isAdmin == "true" ? (
                      ""
                    ) : (
                      <Button
                        onClick={() => handleDelete(user.id)}
                        variant="danger"
                        className="w-100"
                      >
                        <BsXLg />
                      </Button>
                    )}
                  </Container>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {selectedData && (
          <ItemDetail
            data={selectedData}
            show={modalShow}
            handleSaveClick={handleSaveClick}
            onInputChange={handleInputChange}
            onHide={() => setModalShow(false)}
          />
        )}
      </Container>
    </>
  );
}

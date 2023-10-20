import React, { useEffect, useState } from "react";
import NavAdmin from "../NavAdmin";
import { Button, Container, Table } from "react-bootstrap";
import { BsPencilSquare, BsXLg } from "react-icons/bs";
import api from "../../../services/api";
import ItemDetail from "../ItemDetail";

export default function BookingsManage() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.manageBooking.findAllBooking();
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    let confirmed = window.confirm("Are you sure you want to delete this data?");
    if (confirmed) {
      api.manageBooking.deleteBooking(id);
      window.location.reload();
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
    const edited = await api.manageBooking.editBooking(selectedData.id, selectedData);
    setModalShow(false);
    location.reload()
  };
  return (
    <>
      <NavAdmin />

      <Container>
        <h4 className="text-center p-3">Booking Manage</h4>
        <Table striped bordered hover variant="light">
          <thead className="text-center">
            <tr>
              <th>Tour ID</th>
              <th>User's Name</th>
              <th>Email</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Address</th>
              <th>Payment</th>
              <th>Departure Date</th>
              <th style={{ width: "100px" }}>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.tourId}</td>
                <td>
                  {booking.firstname} {booking.lastname}
                </td>
                <td>{booking.userEmail}</td>
                <td>{booking.adults}</td>
                <td>{booking.children ? booking.children : "0"}</td>
                <td>{booking.address}</td>
                <td>{booking.payment}</td>
                <td>{booking.selectedDate.slice(0, 10)}</td>
                <td>
                  <Container className="d-flex flex-row gap-2 align-items-center w-100  p-0">
                    <Button
                      variant="warning"
                      className="w-100"
                      onClick={() => openModal(booking)}
                    >
                      <BsPencilSquare />
                    </Button>
                    <Button
                      onClick={() => handleDelete(booking.id)}
                      variant="danger"
                      className="w-100"
                    >
                      <BsXLg />
                    </Button>
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

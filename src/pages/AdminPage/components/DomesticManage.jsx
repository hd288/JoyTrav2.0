import React, { useEffect, useState } from "react";
import NavAdmin from "../NavAdmin";
import { Button, Container, Image, Table } from "react-bootstrap";
import { BsPencilSquare, BsXLg } from "react-icons/bs";
import api from "../../../services/api";
import ItemDetail from "../ItemDetail";

export default function DomesticManage() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.tours.findAllDom();
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    let confirmed = confirm("Are you sure you want to delete this data?");
    if (confirmed) {
      api.tours.deleteInt(id);
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
    const edited = await api.tours.editDom(selectedData.id, selectedData);
    setModalShow(false);
    location.reload()
  };
  return (
    <>
      <NavAdmin />
      <Container>
        <h4 className="text-center p-3">Domestic Tours Manage</h4>
        <Table striped bordered hover variant="light">
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th>Main Picture</th>
              <th>Title</th>
              <th>Departure</th>
              <th>Price ($)</th>
              <th>Slots</th>
              <th>Type</th>
              <th style={{ width: "100px" }}>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((tour) => (
              <tr  key={tour.id}>
                <td>{tour.id}</td>
                <td className="p-1">
                  <Image
                    src={tour.picture}
                    className="w-50"
                    alt="Tour Main Picture"
                  />
                </td>
                <td>{tour.title}</td>
                <td>{tour.departure}</td>
                <td>{tour.price}</td>
                <td>{tour.slots}</td>
                <td>{tour.type}</td>
                <td>
                  <Container className="d-flex flex-row gap-2 align-items-center w-100  p-0">
                    <Button variant="warning" className="w-100"  onClick={() => openModal(tour)}>
                      <BsPencilSquare />
                    </Button>
                    <Button variant="danger" className="w-100">
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

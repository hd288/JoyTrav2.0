import React from "react";
import { Row, Col, Container, ListGroup, Image, Button } from "react-bootstrap";
import api from "../../services/api";

export default function TourItem({ booking }) {
  const customItem = {
    color: "#4b548b",
    backgroundColor: "#FFF",
    border: "1px solid black",
    borderRadius: "15px",
    marginBottom: "30px",
  };

  const handleCancellation = (id) => {
    let confirmed = confirm("Are you sure you want to cancel this tour?");
    if (confirmed) {
      api.manageBooking.deleteBooking(id);
      location.reload();
    }
  };

  return (
    <Row className="py-2 px-5" style={customItem}>
      <Col className="p-0">
        <h5 className="text-center">Tour summary</h5>
        <Container className="p-0 d-flex flex-row">
          <ListGroup variant="flush">
            <Image
              src={booking.tour.picture}
              className="w-100 object-fit-cover"
              alt="Image"
            />
            <ListGroup.Item>Tour ID: {booking.tour.id}</ListGroup.Item>
            <ListGroup.Item> {booking.tour.title}</ListGroup.Item>
            <ListGroup.Item>{booking.tour.type}</ListGroup.Item>
            <ListGroup.Item>Departure: {booking.tour.departure}</ListGroup.Item>

            <ListGroup.Item>
              Price: {`$${booking.tour.price} /person`}
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Col>

      <Col className="p-0 d-flex flex-column justify-content-between">
        <Container>
          <h5 className="text-center">Your information</h5>
          <ListGroup variant="flush" className="px-5">
            <ListGroup.Item>
              Mr/Mrs: {booking.firstname} {booking.lastname}
            </ListGroup.Item>
            <ListGroup.Item>Phone: {booking.phone}</ListGroup.Item>
            <ListGroup.Item>Address: {booking.address}</ListGroup.Item>
            <ListGroup.Item>
              Tour Schedule: {booking.selectedDate.slice(0, 10)}
            </ListGroup.Item>
            <ListGroup.Item>
              Participants: {booking.adults} adult(s) &{" "}
              {booking.children || "0"} child(s)
            </ListGroup.Item>
            <ListGroup.Item className=" d-flex flex-row gap-3 align-items-center">
              <h6 className="text-decoration-underline">Payment:</h6>
              {booking.payment ? (
                <Button variant="success" disabled className="d-flex">
                  <span>$ {booking.payment} </span> &nbsp;
                  <span>Success</span>
                </Button>
              ) : (
                <Button variant="danger" disabled>
                  {booking.payment}$ Pending
                </Button>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Container>
        <Container className="d-flex flex-row gap-3 justify-content-end pb-3">
          <Button variant="outline-primary d-none">Edit Info</Button>
          <Button
            variant="outline-danger"
            onClick={() => handleCancellation(booking.id)}
          >
            Cancel this tour
          </Button>
        </Container>
      </Col>
      <hr />
    </Row>
  );
}

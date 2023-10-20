import api from "../../../services/api";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { BsTicketPerforated } from "react-icons/bs";

import React, { useState } from "react";
import CreditCard from "./paymethods/CreditCard";
import BankTransfer from "./paymethods/BankTransfer";
import Cash from "./paymethods/Cash";
import Paypal from "./paymethods/Paypal";

export default function Checkout(props) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Credit Card");
  const handleRadioChange = (method) => {
    setSelectedPaymentMethod(method);
  };
  const paymentMethods = {
    "Credit Card": null,
    Cash: null,
    "Bank Transfer": null,
    PayPal: null,
  };

  const bookingData = props.bookingInfo;
  const tourData = props.tour;
  const date = new Date(bookingData.selectedDate);

  const handleBooking = async () => {
    await api.manageBooking.createBooking(bookingData);
    alert("Payment success! Thank you for choosing JoyTrav! <3");
    location.reload();
  };

  

  const customTextColor = {
    color: "#4b548b",
  };
  return (
    <>
      <Modal
        {...props}
        size="xl"
        dialogClassName="modal-100w"
        centered
        style={customTextColor}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="p-2">
            <Col className="p-0">
              <h5 className="text-center">Tour summary</h5>
              <Container className="p-0 d-flex flex-row">
                <Image
                  src={tourData.picture}
                  className="w-50 object-fit-cover"
                  alt="Image"
                />
                <ListGroup variant="flush">
                  <ListGroup.Item>Tour ID: {tourData.id}</ListGroup.Item>
                  <ListGroup.Item> {tourData.title}</ListGroup.Item>
                  <ListGroup.Item>{tourData.type}</ListGroup.Item>
                  <ListGroup.Item>
                    Departure: {tourData.departure}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Price: {`${tourData.price}$/person`}
                  </ListGroup.Item>
                </ListGroup>
              </Container>
            </Col>

            <Col className="p-0">
              <h5 className="text-center">Your informations</h5>
              <ListGroup variant="flush" className="px-5">
                <ListGroup.Item>
                  Mr/Mrs: {bookingData.firstname} {bookingData.lastname}
                </ListGroup.Item>
                <ListGroup.Item>Phone: {bookingData.phone}</ListGroup.Item>
                <ListGroup.Item>Address: {bookingData.address}</ListGroup.Item>
                <ListGroup.Item>
                  Tour Schedule: {date.toDateString()}
                </ListGroup.Item>
                <ListGroup.Item>
                  Participants: {bookingData.adults} adult(s) & &nbsp;
                  {bookingData.children || "0"} child(s)
                </ListGroup.Item>
                <ListGroup.Item className="text-danger text-decoration-underline">
                  <h5>Payment summary: {bookingData.payment}$</h5>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Container className="d-flex flex-row justify-content-between gap-2 my-3 px-5">
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Have a promo code?"
              />
              <Button variant="warning text-white" className="w-25">
                <BsTicketPerforated />
              </Button>
            </Container>
            <h5 className="pb-3 text-center text-decoration-underline">
              Choose a Payment Method
            </h5>
            <Col className="d-flex flex-row justify-content-between">
              <Container className="w-50" style={{ minHeight: "300px" }}>
                {Object.keys(paymentMethods).map((method) => (
                  <Container key={method}>
                    <Form.Check
                      type="radio"
                      label={method}
                      name="paymentMethod"
                      checked={selectedPaymentMethod === method}
                      onChange={() => handleRadioChange(method)}
                    />
                  </Container>
                ))}
              </Container>
              <Container>
                {selectedPaymentMethod === "Credit Card" && <CreditCard />}
                {selectedPaymentMethod === "Bank Transfer" && <BankTransfer />}
                {selectedPaymentMethod === "Cash" && <Cash />}
                {selectedPaymentMethod === "PayPal" && <Paypal />}
              </Container>
            </Col>
          </Row>
        </Modal.Body>

        <Container className="my-5 d-flex justify-content-center align-items.center">
          <Button onClick={handleBooking} variant="primary" className="w-50">
            Checkout
          </Button>
        </Container>
      </Modal>
    </>
  );
}

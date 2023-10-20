import { useEffect, useState } from "react";
import {
  Carousel,
  Container,
  Image,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { BsTicketPerforated } from "react-icons/bs";
import CryptoJS from "crypto-js";
import DatePickerComponent from "../datepicker/DatePicker";
import Checkout from "./Checkout";
import api from "../../../services/api";

export default function TourDetails(props) {
  const token = localStorage.getItem("token") || "";
  const [bookings, setBookings] = useState([]);

  const [checkoutShow, setCheckoutShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [adultsNo, setAdultsNo] = useState("");
  const [childNo, setChildNo] = useState("");
  const [bookingInfo, setBookingInfo] = useState({});

  const decryptedUser = CryptoJS.AES.decrypt(
    token,
    import.meta.env.VITE_APP_JWT_KEY
  ).toString(CryptoJS.enc.Utf8);

  const handleSubmit = (e) => {
    e.preventDefault();
    let payment;

    let matchingBooking = bookings.some(
      (booking) =>
        booking.userEmail == JSON.parse(decryptedUser).email &&
        booking.tourId == props.tour.id
    );

    if (childNo === "" || childNo == 0) {
      payment = props.tour.price * parseInt(adultsNo);
    } else {
      payment =
        props.tour.price * parseInt(adultsNo) +
        props.tour.price * parseInt(childNo) * 0.7;
    }

    let booking = {
      userEmail: JSON.parse(decryptedUser).email,
      tourId: props.tour.id,
      selectedDate: selectedDate,
      lastname: lastName,
      firstname: firstName,
      address: address,
      phone: phone,
      adults: adultsNo,
      children: childNo,
      payment: payment,
    };

    if (matchingBooking) {
      alert(
        "You have already reserved this tour! You have the option to modify the details or cancel the reservation in your cart."
      );
      return;
    } else {
      setBookingInfo(booking);
    }
    setCheckoutShow(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const bookingsResponse = await api.manageBooking.findAllBooking();
      setBookings(bookingsResponse.data);
    };

    fetchData();
  }, []);
  
  const customTextColor = {
    color: "#4b548b",
  };

  return (
    <>
    
      <Checkout
        {...props}
        bookingInfo={bookingInfo}
        show={checkoutShow}
        onHide={() => setCheckoutShow(false)}
      />
      <Modal
        {...props}
        size="xl"
        dialogClassName="modal-100w"
        centered
        style={customTextColor}
      >
        <Modal.Header closeButton>
          <Container className="d-flex justify-content-between align-items-center">
            <Modal.Title>{props.tour.title}</Modal.Title>
            <h5 className="text-danger">{props.tour.price}$/person</h5>
          </Container>
        </Modal.Header>
        <Modal.Body className="d-flex p-0">
          <Carousel className="w-50 px-2">
            <Carousel.Item interval={1500}>
              <Image
                src={props.tour.picture}
                className="w-100"
                alt={"Main picture"}
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <Image
                src={props.tour.picture1}
                className="w-100"
                alt={"Sub picture 1"}
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <Image
                src={props.tour.picture2}
                className="w-100"
                alt={"Sub picture 2"}
              />
            </Carousel.Item>
          </Carousel>
          <Container className="w-50 d-flex flex-column justify-content-between">
            <Container>
              <span className="d-flex align-items-center text-danger pb-3">
                <BsTicketPerforated /> &nbsp; Tour Code: {props.tour.id}
              </span>
              <p>
                <b>Departure:</b> {props.tour.departure} <br />
                <b>Days:</b> {props.tour.type}
              </p>
              <p dangerouslySetInnerHTML={{ __html: props.tour.details.replace(/(?:\r\n|\r|\n)/g, '<br>') }} />
            </Container>
            <i className="text-end text-danger px-5">
              30% discount for children
            </i>
          </Container>
        </Modal.Body>
        <Container className="py-3 d-flexflex-column">
          <h5 className=" text-center">Book this tour now:</h5>
          <Form onSubmit={handleSubmit} className="d-flex flex-column">
            <Container className="p-3 m-0 gap-2 d-flex flex-row justify-content-between">
              <Form.Group>
                <Form.Label>Contact Info:</Form.Label>
                <Container className="d-flex flex-row p-0 pb-2">
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Container>
                <Form.Control
                  className="mb-2"
                  type="number"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="w-25">
                <Form.Label>More details:</Form.Label>
                <DatePickerComponent onDateChange={setSelectedDate} />
                <Form.Control
                  type="number"
                  placeholder="Adults (age >13)"
                  className="my-2"
                  min={1}
                  value={adultsNo}
                  onChange={(e) => setAdultsNo(e.target.value)}
                  required
                />
                <Form.Control
                  type="number"
                  placeholder="Children (age 3-12)"
                  min={0}
                  value={childNo}
                  onChange={(e) => setChildNo(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="w-25">
                <Form.Label>Notes:</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Container>
            <Button variant="link" className="align-self-end mb-3">
              Regarding this tour's payments, cancellations, and refunds.
            </Button>
            {token ? (
              <Button
                variant="outline-primary"
                className="align-self-center w-50"
                type="submit"
                // onClick={props.onHide}
              >
                Proceed to checkout
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                className="align-self-center w-50"
              >
                Log in to book this tour
              </Button>
            )}
          </Form>
        </Container>
      </Modal>
    </>
  );
}

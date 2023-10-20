import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import CryptoJS from "crypto-js";
import api from "../../services/api";

import TourItem from "./TourItem";

export default function Cart() {
  const token = localStorage.getItem("token") || "";

  const [user, setUser] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [tours, setTours] = useState([]);

  const decryptedUser = CryptoJS.AES.decrypt(
    token,
    import.meta.env.VITE_APP_JWT_KEY
  ).toString(CryptoJS.enc.Utf8);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = JSON.parse(decryptedUser);
      const intTours = await api.tours.findAllInt();
      const domTours = await api.tours.findAllDom();
      const allTours = [...intTours.data, ...domTours.data];
      const bookingsResponse = await api.manageBooking.findAllBooking();

      setTours(allTours);
      setUser(userResponse);
      setBookings(bookingsResponse.data);
    };
    fetchData();
  }, [decryptedUser]);

  useEffect(() => {
    const filteredBookings = bookings.filter(
      (booking) => booking.userEmail === user.email
    );
    const bookingsWithTours = filteredBookings.map((booking) => {
      const tour = tours.find((tour) => tour.id === booking.tourId);
      return {
        ...booking,
        tour,
      };
    });
    setFilteredBookings(bookingsWithTours);
  }, [bookings, tours, user]);

  const customTextColor = {
    color: "#4b548b",
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#6dc8e2" }}
        className="d-flex flex-column justify-content-center"
      >
        <h3 className="py-3 text-center" style={customTextColor}>
          Your Reservations
        </h3>
        <Container className="d-flex justify-content-center flex-column">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
              <TourItem key={index} booking={booking} />
            ))
          ) : (
            <>
              <Container className="d-flex justify-content-center">
                <Image
                  src="https://www.shutterstock.com/shutterstock/videos/1081610069/thumb/4.jpg?ip=x480"
                  className="w-50"
                  alt="Empty Cart Image"
                />
              </Container>
              <h4 className="text-center" style={customTextColor}>
                Your adventure awaits! <br /> Let's explore our amazing tours in the
                Tours Section!
              </h4>
            </>
          )}
        </Container>
      </div>
    </>
  );
}

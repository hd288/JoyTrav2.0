import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Filtering from "./Tour/Filtering";
import Tour from "./Tour/Tour";
import api from "../../services/api";
import NotFound from "../NotFound";

export default function International() {
  const [filteredTour, setFilteredTour] = useState([]); // Filtered list
  const [searchValue, setSearchValue] = useState(" ");
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(10000);

  const [listTour, setListTour] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.tours.findAllInt();
      setListTour(response.data);
      setFilteredTour(response.data); // Initialize filtered list with all tours
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Apply filters to the listTour and update filteredTour
    const filteredResults = listTour.filter((item) => {
      const titleMatch = item.title
        .toLowerCase()
        .includes(searchValue.toLowerCase().trim(" "));
      const priceMatch =
        parseInt(item.price) >= minValue && parseInt(item.price) <= maxValue;
      return titleMatch && priceMatch;
    });

    if (!minValue || !maxValue || !searchValue) {
      setFilteredTour(listTour);
      setMinValue(1);
      setMaxValue(10000);
      setSearchValue(" ");
    } else {
      setFilteredTour(filteredResults);
    }
  }, [listTour, searchValue, minValue, maxValue]);

  return (
    <div className="px-5 mx-5">
      <Row>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-end position-relative"
        >
          <Container className="d-flex justify-content-end w-100">
            <Filtering
              minValue={minValue}
              maxValue={maxValue}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setMaxValue={setMaxValue}
              setMinValue={setMinValue}
            />
          </Container>
        </Col>
        <Col xs={12} md={8}>
          <Container className="py-5 px-0 text-center text-secondary h-100">
            {filteredTour.length > 0 ? (
              filteredTour.map((tour) => <Tour key={tour.id} tour={tour} />)
            ) : (
              <NotFound />
            )}
          </Container>
        </Col>
      </Row>
    </div>
  );
}

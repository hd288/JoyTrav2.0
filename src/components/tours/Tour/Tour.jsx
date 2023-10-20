import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import TourDetails from "./TourDetails";

export default function Tour({ tour }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <TourDetails
        tour={tour}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* --------- */}
      <Container className="m-0 d-flex flex-row justify-content-between">
        <Container className="text-start m-2 d-flex flex-column justify-content-between">
          <Container>
            <h3>{tour.title}</h3>
            <p className="pt-2 pb-4">{tour.intro}</p>
          </Container>
          <Container className="d-flex  justify-content-between bottom-0 start-0">
            <h4 className="text-danger">{tour.price} $</h4>
            <Button variant="outline-primary" onClick={() => setModalShow(true)}>
              Tour details
            </Button>
          </Container>
        </Container>

        <Container >
          <Row className="w-75  m-0 pb-2">
            <Col>
              <Image
                src={tour.picture}
                alt={"Main picture"}
                className="w-100 h-100"
                rounded
                fluid
              />
            </Col>
          </Row>
          <Container className="d-flex flex-row gap-2 w-75 m-0">
            <Col>
              <Image
                src={tour.picture1}
                alt={"Sub-pic 1"}
                className="w-100 h-100"
                rounded
                fluid
              />
            </Col>
            <Col>
              <Image
                src={tour.picture2}
                alt={"Sub-pic 2"}
                className="w-100 h-100"
                rounded
                fluid
              />
            </Col>
          </Container>
        </Container>
      </Container>
      <hr className="w-75" />
    </>
  );
}

import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function AccInfo(props) {
  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col sm={3}>
              <p className="mb-0">Full Name</p>
            </Col>
            <Col sm={9}>
              <p className="text-muted mb-0">
                {props.user.firstname} {props.user.lastname}
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3}>
              <p className="mb-0">Status</p>
            </Col>
            <Col sm={9}>
              <p className="text-muted mb-0">Active</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3}>
              <p className="mb-0">Gender</p>
            </Col>
            <Col sm={9}>
              <p className="text-muted mb-0">{props.user.gender}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3}>
              <p className="mb-0">Email</p>
            </Col>
            <Col sm={9}>
              <p className="text-muted mb-0">{props.user.email}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3}>
              <p className="mb-0">Phone</p>
            </Col>
            <Col sm={9}>
              <p className="text-muted mb-0">{props.user.phone}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3}>
              <p className="mb-0">Address</p>
            </Col>
            <Col sm={9}>
              <p className="text-muted mb-0">{props.user.address}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

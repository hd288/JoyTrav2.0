import React from "react";
import { Card, Form, Col, Row } from "react-bootstrap";

export default function EditMode(props) {
  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <Form>
            <Row>
              <Col sm={3}>
                <Form.Label>Full Name</Form.Label>
              </Col>
              <Col sm={9} className="d-flex flex-row gap-2">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={props.user.firstname}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    props.onInputChange(name, value);
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  value={props.user.lastname}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    props.onInputChange(name, value);
                  }}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Form.Label>Gender</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="tel"
                  placeholder="Gender"
                  name="gender"
                  value={props.user.gender}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    props.onInputChange(name, value);
                  }}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  disabled
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={props.user.email}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    props.onInputChange(name, value);
                  }}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Form.Label>Phone</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={props.user.phone}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    props.onInputChange(name, value);
                  }}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Form.Label>Address</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={props.user.address}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    props.onInputChange(name, value);
                  }}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={3}>
                <Form.Label>Avatar Link</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Link to your avatar picture"
                  name="avatar"
                  value={props.user.avatar}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    props.onInputChange(name, value);
                  }}
                />
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

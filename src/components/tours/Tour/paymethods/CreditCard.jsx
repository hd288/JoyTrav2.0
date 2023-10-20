import React from "react";
import { Card, Container, Form } from "react-bootstrap";

export default function CreditCard() {
  return (
    <Card className="p-3">
      <Form className="d-flex flex-column justify-content-center">
        <Form.Group className="d-flex flex-row gap-3 justify-content-center py-2">
          <Form.Check
            type="radio"
            label="Visa"
            name="creditCardType"
            value="Visa"
          />
          <Form.Check
            type="radio"
            label="MasterCard"
            name="creditCardType"
            value="MasterCard"
          />
          <Form.Check
            type="radio"
            label="JCB"
            name="creditCardType"
            value="JCB"
          />
        </Form.Group>
        <Form.Group className="d-flex flex-column gap-3">
          <Form.Control type="number" placeholder="Enter card number" />
          <Form.Control type="text" placeholder="Enter card holder's name" />
          <Container className="d-flex flex-row p-0 gap-2">
            <Form.Control type="number" placeholder="MM/YY" />
            <Form.Control type="number" placeholder="Enter CVV" />
          </Container>
        </Form.Group>
      </Form>
    </Card>
  );
}

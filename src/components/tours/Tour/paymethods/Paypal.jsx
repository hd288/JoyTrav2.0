import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

export default function Paypal() {
  
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>PayPal Payment</Card.Title>
          <Card.Text>
            To complete your payment using PayPal, please follow these steps:
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Log in to your PayPal account.</ListGroup.Item>
            <ListGroup.Item>Select 'Send Money' or 'Pay'.</ListGroup.Item>
            <ListGroup.Item>
              Enter the recipient's email: payment@company.com
            </ListGroup.Item>
            <ListGroup.Item>
              Enter the payment amount and currency.
            </ListGroup.Item>
            <ListGroup.Item>
              Choose the payment type (Goods/Services).
            </ListGroup.Item>
            <ListGroup.Item>
              Add any necessary notes or references.
            </ListGroup.Item>
            <ListGroup.Item>Review and confirm the payment.</ListGroup.Item>
          </ListGroup>
          <Card.Text>
            After you've completed the payment, please allow some time for the
            payment to be processed. You'll receive a confirmation email once
            the transaction is successful. If you have any questions or need
            assistance, feel free to contact our support team at
            support@company.com.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

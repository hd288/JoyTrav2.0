import { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ItemDetail(props) {
  const propertyNames = [
    "firstname",
    "lastname",
    "email",
    "address",
    "avatar",
    "phone",
    "isAdmin",
    "adults",
    "children",
    "payment",
    "selectedDate",
    "userEmail",
    "departure",
    "details",
    "intro",
    "picture",
    "picture1",
    "picture2",
    "price",
    "slots",
    "title",
    "type",
  ];

  const validationRegex = {
    // avatar: /^[A-Za-z0-9\s.]+$/,
    // payment: /^[A-Za-z\s]+$/,
    // selectedDate: /^\d{4}-\d{2}-\d{2}$/,
    // type: /^[A-Za-z\s]+/,
    firstname: /^[\s\S]+$/, // Allows any characters, including spaces and newlines
    lastname: /^[\s\S]+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    address: /^[\s\S]+$/,
    phone: /^\d{10}$/, // Assuming a 10-digit phone number
    adults: /^\d+$/,
    isAdmin: /^(true|false)$/,
    children: /^\d+$/,
    userEmail: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    departure: /^[\s\S]+$/,
    details: /^[\s\S]+$/,
    intro: /^[\s\S]+$/,
    // picture: /^[A-Za-z0-9\s.]+$/,
    // picture1: /^[A-Za-z0-9\s.]+$/,
    // picture2: /^[A-Za-z0-9\s.]+$/,
    price: /^\d+(\.\d{1,2})?$/, // Accepts positive numbers with up to 2 decimal places
    slots: /^\d+$/,
    // title: /^[A-Za-z0-9\s.-]+$/,
  };

  const [error, setError] = useState(null);

  const handleSaveClick = () => {
    let hasError = false;
    for (const propertyName of propertyNames) {
      if (propertyName in validationRegex) {
        const value = props.data[propertyName];
        if (value && !validationRegex[propertyName].test(value)) {
          setError(
            `********** INVALID ${propertyName.toUpperCase()} !!! **********`
          );
          hasError = true;
        }
      }
    }
    if (hasError) {
      setTimeout(() => {
        setError(null); // Clear the error message after 2 seconds
      }, 2000);
    } else {
      props.handleSaveClick();
    }
  };
  


  const propertyElements = propertyNames.map((propertyName) => {
    if (props.data[propertyName]) {
      return (
        <InputGroup className="m-2" key={propertyName}>
          <InputGroup.Text style={{ minWidth: "150px" }}>
            {propertyName.toUpperCase()}
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            placeholder="Enter data"
            name={propertyName}
            value={props.data[propertyName]
            }
            onChange={(e) => {
              const { name, value } = e.target;
              setError(null);
              props.onInputChange(name, value || " ");
            }}
          />
        </InputGroup>
      );
    }
    return null;
  });

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Board</Modal.Title>
      </Modal.Header>
      <Container className="d-flex flex-column justify-content-center">
        {propertyElements}
      </Container>
      <Modal.Footer>
        <Button onClick={handleSaveClick}>Save</Button>
      </Modal.Footer>
      {error && (
        <Button
          className="w-50 position-absolute top-50 start-50 translate-middle"
          variant="danger"
        >
          {error}
        </Button>
      )}
    </Modal>
  );
}

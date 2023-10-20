import React, { useEffect, useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";

import {
  Container,
  ListGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

export default function Filtering({
  minValue,
  maxValue,
  searchValue,
  setSearchValue,
  setMaxValue,
  setMinValue,
}) {
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef(null);
  const toggleInput = () => {
    setShowInput((prevShowInput) => !prevShowInput);
  };

  React.useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const containerModify = {
    position: "sticky",
    minWidth:"330px",
  };
  return (
    <Container
      className="p-5 text-center text-secondary w-100 h-25 top-0"
      style={containerModify}
    >
      <h5>Categories</h5>
      <br />
      <ListGroup>
        <ListGroup.Item>
          <Form>
            {showInput ? (
              <FormControl
                ref={inputRef}
                type="text"
                placeholder="Enter Destination"
                className="mr-sm-2"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            ) : (
              <Button variant="outline-dark" onClick={toggleInput}>
                <BsSearch />
              </Button>
            )}
          </Form>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex flex-column justify-content-center">
          Budget:
          <div className="d-flex flex-row justify-content-center align-items-center">
            <FormControl
              type="number"
              placeholder="$"
              className="w-100"
              min={0}
              value={minValue}
              onChange={(e) => {
                setMinValue(e.target.value);
              }}
            />
            <span className="mx-2"> - </span>
            <FormControl
              type="number"
              placeholder="$$$"
              className="w-100"
              min={0}
              value={maxValue}
              onChange={(e) => {
                setMaxValue(e.target.value);
              }}
            />
          </div>
        </ListGroup.Item>
        <ListGroup.Item>Recommended</ListGroup.Item>
        <ListGroup.Item>Top destinations</ListGroup.Item>
        <ListGroup.Item>Flexible Dates</ListGroup.Item>
        <ListGroup.Item>Solo Travel</ListGroup.Item>
        <ListGroup.Item>Family Vacation</ListGroup.Item>
        <ListGroup.Item>Adventure Travel</ListGroup.Item>
        {/* <ListGroup.Item>Luxury Travel</ListGroup.Item>
        <ListGroup.Item>Resort</ListGroup.Item> */}
      </ListGroup>
    </Container>
  );
}

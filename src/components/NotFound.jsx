import React from "react";
import { Image } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <div
        className="p-0  d-flex flex-start justify-content-center position-relative"
        style={{ minHeight: "2000px" }}
      >
        <Image
          className="w-75 h-100"
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000"
          alt="Not Found"
        />
      </div>
    </>
  );
}

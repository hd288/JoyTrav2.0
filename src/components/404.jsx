import React from "react";
import { Container } from "react-bootstrap";

export default function Error() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center text-center">
        <img
          style={{ width: "100%", height: "400px", objectFit: "contain" }}
          src="https://cdn.icon-icons.com/icons2/1852/PNG/512/iconfinder-websiteunderconstruction-4417109_116618.png"
          alt="Under-construction-img"
        />

        <h4 style={{ color: "#4b548b" }}>
          Stay tuned! <br />
          This page is under construction and will be introduced to you soon!
        </h4>
      </Container>
    </>
  );
}

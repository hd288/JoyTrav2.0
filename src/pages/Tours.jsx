import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Domestic from "../components/tours/Domestic";
import International from "../components/tours/International";

export default function Tours() {
  const activeStyle = {
    width: "250px",
    height: "75px",
    color: "#FFF",
    backgroundImage: "linear-gradient(75deg , #00bbff, #de3cf7)",
    border: "none",
    borderRadius: "7px",
  };

  const [activeSection, setActiveSection] = useState("domestic");
  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Container className="d-flex justify-content-between px-5 pt-5">
        <Button
          variant="outline-primary"
          className="d-flex justify-content-center align-items-center text-center"
          style={
            activeSection === "domestic"
              ? activeStyle
              : {
                  width: "250px",
                }
          }
          onClick={() => handleToggle("domestic")}
        >
          Domestic tours
        </Button>
        <Button
          variant="outline-primary"
          className="d-flex justify-content-center align-items-center text-center"
          style={
            activeSection === "international"
              ? activeStyle
              : {
                width: "250px",
              }
          }
          onClick={() => handleToggle("international")}
        >
          International tours
        </Button>
      </Container>

      
        {activeSection === "domestic" ? <Domestic /> : null}
        {activeSection === "international" ? <International /> : null}
      
    </>
  );
}

import React from "react";
import "./footer.scss";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGem } from "react-icons/bs";

import {
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="footer text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center flex-column p-4 border-bottom text-center">
        <div className="m-3 mb-5 d-none d-lg-block">
          <h5>Get connected with us on social networks:</h5>
        </div>

        <Container>
          <Row className="wrapper">
            <Col className="icon facebook">
              <a href="https://www.facebook.com/not.hiepdinh/" target="_blank">
                <FontAwesomeIcon
                  style={{ color: "#3b5999 !important" }}
                  icon={faFacebookF}
                />
                <span className="tooltip">Facebook</span>
              </a>
            </Col>

            <Col className="icon twitter">
              <a href="https://twitter.com/hiepdinhh" target="_blank">
                <FontAwesomeIcon
                  style={{ color: "#46c1f6" }}
                  icon={faTwitter}
                />
                <span className="tooltip">Twitter</span>
              </a>
            </Col>
            <Col className="icon instagram">
              <a href="https://www.instagram.com/hiep.dx_" target="_blank">
                <FontAwesomeIcon
                  style={{ color: "#e1306c" }}
                  icon={faInstagram}
                />
                <span className="tooltip">Instagram</span>
              </a>
            </Col>
            <Col className="icon youtube">
              <a href="https://www.youtube.com/" target="_blank">
                <FontAwesomeIcon
                  style={{ color: "#de463b" }}
                  icon={faYoutube}
                />
                <span className="tooltip">Youtube</span>
              </a>
            </Col>
            <Col className="icon github">
              <a href="https://github.com/hd288" target="_blank">
                <FontAwesomeIcon style={{ color: "#333" }} icon={faGithub} />
                <span className="tooltip">Github</span>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start ">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">
                <BsGem /> &nbsp;
                joytrav
              </h6>
              <p>
                Find your joy in traveling with us. We curate unforgettable
                experiences, bringing you the world's most breathtaking
                destinations.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">
                {" "}
                <BsGem /> &nbsp;
                About us
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Company profile
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Certificates
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy policies
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0">
              <h6 className="text-uppercase fw-bold mb-4">
                {" "}
                <BsGem /> &nbsp; 
                Contact
              </h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Ha Long, Quang Ninh, Viet Nam
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-2" />
                dxhiep288@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-2" />+ 84
                355 963 288
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-2" /> + 84
                355 963 288
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 1998 Copyright:&nbsp;
        <a className="text-reset fw-bold" href="https://fb.com/not.hiepdinh">
          HiepDinh
        </a>
      </div>
    </MDBFooter>
  );
}

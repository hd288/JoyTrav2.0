import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Form,
  Offcanvas,
} from "react-bootstrap";

export default function NavAdmin() {
  return (
    <>
      <Navbar expand={"xxl"} className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Toggle />
          {/* <Navbar.Brand href="#"></Navbar.Brand> */}
          <Navbar.Brand href="/admin">Administration</Navbar.Brand>
          <Navbar.Offcanvas placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Control Center</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/admin/users">Users Manage</Nav.Link>
                <Nav.Link href="/admin/bookings">Bookings Manage</Nav.Link>
                <NavDropdown title="Tours Manage">
                  <NavDropdown.Item href="/admin/domestic">
                    Domestic Tours
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/admin/international">
                    International Tours
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

import { Container, Nav, Navbar } from "react-bootstrap";

function TopNav() {
  return (
    <Navbar expand="sm" className="navbar custom-navbar">
      <Container className="p-0">
        <Navbar.Brand href="#about" className="navbar-brand">
          Victor Li
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className="nav-link">
              <span>about</span>
            </Nav.Link>
            <Nav.Link href="#research" className="nav-link">
              <span>research</span>
            </Nav.Link>
            <Nav.Link href="#random" className="nav-link">
              <span>random</span>
            </Nav.Link>
            <Nav.Link href="#cv" className="nav-link">
              <span>cv</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;

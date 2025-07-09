import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <Navbar expand="sm" className="navbar custom-navbar">
      <Container className="p-0">
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          Victor Li
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/research" className="nav-link">
              <span>research</span>
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/blog" className="nav-link">
              <span>blog</span>
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/projects" className="nav-link">
              <span>projects</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;

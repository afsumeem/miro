import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">miro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* product dropdown */}
            <NavDropdown title="Product" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Product 3</NavDropdown.Item>
            </NavDropdown>
            {/* Solutions dropdown */}
            <NavDropdown title="Solutions" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Solutions 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Solutions 3
              </NavDropdown.Item>
            </NavDropdown>
            {/* Resources dropdown */}
            <NavDropdown title="Resources" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Resources 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Resources 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Enterprise</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contact">EN</Nav.Link>
            <Nav.Link href="#contact">Contact Sales</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              Login
            </Nav.Link>
            <Button>Sign up free</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

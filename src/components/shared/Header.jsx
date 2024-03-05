import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.svg";
import "../../styles/Header.css";
import en from "../../assets/images/en.svg";
import dropdown from "../../assets/images/dropdown.svg";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navigation-bar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ height: "32px", width: "91px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#product" className="navItems">
              Product <img src={dropdown} alt="" />
            </Nav.Link>{" "}
            <Nav.Link href="#solutions" className="navItems">
              Solutions <img src={dropdown} alt="" />
            </Nav.Link>{" "}
            <Nav.Link href="#resources" className="navItems">
              Resources <img src={dropdown} alt="" />
            </Nav.Link>
            <Nav.Link href="#enterprise" className="navItems">
              Enterprise
            </Nav.Link>
            <Nav.Link href="#pricing" className="navItems">
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#EN" className="navItems">
              <img src={en} alt="" /> EN
            </Nav.Link>
            <Nav.Link href="#contact" className="navItems">
              Contact Sales
            </Nav.Link>
            <Nav.Link eventKey={2} href="#login" className="navItems">
              Login
            </Nav.Link>
            <Button className="rounded-pill sign-up-btn ">
              Sign up free &#x2192;
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

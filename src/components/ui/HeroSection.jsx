import { Button, Col, Container, Form, Row } from "react-bootstrap";
import headerImage from "../../assets/images/headerimage.png";
import "../../styles/HeroSection.css";
import rating from "../../assets/images/rating.svg";
import rating1 from "../../assets/images/rating1.svg";
import rating2 from "../../assets/images/rating2.png";

const HeroSection = () => {
  return (
    <Container>
      <Row>
        <Col className="hero-section" xs={12} sm={12} md={6}>
          <h1>Take ideas from better to best</h1>
          <p className="hero-section-para">
            Miro is your teams visual platform to connect, collaborate, and
            create — together.
          </p>
          <Form className="my-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Enter your work email"
                className="rounded-pill "
                style={{ color: " rgba(95, 92, 128, 1)" }}
              />
            </Form.Group>
            <Button className="sign-up-btn rounded-pill w-100">
              Sign up free &#x2192;
            </Button>
          </Form>
          <p style={{ fontSize: "14px", color: "rgba(5, 0, 56, 0.4)" }}>
            Collaborate with your team within minutes
          </p>
          <div className="rating">
            <div>
              <div className="d-flex gap-2 mb-2">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating1} alt="" />
              </div>
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(5, 0, 56, 1)",
                  margin: "0",
                }}
              >
                Based on 5149+ reviews:
              </p>
            </div>
            <img src={rating2} alt="" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <img src={headerImage} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;

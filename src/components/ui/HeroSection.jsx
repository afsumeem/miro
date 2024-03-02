import { Button, Col, Container, Form, Row } from "react-bootstrap";
import headerImage from "../../assets/images/headerimage.png";

const HeroSection = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Take ideas from better to best</h1>
          <p>
            Miro is your teams visual platform to connect, collaborate, and
            create — together.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your work email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Button>Sign up free</Button>
          </Form>
          <p>Collaborate with your team within minutes</p>
          <div></div>
        </Col>
        <Col>
          <img src={headerImage} />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;

import { Col, Row } from "react-bootstrap";
import integrations from "../../assets/images/integrations.png";

const ConnectSection = () => {
  return (
    <div>
      <Row>
        <Col md={5}>
          <img src={integrations} alt="" className="img-fluid" />
        </Col>
        <Col md={1}></Col>
        <Col className="d-flex flex-column justify-content-center " md={6}>
          <h2 style={{ fontSize: "48px", color: "rgba(5, 0, 56, 1)" }}>
            Connect your tools, close your tabs
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(5, 0, 56, 0.6)" }}>
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <div>
            <a className="learn-more" href="">
              Learn More &#x2192;
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ConnectSection;

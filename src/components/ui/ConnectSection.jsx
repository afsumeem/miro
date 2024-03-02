import { Button, Col, Row } from "react-bootstrap";
import integrations from "../../assets/images/integrations.png";

const ConnectSection = () => {
  return (
    <div>
      <Row>
        <Col>
          <img src={integrations} alt="" />
        </Col>
        <Col>
          <h2>Connect your tools, close your tabs</h2>
          <p>
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <Button>Learn more</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ConnectSection;

import { Button, Col, Row } from "react-bootstrap";
import hybridWork from "../../assets/images/hybridwork.png";

const WorkTogetherSection = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>Work together, wherever you work</h2>
          <p>
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          <Button>Learn more</Button>
        </Col>
        <Col>
          <img src={hybridWork} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default WorkTogetherSection;

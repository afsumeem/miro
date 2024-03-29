import { Col, Row } from "react-bootstrap";
import hybridWork from "../../assets/images/hybridwork.png";
import "../../styles/WorkTogetherSection.css";

const WorkTogetherSection = () => {
  return (
    <div>
      <Row>
        <Col
          className="d-flex flex-column justify-content-center work-together"
          md={5}
        >
          <h2>Work together, wherever you work</h2>
          <p style={{ fontSize: "18px", color: "rgba(5, 0, 56, 0.6)" }}>
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          <div>
            <a className="learn-more" href="">
              Learn More &#x2192;
            </a>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={6}>
          <img src={hybridWork} alt="" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

export default WorkTogetherSection;

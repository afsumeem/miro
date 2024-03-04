import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import workLayout from "../../assets/images/workLayout.png";
import "../../styles/AllKindsOfTeams.css";

const WayYouWork = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="my-3">
      <h1 className="AllTypesofWork_title">Built for the way you work</h1>
      <div className="d-flex justify-content-between">
        {[
          "Brainstorming",
          "diagramming",
          "Meetings & Workshops",
          "Scrum Events",
          "Mapping",
          "Research & Design",
          "Strategic Planning",
        ].map((type, index) => (
          <a
            key={index}
            href="#"
            className={`AllTypesofWork_toggle ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {type}
          </a>
        ))}
      </div>
      <Row className="mt-3">
        <Col md={6} className="">
          {/* Tick symbol and lines */}
          <div className="mt-4">
            <h5>Brainstorming</h5>

            <p>
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </p>
          </div>
          <div>
            <a className="learn-more" href="">
              Learn More &#x2192;
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <img src={workLayout} alt="Example" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WayYouWork;

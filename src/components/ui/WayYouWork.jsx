import { Col, Row } from "react-bootstrap";
import workLayout from "../../assets/images/workLayout.png";
import "../../styles/AllKindsOfTeams.css";

const WayYouWork = () => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const handleClick = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };

  return (
    <div className="my-5">
      <h1 className="AllTypesofWork_title my-4">Built for the way you work</h1>
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
            className={`AllTypesofWork_toggle ${index === 0 ? "active" : ""}`}
            // onClick={() => handleClick(index)}
          >
            {type}
          </a>
        ))}
      </div>
      <Row className="mt-3">
        <Col md={4} className="">
          {/* Tick symbol and lines */}
          <div className="mt-4">
            <h5 className="mb-5">Brainstorming</h5>

            <p className="mb-5">
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
        <Col md={8}>
          <div>
            <img src={workLayout} alt="Example" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WayYouWork;

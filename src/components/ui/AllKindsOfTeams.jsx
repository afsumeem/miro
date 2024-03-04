import { Col, Row } from "react-bootstrap";
import "../../styles/AllKindsOfTeams.css";
import { useState } from "react";
import teamsLayout from "../../assets/images/teams_layout.png";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";

const AllKindsOfTeams = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="my-3">
      <h1 className="AllTypesofWork_title">Built for all kinds of teams</h1>
      <div className="d-flex justify-content-between">
        {[
          "UX & Design",
          "Marketing",
          "Product Management",
          "Engineering",
          "Consultants",
          "Agile Coaches",
          "Sales",
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
            <div className="tick-line d-flex align-items-center  justify-content-center gap-4 py-3">
              <div>
                <p className="tick_sign">&#10003;</p>
              </div>
              <div>
                <p>Build low-fi wireframes</p>
              </div>
            </div>
            <div className="tick-line d-flex align-items-center  justify-content-center gap-4 py-3">
              <p className="tick_sign">&#10003;</p>
              <p>Involve stakeholders in the design process</p>
            </div>
            <div className="tick-line d-flex align-items-center  justify-content-center gap-4 py-3">
              <p className="tick_sign">&#10003;</p>
              <p> Run engaging design workshops</p>
            </div>
          </div>
          <div>
            <a className="learn-more" href="">
              Learn More &#x2192;
            </a>
          </div>
          <div>
            <h6 className="favTool_text">Integrate your favorite tools</h6>
            <div className="d-flex align-items-center gap-5">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <img src={teamsLayout} alt="Example" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AllKindsOfTeams;

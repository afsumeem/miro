import { Col, Row } from "react-bootstrap";
import "../../styles/AllKindsOfTeams.css";
import teamsLayout from "../../assets/images/teams_layout.png";
import logo1 from "../../assets/images/logo1.png";
import logo3 from "../../assets/images/logo3.png";
import logo5 from "../../assets/images/logo5.svg";
import logo6 from "../../assets/images/logo6.svg";
import logo4 from "../../assets/images/logo4.png";

const AllKindsOfTeams = () => {
  return (
    <div className="my-3">
      <h1 className="AllTypesofWork_title my-4">
        Built for all kinds of teams
      </h1>
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
            className={`AllTypesofWork_toggle ${index === 0 ? "active" : ""}`}
          >
            {type}
          </a>
        ))}
      </div>
      <Row className="mt-3">
        <Col md={4} className="">
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
              {/* <img src={logo2} alt="" /> */}
              <div
                style={{
                  backgroundColor: "rgba(71, 1, 55, 1)",
                  borderRadius: "3px",
                  padding: "2px",
                  margin: "0",
                }}
              >
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
              </div>
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
            </div>
          </div>
        </Col>
        <Col md={8}>
          <div>
            <img src={teamsLayout} alt="Example" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AllKindsOfTeams;

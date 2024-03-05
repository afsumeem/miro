import { Col, Row } from "react-bootstrap";
import walmart from "../../assets/images/trusted/Walmart.svg";
import cisco from "../../assets/images/trusted/cisco.svg";
import volvo from "../../assets/images/trusted/Volvo.svg";
import deloitte from "../../assets/images/trusted/deloitte.svg";
import okta from "../../assets/images/trusted/okta.svg";

const TrustedSection = () => {
  return (
    <div>
      <p
        className="text-center my-5"
        style={{ color: "rgba(5, 0, 56, 0.6)", fontSize: "18px" }}
      >
        Trusted by 45M+ users
      </p>

      <Row>
        <Col className="">
          <div className="d-flex flex-row justify-content-around mb-5">
            <img src={walmart} alt="" />
            <img src={cisco} alt="" />
            <img src={volvo} alt="" />
            <img src={deloitte} alt="" />
            <img src={okta} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TrustedSection;

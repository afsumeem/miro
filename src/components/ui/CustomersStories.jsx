import { Col, Row } from "react-bootstrap";
import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import "../../styles/CustomerStories.css";

const CustomersStories = () => {
  return (
    <div className="customer-stories my-5">
      <h2 className="mb-5">Loved by the worlds best teams</h2>

      <a
        className="learn-more rounded-pill p-2 d-block m-auto w-25"
        href=""
        style={{ border: "1px solid rgba(66, 98, 255, 1)" }}
      >
        See all customer stories &#x2192;
      </a>

      <Row className="mt-4">
        <Col className="d-flex flex-column align-items-start justify-content-between">
          <img src={brand1} alt="" />
          <p style={{ color: "rgba(5, 0, 56, 0.6)" }}>
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <img src={user1} alt="" />
            <div>
              <p className="m-0" style={{ color: "rgba(5, 0, 56, 0.6)" }}>
                Roxanne Mustafa
              </p>
              <p className="m-0" style={{ color: "rgba(5, 0, 56, 0.6)" }}>
                Design Team Lead at VMware
              </p>
            </div>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-start justify-content-between">
          <img src={brand2} alt="" />
          <p style={{ color: "rgba(5, 0, 56, 0.6)" }}>
            “Miro helps solve one of the major gaps in product design: how to
            manage tasks across product designers whose projects are in
            different tools.”
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <img src={user2} alt="" />
            <div>
              <p className="m-0" style={{ color: "rgba(5, 0, 56, 0.6)" }}>
                Jane Ashley
              </p>
              <p className="m-0" style={{ color: "rgba(5, 0, 56, 0.6)" }}>
                Head of Design at DocuSign
              </p>
            </div>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-start justify-content-between">
          <img src={brand3} alt="" />
          <p style={{ color: "rgba(5, 0, 56, 0.6)" }}>
            “As we used Miro we moved from skepticism to belief to innovation,
            and now we have a tool that’s at the core of what we do and will
            continue to extend into the future.”
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <img src={user3} alt="" />
            <div>
              <p className="m-0" style={{ color: "rgba(5, 0, 56, 0.6)" }}>
                Laura Baird
              </p>
              <p className="m-0" style={{ color: "rgba(5, 0, 56, 0.6)" }}>
                Associate Design Director at frog
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomersStories;

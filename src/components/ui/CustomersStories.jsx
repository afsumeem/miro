import { Col, Row } from "react-bootstrap";
import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";

const CustomersStories = () => {
  return (
    <div>
      <h2>Loved by the worlds best teams</h2>

      <a className="learn-more rounded-pill border p-2" href="">
        See all customer stories &#x2192;
      </a>

      <Row>
        <Col>
          <img src={brand1} alt="" />
          <p>
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          <div>
            <img src={user1} alt="" />
            <div>
              <p>Roxanne Mustafa</p>
              <p>Design Team Lead at VMware</p>
            </div>
          </div>
        </Col>
        <Col>
          <img src={brand2} alt="" />
          <p>
            “Miro helps solve one of the major gaps in product design: how to
            manage tasks across product designers whose projects are in
            different tools.”
          </p>
          <div>
            <img src={user2} alt="" />
            <div>
              <p>Jane Ashley</p>
              <p>Head of Design at DocuSign</p>
            </div>
          </div>
        </Col>
        <Col>
          <img src={brand3} alt="" />
          <p>
            “As we used Miro we moved from skepticism to belief to innovation,
            and now we have a tool that’s at the core of what we do and will
            continue to extend into the future.”
          </p>
          <div>
            <img src={user3} alt="" />
            <div>
              <p>Laura Baird</p>
              <p>Associate Design Director at frog</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomersStories;

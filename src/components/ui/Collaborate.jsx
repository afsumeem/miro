import { Button, Col, Row } from "react-bootstrap";
import "../../styles/Collaborate.css";

const Collaborate = () => {
  return (
    <div className="collaborate-title">
      <p>YOUR IDEA STARTS HERE</p>
      <h2>
        Collaborate without <br /> constraints
      </h2>
      <Row>
        <Col className="collaborate-content">
          <h4>Free forever</h4>
          <p>
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <span style={{ color: "rgba(66, 98, 255, 1)" }}>
              pricing plans{" "}
            </span>
            for more features.
          </p>
        </Col>
        <Col className="collaborate-content">
          <h4>Easy integrations</h4>
          <p>
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our{" "}
            <span style={{ color: "rgba(66, 98, 255, 1)" }}>Marketplace </span>{" "}
            .
          </p>
        </Col>
        <Col className="collaborate-content">
          <h4>Security first</h4>
          <p>
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span style={{ color: "rgba(66, 98, 255, 1)" }}>
              {" "}
              Trust Center{" "}
            </span>
            .
          </p>
        </Col>
      </Row>
      <Button className="rounded-pill sign-up-btn w-25 mt-4 mb-5">
        Sign up free &#x2192;
      </Button>
    </div>
  );
};

export default Collaborate;
